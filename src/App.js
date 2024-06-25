import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import Task from './mocks/Task';
import {filter, includes} from 'lodash';

function App() {

  const [isShowForm, setIsShowForm] = useState(false);
  const [searchForm, setSearchForm] = useState('');
  let itemOrigin = [];
  const [strSearch, setStrSearch] = useState('');
  let elForm = null;

  itemOrigin = filter(Task, function(item) { 
    return includes(item.name, strSearch);
  });

  // if( strSearch.length > 0 ) {
  //   Task.forEach((item) => {
  //     if( item.name.indexOf(strSearch) !== -1 ){
  //       itemOrigin.push(item);
  //     }
  //   });
  // } else {
  //   itemOrigin = Task;
  // }

  function handleToggleForm(){
    setIsShowForm(!isShowForm);
  }
  
  function handleCloseForm(){
    setIsShowForm(false);
  }

  function handleGoSearchForm(value) {
    setStrSearch(value);
    console.log(strSearch);
  }

  useEffect(() => {
  }, [strSearch]);

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
        onclickSearchForm={handleGoSearchForm}
        onclickToggleForm={handleToggleForm}
        isShowForm={isShowForm}
      />
      {/* CONTROL (SEARCH + SORT + ADD) : END */}
      {/* FORM : START */}
      {elForm}
      {/* FORM : END */}
      {/* LIST : START */}
      <List items={itemOrigin} />
    </div>
  );
}

export default App;
