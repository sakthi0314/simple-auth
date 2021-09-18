const form = document.getElementById("form")
const email = document.getElementById("email")
const password = document.getElementById("password")

form.addEventListener("submit", async e => {
  e.preventDefault()

  const creds = {
    email: email.value,
    password: password.value,
  }

  const apiData = await fetch("http://localhost:3001/login", {
    method: "POST",
    body: JSON.stringify(creds),
    credentials: "include", // added this part
    headers: {
      "Content-Type": "application/json",
    },
  })

  console.log(apiData.json().then(data => console.log(data)))
})
