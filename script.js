function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

//Notes section dropdown for departments 
function loadDepartments() {
  const college = document.getElementById("college").value;
  const department = document.getElementById("department");

  department.innerHTML = '<option value="">Select Department</option>';

  let departments = [];

  if (college === "deogiri") {
    departments = ["BA", "BSc", "BCS", "BCA", "BCom"];
  } else if (college === "acs") {
    departments = ["Arts", "Science", "Commerce"];
  } else if (college === "law") {
    departments = ["LLB", "BA LLB"];
  }

  departments.forEach(dep => {
    const option = document.createElement("option");
    option.text = dep;
    option.value = dep;
    department.add(option);
  });
  function loadCourses() {
  const department = document.getElementById("department").value;
  const course = document.getElementById("course");

  course.innerHTML = '<option value="">Select Course</option>';

  let courses = [];

  if (department === "arts") {
    courses = ["BA"];
  } 
  else if (department === "computer science") {
    courses = ["BCS", "BSc Computer Science", "BCA"];
  }

  courses.forEach(c => {
    const option = document.createElement("option");
    option.text = c;
    option.value = c;
    course.add(option);
  });
}

}

//fuction
function continueNext() {
  const dept = document.getElementById("department").value;
  const course = document.getElementById("course").value;
  const year = document.getElementById("year").value;

  if (dept === "" || course === "" || year === "") {
    alert("Please select Department, Course and Year");
    return;
  }

  // Store data
  localStorage.setItem("department", dept);
  localStorage.setItem("course", course);
  localStorage.setItem("year", year);

  // Redirect to notes page
  window.location.href = "notes.html";
}
