import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import Task from './mocks/Task';
import Student from './components/Student';
import {filter, includes, orderBy as functionOrderBy, remove} from 'lodash';

function App(props) {

  const [isShowForm, setIsShowForm] = useState(false);
  const [searchForm, setSearchForm] = useState('');
  const [strSearch, setStrSearch] = useState('');
  const [orderBy, setOrderBy] = useState('level');
  const [orderDir, setOrderDir] = useState('desc');
  let [itemOrigin, setItemOrigin] = useState(Task);
  let elForm = null;

  // Search - Sử dụng thư viện lodash
  itemOrigin = filter(itemOrigin, function(item) { 
    if( item.name.length ) {
      return includes(item.name.toLowerCase(), strSearch.toLowerCase());
    }
    
  });

  // Sử dụng theo cách thông thường
  // if( strSearch.length > 0 ) {
  //   Task.forEach((item) => {
  //     if( item.name.indexOf(strSearch) !== -1 ){
  //       itemOrigin.push(item);
  //     }
  //   });
  // } else {
  //   itemOrigin = Task;
  // }

  // Sort - Sử dụng thư viện lodash
  itemOrigin = functionOrderBy(itemOrigin, [orderBy], [orderDir]);

  function handleToggleForm(){
    setIsShowForm(!isShowForm);
  }
  
  function handleCloseForm(){
    setIsShowForm(false);
  }

  function handleSort(orderBy, orderDir){
    setOrderBy(orderBy);
    setOrderDir(orderDir);
  }

  function handleGoSearchForm(value) {
    setStrSearch(value);
  }

  function handleDelete(id) {
    console.log(id);
    // Delete - Sử dụng thư viện lodash
    itemOrigin = remove(itemOrigin, function(item) {
      return item.id != id;
    });
    setItemOrigin(itemOrigin);
  }

  function handleSubmit(item){
    itemOrigin.push(item);
    setItemOrigin(itemOrigin);
  }

  useEffect(() => {
  }, [strSearch]);

  if( isShowForm ) {
    elForm = <Form onclickCloseForm={handleCloseForm} onclickHandleSubmit={handleSubmit} />
  }
  
  return (

    <div className="container">

      {/* <Student /> */}

      {/* TITLE : START */}
      <Title />
      {/* TITLE : END */}
      {/* CONTROL (SEARCH + SORT + ADD) : START */}
      <Control 
        orderBy={orderBy}
        orderDir={orderDir}
        onclickSort={handleSort}
        onclickSearchForm={handleGoSearchForm}
        onclickToggleForm={handleToggleForm}
        isShowForm={isShowForm}
      />
      {/* CONTROL (SEARCH + SORT + ADD) : END */}
      {/* FORM : START */}
      {elForm}
      {/* FORM : END */}
      {/* LIST : START */}
      <List 
      onClickDelete={handleDelete}
      items={itemOrigin}
      />
    </div>
  );
}

export default App;
