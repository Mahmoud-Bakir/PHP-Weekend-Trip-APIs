const btn=document.getElementById("submit_details")
btn.addEventListener("click",signup)
const password_err=document.getElementById("perr")
const email_err=document.getElementById("emerr")


function signup(){
password_err.innerHTML=""
email_err.innerHTML=""
const email=document.getElementById("email").value
console.log(email)
const password=document.getElementById("password").value
console.log(password)
const data = new FormData();
data.append('email',email)
data.append('password',password)
if(isValidEmail(email)){
  if(isValidPassword(password)){
    axios.post("http://localhost/PHP-Weekend-Trip-APIs/valid.php",data)
    .then((result)=>{
    if (result.data.status=="failed")
    email_err.innerHTML= "email already exists"
    })
   .catch((err) => {
    console.error(err);
   
  });
 }else password_err.innerHTML="your password should contain 8 characters minimum, one special character minimum, at least one upper case letter"
}else email_err.innerHTML="Make sure of the validate format of an email"

}
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);}

  function isValidPassword(password) {
    const emailRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return emailRegex.test(password);}





const btn2=document.getElementById("submit_sort")
btn2.addEventListener("click",sorting)

function sorting(){
    const list=document.getElementById("list").value
    const res_sorted=document.getElementById("res_sorted")
    console.log(list)
    axios.get("http://localhost/PHP-Weekend-Trip-APIs/sort.php",{params:{
      "list":list
    }}).then((result)=>{ 
      console.log(result.data.status)
      res_sorted.innerHTML=`Result= ${result.data.status}`


    })
  
}
    
