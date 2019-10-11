function submit1(){
    var a =  document.getElementById("text1").value;
    var b =  document.getElementById("text2").value;
    var c = parseInt(a) + parseInt(b); 
    document.getElementById("text3").innerHTML=c;
  
  }
  function testsubmit1(a,b){
    
      return a+b;
    }
    
    
      
  document.getElementById("text5").addEventListener("click",submit1);
 