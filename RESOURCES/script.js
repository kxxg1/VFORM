let form = document.querySelector('form')

console.log(form)

form.addEventListener("submit", (event) => {
  event.preventDefault()
  let target = event.target
  console.log(target)
  let userName = taget.querySelector("#user-name")
  let userNameValue = userName.value
})

