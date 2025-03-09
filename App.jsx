import React from 'react';
import './App.css';
import Navbar from "./navbar.jsx";
import Sidebar from "./sidebar.jsx";
import Box from "./box.jsx";
// Navbar or other function must be start from capital letter

function App() {

  return(
    <> 
      <Navbar/>
      <Sidebar/>
      <Box/>
    </>
  )
 }
export default App
