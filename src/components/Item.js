import React from 'react';

function Item(props) {
  const {data, index} = props;
  var type = {
    0: 'Basic',
    1: 'Medium',
    2: 'High',
  }
  
  var label = {
    0: 'label-primary',
    1: 'label-warning',
    2: 'label-danger',
  }
  return (
    <tr>
      <td className="text-center">{index+1}</td>
      <td>
        {data.name}
      </td>
      <td className="text-center">
        <span className={'label ' + label[data.level]}>{type[data.level]}</span>
      </td>
      <td>
        <button type="button" className="btn btn-warning">
          Edit
        </button>
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Item;
