# 🚀 Dockerized Wanderlust – 3-Tier Mern-Stack Application deployement Using Docker.

## 📌 Overview

This repository documents my DevOps learning journey by containerizing and deploying a MERN Stack application using **Docker**, **Docker Compose**, and **AWS EC2**.

The primary objective of this project is to gain hands-on experience with modern DevOps practices including containerization, multi-container orchestration, Linux administration, and cloud deployment.

---

# 🎯 DevOps Learning Objectives

Through this project, I focused on learning and implementing:

* Docker Fundamentals
* Writing Production-ready Dockerfiles
* Multi-Container Applications
* Docker Compose
* Container Networking
* Environment Variables
* Linux Administration
* AWS EC2 Deployment
* Application Deployment Workflow

---

# 🛠️ Technologies Used

* Docker
* Docker Compose
* React.js
* Node.js
* Express.js
* MongoDB
* AWS EC2
* Linux

---

# 🏗️ Project Architecture

```text
                User
                  │
                  ▼
         Frontend Container
             (React)
                  │
                  ▼
         Backend Container
       (Node.js + Express)
                  │
                  ▼
         MongoDB Container
```

---

# 📂 Project Structure
Wanderlust\
├── LICENSE
├── README.md
├── backend
│   ├── Dockerfile
│   ├── api
│   ├── config
│   ├── controllers
│   ├── data
│   ├── models
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   ├── routes
│   ├── server.js
│   ├── services
│   ├── tests
│   ├── utils
│   └── vercel.json
├── docker-compose.yaml
├── frontend
│   ├── Dockerfile
│   ├── README.md
│   ├── components.json
│   ├── index.html
│   ├── jest.config.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── public
│   ├── src
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   ├── tsconfig.prod.json
│   ├── vercel.json
│   └── vite.config.ts
├── package-lock.j

---

# ✨ Features

* Dockerized Frontend
* Dockerized Backend
* Multi-Container Deployment
* Docker Compose Orchestration
* Container Networking
* Environment Variable Configuration
* AWS EC2 Deployment
* Simplified Deployment Workflow

---

# 🚀 Getting Started

## Prerequisites

Ensure the following software is installed:

* Git
* Docker
* Docker Compose

Verify installation:

```bash
git --version
docker --version
docker compose version
```

---

## Clone Repository

```bash
git clone https://github.com/bhaveshpatil0020/Docker-DevOps.git
```

---

## Configure Environment Variables

### Backend

```bash
cd backend
cp .env.sample .env
```

Update the required values inside the `.env` file.

### Frontend

```bash
cd ../frontend
cp .env.sample .env.local
```

Update the frontend environment variables if required.

Return to the project root.

```bash
cd ..
```

---

# 🐳 Build Docker Images

```bash
docker compose build
```

---

# ▶️ Deploy the Application

Start all services:

```bash
docker compose up -d
```

Rebuild after making changes:

```bash
docker compose up --build -d
```

---

# ✅ Verify Deployment

Running containers:

```bash
docker ps
```

Application logs:

```bash
docker compose logs -f
```

---

# 🌐 Access the Application

### Local Deployment


http://localhost:5173


### AWS EC2 Deployment


http://<EC2-PUBLIC-IP>:5173

---

# ⚙️ Managing the Application

Start Services

```bash
docker compose up -d
```

Stop Services

```bash
docker compose down
```

Restart Services

```bash
docker compose restart
```

Rebuild Images

```bash
docker compose build --no-cache
```

Stop & Remove Volumes

```bash
docker compose down -v
```

---

# 📋 Useful Docker Commands

| Command                                      | Description                |
| -------------------------------------------- | -------------------------- |
| `docker compose build`                       | Build Docker images        |
| `docker compose up -d`                       | Start all services         |
| `docker compose down`                        | Stop and remove containers |
| `docker compose restart`                     | Restart services           |
| `docker compose logs -f`                     | View application logs      |
| `docker ps`                                  | View running containers    |
| `docker images`                              | List Docker images         |
| `docker exec -it <container_name> /bin/bash` | Access a running container |

---

# 🛠️ Troubleshooting

If you encounter issues:

* Verify Docker and Docker Compose are installed.
* Ensure environment variables are configured correctly.
* Confirm the required ports are available.
* Review logs:

```bash
docker compose logs -f
```

Rebuild and restart the application:

```bash
docker compose down
docker compose up --build -d
```

---

# 📚 What I Learned

This project provided hands-on experience with:

* Building custom Docker images
* Writing Dockerfiles
* Docker Compose orchestration
* Multi-container applications
* Container networking
* Environment variable management
* AWS EC2 deployment
* Linux server administration
* Debugging containerized applications
* Understanding real-world deployment workflows

---

# 🚀 Future Improvements

* Nginx Reverse Proxy
* HTTPS with Let's Encrypt
* GitHub Actions CI/CD
* Docker Hub Integration
* Kubernetes Deployment
* Monitoring with Prometheus & Grafana
* Terraform (Infrastructure as Code)
* AWS ECS Deployment

---

# 🎓 Conclusion

This project represents an important milestone in my DevOps learning journey. It demonstrates practical experience with Docker, Docker Compose, Linux, and AWS EC2 while reinforcing modern deployment practices.

As I continue learning DevOps, I plan to extend this project by implementing CI/CD pipelines, Kubernetes orchestration, monitoring, and infrastructure automation to simulate production-grade deployment environments.
