import React, {Suspense, lazy} from 'react';
import {Route} from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

const Activities = lazy(() => import(/* webpackChunkName: "page-activities" */ './page/activities'));

export default (props) => (
  <div>
    <Suspense
      fallback={
        <div className='LoadingProgress'>
          <CircularProgress />
        </div>
      }>
      {/* React routers settings */}
      {/* <Route exact={true} path="/" component={Default}></Route> */}
      <Route path="/activities" component={Activities}></Route>
    </Suspense>
  </div>
);