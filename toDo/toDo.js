const itemList = []

window.onload = () => {
    const form = document.getElementById('toDoForm')

    // this funtion save the item and show in the list
    form.onsubmit = (e) => {
        e.preventDefault();
        const toDo = document.getElementById('toDoInput')
        let item = toDo.value;
        itemList.push(item)
        toDo.value = '';
        const toDoTemplate = itemList.map(item => '<li>'+item+'</li>');
        const ulToDo = document.getElementById("toDoList");
        ulToDo.innerHTML = toDoTemplate.join('');
    }

    const showButton = document.getElementById('showButton')

    showButton.onclick = () => {
        const elements = document.querySelectorAll("#toDoList li")
        console.log(elements.forEach(e => console.log(e.innerText)))
    }


}