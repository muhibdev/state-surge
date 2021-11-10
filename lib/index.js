// const mainHeading = document.elementSelector("h1");
const mainHeading = document.elementSelectorAll("h1,p");

window.addEventListener("click", (e) => {
  mainHeading.destory();
  console.log(mainHeading);
});

window.addEventListener("mousemove", (e) => {
  mainHeading.state({ x: e.x, y: e.y });
  console.log(mainHeading.state());
});
