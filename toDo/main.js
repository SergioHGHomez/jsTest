
window.onload = () => {
    let itemList = []

    const showList = () => {
        const list = document.getElementById('toDoList')


        if (!window.localStorage.getItem('list')){
            list.innerHTML = "<li>Lista vacia</li>";

        }else{
            itemList = (window.localStorage.getItem('list').split(','))
            let items = ''
            for (let index = 0; index < itemList.length; index++) {
                const element = itemList[index];
                items += '<li>'+element+'</li>';
                
            }
            list.innerHTML = items;

        }

        
        
        

              
        
    }
    
    showList()
    const form = document.getElementById("toDoForm")

    form.onsubmit = (e) => {
        e.preventDefault();
        const toDo = document.getElementById("toDoInput");
        let toDoItem = toDo.value;
        itemList.push(toDoItem);
        window.localStorage.setItem('list',itemList.join(','));
        toDo.value = ''
        showList()
        
    }
}
