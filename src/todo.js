const world = {
  "default": []
};
const createTodo = function (title, priority, dueDate, project = "default") {
   this.title = title;
   this.priority = priority;
   this.dueDate = dueDate;
   this.project = project;
   world[project].push({title, priority, dueDate});
}


export {createTodo, world}