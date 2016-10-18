import {bootstrap} from 'angular2/platform/browser';
import {bind} from 'angular2/core';
import {AppComponent} from './app.component';
import {AppComponents} from './app.components';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';
bootstrap(AppComponent, [HTTP_PROVIDERS,ROUTER_PROVIDERS]);
bootstrap(AppComponents, [HTTP_PROVIDERS,ROUTER_PROVIDERS]);
