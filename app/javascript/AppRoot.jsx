import React, {
  Suspense, useMemo, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';

import { AppRootQuery } from './appRootQueries.gql';
import AppRouter from './AppRouter';
import ErrorDisplay from './ErrorDisplay';
import NavigationBar from './NavigationBar';
import PageLoadingIndicator from './PageLoadingIndicator';
import parsePageContent, { DEFAULT_COMPONENT_MAP } from './parsePageContent';
import AppRootContext from './AppRootContext';
import useCachedLoadableValue from './useCachedLoadableValue';

// Avoid unnecessary layout checks when moving between pages that can't change layout
function normalizePathForLayout(path) {
  if (path.startsWith('/pages/') || path.startsWith('/events') || path === '/') {
    return path;
  }

  return '/non_cms_path'; // arbitrary path that's not a CMS page
}

function AppLayout({ location, history }) {
  const { data, loading, error } = useQuery(
    AppRootQuery,
    { variables: { path: normalizePathForLayout(location.pathname) } },
  );

  const [cachedCmsLayoutId, setCachedCmsLayoutId] = useState(null);
  const [layoutChanged, setLayoutChanged] = useState(false);

  const bodyComponents = useMemo(
    () => {
      if (error || loading) {
        return null;
      }

      return parsePageContent(
        data.effectiveCmsLayout.content_html,
        { ...DEFAULT_COMPONENT_MAP, AppRouter, NavigationBar },
      ).bodyComponents;
    },
    [data, error, loading],
  );

  const cachedBodyComponents = useCachedLoadableValue(
    loading, error,
    () => bodyComponents,
    [bodyComponents],
  );
  const appRootContextValue = useCachedLoadableValue(
    loading, error,
    () => ({
      assumedIdentityFromProfile: data.assumedIdentityFromProfile,
      cmsNavigationItems: data.cmsNavigationItems,
      conventionAcceptingProposals: (data.convention || {}).accepting_proposals,
      conventionName: (data.convention || {}).name,
      currentAbility: data.currentAbility,
      currentPendingOrder: data.currentPendingOrder,
      currentUser: data.currentUser,
      myProfile: data.myProfile,
      rootSiteName: (data.rootSite || {}).site_name,
      siteMode: (data.convention || {}).site_mode,
      signupMode: (data.convention || {}).signup_mode,
      ticketMode: (data.convention || {}).ticket_mode,
      ticketName: (data.convention || {}).ticket_name,
      ticketTypes: (data.convention || {}).ticket_types,
      ticketsAvailableForPurchase: (data.convention || {}).tickets_available_for_purchase,
      timezoneName: (data.convention || {}).timezone_name,
    }),
    [data],
  );

  useEffect(
    () => {
      if (!loading && !error && cachedCmsLayoutId !== data.effectiveCmsLayout.id) {
        if (cachedCmsLayoutId) {
          // if the layout changed we need a full page reload to rerender the <head>
          setLayoutChanged(true);
          window.location.reload();
        } else {
          setCachedCmsLayoutId(data.effectiveCmsLayout.id);
        }
      }
    },
    [loading, error, cachedCmsLayoutId, data],
  );

  useEffect(
    () => {
      if (
        !loading && !error
        && data.myProfile
        && ((data.convention || {}).clickwrap_agreement || '').trim() !== ''
        && !data.myProfile.accepted_clickwrap_agreement
        && location.pathname !== '/clickwrap_agreement'
        && location.pathname !== '/'
        && !location.pathname.startsWith('/pages')
      ) {
        history.replace('/clickwrap_agreement');
      }
    },
    [data, error, history, loading, location],
  );

  if (layoutChanged) {
    return null;
  }

  if (loading && !cachedBodyComponents) {
    return <PageLoadingIndicator visible />;
  }

  if (error) {
    return <ErrorDisplay graphQLError={error} />;
  }

  return (
    <AppRootContext.Provider value={appRootContextValue}>
      <Suspense fallback={<PageLoadingIndicator visible />}>{cachedBodyComponents}</Suspense>
    </AppRootContext.Provider>
  );
}

AppLayout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

const AppRoot = withRouter(AppLayout);
export default AppRoot;
