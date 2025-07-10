const roleText = document.getElementById("animated-role");
const roles = ["Front-End Developer", "BSCS Student", "UI/UX Enthusiast"];
let i = 0, j = 0, isDeleting = false;

function typeRole() {
  let current = roles[i];
  roleText.textContent = current.substring(0, j);
  if (!isDeleting && j < current.length) {
    j++;
    setTimeout(typeRole, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(typeRole, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % roles.length;
    setTimeout(typeRole, 1000);
  }
}
typeRole();

function toggleTheme() {
  document.body.classList.toggle("dark");
}
