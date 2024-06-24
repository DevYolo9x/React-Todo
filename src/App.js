import React, { useState } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';


function App() {

  const [isShowForm, setIsShowForm] = useState(false);
  const [searchForm, setSearchForm] = useState('');
  let elForm = null;

  function handleToggleForm(){
    setIsShowForm(!isShowForm);
  }
  
  function handleCloseForm(){
    setIsShowForm(false);
  }

  function handleSearchForm() {
    console.log(123);
  }

  if( isShowForm ) {
    elForm = <Form onclickCloseForm={handleCloseForm} />
  }
  
  return (
    <div className="container">
      {/* TITLE : START */}
      <Title />
      {/* TITLE : END */}
      {/* CONTROL (SEARCH + SORT + ADD) : START */}
      <Control 
        onclickSearchForm={handleSearchForm}
        onclickToggleForm={handleToggleForm}
        isShowForm={isShowForm}
      />
      {/* CONTROL (SEARCH + SORT + ADD) : END */}
      {/* FORM : START */}
      {elForm}
      {/* FORM : END */}
      {/* LIST : START */}
      <List />
    </div>
  );
}

export default App;
