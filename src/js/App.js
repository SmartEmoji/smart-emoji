import React, { PureComponent } from 'react';
import Button from './components/Button/Button';

import './App.scss';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Button />
      </div>
    );
  }
}

export default App;
