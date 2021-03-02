import {createHeader, createMain, createNav, createModal, currentProject} from './starter';
import {world} from './todo';

const createProjectListing = function (projectTitle) {
  const projectColumn = document.querySelector('.list-group.projectsResults');
  const newProject = document.createElement('li');
  projectColumn.appendChild(newProject);
  newProject.classList.add('list-group-item')
  newProject.innerHTML = `${projectTitle}`
}

const createTaskListing = function () {
  const todoColumn = document.querySelector('.list-group.todosResults');
  todoColumn.innerHTML = "";
  world[currentProject].forEach(function(item) {
  const newTask = document.createElement('li');
  todoColumn.appendChild(newTask);
  newTask.classList.add('list-group-item')
  if (item.priority === "1") {
    newTask.classList.add('bg-danger')
  }
  else if (item.priority  === "2") {
    newTask.classList.add('bg-warning')
  }
  else {
    newTask.classList.add('bg-success')
  }
  newTask.innerHTML = `<div class="checkbox">
  <label><input type="checkbox" value="${item.title}Complete">${item.title}               ${item.dueDate}</label>
</div>`})
}

export {createProjectListing, createTaskListing}