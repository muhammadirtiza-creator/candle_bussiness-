// alert("alert message");
// confirm("are you sure?");
// console.log("hello world!");
// let email = prompt("enter your email");
// console.log(email);

// var x = 5;
// var x =6;

// let name = "iobm";

// const pi = 3.145;

// let name_var = prompt("enter your name");

// document.getElementById("name").innerHTML = name_var;

// function dark_mode(){
//   let body_var = document.getElementById("body");
// body_var.style.backgroundColor="black";

// let body_color = document.getElementById("body");
// body_color.style.color="white";
// }

// function light_mode(){
//   let body_var = document.getElementById("body");
// body_var.style.backgroundColor="white";
// let body_color = document.getElementById("body");
// body_color.style.color="black";
// }

  function fetch_data(){
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
        
  localStorage.setItem('name',name.value);
  localStorage.setItem('email',email.value);
  localStorage.setItem('password',password.value);
  sessionStorage.setItem('name',name.value);
  sessionStorage.setItem('email',email.value);
  sessionStorage.setItem('password',password.value);
  window.location.href="login.html"
   }
   
// function parent(){
 
// }

function login(){
   let login_email =    document.getElementById("login_email");
   let login_pass =   document.getElementById("login_pass");
   let fetched_email = localStorage.getItem("email") ; 
   let fetched_pass = localStorage.getItem("password");
   let fetched_user = localStorage.getItem("name");
   let email_value = login_email.value;
   let pass_value = login_pass.value;

  //  alert(login_email.value);
  //  alert(login_pass.value);
  if(email_value == fetched_email && pass_value== fetched_pass){
    // alert(fetched_user)
     window.location.href = "dashboard.html";
    document.getElementById("user_name").innerHTML="qwerty";
  }

  else{
    window.location.href = "login.html"
  }
}






