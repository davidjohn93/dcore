// DATA STUDIO
const selected = document.querySelector(".task-form-field-placeholder");
const optionsContainer = document.querySelector(".task-form-field-options");

const optionsList = document.querySelectorAll(".task-form-field-option");

selected.addEventListener("click", () => {
	optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector(".task-form-field-option-label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});
