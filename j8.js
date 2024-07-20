const h = document.getElementById("h112"); // Get the HTML element

function getpassword() {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=<>?:;?/.,";
  let password = "";
  for (let i = 0; i < 40; i++) {
    const random = Math.floor(Math.random() * characters.length);
    password += characters[random];
  }
  h.textContent = password; // Generate and display password when button is clicked
}
