let tasks_list=document.getElementById('task_list'),
error_place=document.getElementById('error_place'),
new_task_button = document.getElementById('new_task_button'),
textarea=document.getElementById('textarea'),
theme_change_button = document.getElementById('theme_change'),
counter=0, tasks_array=[], 
theme = (localStorage.getItem('theme')??'light');

if (localStorage.getItem('tasks')!=null && localStorage.getItem('tasks')!=''){
    tasks_array = localStorage.getItem('tasks').split(',');
    tasks_array.forEach(tasked =>{
        counter+=1;
        tasked = tasked.replaceAll('RaZdElItEl1', ',');
        tasked = tasked.replaceAll('RaZdElItEl2', "'");
        tasks_list.innerHTML += '<div class="task_light" id="taskdiv'+counter+'"><div class="task_text_light"><p id="value'+counter+'">'+tasked+'</p></div><button id="delete'+counter+'" class="button_light" onClick="deleteTask(this.id)">❌</button>';
    });
}
if (theme=='dark'){
    textarea.classList.remove('textarea_light');
    textarea.classList.add('textarea_dark');
    Array.from(document.getElementsByClassName('task_light')).forEach(element => {
            element.classList.remove('task_light');
            element.classList.add('task_dark');
        });
    Array.from(document.getElementsByClassName('task_text_light')).forEach(element => {
            element.classList.remove('task_text_light');
            element.classList.add('task_text_dark');
        });
    Array.from(document.getElementsByClassName('button_light')).forEach(element => {
        element.classList.remove('button_light');
        element.classList.add('button_dark');
        });
        }
new_task_button.onclick = function(){
    if (textarea.value==''){
        error_place.innerHTML = '<p style="color:red">Введите хоть что-нибудь</p>';
    } else{
        counter+=1;
        error_place.innerHTML = '';
        task = textarea.value;
        textarea.value = '';
        if (textarea.classList[0]=='textarea_light'){
            tasks_list.innerHTML += '<div class="task_light" id="taskdiv'+counter+'"><div class="task_text_light"><p id="value'+counter+'">'+task+'</p></div><button id="delete'+counter+'" class="button_light" onClick="deleteTask(this.id)">❌</button>';
        } else {
            tasks_list.innerHTML += '<div class="task_dark" id="taskdiv'+counter+'"><div class="task_text_dark"><p id="value'+counter+'">'+task+'</p></div><button id="delete'+counter+'" class="button_dark" onClick="deleteTask(this.id)">❌</button>';

        }
            task = task.replaceAll(',', 'RaZdElItEl1');
        task = task.replaceAll("'", 'RaZdElItEl2');
        tasks_array.push(task);
        localStorage.setItem('tasks', tasks_array);
    }
}

theme_change_button.onclick = function(){
    if (textarea.classList[0]=='textarea_light'){
        textarea.classList.remove('textarea_light');
        textarea.classList.add('textarea_dark');
        Array.from(document.getElementsByClassName('task_light')).forEach(element => {
                element.classList.remove('task_light');
                element.classList.add('task_dark');
            });
        Array.from(document.getElementsByClassName('task_text_light')).forEach(element => {
                element.classList.remove('task_text_light');
                element.classList.add('task_text_dark');
            });
        Array.from(document.getElementsByClassName('button_light')).forEach(element => {
            element.classList.remove('button_light');
            element.classList.add('button_dark');
            });
        localStorage.setItem('theme', 'dark');
        } else {
            textarea.classList.remove('textarea_dark');
            textarea.classList.add('textarea_light');
            Array.from(document.getElementsByClassName('task_dark')).forEach(element => {
                    element.classList.remove('task_dark');
                    element.classList.add('task_light');
                });
            Array.from(document.getElementsByClassName('task_text_dark')).forEach(element => {
                    element.classList.remove('task_text_dark');
                    element.classList.add('task_text_light');
                });
            Array.from(document.getElementsByClassName('button_dark')).forEach(element => {
                element.classList.remove('button_dark');
                element.classList.add('button_light');
        });
        localStorage.setItem('theme', 'light');
        }
}
function deleteTask(id){
    let count_id = Number(id.slice(6));
    let value = document.getElementById('value'+count_id).innerText;
    tasks_array.splice(tasks_array.indexOf(value), 1);
    document.getElementById('taskdiv'+count_id).remove();
    localStorage.setItem('tasks', tasks_array);
}