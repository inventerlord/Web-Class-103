let username = document.getElementById("username");
let email = document.getElementById("email");
let pass = document.getElementById("password");
let cpass = document.getElementById("cpassword");

let userErr = document.getElementById("userErr");
let emailErr = document.getElementById("emailErr");
let passErr = document.getElementById("passErr");
let cPassErr = document.getElementById("cPassErr");

let form = document.getElementById("regForm"); 
let errors = [0,0,0,0];
function checkUsername(user){
    if(user.length < 3){
        userErr.innerHTML = "Username Must be at least 3 Characters";
        userErr.setAttribute('class',"alert-danger show");
        username.style.border = "3px solid red";
        errors[0] = 1;
    }
    else{
        userErr.innerHTML = "";
        userErr.setAttribute('class',"alert-success show");
        username.style.border = "3px solid green";
        errors[0] = 0;

    }
    
}

function checkEmail(emailValue){
    let pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailValue.length < 1){
        emailErr.innerHTML = "Email Can not be Empty";
        emailErr.setAttribute('class',"alert-danger show");
        email.style.border = "3px solid red";
        errors[1] = 1;

    }else if(!pattern.test(emailValue)){
        emailErr.innerHTML = "Please Enter Valid Emial address";
        emailErr.setAttribute('class',"alert-danger show");
        email.style.border = "3px solid red";
        errors[1] = 1;
    }
    else{
        emailErr.innerHTML = "";
        emailErr.setAttribute('class',"alert-success show");
        email.style.border = "3px solid green";
        errors[1] = 0;
    }

}

function passwordCheck(passValue){

    if(passValue.length < 1){
        passErr.innerHTML = "Password Can not be empty";
        passErr.setAttribute('class',"alert-danger show");
        pass.style.border = "3px solid red";
        errors[2] = 1;
    }
    else if(passValue.length < 4){
        passErr.innerHTML = "Password must be at least 4 characters";
        passErr.setAttribute('class',"alert-danger show");
        pass.style.border = "3px solid red";
        errors[2] = 1;
    } 
    else{
        passErr.innerHTML = "";
        passErr.setAttribute('class',"alert-success show");
        pass.style.border = "3px solid green";
        errors[2] = 0;
    }

}
function cpasswordCheck(cpassValue){

    if(cpassValue.length < 4){
        cPassErr.innerHTML = "Confirm Password must be at least 4 characters";
        cPassErr.setAttribute('class',"alert-danger show");
        cpass.style.border = "3px solid red";
        errors[3] = 1;
    }
    else if(cpassValue !== pass.value){
        cPassErr.innerHTML = "Both Password must be Same";
        cPassErr.setAttribute('class',"alert-danger show");
        cpass.style.border = "3px solid red";
        errors[3] = 1;
    }
    else{
        cPassErr.innerHTML = "";
        cPassErr.setAttribute('class',"alert-success show");
        cpass.style.border = "3px solid green";
        errors[3] = 0;
    }

}
form.addEventListener('submit',function(e){
    e.preventDefault();
   
    checkUsername(username.value);
    checkEmail(email.value);
    passwordCheck(pass.value);
    cpasswordCheck(cpass.value);

    if(errors[0]+errors[1]+errors[2]+errors[3] == 0){
        form.submit();
    }

});




