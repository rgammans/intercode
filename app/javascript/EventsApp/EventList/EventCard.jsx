import React, { useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import arrayToSentence from 'array-to-sentence';
import { capitalize } from 'inflected';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-apollo-hooks';

import getSortedRuns from './getSortedRuns';
import pluralizeWithCount from '../../pluralizeWithCount';
import buildEventUrl from '../buildEventUrl';
import teamMembersForDisplay from '../teamMembersForDisplay';
import AppRootContext from '../../AppRootContext';
import RateEventControl from '../../EventRatings/RateEventControl';
import { RateEvent } from '../../EventRatings/mutations.gql';

function renderFirstRunTime(event, timezoneName) {
  if (event.runs.length > 0) {
    const sortedRuns = getSortedRuns(event);
    if (sortedRuns.length > 4) {
      const firstRunStart = moment.tz(sortedRuns[0].starts_at, timezoneName);
      return `${sortedRuns.length} runs starting ${firstRunStart.format('dddd h:mma')}`;
    }

    let previousDayName = null;

    return arrayToSentence([
      ...sortedRuns.map((run) => {
        const runStart = moment.tz(run.starts_at, timezoneName);
        const dayName = runStart.format('dddd');
        if (previousDayName === dayName) {
          return runStart.format('h:mma');
        }

        previousDayName = dayName;
        return (
          <>
            <span className="d-lg-none">
              {runStart.format('ddd h:mma')}
            </span>
            <span className="d-none d-lg-inline">
              {runStart.format('dddd h:mma')}
            </span>
          </>
        );
      }),
    ]);
  }

  return 'Unscheduled';
}

function teamIsAllAuthors(author, teamMembers) {
  if (!author || !teamMembers) {
    return false;
  }

  const teamMemberNames = teamMembers
    .map((teamMember) => teamMember.user_con_profile.name_without_nickname);

  if (!teamMemberNames.every((teamMemberName) => author.includes(teamMemberName))) {
    return false;
  }

  if (author.length > teamMemberNames.join(' and ').length) {
    return false;
  }

  return true;
}

const EventCard = ({
  event, timezoneName, sorted, canReadSchedule,
}) => {
  const { myProfile } = useContext(AppRootContext);
  const formResponse = JSON.parse(event.form_response_attrs_json);
  const metadataItems = [];
  const [rateEventMutate] = useMutation(RateEvent);

  const rateEvent = async (eventId, rating) => {
    await rateEventMutate({
      variables: { eventId, rating },
    });
  };

  const displayTeamMembers = useMemo(
    () => teamMembersForDisplay(event),
    [event],
  );
  const teamMemberNames = displayTeamMembers
    .map((teamMember) => teamMember.user_con_profile.name_without_nickname).join(', ');

  if (teamMemberNames) {
    const teamMemberDescription = pluralizeWithCount(
      capitalize(event.event_category.team_member_name),
      event.team_members.length,
      true,
    );

    metadataItems.push({
      key: 'team_members',
      content: (
        <>
          <strong>
            {teamMemberDescription}
            {':'}
          </strong>
          {' '}
          {teamMemberNames}
        </>
      ),
    });
  }

  if (formResponse.author && !teamIsAllAuthors(formResponse.author, event.team_members)) {
    const authorDescription = pluralizeWithCount('Author', formResponse.author.split(/(,|;| and )/).length, true);
    metadataItems.push({
      key: 'author',
      content: (
        <>
          <strong>
            {authorDescription}
            {':'}
          </strong>
          {' '}
          {formResponse.author}
        </>
      ),
    });
  }

  if (formResponse.organization) {
    metadataItems.push({
      key: 'organization',
      content: (
        <>
          <strong>Organization:</strong>
          {' '}
          {formResponse.organization}
        </>
      ),
    });
  }

  return (
    <div className="card mb-4" key={event.id}>
      <div className="card-header">
        <div className="event-card-header">
          <div className="mb-2">
            <h4 className="m-0 d-inline">
              <Link to={buildEventUrl(event)}>{event.title}</Link>
            </h4>
            <span className="lead ml-2 text-muted">
              {event.event_category.name}
            </span>
          </div>
          <div className="lead ml-1">
            {canReadSchedule ? renderFirstRunTime(event, timezoneName) : null}
          </div>
          <div className="d-flex flex-wrap mt-1">
            {metadataItems.map((metadataItem) => (
              <div className="flex-shrink-1 mr-4" key={metadataItem.key}>
                {metadataItem.content}
              </div>
            ))}
          </div>
          <div className="d-flex align-items-end justify-content-end">
            {myProfile && (
              <RateEventControl
                value={event.my_rating}
                onChange={(rating) => rateEvent(event.id, rating)}
              />
            )}
          </div>
        </div>

        {
          sorted.some((sort) => sort.id === 'created_at')
            ? (
              <p className="m-0">
                <strong>
                  Added
                  {' '}
                  {moment.tz(event.created_at, timezoneName).format('dddd, MMMM D, YYYY [at] h:mma')}
                </strong>
              </p>
            )
            : null
        }
      </div>

      <div
        className="card-body"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: event.short_blurb_html }}
      />
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    event_category: PropTypes.shape({
      name: PropTypes.string.isRequired,
      team_member_name: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string,
    my_rating: PropTypes.number,
    form_response_attrs_json: PropTypes.string.isRequired,
    short_blurb_html: PropTypes.string.isRequired,
    team_members: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
  timezoneName: PropTypes.string.isRequired,
  sorted: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    desc: PropTypes.bool.isRequired,
  })),
  canReadSchedule: PropTypes.bool,
};

EventCard.defaultProps = {
  sorted: null,
  canReadSchedule: false,
};

export default EventCard;
