import util from "./util";

let version = 1;
console.log("load index", util());

let root = document.getElementById("root");
let div1 = document.createElement("div");
div1.innerText = "12 wait for update";
root.appendChild(div1);

if (module.hot) {
  var registerHotUpdate;
  registerHotUpdate = function () {
    // module.hot.accept(['./App', './router'], () => {
    module.hot.accept(["./util"], () => {
      global.lastHotUpdateTime = Date.now();
      console.log("***** accept App hot update 1*******", version, util());
      div1.innerText = util();
      // let App = require('./App').default;
      // ReactDOM.render(<App store={store} />, document.getElementById('root'));
      // console.log('***** accept App hot update 2*******');
    });
  };
  registerHotUpdate();
}
