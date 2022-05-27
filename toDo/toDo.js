const itemList = []

/**
 * this funtion display the items in the ul and add an event for eliminate the item
 */
const render = () => {
    const toDoTemplate = itemList.map(item => '<li>'+ item +'</li>');
        const ulToDo = document.getElementById("toDoList");
        ulToDo.innerHTML = toDoTemplate.join('');

        const elements = document.querySelectorAll('#toDoList li')
        //add the eliminate funtion when someone click in it
        elements.forEach((element,index) => {
            element.addEventListener('click',() => {
                
                element.parentNode.removeChild(element)
                itemList.splice(index,1) 
                console.log(element.innerText+" "+index)
                render()
                
            })
        })
}

window.onload = () => {
    const form = document.getElementById('toDoForm')

    // this funtion save the item and show in the list
    form.onsubmit = (e) => {
        e.preventDefault();
        const toDo = document.getElementById('toDoInput')
        let item = toDo.value;
        itemList.push(item)
        toDo.value = '';
        render()

        
    }


}