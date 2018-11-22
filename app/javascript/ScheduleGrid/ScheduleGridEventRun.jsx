import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import AvailabilityBar from './AvailabilityBar';
import PopperDropdown from '../UIComponents/PopperDropdown';
import { ScheduleGridConsumer } from './ScheduleGridContext';

function userSignupStatus(run) {
  if (run.my_signups.some(signup => signup.state === 'confirmed')) {
    return 'confirmed';
  }

  if (run.my_signups.some(signup => signup.state === 'waitlisted')) {
    return 'waitlisted';
  }

  return null;
}

function runFull(event, run) {
  return (
    event.registration_policy.slots_limited
    && run.confirmed_limited_signup_count === event.registration_policy.total_slots
    && event.registration_policy.total_slots > 0
  );
}

function describeAvailability(event, run) {
  if (runFull(event, run)) {
    return `Full, waitlist: ${run.waitlisted_signup_count}`;
  }

  if (!event.registration_policy.slots_limited) {
    return 'Unlimited slots';
  }

  if (event.registration_policy.total_slots === 0) {
    return null;
  }

  const availableSlots = event.registration_policy.total_slots - run.confirmed_limited_signup_count;
  return `${availableSlots}/${event.registration_policy.total_slots} slots available`;
}

class ScheduleGridEventRun extends React.Component {
  static propTypes = {
    event: PropTypes.shape({}).isRequired,
    run: PropTypes.shape({}).isRequired,
    runDimensions: PropTypes.shape({}).isRequired,
    layoutResult: PropTypes.shape({}).isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  renderAvailabilityBar = () => {
    const { event, run } = this.props;

    if (
      event.registration_policy.slots_limited
      && event.registration_policy.total_slots_including_not_counted === 0
    ) {
      return null;
    }

    let availabilityFraction = 100.0;
    if (event.registration_policy.total_slots > 0) {
      availabilityFraction = (
        1.0 - (run.confirmed_limited_signup_count / event.registration_policy.total_slots)
      );
    } else if (event.registration_policy.only_uncounted) {
      availabilityFraction = (
        1.0 - (
          run.not_counted_confirmed_signup_count
          / event.registration_policy.total_slots_including_not_counted
        )
      );
    }

    return (
      <AvailabilityBar
        availabilityFraction={availabilityFraction}
        unlimited={!event.registration_policy.slots_limited}
      />
    );
  }

  renderExtendedCounts = (config) => {
    const { event, run } = this.props;

    if (!config.showExtendedCounts || !event.registration_policy.slots_limited) {
      return null;
    }

    return (
      <div className="event-extended-counts p-1">
        <span className="text-success">
          {run.confirmed_signup_count}
        </span>
        {'/'}
        <span className="text-info">
          {run.not_counted_signup_count}
        </span>
        {'/'}
        <span className="text-danger">
          {run.waitlisted_signup_count}
        </span>
      </div>
    );
  }

  renderSignupStatusBadge = (signupStatus, config) => {
    if (!config.showSignupStatusBadge) {
      return null;
    }

    if (signupStatus === 'confirmed') {
      return <i className="fa fa-check-square mr-1" title="Confirmed signup" />;
    }

    if (signupStatus === 'waitlisted') {
      return <i className="fa fa-hourglass-half mr-1" title="Waitlisted" />;
    }

    return null;
  }

  render = () => {
    const {
      layoutResult, runDimensions, event, run, className,
    } = this.props;
    const { timespan } = runDimensions.eventRun;

    const style = {
      top: `${(runDimensions.laneIndex / layoutResult.laneCount) * 100.0}%`,
      height: `${100.0 / layoutResult.laneCount}%`,
      left: `${runDimensions.timePlacement}%`,
      width: `${runDimensions.timeSpan}%`,
      position: 'absolute',
      zIndex: runDimensions.laneIndex,
      cursor: 'pointer',
    };

    const signupStatus = userSignupStatus(run);
    const availabilityDescription = describeAvailability(event, run);
    const roomsDescription = run.room_names.sort().join(', ');

    return (
      <ScheduleGridConsumer>
        {({
          schedule, isRunDetailsVisible, toggleRunDetailsVisibility, config,
        }) => (
          <PopperDropdown
            placement="bottom"
            visible={isRunDetailsVisible(run.id)}
            onToggle={() => toggleRunDetailsVisibility(schedule, run.id)}
            renderReference={({ ref, toggle }) => (
              <div
                style={style}
                tabIndex={0}
                className={classNames(
                  className,
                  'schedule-grid-event',
                  'small',
                  {
                    'signed-up': config.showSignedUp && signupStatus != null,
                    full: (
                      config.classifyEventsBy !== 'fullness'
                      && runFull(event, run)
                      && signupStatus == null
                    ),
                  },
                )}
                role="button"
                onClick={toggle}
                onKeyDown={(keyEvent) => {
                  if (keyEvent.keyCode === 13 || keyEvent.keyCode === 32) {
                    keyEvent.preventDefault();
                    toggle();
                  }
                }}
                ref={ref}
              >
                {this.renderAvailabilityBar()}
                <div className="d-flex">
                  {this.renderExtendedCounts(config)}
                  <div className="p-1" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {this.renderSignupStatusBadge(signupStatus, config)}
                    {event.title}
                  </div>
                </div>
              </div>
            )}
          >
            {({
              ref,
              placement,
              arrowProps,
              style: popperStyle,
              toggle,
              visible,
            }) => {
              if (!visible) {
                return <React.Fragment />;
              }

              return (
                <div className={`popover bs-popover-${placement} show`} ref={ref} style={popperStyle} role="tooltip">
                  <span ref={arrowProps.ref} style={arrowProps.style} className="arrow" />
                  <div className="popover-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <strong>
                          {event.title}
                        </strong>
                        {
                          run.title_suffix
                            ? [
                              <span key="mdash">
                                &mdash;
                              </span>,
                              <em key="title-suffix">
                                {run.title_suffix}
                              </em>,
                            ]
                            : []
                        }
                      </div>
                      <button type="button" className="btn btn-link btn-sm mr-2 text-dark" style={{ cursor: 'pointer' }} onClick={toggle}>
                        <i className="fa fa-close" title="Close" />
                      </button>
                    </div>
                  </div>
                  <div className="popover-body">
                    <table className="mb-2">
                      <tr>
                        <td className="text-center pr-1"><i className="fa fa-clock-o" /></td>
                        <td>{timespan.humanizeInTimezone(schedule.timezoneName)}</td>
                      </tr>
                      {
                        roomsDescription
                          ? (
                            <tr>
                              <td className="text-center pr-1"><i className="fa fa-map-marker" /></td>
                              <td>{roomsDescription}</td>
                            </tr>
                          )
                          : null
                      }
                      {
                        availabilityDescription
                          ? (
                            <tr>
                              <td className="text-center pr-1"><i className="fa fa-users" /></td>
                              <td>{availabilityDescription}</td>
                            </tr>
                          )
                          : null
                      }
                    </table>

                    <a href={event.event_page_url} className="btn btn-primary btn-sm mb-2">
                      Go to event &raquo;
                    </a>

                    <div
                      className="small"
                      style={{ overflowY: 'auto', maxHeight: '200px' }}
                      dangerouslySetInnerHTML={{ __html: event.short_blurb_html }}
                    />
                  </div>
                </div>
              );
            }}
          </PopperDropdown>
        )}
      </ScheduleGridConsumer>
    );
  }
}

export default ScheduleGridEventRun;
