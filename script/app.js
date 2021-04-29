window.addEventListener("load", () => {
  const taskss = [
    {
      title: "Купить дом",
      date: new Date(Date.now()).toLocaleString("ru", {
        month: "long",
        year: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }),
    },
    {
      title: "Купить дом",
      date: new Date(Date.now()).toLocaleString("ru", {
        month: "long",
        year: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }),
    },
  ];

  localStorage.setItem("tasks", JSON.stringify(taskss));

  let tasks = [];
  if (localStorage.getItem("tasks") != null) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  const todo = document.querySelector(".todo#todo");

  const form = todo.querySelector(".todo-form");
  const form_input = form.querySelector("input");
  const form_button = form.querySelector(".form__button");

  const todo_list = todo.querySelector(".todo-list");

  const changeTask = () => {};

  const createTask = () => {
    const task_item = document.createElement("li");
    task_item.classList.add("list-item", "todo-item");

    const task_item__title = document.createElement("p");
    task_item__title.classList.add("todo-item__title");
    task_item__title.textContent = form_input.value.trim();

    const task_item_control = document.createElement("div");
    task_item_control.classList.add("todo-item-control");

    const task_button__delete = document.createElement("a");
    const task_button__edit = document.createElement("a");

    task_button__delete.classList.add(
      "todo-item__button",
      "todo-item__button--delete"
    );
    task_button__edit.classList.add(
      "todo-item__button",
      "todo-item__button--success"
    );

    task_button__delete.textContent = "Удалить";
    task_button__edit.textContent = "Выполнено";

    task_button__delete.addEventListener("click", () => removeTask());
    task_button__delete.addEventListener("click", () => changeTask());

    task_item.insertAdjacentElement("afterbegin", task_item__title);
    task_item_control.insertAdjacentElement("afterbegin", task_button__edit);
    task_item_control.insertAdjacentElement("beforeend", task_button__delete);
    task_item.insertAdjacentElement("beforeend", task_item_control);

    todo_list.insertAdjacentElement("afterbegin", task_item);
  };

  form_button.addEventListener("click", (e) => {
    e.preventDefault();
    if (form_input.value.length >= 5) {
      createTask();
    } else {
      console.log("Слишком короткая задача!");
    }
    // Создать новый элемент
    // Добавить элемент в список
    // Записать элемент в localStorage
  });
});
