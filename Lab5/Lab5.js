const form = document.getElementById("registrationForm");
const studentList = document.getElementById("studentList");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const studentId = document.getElementById("studentId").value.trim();
    const email = document.getElementById("email").value.trim();
    const credit = document.getElementById("credit").value;
    const department = document.getElementById("department").value;



    if (firstName === "") {
        alert("First name cannot be empty.");
        return;
    }

    if (lastName === "") {
        alert("Last name cannot be empty.");
        return;
    }

    if (!studentId.includes("-")) {
        alert("Student ID must contain '-'.");
        return;
    }

    if (!email.endsWith("@student.aiub.edu")) {
        alert("Email must contain @student.aiub.edu.");
        return;
    }

    if (credit === "" || credit < 0 || credit >= 148) {
        alert("Credit completed must be 0 or more and less than 148.");
        return;
    }

    if (department === "") {
        alert("Please select a department.");
        return;
    }


    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${studentId}</td>
        <td>${email}</td>
        <td>${credit}</td>
        <td>${department}</td>
    `;

    
    studentList.appendChild(newRow);

    alert("Student registered successfully!");

    form.reset();

});