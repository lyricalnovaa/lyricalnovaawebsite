document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  const alertModal = document.getElementById("alert-modal");
  const alertText = document.getElementById("alert-text");
  const alertOk = document.getElementById("alert-ok");

  const showAlert = (msg, callback) => {
    alertText.textContent = msg;
    alertModal.classList.remove("hidden");
    alertOk.onclick = () => {
      alertModal.classList.add("hidden");
      if (callback) callback();
    };
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const artistID = document.getElementById("login-id").value.trim();
    const password = document.getElementById("login-pass").value.trim();

    const users = JSON.parse(localStorage.getItem("users") || "{}");

    if (!users[artistID] || users[artistID].password !== password) {
      return showAlert("Invalid Artist ID or Password.");
    }

    localStorage.setItem("loggedInUser", artistID);

    showAlert("Login successful! Redirecting...", () => {
      window.location.href = "home.html";
    });
  });
});
