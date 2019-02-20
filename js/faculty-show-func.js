/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function show(x) {
    var child = x.children;
    var childHeight = child[1].offsetHeight;
    var height = (42 + childHeight + 25) + "px";
    if (x.style.height === height || x.style.height === "auto") {
        x.style.height = "42px";
        x.style.transition = "all 0.5s";
    } else {
        x.style.height = height;
        x.style.transition = "all 0.5s";
    }
}

