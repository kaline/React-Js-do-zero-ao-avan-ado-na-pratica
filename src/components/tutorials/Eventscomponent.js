function EventsComponent(){

   
    function handleSubmit(e) {
        e.preventDefault();
        console.log('Você clicou em enviar.');
      }


    return(
        <>
        <p>Old javascript</p>
        <button id="myButton">myButton</button>
        <div id="Demo"></div>
        <br></br>
        <p>Reactjs</p>
        <form onSubmit={handleSubmit}>
        <button type="submit">Enviar</button>
      </form><form onsubmit="console.log('Você clicou em enviar.'); return false">
                <button type="submit">Enviar</button>
            </form></>

        
    )

  
    
}

const element = document.getElementById('myButton');
if(element){

    element.addEventListener('click', myOldFunction, true);

}
//old  ways: javascript
function myOldFunction(){
    console.log("click")
    const text =  document.getElementById('Demo');
    if(text){
        console.log("click 222")

        text.innerHTML = "Hello";
    } 
}


export default EventsComponent;