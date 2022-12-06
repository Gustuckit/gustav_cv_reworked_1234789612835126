log = console.log;

/* fetch("/data.json")
.then(function(response){
    return response.json();
}) */

fetch("./json/data.json").then(function(response) {
    return response.json();
    log("resolved", response);
}).catch((err) => {
    log("rejected", err);
})



.then(function(periods){
    let placeholder = document.querySelector("#sectionHolder");
    let out = "";
    for(let period of periods){
        out += `
            <section class="${"period period" + period.id}">
                <td">${period.experience}</td>
            </section>
            <section class="${"descriptionMain desc" + period.id}">
                <td">${period.description}</td>
            </section>
        `;
    }
    placeholder.innerHTML = out;
    move();
}).catch((err) => {
    log("rejected", err);
})

/* This code brings the children out of the container sectionHolder and places them as children under gridMain, this is necessary because my grid configuration requires it's grid areas to be children of gridMain */

var newParent = document.getElementById('gridMain');
var oldParent = document.getElementById('sectionHolder');

function move() {
  while (oldParent.childNodes.length > 0) {
    newParent.appendChild(oldParent.childNodes[0]);
  }
}