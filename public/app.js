axios.defaults.withCredentails = true

const form = document.getElementById("form")
const email = document.getElementById("email")
const password = document.getElementById("password")
const title = document.getElementById("title")

form.addEventListener("submit", e => {
  e.preventDefault()

  const creds = {
    email: email.value,
    password: password.value,
  }

  axios.post("/login", creds).then(res => {
    title.innerText = res.data.message

    if (res.data.message) {
      form.style.display = "none"
    }
  })
})
