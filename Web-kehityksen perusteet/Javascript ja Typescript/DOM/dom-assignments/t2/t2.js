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
const ulElement = document.querySelector('ul');
for (const todoItem of todoList) {
  const listItem = document.createElement('li');
  const input = document.createElement('input');
  const label = document.createElement('label');
  ulElement.append(listItem);
  listItem.append(input, label);
  label.innerText = todoItem.task;
  input.id = `todo-${todoItem.id}`;
  input.type = `checkbox`;
  label.htmlFor = `todo-${todoItem.id}`;
  if (todoItem.completed) {
    input.checked = true;
  }
}
