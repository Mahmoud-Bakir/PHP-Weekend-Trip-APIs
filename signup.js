const btn=document.getElementById("submit")
btn.addEventListener("click",signup)
const perr=document.getElementById("perr")
const emerr=document.getElementById("emerr")



function signup(){
perr.innerHTML=""
emerr.innerHTML=""
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
    console.log(result)
    if (result.data.status=="failed")
    emerr.innerHTML= "email already exists"
    })
   .catch((err) => {
    console.error(err);
   
  });
 }else perr.innerHTML="your password should contain 8 characters minimum, one special character minimum, at least one upper case letter"
}else emerr.innerHTML="Make sure of the validate format of an email"

}
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);}

  function isValidPassword(password) {
    const emailRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return emailRegex.test(password);}