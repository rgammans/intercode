import { useContext, useState } from 'react';
import moment from 'moment-timezone';
// @ts-expect-error
import Pagination from 'react-js-pagination';
import { assertNever } from 'assert-never';

import AppRootContext from '../AppRootContext';
import ErrorDisplay from '../ErrorDisplay';
import LoadingIndicator from '../LoadingIndicator';
import { timespanFromRun } from '../TimespanUtils';
import { useConfirm } from '../ModalDialogs/Confirm';
import RunCapacityGraph from '../EventsApp/EventPage/RunCapacityGraph';
import { SignupRequestState } from '../graphqlTypes.generated';
import {
  SignupModerationQueueQueryQuery,
  SignupModerationSignupRequestFieldsFragment,
  useSignupModerationQueueQueryQuery,
} from './queries.generated';
import {
  useAcceptSignupRequestMutation,
  useRejectSignupRequestMutation,
} from './mutations.generated';

function signupRequestStateBadgeClass(state: SignupRequestState) {
  switch (state) {
    case SignupRequestState.Accepted:
      return 'badge-success';
    case SignupRequestState.Rejected:
      return 'badge-danger';
    case SignupRequestState.Pending:
      return 'badge-info';
    case SignupRequestState.Withdrawn:
      return 'badge-dark';
    default:
      assertNever(state, true);
      return 'badge-light';
  }
}

function describeRequestedBucket(signupRequest: SignupModerationSignupRequestFieldsFragment) {
  return signupRequest.requested_bucket_key
    ? (
        signupRequest.target_run.event.registration_policy?.buckets.find(
          (bucket) => bucket.key === signupRequest.requested_bucket_key,
        ) || {}
      ).name
    : 'No preference';
}

type SignupModerationRunDetailsProps = {
  run: NonNullable<
    SignupModerationQueueQueryQuery['convention']
  >['signup_requests_paginated']['entries'][0]['target_run'];
  showRequestedBucket?: boolean;
  requestedBucketKey?: string;
};

function SignupModerationRunDetails({
  run,
  showRequestedBucket,
  requestedBucketKey,
}: SignupModerationRunDetailsProps) {
  const { timezoneName } = useContext(AppRootContext);
  const runTimespan = timespanFromRun(timezoneName, run.event, run);

  return (
    <>
      {run.event.title}
      {run.title_suffix && `(${run.title_suffix})`}
      <br />
      {showRequestedBucket && (
        <>
          <small>
            <strong>Bucket:</strong>{' '}
            {(
              run.event.registration_policy?.buckets.find(
                (bucket) => bucket.key === requestedBucketKey,
              ) || {}
            ).name || 'No preference'}
          </small>
        </>
      )}
      <small>{runTimespan.humanizeInTimezone(timezoneName)}</small>
    </>
  );
}

function SignupModerationQueue() {
  const { timezoneName } = useContext(AppRootContext);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading, error } = useSignupModerationQueueQueryQuery({
    variables: { page: currentPage },
  });
  const [acceptSignupRequest] = useAcceptSignupRequestMutation();
  const [rejectSignupRequest] = useRejectSignupRequestMutation();
  const confirm = useConfirm();

  const acceptClicked = (signupRequest: SignupModerationSignupRequestFieldsFragment) =>
    confirm({
      prompt: (
        <>
          <p>
            Please confirm you want to accept this signup request. This will attempt to sign{' '}
            {signupRequest.user_con_profile.name}
            {' up for '}
            {signupRequest.target_run.event.title}
            {' as '}
            {describeRequestedBucket(signupRequest)}. If there is no space in the requested bucket,
            the attendee will either be signed up in a flex bucket, if possible, or waitlisted.
          </p>

          <div className="mb-2">
            <strong>Current space availability in this event run:</strong>
            <RunCapacityGraph
              event={signupRequest.target_run.event}
              run={signupRequest.target_run}
              signupsAvailable
            />
          </div>

          <p className="mb-0">
            This will automatically email both the attendee and the event team to let them know
            about the signup.
          </p>
        </>
      ),
      action: () => acceptSignupRequest({ variables: { id: signupRequest.id } }),
      renderError: (acceptError) => <ErrorDisplay graphQLError={acceptError} />,
    });

  const rejectClicked = (
    signupRequest: NonNullable<
      SignupModerationQueueQueryQuery['convention']
    >['signup_requests_paginated']['entries'][0],
  ) =>
    confirm({
      prompt: (
        <p className="mb-0">
          Please confirm you want to reject this signup request. This will <strong>not</strong>{' '}
          automatically email anyone. After doing this, you may wish to email the attendee to let
          them know.
        </p>
      ),
      action: () => rejectSignupRequest({ variables: { id: signupRequest.id } }),
      renderError: (acceptError) => <ErrorDisplay graphQLError={acceptError} />,
    });

  if (error) {
    return <ErrorDisplay graphQLError={error} />;
  }

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th>Attendee</th>
            <th>Request</th>
            <th>Status</th>
            <th>Submitted at</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {data!.convention!.signup_requests_paginated.entries.map((signupRequest) => (
            <tr key={signupRequest.id}>
              <td>{signupRequest.user_con_profile.name}</td>
              <td>
                {signupRequest.replace_signup && (
                  <p>
                    <strong className="text-danger">Withdraw from</strong>{' '}
                    <SignupModerationRunDetails run={signupRequest.replace_signup.run} />
                  </p>
                )}
                <strong className="text-success">
                  {signupRequest.replace_signup ? 'And sign up for' : 'Sign up for'}
                </strong>{' '}
                <SignupModerationRunDetails run={signupRequest.target_run} />
                <br />
                <small>
                  <strong>Requested bucket:</strong> {describeRequestedBucket(signupRequest)}
                </small>
              </td>
              <td>
                <div className={`badge ${signupRequestStateBadgeClass(signupRequest.state)}`}>
                  {signupRequest.state}
                </div>
              </td>
              <td>
                <small>
                  {moment
                    .tz(signupRequest.created_at, timezoneName)
                    .format('ddd, MMM D, YYYY [at] h:mma')}
                </small>
              </td>
              <td className="text-right">
                {signupRequest.state === 'pending' && (
                  <>
                    <button
                      className="btn btn-sm btn-danger mr-2"
                      type="button"
                      onClick={() => rejectClicked(signupRequest)}
                    >
                      Reject
                    </button>

                    <button
                      className="btn btn-sm btn-success"
                      type="button"
                      onClick={() => acceptClicked(signupRequest)}
                    >
                      Accept
                    </button>
                  </>
                )}
                {signupRequest.state === 'rejected' && (
                  <button
                    className="btn btn-sm btn-warning"
                    type="button"
                    onClick={() => acceptClicked(signupRequest)}
                  >
                    Accept after all
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        totalItemsCount={data!.convention!.signup_requests_paginated.total_pages}
        activePage={currentPage}
        onChange={setCurrentPage}
        itemsCountPerPage={1}
        innerClass="pagination"
        itemClass="page-item"
        linkClass="page-link"
        hideNavigation
        hideFirstLastPages
        ellipsis
      />
    </>
  );
}

export default SignupModerationQueue;
