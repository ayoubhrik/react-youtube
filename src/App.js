import React, { Component } from "react";
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import Contents from "./components/Contents";
import Search from "./components/Search";
class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <AppWrapper>

          <Sidebar />
            <Switch>
              <Route path="/" exact component={Contents} />
              <Route path="/search/:id" component={Search} />

            </Switch>
        </AppWrapper>
      </>
    );
  }

}
const AppWrapper = styled.div`
display:flex;

`;


export default App;
