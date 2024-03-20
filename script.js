const pressed = [];
const secretCode = "caio";

window.addEventListener("keyup", (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes(secretCode)) {
    const h1 = document.createElement("h1");
    h1.textContent = "Você achou o segredo!";
    document.querySelector(".central-div").innerHTML = "";
    document.querySelector(".central-div").appendChild(h1);
  }
});
