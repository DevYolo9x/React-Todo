import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function From(props) {
  const search = useRef(null);
  const task_name = useRef(null);
  const task_level = useRef(null);

  let {itemSelected} = props;
  let id = itemSelected ? itemSelected.id: "";
  let name = itemSelected ? itemSelected.name: "";
  let level = itemSelected ? itemSelected.level: "";

  const [formData, setFormData] = useState({
    task_name: (itemSelected ? itemSelected.name:''),
    task_level: (itemSelected ? itemSelected.level:''),
  });

  function handleCancel() {
    if( props.onclickCloseForm ) {
      props.onclickCloseForm()
    }
  }

  function handleChange(event) {
      const {name, value, type} = event.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]:value
      }))
  }

  function handleSubmit(event) {
    event.preventDefault();
    let item = {
      id: id,
      name: formData.task_name,
      level: +formData.task_level,
    }
    
    if( props.onclickHandleSubmit ) {
      props.onclickHandleSubmit(item.id, item)
    }
  }

  return (
    <div className="row">
      <div className="col-md-offset-7 col-md-5">
        <form onSubmit={handleSubmit} className="form-inline">
          <div className="form-group">
            <label className="sr-only" htmlFor="">
              label
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Task Name"
              name="task_name"
              onChange={handleChange}
              defaultValue={formData.task_name}
            />
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="">
              label
            </label>
            <select
              name="task_level"
              className="form-control"
              required="required"
              onChange={handleChange}
              defaultValue={formData.task_level}
            >
              Small
              <option value={0}>Basic</option>
              <option value={1}>Medium</option>
              <option value={2}>High</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button type="button" onClick={handleCancel} className="btn btn-default">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default From;