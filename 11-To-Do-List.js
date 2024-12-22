const todolist = [];

rendorTodolist();
function rendorTodolist(){
let todolistHTML ='';

for(let i=0; i <todolist.length; i++){
   const html = `
   <div>
      ${todolist[i].name} 
   </div>
   <div>
      ${todolist[i].dueDate}
   </div>
   <button class="delete-todo-button" onclick="
   todolist.splice(${i}, 1);
   rendorTodolist();
   ">Delete</button>
   `;
   todolistHTML+= html;
}
console.log(todolistHTML);

document.querySelector('.js-todo-list').innerHTML=todolistHTML;
}
function addTodo() {
   const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value;
   
   const dateInputElement= document.querySelector('.js-due-date-input');
   const dueDate= dateInputElement.value;

   todolist.push({
      name,
      dueDate
   });
   console.log(todolist);

   inputElement.value = ' ';

   rendorTodolist();
}