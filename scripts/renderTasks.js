import Task from "./models/task.js";

export default function renderTasks(tasksUl, liTemplate, inputTask, task) {
  const $inputTask = document.querySelector(inputTask);
  const $tasksUl = document.querySelector(tasksUl);
  const $liTemplate = document.querySelector(liTemplate);
  let newTask;

  !task ? (newTask = new Task($inputTask.value)) : (newTask = task);

  const liClone = $liTemplate.content.cloneNode(true);
  liClone.querySelector("li").setAttribute("data-id", newTask.id);
  liClone.querySelector("p").textContent = newTask.description;
  $tasksUl.appendChild(liClone);
  $inputTask.value = "";

  if (!task) {
    const arrayLocal = JSON.parse(localStorage.getItem("tasks")) || [];
    arrayLocal.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(arrayLocal));
  }
}
