// function samir(field1,field2) {
//     if(field1==''||field2==''){
//      document.getElementById('sname').innerText = '*';
//      document.getElementById('slname').innerText = '*';
 
//     } else{
//      return "";
//     }
//  }

function validate (form)
{
         fail = '';
        //  fail += samir(form.fname.value,form.lname.value);
        fail += validate_fname(form.fname.value);
        fail += validate_lname(form.lname.value);
        fail += validate_u(form.username.value);
        fail += validate_password(form.password.value , form.passconf.value);
        fail += validateDOB(form.dob.value);
       // fail += validate_password(form.password.value, form.passconf.value);
        if (fail == '')
            return true;
        else 
            return false;
        
}
function validate_u(field) {
    if (field == '') {
        document.getElementById('userspan').innerText = 'You Must Enter a username';
        return 'jjj';
    }
    else{
        return '';
    }
}
    
    function validate_fname(field) {
        if (field == '') {
            document.getElementById('fname-err').innerText = 'You Must Enter a firstname.';
            return 'jjj';
        }
        else{
            return '';
        }
    }
    function validate_lname(field) 
    {
        if (field == '') {
            document.getElementById('lname-err').innerText = 'You Must Enter a lastname.';
            return 'Yyy';
        }
        else{ 
        return '';
        }
    }
    

    function validate_password(field1, field2) {
            if (field1 == '' || field2 == '') {
                document.getElementById('per').innerText = 'You Must Enter a Password.';
                document.getElementById('cer').innerText = 'You Must Enter a Password.';
                return 'Yhh';
            }
            else if (field1 != field2) {
                document.getElementById('cer').innerText = 'You must Enter a matching Password.';
                return 'Ydd';
            }
            else
                return '';
        }

        function validateDOB(field) {
    let dob1 = new Date(field);
    let diff_ms = Date.now() - dob1.getTime();
    let age_dt = new Date(diff_ms);
    if (Math.abs(age_dt.getUTCFullYear() - 1970) >= 18)
        return '';
    else {
        document.getElementById('doberr').innerText = 'You Must be older than 18 years.';
        return 'fff';
    }
}




    // function validate_password(field1, field2) {
    //         if (field1 == '' || field2 == '') {
    //             document.getElementById('pass-err').innerText = 'You Must Enter a Password.';
    //             document.getElementById('c-err').innerText = 'You Must Enter a Password.';
    //             return 'You Must Enter a Password.';
    //         }
    //         else if (field1 != field2) {
    //             document.getElementById('pass-err').innerText = 'You must Enter a matching Password.';
    //             return 'You must Enter a matching Password.';
    //         }
    //         else
    //             return '';
    //     }
    


