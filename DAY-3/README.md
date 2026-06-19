# Day 03 - Understanding Dockerfile

## Overview

Today I learned about Dockerfiles and how Docker Images are created.

A Dockerfile is one of the most important concepts in Docker because it allows us to automate the process of building Docker Images.

Instead of manually installing software and configuring environments, we can define everything in a Dockerfile and let Docker do the work.

---

# What is a Dockerfile?

A Dockerfile is a text file that contains a set of instructions used to build a Docker Image.

Think of it as a recipe.

Just like a recipe tells a chef how to prepare a dish, a Dockerfile tells Docker how to create an image.

---

# Why Do We Need a Dockerfile?

Imagine you have a Python Flask application.

To run it on another machine, you would need to:

* Install Python
* Create a working directory
* Copy application files
* Install dependencies
* Start the application

Doing this manually every time is time-consuming.

A Dockerfile automates all these steps.

---

# Dockerfile Workflow

```text
Dockerfile
    │
    ▼
docker build
    │
    ▼
Docker Image
    │
    ▼
docker run
    │
    ▼
Container
```

---

# Common Dockerfile Instructions

## FROM

Defines the base image.

Example:

```dockerfile
FROM python:3.11
```

This tells Docker to start with an image that already has Python installed.

---

## WORKDIR

Sets the working directory inside the container.

Example:

```dockerfile
WORKDIR /app
```

Docker will execute future commands inside the `/app` directory.

---

## COPY

Copies files from the local machine into the container.

Example:

```dockerfile
COPY . .
```

This copies all project files into the container.

---

## RUN

Executes commands during image creation.

Example:

```dockerfile
RUN pip install -r requirements.txt
```

This installs all required Python packages.

---

## EXPOSE

Documents the port used by the application.

Example:

```dockerfile
EXPOSE 5000
```

This indicates that the application runs on port 5000.

---

## CMD

Defines the default command that runs when the container starts.

Example:

```dockerfile
CMD ["python", "app.py"]
```

This starts the Flask application.

---

# Sample Dockerfile

```dockerfile
FROM python:3.11

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["python", "app.py"]
```

---

# Building a Docker Image

Create an image using:

```bash
docker build -t flask-app .
```

Explanation:

* `build` → Creates an image
* `-t` → Assigns a name to the image
* `.` → Current directory containing the Dockerfile

---

# Viewing Available Images

```bash
docker images
```

This command lists all Docker Images stored locally.

---

# Running a Container

```bash
docker run -d -p 5000:5000 flask-app
```

Explanation:

* `-d` → Run in background
* `-p` → Port mapping
* `flask-app` → Image name

---

# What Happens During Build?

```text
FROM python:3.11
        ↓
WORKDIR /app
        ↓
COPY . .
        ↓
RUN pip install
        ↓
EXPOSE 5000
        ↓
CMD python app.py
        ↓
Docker Image Created
```

---

# Key Takeaways

* Dockerfile is used to create Docker Images.
* It automates application setup and deployment.
* Docker reads instructions from top to bottom.
* Images are created using `docker build`.
* Containers are created using `docker run`.
* A Dockerfile helps maintain consistency across environments.

---

# What I Learned Today

Today I learned how Docker Images are created using Dockerfiles. I explored common Dockerfile instructions such as FROM, WORKDIR, COPY, RUN, EXPOSE, and CMD. I also learned the process of building an image and running a container from that image.
