const button=document.querySelector('button')
const input=document.querySelector('input#todo_input')
const list=document.querySelector('ol')
//Enter Keyword
input.addEventListener("keydown",e=>{
    const key=e.key
    if(key=='Enter'){
       handleAdd()
    }

})

const handleAdd=(e)=>{
    const textToAdd=input.value
    if(textToAdd.length>0){
    const ele=document.createElement('li')
    const textNode=document.createTextNode(textToAdd)
    ele.appendChild(textNode)
    list.appendChild(ele)
    input.value=''
    //create a dyanamic button element
    const button=document.createElement('button')
    button.innerHTML='Delete'
    ele.appendChild(button)
    //clear the list
    button.addEventListener('click',(e)=>{
        ele.remove()
    })
    }
  
    else{
        window.alert("Task cannot be empty")
    }
    input.value==" ";
}
button.addEventListener('click',handleAdd)
