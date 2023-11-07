var textinput=document.querySelector('#inputadd')
var forms=document.querySelector('form')
var addtaskbutton=document.querySelector('#addbutton')
var incomplete_ul=document.querySelector('#incomp_ul')
var complete_ul=document.querySelector('#complete_div ul')
var createTask=function(task){
    var listitem=document.createElement('li')
    var checkboxs=document.createElement('input')
    var labels=document.createElement('label')
    labels.innerText=task;
    checkboxs.type='checkbox'
    listitem.appendChild(checkboxs)
    listitem.appendChild(labels)
    return listitem;
}
var addtask=function(event){
    event.preventDefault()
    let incomp_listitem=createTask(textinput.value)
    incomplete_ul.appendChild(incomp_listitem)
    textinput.value=''
    bindincomplete(incomp_listitem,completeTask)
}
var completeTask=function(){
    var listitem=this.parentNode
    var deletebuttons=document.createElement('button')  
    deletebuttons.className='delete'
    deletebuttons.innerText='Delete'
    listitem.appendChild(deletebuttons)
    var checkboxs=listitem.querySelector('input[type="checkbox"]')
    checkboxs.remove()
    complete_ul.appendChild(listitem)
    bindcomplete(listitem,deleteTask)
    if(incomplete_ul.children.length==0){
        var text1=document.createElement('h2')
        text1.innerText="No task"
        incomplete_ul.style.width='150px'
        incomplete_ul.style.height='150px'
        incomplete_ul.append(text1)
        return text1
    }
}
var deleteTask=function(){
    var listitem=this.parentNode;
    var ul2=listitem.parentNode
    ul2.removeChild(listitem)
}
var bindincomplete=function(taskitem,checkboxclick){
    var checkboxs=taskitem.querySelector('input[type="checkbox"]')
    checkboxs.onchange=checkboxclick
}
var bindcomplete=function(taskitem,deletebuttonclick){
    var deletebuttons=taskitem.querySelector('.delete')
    deletebuttons.onclick=deletebuttonclick;
}

for (let i=0;i<incomplete_ul.children.length;i++){
    bindincomplete(incomplete_ul.children[i],completeTask)
}
forms.addEventListener('submit',addtask)
