let counter=0, tasks_array=[];
document.addEventListener("DOMContentLoaded", (event) => {
    if (localStorage.getItem('tasks')!=null && localStorage.getItem('tasks')!=''){
        tasks_array = localStorage.getItem('tasks').split(',');
        tasks_array.forEach(tasked =>{
            counter+=1;
            tasked = tasked.replaceAll('RaZdElItEl1', ',');
            tasked = tasked.replaceAll('RaZdElItEl2', "'");
            document.getElementById('task_list').innerHTML += '<div class="task_light" id="taskdiv'+counter+'"><div class="task_text_light"><p id="value'+counter+'">'+tasked+'</p></div><button id="delete'+counter+'" class="button_light" onClick="deleteTask(this.id)">❌</button>';
        });
    }
    if ((localStorage.getItem('theme')??'light')=='dark'){
        setDarkTheme();
    }
});

function addNewTask(){
    if (document.getElementsByTagName("textarea")[0].value==''){
        document.getElementById('error_place').innerHTML = '<p style="color:red">Введите хоть что-нибудь</p>';
    } else{
        counter+=1;
        document.getElementById('error_place').innerHTML = '';
        task = document.getElementsByTagName("textarea")[0].value;
        document.getElementsByTagName("textarea")[0].value = '';
        if (document.getElementsByTagName("textarea")[0].classList[0]=='textarea_light'){
            document.getElementById('task_list').innerHTML += `<div class="task_light" id="taskdiv${counter}"><div class="task_text_light"><p id="value${counter}">${task}</p></div><button id="delete${counter}" class="button_light" onClick="deleteTask(this.id)">❌</button>`;
        } else {
            document.getElementById('task_list').innerHTML += `<div class="task_dark" id="taskdiv${counter}"><div class="task_text_dark"><p id="value${counter}">${task}</p></div><button id="delete${counter}" class="button_dark" onClick="deleteTask(this.id)">❌</button>`;
        }
        task = task.replaceAll(',', 'RaZdElItEl1');
        task = task.replaceAll("'", 'RaZdElItEl2');
        tasks_array.push(task);
        localStorage.setItem('tasks', tasks_array);
    }
}

function changeTheme(){
    if (document.getElementsByTagName("textarea")[0].classList[0]=='textarea_light'){
        setDarkTheme();
    } else {
        setLightTheme();
    }
}

function deleteTask(id){
    let count_id = Number(id.slice(6));
    let value = document.getElementById('value'+count_id).innerText;
    tasks_array.splice(tasks_array.indexOf(value), 1);
    document.getElementById('taskdiv'+count_id).remove();
    localStorage.setItem('tasks', tasks_array);
}

function setDarkTheme(){
    document.getElementsByTagName("textarea")[0].classList.remove('textarea_light');
    document.getElementsByTagName("textarea")[0].classList.add('textarea_dark');
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
    document.getElementsByTagName("body")[0].classList.remove('body_light');
    document.getElementsByTagName("body")[0].classList.add('body_dark');
    localStorage.setItem('theme', 'dark');
}

function setLightTheme(){
    document.getElementsByTagName("textarea")[0].classList.remove('textarea_dark');
    document.getElementsByTagName("textarea")[0].classList.add('textarea_light');
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
    document.getElementsByTagName("body")[0].classList.remove('body_dark');
    document.getElementsByTagName("body")[0].classList.add('body_light');
    localStorage.setItem('theme', 'light');
}