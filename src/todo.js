const todoArray = [];
const createTodo = function (title, description, priority, dueDate) {
   this.title = title;
   this.description = description;
   this.priority = priority;
   this.dueDate = dueDate;
   let checklist = {};
   todoArray.push({title, description, priority, dueDate, checklist});
}

export {createTodo, todoArray}