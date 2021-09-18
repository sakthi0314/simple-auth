axios.defaults.withCredentails = true

const form = document.getElementById("form")
const email = document.getElementById("email")
const password = document.getElementById("password")

form.addEventListener("submit", e => {
  e.preventDefault()

  const creds = {
    email: email.value,
    password: password.value,
  }

  axios.post("/login", creds).then(data => {
    console.log(data)
  })
})
