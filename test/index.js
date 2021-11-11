// const mainHeading = document.elementSelector("h1");
const { state: headingState, on: onHeading } = StateFullElements("h1,h1 *");

const { state: paraState } = StateFullElements("p,p *");

window.addEventListener("mousemove", (e) => {
  headingState({ x: e.x, y: e.y });
});

onHeading("update", paraState);
