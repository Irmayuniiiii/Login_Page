document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email === "irmayunisimanullang@gmail.com" && password === "12345678") {
  alert("Login berhasil!");
  } else {
  alert("Email atau password salah. Silakan coba lagi.");
  }
  });
  