var LOG = ['Tolik','12345'];
function funcNewReg(){
   var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;
   if(LOG[0]==login&&LOG[1]==password){
       location.href="AdminPanel.html";
   }
}

