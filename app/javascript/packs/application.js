/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import 'custom-event-polyfill';
import 'url-search-params-polyfill';

// eslint-disable-next-line import/order
import '../displayBrowserWarning'; // runs on import

import ClipboardJS from 'clipboard';
import Rails from 'rails-ujs';
import 'bootstrap.native/dist/bootstrap-native-v4';

import 'codemirror';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/mode/multiplex';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/matchtags';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/markdown-fold';
import 'codemirror/addon/fold/xml-fold';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/foldgutter.css';

import WebpackerReact from 'webpacker-react';

import '../styles/application.scss';
import 'react-table/react-table.css';
import '../inflections';
import '../Codemirror/LiquidMultiplexModes';

import components from './components';

WebpackerReact.setup(components);

Rails.start();
