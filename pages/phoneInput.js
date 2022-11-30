import PhoneInput from "../views/PhoneInput";

let left = document.getElementById("left");

let input = document.createElement("input");
input.type = "text";

left.appendChild(input);
new PhoneInput(input);