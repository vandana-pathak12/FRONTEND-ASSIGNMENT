const stepsList = document.getElementById("steps");
const startBtn = document.getElementById("startBtn");
function step1() {
    return new Promise(resolve => {
        highlight("Running Step 1...");
        setTimeout(() => resolve("Step 1 done"), 1000);
    });
}

function step2() {
    return new Promise(resolve => {
        highlight("Running Step 2...");
        setTimeout(() => resolve("Step 2 done"), 1000);
    });
}

function step3() {
    return new Promise(resolve => {
        highlight("Running Step 3...");
        setTimeout(() => resolve("Step 3 done"), 1000);
    });
}

function highlight(text) {
    const li = document.createElement("li");
    li.textContent = text;
    li.classList.add("bold");
    stepsList.appendChild(li);
}
async function runSteps() {
    stepsList.innerHTML = ""; 

    const s1 = await step1();
    addStep(s1);

    const s2 = await step2();
    addStep(s2);

    const s3 = await step3();
    addStep(s3);
}
function addStep(text) {
    const li = document.createElement("li");
    li.textContent = text;
    stepsList.appendChild(li);
}

startBtn.addEventListener("click", runSteps);
