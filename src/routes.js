import React, {Suspense, lazy} from 'react';
import {Route} from 'react-router-dom';

// import CircularProgress from '@material-ui/core/CircularProgress';
import Spinner from './module/spinner';

import './routes.scss';

const Activities = lazy(() => import(/* webpackChunkName: "page-activities" */ './page/activities'));

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
    </Suspense>
  </div>
);