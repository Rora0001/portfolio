//gør så projekterne på projektsiden kommer frem en ad gangen
document.addEventListener("DOMContentLoaded", async function () {
  const elements = document.querySelectorAll(".projekter div");

  async function showText(index) {
    if (index < elements.length) {
      elements[index].classList.add("active");
      await new Promise((resolve) => setTimeout(resolve, 500)); //  (500ms = 0.5s)
      await showText(index + 1);
    }
  }

  await showText(0);
});
