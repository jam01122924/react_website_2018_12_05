import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './home/home.component';
import ContactUs from './contactUs/contactUs.component';
import Page404 from './404/404.component';
import Demo from './demo/demo.component';
import AnimationDemo from './demo/animationDemo/animationDemo.component';
import SnippetDemo from './demo/snippetDemo/snippetDemo.component';
import SnippetPage from './snippetPage/snippetPage.component';
import D3Demo from './demo/d3Demo/d3Demo.component';

class Main extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="main-container">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/snippets' component={SnippetPage}/>
          <Route path='/demo' component={Demo}/>
            <Route path='/demo/animation' component={AnimationDemo}/>
            <Route path='/demo/snippets' component={SnippetDemo}/>
            <Route path='/demo/charts' component={Demo}/>
            <Route path='/demo/d3' component={D3Demo}/>
          <Route path='/contact-us' component={ContactUs}/>

          <Route path="*" component={Page404} />
        </Switch>
      </div>
    );
  }
}

export default Main;
