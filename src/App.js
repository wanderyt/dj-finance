import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import GlobalHeader from './module/global-header';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <GlobalHeader />

            <div classNames="Routes">
              <Routes />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
