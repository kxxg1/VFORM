let form = document.querySelector('form')
//let userWrapper = document.querySelector('.users')


let users = []
console.log(users)

form.addEventListener("submit", (event) => {
  event.preventDefault()
  let target = event.target
 // console.log(target)
  let userName = target.querySelector("#user-name").value
  let userEmail = target.querySelector("#user-email").value
  let userDate = target.querySelector("#user-date").value


  let chkbox = document.querySelectorAll("[type=checkbox]")
  
  let month = ''

  for (let i = 0; i < chkbox.length; i++) {
    const element = chkbox[i];
    if (element.checked) {
      //console.log(element.value)
      month = element.value
    }
  }

  //if (userName == "" || userEmail == "") {
  if (userName == "" || userName.length < 4) {
      alert("Please enter a name and email")
  } else {

       let newUser = {
        userName: userName,
        userEmail: userEmail,
        userDate: userDate,
        userMonth: month

       }
       users.push(newUser)
  }
  
 // userWrapper.innerHTML = ''

  console.log(users)
  users.map((users, index) => {
    let html = `
    <div class="user">
        <p>Name: ${user.userName}</p>
        <p>${user.userEmail}</p>
        <p>${user.userDate}</p>
        <p>${user.userMonth}</p>
     
        <button>Click Me</button> 
    </div>
    `
    userWrapper.innerHTML += html
})
