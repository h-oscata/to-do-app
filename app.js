import removeTask from "./scripts/removeTask.js";
import renderTasks from "./scripts/renderTasks.js";

const toDoForm = document.querySelector("#toDoForm");

document.addEventListener("DOMContentLoaded", () => {
  if (
    localStorage.getItem("tasks") &&
    JSON.parse(localStorage.getItem("tasks")).length > 0
  ) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));

    tasks.map((task) => {
      renderTasks(".tasks-ul", "#li-task", "#toDoForm input", task);
    });
  }

  removeTask(".btn-remove");
});

toDoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("#toDoForm input").value.trim() === ""
    ? alert("Task description cannot be just spaces.")
    : renderTasks(".tasks-ul", "#li-task", "#toDoForm input", false);
});
