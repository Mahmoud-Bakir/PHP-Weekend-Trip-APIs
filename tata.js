console.log("a7a")
const email=document.getElementById("email").value
console.log(email)
const password=document.getElementById("password").value
const btn=document.getElementById("submit")
btn.addEventListener("click",signup)

function signup(){
console.log("a7a")
const email=document.getElementById("email").value
console.log(email)
const password=document.getElementById("password").value
console.log(password)

const data = new FormData();
data.append('email',email)
data.append('password',password)
axios.post("http://localhost/PHP-Weekend-Trip-APIs/valid.php",data).then((result)=>{
    console.log(result)
})
}