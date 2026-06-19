const API_URL = "http://43.205.239.168:5000";

/* -----------------------------
   Load Students
----------------------------- */

async function loadStudents() {

    try {

        const response = await fetch(`${API_URL}/students`);

        const students = await response.json();

        let html = "";

        students.forEach(student => {

            html += `
            <tr>

                <td>${student.student_id}</td>

                <td>${student.first_name} ${student.last_name}</td>

                <td>${student.email}</td>

                <td>

                    <button
                        class="edit-btn"
                        onclick="editStudent(
                            ${student.student_id},
                            '${student.first_name}',
                            '${student.last_name}',
                            '${student.email}'
                        )">
                        Edit
                    </button>

                    <button
                        class="delete-btn"
                        onclick="deleteStudent(${student.student_id})">
                        Delete
                    </button>

                </td>

            </tr>
            `;
        });

        document.getElementById("studentTable").innerHTML = html;

    } catch (error) {

        console.error(error);

        alert("Unable to connect backend API.");
    }
}

/* -----------------------------
   Add Student
----------------------------- */

async function addStudent() {

    try {

        const student = {

            first_name:
                document.getElementById("fname").value,

            last_name:
                document.getElementById("lname").value,

            email:
                document.getElementById("email").value,

            birth_date: "2000-01-01",

            enrolled_date: "2025-01-01"
        };

        await fetch(`${API_URL}/students`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(student)
        });

        clearForm();

        loadStudents();

    } catch (error) {

        console.error(error);

        alert("Failed to add student.");
    }
}

/* -----------------------------
   Edit Student
----------------------------- */

function editStudent(id, fname, lname, email) {

    document.getElementById("studentId").value = id;

    document.getElementById("fname").value = fname;

    document.getElementById("lname").value = lname;

    document.getElementById("email").value = email;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* -----------------------------
   Update Student
----------------------------- */

async function updateStudent() {

    try {

        const id =
            document.getElementById("studentId").value;

        const student = {

            first_name:
                document.getElementById("fname").value,

            last_name:
                document.getElementById("lname").value,

            email:
                document.getElementById("email").value
        };

        await fetch(`${API_URL}/students/${id}`, {

            method: "PATCH",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(student)
        });

        clearForm();

        loadStudents();

    } catch (error) {

        console.error(error);

        alert("Failed to update student.");
    }
}

/* -----------------------------
   Delete Student
----------------------------- */

async function deleteStudent(id) {

    try {

        if (!confirm("Delete this student?")) {
            return;
        }

        await fetch(`${API_URL}/students/${id}`, {

            method: "DELETE"
        });

        loadStudents();

    } catch (error) {

        console.error(error);

        alert("Failed to delete student.");
    }
}

/* -----------------------------
   Clear Form
----------------------------- */

function clearForm() {

    document.getElementById("studentId").value = "";

    document.getElementById("fname").value = "";

    document.getElementById("lname").value = "";

    document.getElementById("email").value = "";
}

/* -----------------------------
   Initial Load
----------------------------- */

window.onload = function () {

    loadStudents();
};