function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    const list = document.getElementById("taskList");
  
    // Create elements
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taskText;
  
    const completeBtn = document.createElement("input");
    completeBtn.type = "checkbox";
    completeBtn.addEventListener("change", () => {
      listItem.classList.toggle("completed");
    });
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => list.removeChild(listItem);
  
    // Assemble list item
    listItem.appendChild(completeBtn);
    listItem.appendChild(span);
    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);
  
    // Clear input
    input.value = "";
  }
  