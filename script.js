const submit = document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const tbody = document.getElementById("body");
    const row = document.createElement("tr");
    const date = document.getElementById("transaction-date").value;
    const type = document.getElementById("transaction-type");
    const selectedType = type.options[type.selectedIndex].text;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;
    const amount = document.getElementById("amount").value;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    const inputs = [date, selectedType, location, description, "$" + amount];
    console.log(inputs);
    for (let i = 0; i <= inputs.length-1; i++) {
      const tdata = document.createElement("td");
      const text = document.createTextNode(inputs[i]);
      tdata.appendChild(text);
      row.appendChild(tdata);
      row.appendChild(deleteBtn);
      tbody.appendChild(row);
    }
    document.getElementById("form").reset();
    deleteBtn.addEventListener("click", function () {
      row.remove();
    });
    return false;
});
