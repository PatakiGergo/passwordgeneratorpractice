let letters = "";
const upper = "QWERTZUIOPASDFGHJKLYXCVBNM";
const special = ",.-*()=/%!+";
const numbers = "1234567890";
const abc = "wertzuiopasdfghjklyxcvbnm";

let placeholder = document.querySelector(".generated-code");

let upperselector = document.querySelector(".gombup");
let lowerselector = document.querySelector(".gomblow");
let numberselector = document.querySelector(".gombnum");
let specialselector = document.querySelector(".gombspec");
const strength = document.querySelector(".strength");
let lengthslider = document.querySelector(".slider");
let slideroutput = document.querySelector(".slider-value");
const copybutton = document.querySelector(".copybutton");
const timerSecond = document.querySelector(".seconds");
const timerdiv = document.querySelector(".counter");
const ownCharButton = document.querySelector(".own");
const doboz = document.querySelector(".checkboxdiv");
const addOwnText = document.querySelector(".text");
const ownlettersdiv = document.querySelector(".myownletters");
const textbox = document.querySelector(".textbox");
const startradio = document.querySelector(".start");
const endradio = document.querySelector(".end");

ownCharButton.addEventListener("change", function () {
  if (ownlettersdiv.classList.contains("hidden")) {
    ownlettersdiv.classList.remove("hidden");
  } else {
    ownlettersdiv.classList.add("hidden");
  }
});

const copying = function () {
  copytext = placeholder.textContent;
  navigator.clipboard.writeText(copytext);
};

copybutton.addEventListener("click", copying);

slideroutput.innerHTML = lengthslider.value;

lengthslider.oninput = function () {
  slideroutput.innerHTML = this.value;
  this.style.background = `linear-gradient(to right, #a4ffaf 0%, #a4ffaf ${
    ((this.value - this.min) / (this.max - this.min)) * 100
  }%, #DEE2E6 ${
    ((this.value - this.min) / (this.max - this.min)) * 100
  }%, #DEE2E6 100%)`;
};

let password = [];
upperselector.checked = true;
lowerselector.checked = true;

const generate = function () {
  let passwordlength = lengthslider.value;
  time = 11;
  timerdiv.style.opacity = 100;

  if (upperselector.checked) {
    letters += upper;
  }

  if (numberselector.checked) {
    letters += numbers;
  }

  if (specialselector.checked) {
    letters += special;
  }

  if (lowerselector.checked) {
    letters += abc;
  }

  for (i = 0; i < passwordlength; i++) {
    password.push(letters[Math.floor(Math.random() * letters.length)]);
  }

  let usertextinput = textbox.value;
  let endpw = "";

  if (ownCharButton.checked) {
    if (startradio.checked && usertextinput) {
      password.unshift(usertextinput);
      password.slice(0, passwordlength);
      placeholder.textContent = password.join("").slice(0, passwordlength);
    } else if (!startradio.checked && usertextinput) {
      password.slice();
      password.push(usertextinput);
      endpw =
        password
          .join("")
          .slice(0 + usertextinput.length, -usertextinput.length) +
        usertextinput;
      placeholder.textContent = endpw;
    } else if (!usertextinput) {
      placeholder.textContent = password.join("");
    }
  } else if (!ownCharButton.checked) {
    placeholder.textContent = password.join("");
  }
  password = [];
  letters = "";

  if (placeholder.textContent.length > 14) {
    strength.textContent = "Strength: Strong😎";
  } else if (
    placeholder.textContent.length > 7 &&
    placeholder.textContent.length < 14
  ) {
    strength.textContent = "Strength: Medium🤠";
  } else if (placeholder.textContent.length < 7) {
    strength.textContent = "Strength: Weak😭";
  }

  if (
    !upperselector.checked &&
    !numberselector.checked &&
    !specialselector.checked &&
    !lowerselector.checked
  ) {
    strength.textContent = "Waiting for input";
    placeholder.textContent = "Please select inputs";
  }
};

let time;

const generatingTimer = function () {
  time = 10;
  setInterval(function () {
    time--;
    timerSecond.textContent = time;
    if (time === 0) {
      generate();
      time = 11;
    }
  }, 1000);
};

let generalas = document
  .querySelector(".generator")
  .addEventListener("click", generate);
let resetting = document
  .querySelector(".generator")
  .addEventListener("click", generatingTimer());
