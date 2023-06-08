import React from 'react';
import './ListTodo.scss';

export default function ListTodo() { 
  return(
    <div className='listTodo'>
      <div className='listTodo__row'>
        <div className='listTodo__item'>Buy new laptop</div>
        <div className='listTodo__delete'>Del</div>
      </div>
    </div>
  )
}