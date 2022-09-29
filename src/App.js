import React from "react";
import NavBar from "./NavBar";
import './App.css';
import Title from "./Title";
import SearchBar from "./SearchBar";
import RecipeList from "./RecipeList";


function App() {
  return (
    <div>
    <NavBar/>
    <Title/>
    <SearchBar/>
    <RecipeList/>
    </div>
     
  );
};

 export default App;
