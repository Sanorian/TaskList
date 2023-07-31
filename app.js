let tasks_list=document.getElementById('task_list'),
error_place=document.getElementById('error_place'),
new_task_button = document.getElementById('new_task_button'),
textarea=document.getElementById('textarea'),
counter=0, tasks_array=[];


new_task_button.onclick = function(){
    if (textarea.value==''){
        error_place.innerHTML = '<p style=" color:red">Введите хоть что-нибудь</p>';
    } else{
        counter+=1;
        error_place.innerHTML = '';
        task = textarea.value;
        tasks_array.push(task);
        localStorage.setItem('tasks', tasks_array);
        textarea.value = '';
        tasks_list.innerHTML += '<div class="task" id="taskdiv'+counter+'"><div class="task_text"><p id="value'+counter+'">'+task+'</p></div><button id="delete'+counter+'" onClick="deleteTask(this.id)">❌</button>';
    }
}
function deleteTask(id){
    let count_id = Number(id.slice(6));
    let value = document.getElementById('value'+count_id).innerText;
    tasks_array.splice(tasks_array.indexOf(value), 1);
    document.getElementById('taskdiv'+count_id).remove();
    localStorage.setItem('tasks', tasks_array);
}