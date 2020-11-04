document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const type = document.getElementById("transaction-type");
    const expense = {
      date: document.getElementById("transaction-date").value, 
      type: type.options[type.selectedIndex].text, 
      location: document.getElementById("location").value, 
      description: document.getElementById("description").value, 
      amount: document.getElementById("amount").value
    }

    const tableRow = createTableRow(expense);
    
    const deleteBtn = createDeleteButton(tableRow);
    tableRow.appendChild(deleteBtn);

    document.getElementById("form").reset();

    return false;
});

function createDeleteButton(row) {
  const button = document.createElement("button");
  button.textContent = "Delete";
  button.addEventListener("click", function (e) {
    row.remove();
  });

  return button;
}

function createTableRow(expense) {
  const tbody = document.getElementById("body");
  const row = document.createElement("tr");

  const expenseKeys = Object.keys(expense);
  for (let i = 0; i < expenseKeys.length; i++){
    const key = expenseKeys[i];

    const tdata = document.createElement("td");
    const text = document.createTextNode(expense[key]);
    tdata.appendChild(text);
    row.appendChild(tdata);
    tbody.appendChild(row);
  }

  return row;
}