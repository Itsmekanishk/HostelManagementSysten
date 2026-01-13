function showLoginForm(type) {
    // Hide both forms first
    document.getElementById('studentLogin').style.display = 'none';
    document.getElementById('wardenLogin').style.display = 'none';
    
    // Show the selected form
    document.getElementById(`${type}Login`).style.display = 'block';
}

function handleLogin(type) {
    event.preventDefault();
    
    const form = event.target;
    showLoading(form);
    
    // Simulate loading (remove in production)
    setTimeout(() => {
        const id = form.querySelector('input[type="text"]').value;
        const password = form.querySelector('input[type="password"]').value;
        
        if (type === 'student') {
            const studentData = {
                id: id,
                name: "Student " + id
            };
            sessionStorage.setItem('studentData', JSON.stringify(studentData));
            window.location.href = 'student-dashboard.html';
        } else {
            const wardenData = {
                id: id,
                name: "Warden " + id
            };
            sessionStorage.setItem('wardenData', JSON.stringify(wardenData));
            window.location.href = 'warden-dashboard.html';
        }
    }, 1000);
}

function submitLeaveApplication(event) {
    event.preventDefault();
    
    // Get all form values
    const studentName = document.getElementById('studentName').value;
    const studentId = document.getElementById('studentId').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const reason = document.getElementById('leaveReason').value;
    
    // Create leave application object
    const leaveApplication = {
        studentName,
        studentId,
        startDate,
        endDate,
        reason,
        status: 'Pending'
    };
    
    // For demonstration, we'll just show the data in an alert
    alert('Leave Application Submitted!\n\n' + 
          `Student Name: ${studentName}\n` +
          `Student ID: ${studentId}\n` +
          `Start Date: ${startDate}\n` +
          `End Date: ${endDate}\n` +
          `Reason: ${reason}`);
    
    // Clear the form
    event.target.reset();
    
    return false;
}

// Add loading animation
function showLoading(element) {
    element.classList.add('loading');
    element.style.opacity = '0.7';
    element.style.pointerEvents = 'none';
}

function hideLoading(element) {
    element.classList.remove('loading');
    element.style.opacity = '1';
    element.style.pointerEvents = 'auto';
}

// Add smooth transitions for section changes
function showSection(sectionId) {
    const sections = document.querySelectorAll('.dashboard-section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, 50);
        } else {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            setTimeout(() => {
                section.style.display = 'none';
            }, 300);
        }
    });
}
