const lengthSlider = document.getElementById('length');
const lenVal = document.getElementById('lenVal');
const passwordEl = document.getElementById('password');
const copiedMsg = document.getElementById('copied');
const strengthText = document.getElementById('strength');

function updateLength() {
  lenVal.textContent = lengthSlider.value;
}

function generate() {
  const length = +lengthSlider.value;
  const hasUpper = document.getElementById('uppercase').checked;
  const hasLower = document.getElementById('lowercase').checked;
  const hasNumber = document.getElementById('numbers').checked;
  const hasSymbol = document.getElementById('symbols').checked;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "!@#$%^&*()_+[]{}|;:,.<>?";

  let chars = "";
  if (hasUpper) chars += upper;
  if (hasLower) chars += lower;
  if (hasNumber) chars += number;
  if (hasSymbol) chars += symbol;

  if (!chars) {
    passwordEl.value = "Please select at least one option.";
    return;
  }

  let pwd = "";
  for (let i = 0; i < length; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  passwordEl.value = pwd;
  showStrength(pwd);
}

function copy() {
  if (passwordEl.value === "") return;
  navigator.clipboard.writeText(passwordEl.value);
  copiedMsg.style.display = "block";
  setTimeout(() => copiedMsg.style.display = "none", 1500);
}

function showStrength(password) {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const levels = ["Very Weak", "Weak", "Medium", "Strong", "Very Strong"];
  strengthText.textContent = `Strength: ${levels[score - 1] || "Very Weak"}`;
}

updateLength();
