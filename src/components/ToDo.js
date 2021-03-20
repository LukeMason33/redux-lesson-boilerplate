import React from 'react';
import {deleteToDo} from '../actions/index';

const ToDo = ({ id, text, completed, deleteToDo }) => {

  const deleteToDoItem = (event) => {
    deleteToDo()
  }

  return (
    <>
      <li>{text}</li>
      <button onClick={deleteToDoItem}>Delte</button>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteToDo: text => dispatch(deleteToDo(text))
})

export default ToDo;
