var uname=prompt("Enter Your Username...")
function displAlert()
{

}
function validationuser()
{

     var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var pass = document.getElementById("pass").value;
    var cnfpass = document.getElementById("cnfpass").value;

      if(firstname!='')
      {

          if(lastname!='')
            {
                if(dob!='')
                {
                    if(email!='')
                    {
                      if(mobile!='')
                      {
                        if(pass!='')
                        {
                            if(cnfpass!='')
                            {
                                if(pass!=cnfpass)
                                    {
                                        alert("Password doesn't match !!");
                                    }
                                else
                                {
                                    alert("Logged in successfully as..." + uname);
                                    window.location.href = "welcomescreen.html";
                                }
                            }
                        }
                        else
                        {
                            alert("Enter Password...");
                        }
                      }
                      else
                      {
                        alert("Enter Mobile Number...");
                      }
                    }
                    else
                    {
                        alert("Enter Email-id..")
                    }
                    
                }
                else
                {
                    alert("Enter Date of Birth...")
                }
            }
            else
            {
                alert("Enter Last Name...")
            }  

        }
        else
        {
            alert("Enter First Name...")
        }

      
}