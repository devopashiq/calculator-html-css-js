let input="";



function appendToDisplay(number){
    input +=number;
   document.getElementById("display").value =input;
    
    
    
}

function calculate(){
 try{
    let result =eval(input);
    document.getElementById("display").value= result;
    input= result.toString();
 }catch(e){
    document.getElementById("display").value="Error";
    input="";
 }
}

function clearDisplay(){
    input="";
    document.getElementById("display").value =input;
}
