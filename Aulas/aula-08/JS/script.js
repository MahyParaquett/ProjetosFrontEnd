function salvaDados() {
  const email = document.querySelector("#email");
  const senha = document.querySelector("#passwd");
  const emailHelper = document.querySelector(".emailHelper");

  if (email.value === " " || passwd.value === "") {
    alert("Login ou senha inválidos");
    emailHelper.style.display = "block";
    return;
  } else {
    const user = {
      email: email.value,
      senha: passwd.value,
    };
    localStorage.setItem("user", JSON.stringify(user));
    emailHelper.style.display = "none";
    email.value = "";
    passwd.value = "";
  }

  console.log("Email: ", email.value);
  console.log("Senha: ", passwd.value);
}
