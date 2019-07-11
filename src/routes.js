import React, {Suspense, lazy} from 'react';
import {Route} from 'react-router-dom';

import Spinner from './module/spinner';

import './routes.scss';

const Activities = lazy(() => import(/* webpackChunkName: "page-activities" */ './page/activities/index'));
const Charts = lazy(() => import(/* webpackChunkName: "page-charts" */ './page/charts'));
const TestImages = lazy(() => import(/* webpackChunkName: "page-testImages" */ './page/testImages'));
const TestImagesLazyload = lazy(() => import(/* webpackChunkName: "page-testImagesLazyload" */ './page/testImagesLazyload'));
const Weather = lazy(() => import(/* webpackChunkName: "page-weather" */ './page/weather'));

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
      {/* <Route path="/testImages" component={TestImages}></Route>
      <Route path="/testImagesLazyload" component={TestImagesLazyload}></Route> */}
      <Route path="/weather" component={Weather}></Route>
    </Suspense>
  </div>
);