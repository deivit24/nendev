import "./style.css";
import van from "vanjs-core";

const { div, h1 } = van.tags;
const app = document.querySelector("#app");

const Main = () => {
  return div(
    h1("nendev")
  );
};

van.add(app, Main());
