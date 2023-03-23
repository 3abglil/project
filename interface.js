// var form = document.forms[0];
// var username = document.getElementById("username-field");
// var password = document.getElementById("password-field");

// form.addEventListener("submit",function(e)
// {

// var username_err = document.getElementById("user-err");
// var password_err = document.getElementById("pass-err");
// var u_val = username.value;
// var p_val = password.value;


// console.log("dkhlt func");
// if(u_val== '' )
//  {
// username_err.innerText= ("invalid username (empty value) , please try again");   
// console.log("condition 1 ");
// e.preventDefault();
//  }
//  else if (u_val.length < 8 )
//  {
//     username_err.innerText= ("invalid username (very short) , please enter more than 8 characters"); 
//     console.log("condition 2 ");
//     e.preventDefault();
//  }

//  if(p_val== '' )
//  {
// password_err.innerText= ("invalid password (empty value) , please try again");   
// console.log("condition 3 ");
// e.preventDefault();
//  }
//  else if (p_val.length < 8 )
//  {
//     password_err.innerText= ("invalid password (very short) , please enter more than 8 characters"); 
//     console.log("condition 4 ");
//     e.preventDefault();
//  }
 
 
// });
function validate(form)
{
  var fail = '';
   
        fail += validate_p(form.password.value);
        fail += validate_u(form.username.value);
        if (fail == ''){

           return true;
        }
        else 
            return false;
}
function validate_p(field)
{
   if (field == '') {
      document.getElementById('per').innerText = 'invalid password';
      return 'Yyy';
  }
  else{ 
  return '';
  }
}
function validate_u(field)
{
   if (field == '') {
      document.getElementById('uer').innerText = 'invalid username';
      return 'Yyy';
  }
  else{ 
  return '';
  }
}






