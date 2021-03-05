const world = {
  "default": []
};

const createTodo = function (title, priority, dueDate, project = "default", complete = false) {
   this.title = title;
   this.priority = priority;
   this.dueDate = dueDate;
   this.project = project;
   this.complete = complete
   world[project].push({title, priority, dueDate, project, complete});
}

const saveToLocalStorage = function (elem) {
  localStorage.setItem(elem);
}

export {createTodo, world, saveToLocalStorage}