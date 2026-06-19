# Day 07 - Docker Hub and Registries

## Overview

Today I learned how Docker Images are stored, shared, and distributed using Docker Registries.

So far, I have learned:

* Docker Images
* Containers
* Dockerfiles
* Volumes
* Networking
* Docker Compose

After building Docker Images locally, the next challenge is making them available to other developers, servers, and cloud environments.

Docker Registries solve this problem by providing a central location to store and distribute Docker Images.

---

# What is a Docker Registry?

A Docker Registry is a storage system used to store and distribute Docker Images.

Think of it as:

```text
GitHub → Stores Source Code

Docker Registry → Stores Docker Images
```

Registries help developers:

* Store Images
* Share Images
* Download Images
* Version Images

---

# Why Do We Need a Docker Registry?

Imagine you build an image on your laptop:

```bash
docker build -t flask-app .
```

The image only exists on your local machine.

Now suppose you want to run the application on:

* Another Laptop
* AWS EC2
* Azure VM
* Kubernetes Cluster

You need a central place to store the image.

This is where Docker Registries help.

---

# Popular Docker Registries

## Docker Hub

The most popular public Docker Registry.

Contains millions of Docker Images.

Examples:

```text
nginx
ubuntu
postgres
mysql
redis
```

---

## Amazon ECR

AWS-managed container registry service.

Used to store private Docker Images.

---

## Google Artifact Registry

Container registry service provided by Google Cloud.

---

## Azure Container Registry

Container registry service provided by Microsoft Azure.

---

# What is Docker Hub?

Docker Hub is a cloud-based platform used to store and share Docker Images.

Benefits:

* Public Repositories
* Private Repositories
* Image Versioning
* Easy Sharing
* CI/CD Integration

---

# Docker Image Naming Convention

Example:

```text
username/myapp:v1
```

Components:

```text
username → Docker Hub Username

myapp → Repository Name

v1 → Version Tag
```

Example:

```text
bhaveshpatil/flask-app:v1
```

---

# What is an Image Tag?

Tags help identify different versions of an image.

Examples:

```text
v1
v2
v3
latest
```

Benefits:

* Version Control
* Easy Rollbacks
* Organized Releases

---

# Building an Image

Create an image:

```bash
docker build -t flask-app .
```

Verify:

```bash
docker images
```

---

# Tagging an Image

Before pushing an image to Docker Hub, it must be tagged.

Example:

```bash
docker tag flask-app username/flask-app:v1
```

Example:

```bash
docker tag flask-app bhaveshpatil/flask-app:v1
```

Verify:

```bash
docker images
```

---

# Logging into Docker Hub

Authenticate with Docker Hub:

```bash
docker login
```

Enter:

```text
Username
Password
```

Successful Login:

```text
Login Succeeded
```

---

# Pushing an Image

Upload an image to Docker Hub:

```bash
docker push username/flask-app:v1
```

Example:

```bash
docker push bhaveshpatil/flask-app:v1
```

Docker uploads all image layers to Docker Hub.

---

# Pulling an Image

Download an image from Docker Hub:

```bash
docker pull username/flask-app:v1
```

Example:

```bash
docker pull bhaveshpatil/flask-app:v1
```

---

# Running a Pulled Image

Run a container from the downloaded image:

```bash
docker run -d -p 5000:5000 bhaveshpatil/flask-app:v1
```

Docker creates and starts a container from the image.

---

# Complete Workflow

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
docker tag
     │
     ▼
docker push
     │
     ▼
Docker Hub
     │
     ▼
docker pull
     │
     ▼
docker run
     │
     ▼
Container Running
```

---

# Real-World DevOps Workflow

```text
Developer
     │
     ▼
GitHub Repository
     │
     ▼
CI/CD Pipeline
     │
     ▼
Build Docker Image
     │
     ▼
Push Image to Docker Hub
     │
     ▼
Production Server
     │
     ▼
Pull Image
     │
     ▼
Run Container
```

This workflow is commonly used in modern DevOps environments.

---

# Useful Commands Summary

```bash
docker login

docker build -t flask-app .

docker tag flask-app username/flask-app:v1

docker push username/flask-app:v1

docker pull username/flask-app:v1

docker images
```

---

# Benefits of Docker Registries

## Centralized Storage

Store Docker Images in one place.

---

## Easy Sharing

Share Images with developers and teams.

---

## Version Control

Manage multiple image versions using tags.

---

## CI/CD Integration

Automatically build and deploy images.

---

## Faster Deployments

Servers can quickly pull images and start containers.

---

# Key Takeaways

* Docker Registries store Docker Images.
* Docker Hub is the most widely used public registry.
* Images should be tagged before pushing.
* docker push uploads images.
* docker pull downloads images.
* Registries are an important part of CI/CD pipelines.
* Docker Images can be shared across different environments.

---

# What I Learned Today

Today I learned how Docker Images are stored and shared using Docker Registries. I explored Docker Hub, image tagging, pushing and pulling images, and understood how registries fit into modern DevOps and CI/CD workflows.
