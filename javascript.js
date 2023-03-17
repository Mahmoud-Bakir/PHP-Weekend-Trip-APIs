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
      if(result.data.status=="failed"){
      res_sorted.innerHTML=`Make sure to put a list of numbers seperated by commas`}
      else{res_sorted.innerHTML=`Result = ${result.data.status}`
      }


    })
  
}
const btn3=document.getElementById("submit_palindrome")
btn3.addEventListener("click",palindrome)
function palindrome(){
  const word=document.getElementById("palindrome").value
  const res_palindromed=document.getElementById("res_palindromed")
  console.log(word)
if(!(word.includes(" "))){
     axios.get("http://localhost/PHP-Weekend-Trip-APIs/palindrome.php",{params:{
    "palindrome":word
    }}).then((result)=>{ 
    console.log(result.data.status)
    res_palindromed.innerHTML=`Result:${result.data.value}, ${word} ${result.data.status}`})}
    else res_palindromed.innerHTML="please enter a valid word"
}

const btn4=document.getElementById("submit_flipped")
btn4.addEventListener("click",flip)
function flip(){
  const word=document.getElementById("flip").value
  const res_palindromed=document.getElementById("res_flipped")
  console.log(word)
if(!(word.includes(" "))){
     axios.get("http://localhost/PHP-Weekend-Trip-APIs/flip.php",{params:{
    "flip":word
    }}).then((result)=>{ 
    console.log(result.data.status)
    res_palindromed.innerHTML=`Result: ${result.data.status}`})}
    else res_palindromed.innerHTML="please enter a valid word"
}

const btn5=document.getElementById("submit_date")
btn5.addEventListener("click",date)
function date(){
  const date=document.getElementById("date").value
  const res_date=document.getElementById("res_date")
  if(!(date.includes(" ")) && date!=""){
    data=new FormData()
    data.append("date",date)
    axios.post("http://localhost/PHP-Weekend-Trip-APIs/date.php",data).then((res)=> {
      res_date.innerHTML=`your age is : ${res.data.status}`
      console.log(res.data.status)
  

    })
  }else (res_date.innerHTML="please enter a valid date")
}

const addr=document.getElementById("add")
console.log(addr)
const btn6=document.getElementById("submit_IP")
btn6.addEventListener("click",add)
function add(){
  data = new FormData();
  axios.post("http://localhost/PHP-Weekend-Trip-APIs/address.php",data).then((res)=> {
    addr.innerHTML=`You IP address is ${res.data.status}`
    console.log(res.data.status)
})
  

}


    
