function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "member@gym.com" && password === "1234") {
    localStorage.setItem("member", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
}
