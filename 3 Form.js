
function validate(){

    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var cpassword = document.getElementById('cpassword').value

        
        checkusername(username)
        checkemail(email)
        checkpassword(password)
        checkpasswordmatch(password , cpassword)

}



     function checkusername(username){

        if(username.length>7){
            document.getElementById('username').classList.add('success')
            document.getElementById('username').classList.replace('error' , 'success')
            document.getElementById('user_error').innerHTML=''
        }
        else{
            
            document.getElementById('username').classList.add('error')
            document.getElementById('user_error').innerText='user name should be greater than 8'
        }
     }


     function checkemail(email){

          

        if(email.length>8 && email.includes('@gmail.com'))
        {
            document.getElementById('email').classList.add('success')
            document.getElementById('email').classList.replace('error' , 'success')
            document.getElementById('email_error').innerHTML=''
        }
        else{
            
            document.getElementById('email').classList.add('error')
            document.getElementById('email_error').innerText='invalid email'
        }
     }


     
     function checkpassword(password){

          

        if(password.length>7 && password.includes('.'))
        {
            document.getElementById('password').classList.add('success')
            document.getElementById('password').classList.replace('error' , 'success')
            document.getElementById('password_error').innerHTML=''
        }
        else{
            
            document.getElementById('password').classList.add('error')
            document.getElementById('password_error').innerText='invalid password'
        }
     }


 function checkpasswordmatch(password , cpassword){

    if(cpassword ==password && cpassword!=''){

        document.getElementById('cpassword').classList.add('success')
        document.getElementById('cpassword').classList.replace('error' , 'success')
        document.getElementById('cpassword_error').innerHTML=''

    }
    else{
 
        document.getElementById('cpassword').classList.add('error')
        document.getElementById('cpassword_error').innerText='password not matched'

    }
 }

















