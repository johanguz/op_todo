import { update } from 'lodash';
import {createHeader, createMain, createNav, createModal, currentProject} from './starter';
import {world} from './todo';

const createProjectListing = function () {
  const projectColumn = document.querySelector('.projectsResults');
  projectColumn.innerHTML = `
  `;
  const worldArr = Object.keys(world);
  for (let i=0; i <= worldArr.length-1; i++) {
    const newProject = document.createElement('div');
    projectColumn.appendChild(newProject);
    // newProject.classList.add('list-group-item')
    newProject.innerHTML = `<div class="d-grid gap-2 col-12 mx-auto">
    <button class="btn btn-primary btn-custom" type="button" id="${worldArr[i]}btn">${worldArr[i]}</button>
    </div>`
    let buttonAction = document.querySelector(`#${worldArr[i]}btn`);
    buttonAction.addEventListener("click", () => {
      currentProject = worldArr[i];
      createTaskListing();
    })
  }
}

const createTaskListing = function () {
  const todoColumn = document.querySelector('.todosResults');
  todoColumn.innerHTML = "";
  world[currentProject].forEach(function(item, index) {
    const newTask = document.createElement('div');
      todoColumn.appendChild(newTask);
  // newTask.classList.add('list-group-item')
          if (item.priority === "1") {
            newTask.classList.add('bg-danger')
          }
          else if (item.priority  === "2") {
            newTask.classList.add('bg-warning')
          }
          else {
            newTask.classList.add('bg-success')
          }
  
      newTask.innerHTML = `<div class="container-fluid">
      <div class="row ${item.project}${index}">
      <div class="checkbox col-1 ${item.project}${index}Complete ">
        <label><input type="checkbox" id="${item.project}${index}" value="${item.title}Complete"></label>   </div>

        <div class="text-start col-8">${item.title}</div>
        <div class="text-end col"> ${item.dueDate}</div>
    </div>
    </div>`;
    
    document.querySelector(`#${item.project}${index}`)
            .addEventListener('change', () => {
              if (item.complete === true){
              document.querySelector(`.row.${item.project}${index}`)
                      .classList.remove('strike')
                      item.complete = false;
                      console.log(item)
                    }
               else if (item.complete === false) {
                document.querySelector(`.row.${item.project}${index}`)
                .classList.add('strike')
                item.complete = true;
                console.log(item)
              }
               }       
            )

          })
        }





const updateItemCheck = function (item, index) {
  !item.complete;
  const strikeThrough = document.querySelector(`${item.project}${index}Complete`);
  strikeThrough.classList.add('strike');
}

export {createProjectListing, createTaskListing}