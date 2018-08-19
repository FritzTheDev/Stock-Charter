import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <SearchBar/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
