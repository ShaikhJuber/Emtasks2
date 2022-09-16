function myFunction() {
  window.location.href = "./sign.html";
}

function logInAlert() {
  alert("Congrats ! Your Log In Successfull !");
}

const forms = document.querySelector(".form"),
  pwShowHide = document.querySelectorAll(".hidepass");

//console.log(forms,pwShowHide);
pwShowHide.forEach((showPass) => {
  showPass.addEventListener("click", () => {
    let pwFeild =
      showPass.parentElement.parentElement.querySelectorAll(".password");

    pwFeild.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        showPass.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      showPass.classList.replace("bx-show", "bx-hide");
    });
  });
});
