 let password = document.querySelector(".search");
 let generate = document.querySelector(".generate");
 let length=12;
 let pass = "";
 
 let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let lowercase ="abcdefghijklmnopqrstuvwxyz";
 let number ="0123456789";
 let symbol="!@#$%^&*(){}[]<>/\~!."
 let allchars = uppercase+lowercase+number+symbol;


function passwordgenerator(){


pass+=uppercase[Math.floor((Math.random()*uppercase.length))];
pass+=lowercase[Math.floor((Math.random()*lowercase.length))];
pass+=number[Math.floor((Math.random()*number.length))];
pass+=symbol[Math.floor((Math.random()*symbol.length))];

while(pass.length<length){
   pass+=allchars[Math.floor((Math.random()*allchars.length))];
}

password.value = pass;

pass="";

}

function copy(){
    password.select();
    document.execCommand("copy");
}