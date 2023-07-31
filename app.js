let tasks_list=document.getElementById('task_list'),
error_place=document.getElementById('error_place'),
new_task_button = document.getElementById('new_task_button'),
textarea=document.getElementById('textarea'),
counter=0, tasks_array=[];

if (localStorage.getItem('tasks')!=null && localStorage.getItem('tasks')!=''){
    tasks_array = localStorage.getItem('tasks').split(',');
    tasks_array.forEach(tasked =>{
        counter+=1;
        tasked = tasked.replace('RaZdElItEl1', ',');
        tasked = tasked.replace('RaZdElItEl2', "'");
        tasks_list.innerHTML += '<div class="task" id="taskdiv'+counter+'"><div class="task_text"><p id="value'+counter+'">'+tasked+'</p></div><button id="delete'+counter+'" onClick="deleteTask(this.id)">❌</button>';
    });
}

new_task_button.onclick = function(){
    if (textarea.value==''){
        error_place.innerHTML = '<p style=" color:red">Введите хоть что-нибудь</p>';
    } else{
        counter+=1;
        error_place.innerHTML = '';
        task = textarea.value;
        textarea.value = '';
        tasks_list.innerHTML += '<div class="task" id="taskdiv'+counter+'"><div class="task_text"><p id="value'+counter+'">'+task+'</p></div><button id="delete'+counter+'" onClick="deleteTask(this.id)">❌</button>';
        task = task.replace(',', 'RaZdElItEl1');
        task = task.replace("'", 'RaZdElItEl2');
        tasks_array.push(task);
        localStorage.setItem('tasks', tasks_array);
    }
}
function deleteTask(id){
    let count_id = Number(id.slice(6));
    let value = document.getElementById('value'+count_id).innerText;
    tasks_array.splice(tasks_array.indexOf(value), 1);
    document.getElementById('taskdiv'+count_id).remove();
    localStorage.setItem('tasks', tasks_array);
}