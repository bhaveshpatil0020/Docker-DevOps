# Day 06 - Docker Compose

## Overview

Today I learned about Docker Compose and how it simplifies the management of multi-container applications.

So far, I have learned:

* Docker Images
* Containers
* Dockerfiles
* Volumes
* Networking

Managing all these components using long Docker commands can become difficult.

Docker Compose solves this problem by allowing us to define everything in a single YAML file.

---

# What is Docker Compose?

Docker Compose is a tool used to define and manage multi-container applications.

Instead of running multiple commands, we can describe the entire application in a single file called:

```text
docker-compose.yml
```

Then start everything using one command.

---

# Why Do We Need Docker Compose?

Imagine a Flask application with PostgreSQL.

Without Docker Compose:

```bash
docker network create app-network

docker volume create postgres-data

docker run -d --name postgres-db \
-v postgres-data:/var/lib/postgresql/data \
--network app-network \
postgres

docker run -d --name flask-app \
--network app-network \
-p 5000:5000 \
flask-app
```

Many commands are required.

As applications grow, managing them becomes difficult.

Docker Compose simplifies this process.

---

# Docker Compose Architecture

```text
docker-compose.yml
        │
        ▼
Docker Compose
        │
        ▼
Networks
Volumes
Containers
Services
```

Everything is managed from one file.

---

# What is a Service?

In Docker Compose, each container is called a Service.

Example:

```text
Frontend Service
Backend Service
Database Service
```

Compose creates and manages these services automatically.

---

# Basic Docker Compose File

```yaml
version: '3.8'

services:

  web:
    image: nginx

  db:
    image: postgres
```

This file creates:

* Nginx Container
* PostgreSQL Container

using a single command.

---

# Understanding Important Keywords

## services

Defines containers.

Example:

```yaml
services:
```

Everything under this section becomes a container.

---

## image

Specifies which image to use.

Example:

```yaml
image: nginx
```

Docker pulls the image if it doesn't exist locally.

---

## build

Builds an image from a Dockerfile.

Example:

```yaml
build: .
```

Docker looks for a Dockerfile in the current directory.

---

## ports

Maps host ports to container ports.

Example:

```yaml
ports:
  - "5000:5000"
```

Format:

```text
HostPort:ContainerPort
```

---

## volumes

Attaches persistent storage.

Example:

```yaml
volumes:
  - postgres-data:/var/lib/postgresql/data
```

---

## environment

Defines environment variables.

Example:

```yaml
environment:
  POSTGRES_DB: mydb
  POSTGRES_USER: postgres
  POSTGRES_PASSWORD: password
```

These values are passed into the container.

---

## depends_on

Controls startup order.

Example:

```yaml
depends_on:
  - db
```

Meaning:

```text
Database Starts First
        ↓
Application Starts
```

---

# Flask + PostgreSQL Example

```yaml
version: '3.8'

services:

  db:
    image: postgres

    environment:
      POSTGRES_DB: studentdb
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password

    volumes:
      - postgres-data:/var/lib/postgresql/data

  backend:
    build: .

    ports:
      - "5000:5000"

    depends_on:
      - db

volumes:
  postgres-data:
```

This file creates:

* PostgreSQL Container
* Flask Container
* Docker Volume

with one command.

---

# Starting Containers

Start all services:

```bash
docker compose up -d
```

Explanation:

```text
up  → Create and Start

-d  → Run in Background
```

---

# Viewing Running Services

```bash
docker compose ps
```

Displays all running services.

---

# Viewing Logs

```bash
docker compose logs
```

View logs for troubleshooting.

---

# Stopping Services

```bash
docker compose down
```

Stops and removes:

* Containers
* Networks

Volumes remain unless explicitly removed.

---

# Rebuilding Containers

```bash
docker compose up --build
```

Used when application code changes.

---

# Docker Compose Workflow

```text
Write docker-compose.yml
          │
          ▼
docker compose up -d
          │
          ▼
Containers Created
Networks Created
Volumes Created
          │
          ▼
Application Running
```

---

# Benefits of Docker Compose

## Simplified Management

One file manages the entire application.

---

## Faster Deployment

Start multiple containers with a single command.

---

## Easy Collaboration

Team members can run the same environment.

---

## Better Organization

Networks, volumes, and containers are defined in one place.

---

# Useful Commands Summary

```bash
docker compose up -d

docker compose ps

docker compose logs

docker compose down

docker compose up --build
```

---

# Real-World Example

A typical three-tier application:

```text
Frontend
    │
    ▼
Backend API
    │
    ▼
PostgreSQL Database
```

Docker Compose can deploy all three services together.

This is commonly used in:

* Development Environments
* Testing Environments
* Small Production Deployments

---

# Key Takeaways

* Docker Compose manages multi-container applications.
* Services represent containers.
* docker-compose.yml defines the application.
* Compose can create networks, volumes, and containers automatically.
* One command can start the entire application stack.
* Docker Compose simplifies development and testing workflows.

---

# What I Learned Today

Today I learned how Docker Compose simplifies the management of multi-container applications. I explored the structure of a docker-compose.yml file, understood important keywords such as services, ports, volumes, environment, and depends_on, and learned how to deploy a complete application using a single command.
