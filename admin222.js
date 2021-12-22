var RowSet = null

function SubmitForm() {
    if (validate()) {
        var formData = readFormData();
        if (RowSet == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["Surename"] = document.getElementById("Surename").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["Password"] = document.getElementById("Password").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Surename;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Password;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("Name").value = "";
    document.getElementById("Surename").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Password").value = "";
    RowSet = null;
}

function onEdit(td) {
    RowSet = td.parentElement.parentElement;
    document.getElementById("Name").value = RowSet.cells[0].innerHTML;
    document.getElementById("Surename").value = RowSet.cells[1].innerHTML;
    document.getElementById("Email").value = RowSet.cells[2].innerHTML;
    document.getElementById("Password").value = RowSet.cells[3].innerHTML;
}
function updateRecord(formData) {
    RowSet.cells[0].innerHTML = formData.Name;
    RowSet.cells[1].innerHTML = formData.Surename;
    RowSet.cells[2].innerHTML = formData.Email;
    RowSet.cells[3].innerHTML = formData.Password;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("Name").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}