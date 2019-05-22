import React, { Component } from 'react';
import Layout from './Components/Layout/layout'
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
  render() {
    return (
      <div>
        <Layout props={this.props}>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;