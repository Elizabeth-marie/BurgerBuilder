import React, { Component } from 'react';
import Layout from './Components/Layout/layout'

class App extends Component {
  render() {
    return (
      <div>
        <Layout props={this.props}>
          <p>Testing the Layout</p>
        </Layout>
      </div>
    );
  }
}

export default App;
