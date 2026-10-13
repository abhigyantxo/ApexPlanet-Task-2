// CONTACT FORM VALIDATION
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || message === "") {
        formFeedback.textContent = "Please fill in all fields.";
        formFeedback.style.color = "#b34c42";
        return;
    }

    if (!emailPattern.test(email)) {
        formFeedback.textContent = "Please enter a valid email address.";
        formFeedback.style.color = "#b34c42";
        return;
    }

    formFeedback.textContent =
        "Form validated successfully! (Demo only — no message was sent.)";
    formFeedback.style.color = "#486b50";

    contactForm.reset();
});


// DYNAMIC TO-DO LIST
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const emptyMessage = document.getElementById("emptyMessage");

function updateTaskCount() {
    const totalTasks = taskList.children.length;
    taskCount.textContent =
        totalTasks + (totalTasks === 1 ? " task" : " tasks");

    emptyMessage.style.display =
        totalTasks === 0 ? "block" : "none";
}

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const listItem = document.createElement("li");
    listItem.className = "task-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("aria-label", "Mark task as complete");

    const taskName = document.createElement("span");
    taskName.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";

    checkbox.addEventListener("change", function () {
        listItem.classList.toggle("completed", checkbox.checked);
    });

    deleteButton.addEventListener("click", function () {
        listItem.remove();
        updateTaskCount();
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(taskName);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    taskInput.value = "";
    taskInput.focus();

    updateTaskCount();
});

updateTaskCount();