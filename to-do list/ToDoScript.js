let input = document.querySelector("#task");
let btn = document.querySelector("#addTask");
let list = document.querySelector("#listTask");

// console.log(input.value);

btn.addEventListener("click", () => {
    // console.log(input.value);
    let task = input.value;

    if (task === "")
        // console.log("No task added!");
        alert("No task Added!");
    else {
        let li = document.createElement("li");
        li.innerHTML = task;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "X";
        li.appendChild(span); 
    } 
});

list.addEventListener("click", (e) => {
    // console.log(e);
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();    // removes the task
    }
});