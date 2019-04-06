import React, {Suspense, lazy} from 'react';
import {Route} from 'react-router-dom';

import Spinner from './module/spinner';

import './routes.scss';

const Activities = lazy(() => import(/* webpackChunkName: "page-activities" */ './page/activities/index'));
const Charts = lazy(() => import(/* webpackChunkName: "page-charts" */ './page/charts'));

export default (props) => (
  <div>
    <Suspense
      fallback={
        <div className='LoadingProgress'>
          <Spinner />
        </div>
      }>
      {/* React routers settings */}
      <Route exact={true} path="/" component={Activities}></Route>
      <Route path="/activities" component={Activities}></Route>
      <Route path="/charts" component={Charts}></Route>
    </Suspense>
  </div>
);