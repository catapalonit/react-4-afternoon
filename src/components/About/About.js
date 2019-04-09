import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom"
import History from "../History/History"
import Contact from "../Contact/Contact"

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link to="/about" className="subnav_links"><h3>About</h3></Link>
          <Link to="/about/history" className="subnav_links"><h3>History</h3></Link>
          <Link to="/about/contact" className="subnav_links"><h3>Contact</h3></Link>
        </div>
        <div className='box'>
          <Switch>
            <Route path="/about/history" component={History} />
            <Route path="/about/contact" component={Contact} />
            <Route exact path="/about"
              render={() => (
                <div>
                  <h1 className="title">About WestSide University:</h1>
                  <p>
                    WestSide university is the worst university ever and you should not attend this school because we have rats... I found a whole one in my Cobb Salad.

                  </p>
                </div>
              )}

            />

          </Switch>
        </div>
      </div >
    )
  }
}