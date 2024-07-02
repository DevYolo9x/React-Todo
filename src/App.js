import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import Task from './mocks/Task';
import Student from './components/Student';
import { v4 as uuidv4 } from 'uuid';
import {filter, includes, orderBy as functionOrderBy, remove} from 'lodash';

function App(props) {
  const [isShowForm, setIsShowForm] = useState(false);
  const [searchForm, setSearchForm] = useState('');
  const [strSearch, setStrSearch] = useState('');
  const [orderBy, setOrderBy] = useState('level');
  const [orderDir, setOrderDir] = useState('desc');
  let [itemOrigin, setItemOrigin] = useState(Task);
  let [itemSelected, setItemSelected] = useState([]);
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
    setItemSelected(null);
  }
  
  function handleCloseForm(){
    setIsShowForm(false);
    setItemSelected(null);
  }

  function handleSort(orderBy, orderDir){
    setOrderBy(orderBy);
    setOrderDir(orderDir);
  }

  function handleGoSearchForm(value) {
    setStrSearch(value);
  }

  function handleDelete(id) {
    // Delete - Sử dụng thư viện lodash
    itemOrigin = remove(itemOrigin, function(item) {
      return item.id !== id;
    });
    setItemOrigin(itemOrigin);
  }
  
  function handleEdit(item){
    setItemSelected(item)
    setIsShowForm(true)
  }

  function handleSubmit(id, item){
    if( id !== '' ) {
      itemOrigin.forEach((el, key) => {
        if(el.id === id) {
          //console.log(el);
          itemOrigin[key].id = id;
          itemOrigin[key].name = item.name;
          itemOrigin[key].level = item.level;
        }
        setItemOrigin(itemOrigin);
      })
    } else {
      item.id = uuidv4();
      itemOrigin.push(item);
      console.log(itemOrigin);
      setItemOrigin(itemOrigin);
    }
    setIsShowForm(false)
  }

  useEffect(() => {
  }, [strSearch]);

  if( isShowForm ) {
    elForm = <Form onclickCloseForm={handleCloseForm} onclickHandleSubmit={handleSubmit} itemSelected={itemSelected} />
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
      onClickEdit={handleEdit}
      items={itemOrigin}
      />
    </div>
  );
}

export default App;
