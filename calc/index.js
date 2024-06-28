const display=document.getElementById("display")

function appendtoadd(input){
     display.value+=input
}

function calculate(){
    try{
        
    
   if (display.value===undefined){
    display.value='ERROR'
   }
   else{
       display.value=eval(display.value)

   }

}
    catch(error){
        display.value='ERROR'
    }
}

function clearthescreen(){
    display.value=0
}