const shareBtn = document.querySelector(".share-btn");

shareBtn.addEventListener("click", () => {
  const isOpen = shareBtn.getAttribute("aria-expanded") === "true";
  shareBtn.setAttribute("aria-expanded", String(!isOpen));
});
