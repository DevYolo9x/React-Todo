import React, { Component, useState, useRef } from 'react';
import Item from './Item';
import Task from '../mocks/Task';

function List(props) {
  const listItem = props.items;
  const itemPage = Task.map( (item, index) =>
      <Item key={index} data={item} />
  )
  return (
    <div className="panel panel-success">
      <div className="panel-heading">List Task</div>
      <table className="table table-hover ">
        <thead>
          <tr>
            <th style={{ width: "10%" }} className="text-center">
              #
            </th>
            <th>Task</th>
            <th style={{ width: "20%" }} className="text-center">
              Level
            </th>
            <th style={{ width: "20%" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {itemPage}
        </tbody>
      </table>
    </div>
  );
}

export default List;
