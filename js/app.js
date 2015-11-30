document.getElementById("bing").addEventListener("click", function(){
  var random = Math.round(Math.random() * 30);
  var printString = "";
  for (var i=0; i<random; i++){
    if (i%2===0){
      printString += "bing ";
    }else{
      printString += "bong ";
    }
  }

  document.getElementsByTagName('p')[0].innerText = printString;

})
