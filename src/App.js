import React, { Component, useState, useRef } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';


function App() {
  return (
    <div className="container">
      {/* TITLE : START */}
      <Title />
      {/* TITLE : END */}
      {/* CONTROL (SEARCH + SORT + ADD) : START */}
      <Control />
      {/* CONTROL (SEARCH + SORT + ADD) : END */}
      {/* FORM : START */}
      <Form />
      {/* FORM : END */}
      {/* LIST : START */}
      <List />
    </div>
  );
}

export default App;
