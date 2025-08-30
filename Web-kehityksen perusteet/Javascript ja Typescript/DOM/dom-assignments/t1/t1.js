// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const listElement = document.querySelector('ul');
for (const todoItem of todoList) {
  let check;
  if (todoItem.completed) {
    check = 'checked';
  } else {
    check = '';
  }
  const listItem = `<li>
   <input type="checkbox" id="todo-${todoItem.id}" ${check}>
   <label for="todo-${todoItem.id}">${todoItem.task}</label>
   </li>`;

  listElement.insertAdjacentHTML('beforeend', listItem);
}
