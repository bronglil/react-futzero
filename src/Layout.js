import React, { Component, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Tootoad from './components/Home/HomeSub/Tootoad';
import Kursused from './components/Home/HomeSub/Kursused';
import Spordipsuhholoogia from './components/Home/HomeSub/Spordipsuhholoogia';
import {BrowserRouter as Router,  Route,  Redirect,  Switch} from 'react-router-dom';

export class Layout extends Component {
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    render() {
        return (

         <Router>

        <div id="page-container">
                    <Header />

                    <div id="et-main-area">

                    <Switch>
                      <Route path="/" exact> <Home/> </Route>
                      <Route path="/tootoad" ><Tootoad/> </Route>
                      <Route path="/kursused" ><Kursused/>  </Route>
                     <Route  path="/spordipsuhholoogia" > <Spordipsuhholoogia/> </Route>
                      <Redirect to="/" />
                      </Switch>

                    <Footer />
                    </div>
             </div>

        </Router>
      )
    }
}

export default Layout
