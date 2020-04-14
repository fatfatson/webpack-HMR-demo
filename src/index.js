import util from "./util";
import styles from "./main.less";

let version = 1;
console.log("load index", util());

let root = document.getElementById("root")!;
let div1 = document.createElement("div");
div1.innerText = "123 wait for update";
div1.className = styles.title;
root.appendChild(div1);

let div2 = document.createElement("div");
div2.innerText = "prove the page is not refresh";
root.appendChild(div2);
let i = 0;
setInterval(() => {
  div2.innerText = `prove the page is not refresh: ${i++}`;
}, 1000);

if (module.hot) {
  var registerHotUpdate;
  registerHotUpdate = function () {
    module.hot.accept(["./util", "./main.less"], () => {
      global.lastHotUpdateTime = Date.now();
      console.log("***** accept App hot update 1*******", version, util());
      div1.innerText = util();
    });
  };
  registerHotUpdate();
}
