secret = document.getElementById("secret");

function changeSecretText() {
  console.log(secret);
  if (secret.innerText === "SOURCE CODE") {
    secret.innerText = "👀";
  }
}

secret.addEventListener("click", () => {
  changeSecretText();
});
