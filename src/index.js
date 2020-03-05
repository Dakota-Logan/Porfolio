import router from "./scripts/router.js";
import render from "./scripts/renderer.js"

//TODO Play loading animation while router delegates the callback to get the data;
window.onload = router.init();