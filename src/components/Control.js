import React, {useState} from 'react';
import shortid from 'shortid';

const initialState = {
  name: '',
  timeZone: ''
}

const Control = ({addNewWatches}) => {
  const [formValues, setFormValues] = useState(initialState);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const  payload = {
      ...formValues,
      id: shortid.generate(),
    }
    // setWatch({
    //   name: '',
    //   timeZone: ''
    // })
    addNewWatches(payload);
  }

  const onChangeHandler = (event) => {
    const {name, value} = event.target;
    setFormValues(prevState => ({...prevState, [name]: value}));

  }

  return (
    <form className="row" onSubmit={onSubmitHandler} name="addWatch">
      <div className="col-md-4">
        <label htmlFor="name" className="form-label">Название</label>
        <input
          type="text"
          className="form-control"
          id="nameWatch"
          name="name"
          value={formValues.name}
          onChange={onChangeHandler}
          required/>
      </div>
      <div className="col-md-4">
        <label htmlFor="timeZone" className="form-label">Временная зона</label>
        <input
          type="text"
          className="form-control"
          id="timeZone"
          name="timeZone"
          value={formValues.timeZone}
          onChange={onChangeHandler}
          required/>
      </div>
      <div className="col-md-4 align-self-end">
        <button className="btn btn-primary" type="submit">Добавить часы</button>
      </div>
    </form>
  )
};

export default Control;