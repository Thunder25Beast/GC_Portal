# GC Portal

Welcome to the GC Portal repository. This is the official platform for the General Championship (GC) at IIT Bombay, developed and maintained by the ITC Web Team. The portal facilitates management and tracking of GC events and results.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Installation (Django)](#backend-installation-django)
  - [Frontend Installation (React)](#frontend-installation-react)
  - [Running Locally](#running-locally)
- [Contributing](#contributing)
- [Deployment](#deployment)
- [License](#license)

## Project Overview

The GC Portal is designed to manage and track the various General Championship (GC) events at IIT Bombay. It serves as a platform for event organizers, participants, and admins to view schedules, submit entries, and see results.

The website is live at [itc.gymkhana.iitb.ac.in/techgc](https://itc.gymkhana.iitb.ac.in/techgc).

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Django REST Framework (DRF)
- **Database**: PostgreSQL
- **Others**: GitHub Actions for CI/CD, Nginx, Gunicorn

## Getting Started

To get started with the project locally, follow the steps below.

### Prerequisites

Ensure you have the following installed:

- Python (v3.8+)
- Node.js (v14+), npm or yarn
- PostgreSQL
- Django (v3.2+)

### Backend Installation (Django)

1. Clone the repository:
    ```bash
    git clone https://github.com/ITC-Web-Team/GC_Portal.git
    ```

2. Navigate to the backend directory:
    ```bash
    cd GC_Portal/backend
    ```

3. Create a virtual environment:
    ```bash
    python -m venv env
    ```

4. Activate the virtual environment:

    - On macOS/Linux:
      ```bash
      source env/bin/activate
      ```
    - On Windows:
      ```bash
      .\env\Scripts\activate
      ```

5. Install the required Python dependencies:
    ```bash
    pip install -r requirements.txt
    ```

6. Set up your PostgreSQL database:

    Open PostgreSQL and create the database:
    ```sql
    CREATE DATABASE gc_portal;
    CREATE USER gc_user WITH PASSWORD 'yourpassword';
    GRANT ALL PRIVILEGES ON DATABASE gc_portal TO gc_user;
    ```

7. Add your database connection information in a `.env` file:
    ```bash
    DATABASE_URL=postgres://gc_user:yourpassword@localhost:5432/gc_portal
    ```

8. Apply the migrations:
    ```bash
    python manage.py migrate
    ```

9. Create a superuser for the Django admin panel:
    ```bash
    python manage.py createsuperuser
    ```

### Frontend Installation (React)

1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install the Node.js dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

3. Configure the API URL in the environment file (if necessary):
    ```bash
    REACT_APP_API_URL=http://localhost:8000/api
    ```

### Running Locally

1. Start the Django backend:
    ```bash
    cd ../backend
    python manage.py runserver
    ```

2. In a new terminal, start the React frontend:
    ```bash
    cd ../frontend
    npm start
    ```
    or
    ```bash
    yarn start
    ```

The React frontend will be running at `http://localhost:3000` and the Django backend will be at `http://localhost:8000`.

## Contributing

We welcome contributions from the ITC Web Team and external developers. To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and submit a pull request.

### Code Style

- Use Prettier and ESLint for frontend code formatting:
    ```bash
    npm run lint
    ```

- For backend (Django), ensure the code follows PEP 8 standards and format with `black`:
    ```bash
    black .
    ```

## Deployment

The website is deployed using GitHub Actions and managed on a server using Nginx and Gunicorn.

### Manual Deployment

1. SSH into the server:
    ```bash
    ssh user@server_ip
    ```

2. Pull the latest code from the `main` branch:
    ```bash
    git pull origin main
    ```

3. Navigate to the backend directory and apply migrations:
    ```bash
    cd backend
    python manage.py migrate
    ```

4. Collect static files for Django:
    ```bash
    python manage.py collectstatic
    ```

5. Restart Gunicorn and Nginx:
    ```bash
    sudo systemctl restart gunicorn
    sudo systemctl restart nginx
    ```

## License

This project is licensed under the MIT License.
