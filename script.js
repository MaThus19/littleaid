// Function to add a new student to the list
function addStudent() {
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
  
    if (!name || !course || !phone || !email) {
      alert('Please fill in all fields.');
      return;
    }
  
    const studentsList = document.getElementById('students');
  
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <strong>Name:</strong> ${name}<br>
      <strong>Course:</strong> ${course}<br>
      <strong>Phone Number:</strong> ${phone}<br>
      <strong>Email Address:</strong> ${email}
      <button onclick="deleteStudent(this)">Delete</button>
    `;
  
    studentsList.appendChild(listItem);
  
    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('course').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
  }
  
  // Function to delete a student from the list with animation
  function deleteStudent(button) {
    const listItem = button.parentElement;
    listItem.style.animation = 'slideOut 0.5s ease';
  
    // Remove the element after the animation completes
    setTimeout(() => {
      listItem.remove();
    }, 500);
  }
  