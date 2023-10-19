const selected = document.querySelector(".selected");
const optionscontainer = document.querySelector(".options-container");

const optionslist = document.querySelectorAll(".options");

selected.addEventListener("click" , () => {
    optionscontainer.classList.toggle("active");
});

optionslist.forEach(o => {
    o.addEventListener("click" , () => {
        selected.innerHTML = o.querySelector("lable").innerHTML;
        optionscontainer.classList.remove("active");


    });

});