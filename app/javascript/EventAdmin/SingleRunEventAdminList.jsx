import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { pluralize } from 'inflected';

import { EventAdminEventsQuery } from './queries.gql';
import { getEventCategoryStyles } from '../EventsApp/ScheduleGrid/StylingUtils';
import { timespanFromRun } from '../TimespanUtils';
import { DropEvent } from './mutations.gql';
import useQuerySuspended from '../useQuerySuspended';
import ErrorDisplay from '../ErrorDisplay';
import useMutationCallback from '../useMutationCallback';
import { useConfirm } from '../ModalDialogs/Confirm';
import usePageTitle from '../usePageTitle';
import useEventAdminCategory from './useEventAdminCategory';
import useValueUnless from '../useValueUnless';
import buildEventCategoryUrl from './buildEventCategoryUrl';

function SingleRunEventAdminList({ eventCategoryId }) {
  const { data, error } = useQuerySuspended(EventAdminEventsQuery);
  const [eventCategory, sortedEvents] = useEventAdminCategory(data, error, eventCategoryId);

  const drop = useMutationCallback(DropEvent);
  const confirm = useConfirm();

  usePageTitle(useValueUnless(() => pluralize(eventCategory.name), error));

  if (error) {
    return <ErrorDisplay graphQLError={error} />;
  }

  const eventRows = sortedEvents.map((event) => {
    const run = event.runs[0];
    let timespan;
    if (run) {
      timespan = timespanFromRun(data.convention, event, run);
    }

    return (
      <tr className={event.id}>
        <th scope="row">
          <span
            className="rounded p-1 text-dark"
            style={getEventCategoryStyles({ eventCategory, variant: 'default' })}
          >
            {event.title}
          </span>
        </th>
        <td>
          {timespan && timespan.humanizeInTimezone(data.convention.timezone_name)}
        </td>
        <td>
          <Link className="btn btn-secondary btn-sm" to={`/admin_events/${event.id}/edit`}>
            Edit
          </Link>
          {' '}
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={() => confirm({
              prompt: 'Are you sure you want to drop this event?',
              action: () => drop({ variables: { input: { id: event.id } } }),
              renderError: (e) => <ErrorDisplay graphQLError={e} />,
            })}
          >
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <Link className="btn btn-primary my-4" to={`${buildEventCategoryUrl(eventCategory)}/new`}>
        {'Create new '}
        {eventCategory.name.toLowerCase()}
      </Link>
      <table className="table table-striped">
        <tbody>
          {eventRows}
        </tbody>
      </table>
    </div>
  );
}

SingleRunEventAdminList.propTypes = {
  eventCategoryId: PropTypes.number.isRequired,
};

export default SingleRunEventAdminList;
