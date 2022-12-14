//I want to be able to select any box and when selected have it changes its width to 4px. I also want to be able to select a maximum of 5 boxes.


Note: 
function projects(){
    document.getElementById("demo").style.borderWidth = "4px"; // won't work because projects is a class
    document.getElementByClassName("projects").style.borderWidth = "4px"; //does not work for unknown reason
    document.querySelector(".projects").style.borderWidth = "4px"; // works only on first button where projects is an Id.
    document.querySelectorAll(".projects").style.borderWidth = "4px"; // does not work for unknown reason
}


//Solution 1: only works on 1st button where projects is an id
projects.addEventListener("click", function projects(button) {
if (x = true) {
    document.getElementById("projects").style.borderWidth = "4px";
    } 
    console.log(projects)
})
  
//Solution 2: does not work
document.getElementById("projects").addEventListener('click', function toggle(button))


//Solution 3: does not work.
let x = document.querySelectorAll(".projects");
i.addEventListener("click", function(e){
    .projects.classList.toggle("chosenBox")});
function x(event) {
    if (event.target.classList.matches("projects")) {
    const classes = projects.classList;
    let result = classes.add("chosenBox");
    projects.classList = result;
    }
    console.log("hello")
}

//Solution 4: does not work.
i.addEventListener("click")
if(event.target.classList.contains('projects')){
    event.target.classList.add('chosenBox')
        console.log("test")}
    

