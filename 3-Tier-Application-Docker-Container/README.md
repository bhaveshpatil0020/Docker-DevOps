# Dockerized 3-Tier Application Deployment on AWS EC2

## Overview

This project demonstrates an end-to-end DevOps workflow by containerizing and deploying a three-tier web application using Docker and AWS EC2.

The application follows a modern three-tier architecture consisting of:

* Frontend Layer
* Backend API Layer
* Database Layer

The entire application is containerized using Docker, orchestrated with Docker Compose, and deployed on an AWS EC2 instance.

---

# Architecture

```text
Users
   │
   ▼
Frontend (HTML, CSS, JavaScript)
   │
   ▼
Backend API (Python Flask)
   │
   ▼
PostgreSQL Database
```

---

# Technologies Used

## Containerization

* Docker
* Docker Compose

## Backend

* Python
* Flask

## Database

* PostgreSQL

## Cloud Platform

* AWS EC2

## Version Control

* Git
* GitHub

---

# Project Features

* Multi-container application architecture
* Dockerized frontend, backend, and database services
* Persistent PostgreSQL storage using Docker Volumes
* Container communication through Docker Networks
* Environment variable configuration
* Automated service deployment using Docker Compose
* Cloud deployment on AWS EC2

---

# Project Structure

```text
project-root/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── database/
│
├── docker-compose.yml
│
└── README.md
```

---

# Docker Architecture

```text
Docker Compose
       │
       ▼
 ┌──────────────┐
 │   Frontend   │
 └──────────────┘
       │
       ▼
 ┌──────────────┐
 │ Flask Backend│
 └──────────────┘
       │
       ▼
 ┌──────────────┐
 │ PostgreSQL   │
 └──────────────┘
```

---

# Deployment Workflow

```text
Application Source Code
          │
          ▼
      Dockerfile
          │
          ▼
     Docker Build
          │
          ▼
    Docker Images
          │
          ▼
   Docker Compose
          │
          ▼
     AWS EC2 Server
          │
          ▼
 Running Containers
```

---

# Steps Performed

### 1. Containerized the Application

* Created Dockerfiles for application services
* Built Docker Images
* Verified container execution

### 2. Configured Docker Networking

* Enabled communication between containers
* Connected backend service with PostgreSQL database

### 3. Implemented Persistent Storage

* Configured Docker Volumes
* Ensured database data persistence

### 4. Orchestrated Services

* Defined all services in `docker-compose.yml`
* Automated deployment using Docker Compose

### 5. Deployed on AWS EC2

* Launched EC2 instance
* Installed Docker and Docker Compose
* Copied application files to the server
* Started the application using Docker Compose

---

# Running the Application

Clone the repository:

```bash
git clone <repository-url>
cd <repository-name>
```

Start the application:

```bash
docker compose up -d
```

Verify running containers:

```bash
docker ps
```

Stop the application:

```bash
docker compose down
```

---

# Learning Outcomes

Through this project, I gained hands-on experience with:

* Docker Containerization
* Docker Images and Containers
* Docker Volumes
* Docker Networking
* Docker Compose
* PostgreSQL Integration
* AWS EC2 Deployment
* Linux Commands
* DevOps Fundamentals
* Multi-Container Application Management

---

# Future Improvements

* CI/CD using GitHub Actions
* Docker Hub Integration
* NGINX Reverse Proxy
* Kubernetes Deployment
* Monitoring with Prometheus and Grafana
* Infrastructure as Code using Terraform

---

# Conclusion

This project demonstrates a complete DevOps workflow, from containerizing an application with Docker to deploying a production-ready multi-container environment on AWS EC2. It showcases practical experience in containerization, cloud deployment, networking, storage management, and modern DevOps practices.
