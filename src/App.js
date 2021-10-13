import React from 'react';
import './index.css';
import {useState, useEffect} from 'react';
import { client } from './client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Recipe from "./components/Recipe";
import Home from "./components/Home";
import Meal from "./components/Meal";
import Blog from "./components/Blog";
import Footer from './components/Footer';


function App() {

  const [articles, setArticle]= useState([])

  useEffect(() =>{
    client.getEntries()
    .then(response => setArticle(response.items))
    .catch(err => console.log(err))
  },[])


  return (
    <Router>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Meal">Meal</NavLink>
        <NavLink to="/Blog">Blog</NavLink>
        </nav>
        
        <Switch>
        <Route exact path="/Recipe/:slug">
            <Recipe posts={articles} />
        </Route>

        <Route exact path="/Meal">
            <Meal />
          </Route>

          <Route exact path="/Blog">
            <Blog />
          </Route>
       
        <Route path="/Recipe">
            <Recipe posts={articles} />
        </Route>
     

          <Route exact path="/">
            <Home
              articles={articles}
            />
          </Route>

    </Switch>
    <Footer />
    </Router>
  );
}

export default App;