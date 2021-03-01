import {createTodo,todoArray} from './todo';
import _ from 'lodash';
import {createHeader, createMain, createNav, createModal} from './starter';
import bootstrap from 'bootstrap';


//draw basic layout
createHeader();
createNav();
createMain();
createModal('New To-Do List', 'todos', 'todoList');
createModal('New Notebook', 'notebooks', 'notebookList');

