// Get The Element From HTML
let inputValue = document.querySelector(".add-text input");
let button = document.querySelector(".add-text button");
let createTasks = document.querySelector(".create-tasks");




// Input value Focus
inputValue.focus();



// When Button Element Click 
button.onclick = function () {

    if (inputValue.value === "") {
        return false;
    } else {
        // Call CreateItem Function
        createItem();

        // Remove input Value
        inputValue.value = "";

        // Add Class Done Function 
        CheckeOrNo();
    }
};


// Input Vlaue Function 
function createItem() {

    // Create Main container Div 
    let divContent = document.createElement("div");
    divContent.className = "content";

    // Create Div To Contain Images 
    let imageDiv = document.createElement("div");
    imageDiv.className = "image";

    // Create To Images TO Appen In Contain Images 
    let imageUnchecked = document.createElement("img");
    imageUnchecked.className = "unchecked";
    // add src To image
    imageUnchecked.src = "./unchecked.png";
    // Appen to imgaes Div 
    imageDiv.appendChild(imageUnchecked);

    // Create To Images TO Appen In Contain Images 
    let imageChecked = document.createElement("img");
    imageChecked.className = "checked";
    // add src To image
    imageChecked.src = "./checked.png";
    // Appen to imgaes Div 
    imageDiv.appendChild(imageChecked);

    // appen Contain Images TO Div Contain 
    divContent.appendChild(imageDiv);

    // Create Span ELement To Hold h2 Header
    let span = document.createElement("span");
    span.className = "task-name";

    // Create Span Text Node 
    let spanText = document.createTextNode(inputValue.value);

    // Add spanText In Span 
    span.appendChild(spanText);

    // Append Span to Div Contain 
    divContent.appendChild(span)

    // Create Paragraph (p)
    let p = document.createElement("p");
    p.className = "mark";

    // create Para Text Node 
    let pText = document.createTextNode("\u00d7");

    // Appen PText To Paragraph (p)
    p.appendChild(pText);

    // Appen Paragraph (p) TO Div Contain
    divContent.appendChild(p);

    // Append Div Contain To Main Div 
    createTasks.appendChild(divContent);

    // Add Class Done Function 
    CheckeOrNo();

    // Remove Element Function 
    removeFun();

    // Save Data Function
    saveData();
};



// Checked Function To Add Class Done
function CheckeOrNo() {

    // // When span Element Click 
    createTasks.addEventListener('click', function (e) {
        if (e.target.classList.contains("done")) {
            // remove Class done
            e.target.classList.remove("done");

            // remove Class to-check 
            (e.target.previousSibling.lastElementChild).classList.remove("to-check");

            // Save Data Function
            saveData();

        } else {
            // Add Class done 
            e.target.classList.add("done");

            // Add Class to-check 
            (e.target.previousSibling.lastElementChild).classList.add("to-check");


            // Save Data Function
            saveData();
        };

    });

    // // When Image Element Click 
    createTasks.addEventListener('click', function (e) {
        if (e.target.classList.contains("to-check")) {
            // remove Class done
            e.target.classList.remove("to-check");

            // remove Class to-check 
            (e.target.parentElement.nextElementSibling).classList.remove("done");

            // Save Data Function
            saveData();

        } else {
            // Add Class done 
            e.target.classList.add("to-check");

            // Add Class to-check 
            (e.target.parentElement.nextElementSibling).classList.add("done");


            // Save Data Function
            saveData();
        };

    });


};



// Remove Element Function 
function removeFun() {
    // Check class name 
    createTasks.addEventListener("click", function (e) {
        if (e.target.classList.contains("mark")) {
            e.target.parentElement.remove();

            // Save Data Function
            saveData();

        }
    });
};


// Add Itme To Local Storage To Save Date 
function saveData() {
    window.localStorage.setItem("data", createTasks.innerHTML);
};


// GEt Data From Local Storage
function getData() {
    if (window.localStorage.getItem("data")) {
        createTasks.innerHTML = window.localStorage.getItem("data");

        // Checked Function To Add Class Done
        CheckeOrNo();

        // Remove Element Function 
        removeFun();
    };
};

getData();
