import React, { Component } from 'react';
import Header from './header/header';
import About from './about/about';
import SearchPast from './searchpast/searchpast';
import Projects from './projects/projects';
import Help from './help/help';  // modal for help information

class App extends Component {
  render() {
    return (
      <div className="App">
        <Help />
        {/*<Header />*/}
        <About />
          <SearchPast />
        <Projects />
      </div>
    );
  }
}

export default App;
