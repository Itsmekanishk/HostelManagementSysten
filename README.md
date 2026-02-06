# Hostel Management System

A web-based hostel management system designed to streamline hostel operations and improve communication between students and wardens.

## Features

- **Dual Login Portal**: Separate login interfaces for students and wardens
- **Student Dashboard**: 
  - View personal details and hostel information
  - Submit leave applications
  - Check leave approval status
  - Manage hostel-related requests

- **Warden Dashboard**:
  - View all student information
  - Review and approve/reject leave applications
  - Monitor hostel occupancy
  - Manage hostel operations

## Project Structure

```
.
├── index.html                 # Main login page
├── script.js                  # Login and main functionality
├── student-dashboard.html     # Student dashboard template
├── student-dashboard.js       # Student dashboard logic
├── warden-dashboard.html      # Warden dashboard template
├── warden-dashboard.js        # Warden dashboard logic
├── styles.css                 # Application styling
└── README.md                  # Project documentation
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Itsmekanishk/HostelManagementSysten.git
   cd HostelManagementSysten
   ```

2. Open the project in your browser:
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     python -m http.server 8000
     ```
   - Then navigate to `http://localhost:8000`

## Usage

### For Students
1. Click on "Student Login" on the main page
2. Enter your Student ID and Password
3. Access your dashboard to:
   - View your information
   - Submit leave applications
   - Check application status

### For Wardens
1. Click on "Warden Login" on the main page
2. Enter your Warden ID and Password
3. Access your dashboard to:
   - Review leave applications
   - Approve or reject requests
   - Manage hostel information

## Technologies Used

- **HTML5** - Structure and markup
- **CSS3** - Styling and responsive design
- **JavaScript (Vanilla)** - Client-side functionality
- **LocalStorage/SessionStorage** - Client-side data persistence

## Features in Detail

### Leave Application Management
- Students can submit leave applications with:
  - Start and end dates
  - Reason for leave
  - Contact information
- Wardens can:
  - View pending applications
  - Approve or reject applications
  - Add remarks or comments

### Dashboard Features
- User-friendly interface
- Real-time updates (client-side)
- Responsive design for mobile and desktop
- Form validation

## Current Limitations

- Client-side only (no backend database)
- Data is stored in browser's LocalStorage/SessionStorage
- No persistent data storage across browser sessions
- No email notifications
- No authentication against a real database

## Future Enhancements

- Backend integration with Node.js/Express or similar
- Database implementation (MongoDB/MySQL)
- Email notifications for leave applications
- SMS alerts
- Real-time notifications
- Admin panel for hostel management
- Complaint/maintenance request system
- Fee management module
- Visitor management system
- Advanced reporting and analytics

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or suggestions, please contact the project maintainer.

## Screenshots

*Screenshots can be added here to showcase the application interface*

---

**Note**: This is a frontend prototype. For production use, backend integration and proper authentication mechanisms are required.
