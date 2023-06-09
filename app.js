const btnSubmit = document.getElementById("submit");

  btnSubmit.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
      window.location.href = 'https://codebymuzammil.netlify.app/';
    } else {
      alert("Invalid username or password");
    }
  });