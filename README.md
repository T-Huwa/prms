# Hospital Referral Tracking System

## Overview

The Hospital Referral Tracking System is a modern web application designed to manage and track patient referrals between hospitals. Built with Laravel, Inertia.js, and React.js, this application provides a seamless user experience with real-time updates and efficient referral management. It uses an SQLite database for lightweight data storage and ease of setup.

## Features

### Admin

-   **User Management**: Add and manage users within the system.
-   **Hospital Management**: Add and manage hospitals in the system.
-   **Analytics**: View detailed analytics on referral activities and user performance.
-   **Referral Viewing**: Access and view all referrals in the system without the ability to edit them.

### Specialist

-   **Referral Requests**: Request referrals from other hospitals.
-   **Referral Processing**: Process incoming referrals and provide necessary feedback on each case.
-   **Feedback**: Submit feedback on processed referrals to ensure proper follow-up and documentation.

### Nurse

-   **Referral Management**: Send referrals to the appropriate hospital based on patient needs.
-   **Specialist Coordination**: Receive referrals and route them to the correct specialist for further action.

## Tech Stack

-   **Backend**: Laravel
-   **Frontend**: Inertia.js + React.js
-   **Database**: SQLite

## Getting Started

To get started with the Hospital Referral Tracking System, follow these steps:

1. **Installation**:

    - Clone the repository: `git clone https://github.com/yourusername/hospital-referral-tracking.git`
    - Navigate to the project directory: `cd hospital-referral-tracking`
    - Install backend dependencies: `composer install`
    - Install frontend dependencies: `npm install` (or `yarn`)

2. **Configuration**:

    - Set up the SQLite database by creating a new file: `touch database/database.sqlite`
    - Configure environment variables in the `.env` file, including database settings:
        ```
        DB_CONNECTION=sqlite
        DB_DATABASE=/path/to/database/database.sqlite
        ```
    - Run the migrations to set up the database schema: `php artisan migrate`

3. **Running the Application**:

    - Start the Laravel development server: `php artisan serve`
    - Build and start the React.js frontend: `npm run dev` (or `yarn dev`)
    - Access the application via `http://localhost:8000` (for Laravel) and `http://localhost:3000` (for React.js)

4. **Usage**:
    - **Admin**: Log in to manage users, hospitals, and view analytics.
    - **Specialist**: Log in to request and process referrals, and provide feedback.
    - **Nurse**: Log in to manage and route referrals between hospitals and specialists.

## Contributing

Contributions are welcome! Please follow the steps below to contribute to the project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or support, please contact:

-   **Email**: support@example.com
-   **Issues**: Open an issue on GitHub [here](https://github.com/yourusername/hospital-referral-tracking/issues)
