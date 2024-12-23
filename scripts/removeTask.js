export default function removeTask(removeBtn) {
  document.addEventListener("click", (e) => {
    if (e.target.matches(removeBtn)) {
      const li = e.target.parentNode;
      const arrayLocal = JSON.parse(localStorage.getItem("tasks"));
      const index = arrayLocal.findIndex(
        (task) => task.id === Number(li.dataset.id)
      );

      arrayLocal.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(arrayLocal));
      li.parentNode.removeChild(li);
    }
  });
}
