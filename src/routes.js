import React, {Suspense, lazy} from 'react';
import {Route} from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

// const Webmaster = lazy(() => import(/* webpackChunkName: "page-webmaster" */ './pages/webmaster'));

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
      {/* <Route path="/webmaster" component={Webmaster}></Route> */}
    </Suspense>
  </div>
);