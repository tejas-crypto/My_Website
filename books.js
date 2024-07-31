window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const website = document.getElementById("website");

  // Check if all resources have finished loading
  if (document.readyState === "complete") {
    // Hide loading screen and display website
    loadingScreen.style.display = "none";
    website.style.display = "block";
  }
});
