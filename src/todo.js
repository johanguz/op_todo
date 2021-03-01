const todoArray = [];
const createTodo = function (title, priority, dueDate) {
   this.title = title;
   this.priority = priority;
   this.dueDate = dueDate;
   todoArray.push({title, priority, dueDate});
}

export {createTodo, todoArray}