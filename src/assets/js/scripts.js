

let modoclaroOn = false; //almacenar esta variable en local o en una cookie

function claro_oscuro(){
    document.body.classList.toggle('theme--light')
    if(document.body.classList.contains("theme--light")){
        let modoclaroOn = true; 
    }
   
}

function checkMode(){
    if(modoclaroOn){
        document.body.classList.add('theme--light')
    }
    console.log(modoclaroOn)
}