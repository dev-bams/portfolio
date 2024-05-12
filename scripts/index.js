secret = document.getElementById("secret");

function changeSecretText() {
  console.log(secret);
  if (secret.innerText === "SECRET SAUCE") {
    secret.innerText = "👀";
  }
}

secret.addEventListener("click", () => {
  changeSecretText();
});
