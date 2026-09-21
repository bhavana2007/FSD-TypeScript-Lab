const form = document.getElementById("student-form");
const studentId = document.getElementById("student-id");
const nameInput = document.getElementById("name");
const rollInput = document.getElementById("rollNumber");
const branchInput = document.getElementById("branch");
const yearInput = document.getElementById("year");
const emailInput = document.getElementById("email");
const list = document.getElementById("student-list");
const message = document.getElementById("message");
const count = document.getElementById("count");
const formTitle = document.getElementById("form-title");
const submitBtn = document.getElementById("submit-btn");
const cancelBtn = document.getElementById("cancel-btn");

async function loadStudents() {
  try {
    const response = await fetch("/api/students");
    const students = await response.json();

    if (!response.ok) {
      throw new Error(students.message || "Failed to load students");
    }

    count.textContent = students.length + " student" + (students.length === 1 ? "" : "s") + " in MongoDB";

    list.innerHTML = students.length
      ? students.map(student => \`
        <tr>
          <td>\${escapeHtml(student.name)}</td>
          <td>\${escapeHtml(student.rollNumber)}</td>
          <td>\${escapeHtml(student.branch)}</td>
          <td>\${student.year}</td>
          <td>\${escapeHtml(student.email)}</td>
          <td class="row-actions">
            <button onclick="editStudent('\${student._id}')">Edit</button>
            <button class="danger" onclick="deleteStudent('\${student._id}')">Delete</button>
          </td>
        </tr>
      \`).join("")
      : '<tr><td colspan="6" class="empty">No students found. Add the first student above.</td></tr>';
  } catch (error) {
    showMessage(error.message, true);
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = {
    name: nameInput.value.trim(),
    rollNumber: rollInput.value.trim(),
    branch: branchInput.value.trim(),
    year: Number(yearInput.value),
    email: emailInput.value.trim()
  };

  const id = studentId.value;
  const method = id ? "PUT" : "POST";
  const url = id ? "/api/students/" + id : "/api/students";

  try {
    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || result.message);
    }

    showMessage(id ? "Student updated successfully." : "Student added successfully.");
    resetForm();
    loadStudents();
  } catch (error) {
    showMessage(error.message, true);
  }
});

async function editStudent(id) {
  try {
    const response = await fetch("/api/students/" + id);
    const student = await response.json();

    if (!response.ok) {
      throw new Error(student.message);
    }

    studentId.value = student._id;
    nameInput.value = student.name;
    rollInput.value = student.rollNumber;
    branchInput.value = student.branch;
    yearInput.value = student.year;
    emailInput.value = student.email;

    formTitle.textContent = "Edit Student";
    submitBtn.textContent = "Update Student";
    cancelBtn.hidden = false;

    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error) {
    showMessage(error.message, true);
  }
}

async function deleteStudent(id) {
  if (!confirm("Delete this student?")) return;

  try {
    const response = await fetch("/api/students/" + id, { method: "DELETE" });
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    showMessage("Student deleted successfully.");
    loadStudents();
  } catch (error) {
    showMessage(error.message, true);
  }
}

cancelBtn.addEventListener("click", resetForm);
document.getElementById("refresh-btn").addEventListener("click", loadStudents);

function resetForm() {
  form.reset();
  studentId.value = "";
  formTitle.textContent = "Add Student";
  submitBtn.textContent = "Add Student";
  cancelBtn.hidden = true;
}

function showMessage(text, isError = false) {
  message.textContent = text;
  message.className = isError ? "error" : "success";

  setTimeout(() => {
    message.textContent = "";
    message.className = "";
  }, 3500);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

loadStudents();