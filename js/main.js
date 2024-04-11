document.addEventListener("DOMContentLoaded", () => {
  const passwordInputs = document.querySelectorAll("input[type='password']");

  passwordInputs.forEach((input) => {
    let eye = input.nextElementSibling;

    if (eye) {
      eye.addEventListener("click", function () {
        let show = eye.querySelector(".show");
        let hidden = eye.querySelector(".hidden");
        let type =
          input.getAttribute("type") === "password" ? "text" : "password";
        input.setAttribute("type", type);

        if (type == "password") {
          show.style.display = "none";
          hidden.style.display = "flex";
        } else {
          hidden.style.display = "none";
          show.style.display = "flex";
        }
      });
    }
  });
});