/* eslint-disable import/first, import/newline-after-import */

import { lazy } from 'react';
import mapValues from 'lodash-es/mapValues';

import AppRoot from '../AppRoot';
import AppWrapper from '../AppWrapper';
const EventsApp = lazy(() => import(/* webpackChunkName: "events-app" */ '../EventsApp'));
const LiquidDocs = lazy(() => import(/* webpackChunkName: "liquid-docs" */ '../LiquidDocs'));
const OrganizationAdmin = lazy(() => import(/* webpackChunkName: "organization-admin" */ '../OrganizationAdmin'));
const ProductOrderForm = lazy(() => import(/* webpackChunkName: "product-order-form" */ '../Store/ProductOrderForm'));
const RootSiteAdmin = lazy(() => import(/* webpackChunkName: "root-site-admin" */ '../RootSiteAdmin'));
import SignInButton from '../Authentication/SignInButton';
import SignOutButton from '../Authentication/SignOutButton';
import SignUpButton from '../Authentication/SignUpButton';
const UsersAdmin = lazy(() => import(/* webpackChunkName: "users-admin" */ '../Users/UsersAdmin'));

const unwrappedComponents = {
  AppRoot,
  EventsApp,
  LiquidDocs,
  OrganizationAdmin,
  ProductOrderForm,
  RootSiteAdmin,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UsersAdmin,
};

const wrappedComponents = mapValues(unwrappedComponents, AppWrapper);

export default wrappedComponents;
export { unwrappedComponents };
