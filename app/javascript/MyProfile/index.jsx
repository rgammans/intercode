import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MyProfileDisplay from './MyProfileDisplay';
import MyProfileForm from './MyProfileForm';
import useLoginRequired from '../Authentication/useLoginRequired';

function MyProfile() {
  const loginRequired = useLoginRequired();

  if (loginRequired) {
    return <></>;
  }

  return (
    <Switch>
      <Route path="/my_profile/edit_bio">
        <Redirect to="/my_profile/edit" />
      </Route>
      <Route path="/my_profile/edit" component={MyProfileForm} />
      <Route path="/my_profile/setup" render={() => <MyProfileForm initialSetup />} />
      <Route path="/my_profile" component={MyProfileDisplay} />
    </Switch>
  );
}

export default MyProfile;
