// window.onload wait until the page is totaly loaded and then execute the code
window.onload = () => {

    const parrafo = document.getElementById('text')
    console.log("el texto tenia un parrafo con la etiqueta " + parrafo.tagName 
    +" y dice  "+ parrafo.innerText)
    alert("the text it's gona change")
    parrafo.innerText = "the new text"
    console.log("y ahora el texto del parrafo tiene la etiqueta " + parrafo.tagName 
    +" y dice  "+ parrafo.innerText)
    

}
