// Get form and table elements
const form = document.getElementById('attendanceForm');
const tableBody = document.querySelector('#attendanceTable tbody');

// Handle form submission
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from submitting

  // Get input values
  const name = document.getElementById('name').value;
  const status = document.getElementById('status').value;

  // Add a new row to the table
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${status}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;

  // Append the new row to the table
  tableBody.appendChild(newRow);

  // Clear the form inputs
  form.reset();
});

// Handle delete button clicks
tableBody.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-btn')) {
    // Remove the row when the delete button is clicked
    const row = e.target.closest('tr');
    row.remove();
  }
});