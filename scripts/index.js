secret = document.getElementById("secret");

function changeSecretText() {
  if (secret.innerText === "SECRET SAUCE") {
    secret.innerText = "👀";
  }
}

secret.addEventListener("click", () => {
  changeSecretText();
});
