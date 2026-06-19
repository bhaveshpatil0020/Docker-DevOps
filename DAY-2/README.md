# Day 02 - Docker Images and Containers

## Overview

Today I learned about Docker Images and Containers, the two most fundamental concepts in Docker.

The goal of this session was to understand:

* What is a Docker Image?
* What is a Docker Container?
* Difference between Image and Container
* Container Lifecycle
* Basic Docker Commands

---

# What is a Docker Image?

A Docker Image is a read-only template used to create containers.

Think of an image as a blueprint or a recipe.

It contains:

* Application code
* Dependencies
* Libraries
* Runtime
* Configuration files

Examples:

* Ubuntu Image
* Nginx Image
* MySQL Image
* PostgreSQL Image

An image itself does not run.

It must be converted into a container.

---

# What is a Docker Container?

A Docker Container is a running instance of an image.

When Docker starts an image, it creates a container.

Example:

```text
Nginx Image
      │
      ▼
Nginx Container
```

Multiple containers can be created from the same image.

Example:

```text
Ubuntu Image
│
├── Container 1
├── Container 2
└── Container 3
```

---

# Image vs Container

| Docker Image              | Docker Container      |
| ------------------------- | --------------------- |
| Blueprint                 | Running Instance      |
| Read Only                 | Read/Write            |
| Cannot Execute            | Executes Applications |
| Used to Create Containers | Created From Images   |

Simple Example:

```text
Classroom Blueprint = Image

Actual Classroom = Container
```

---

# Docker Image Layers

Docker Images are built using layers.

Example:

```text
Ubuntu Base Image
        │
        ▼
Python Installed
        │
        ▼
Application Files Added
        │
        ▼
Final Docker Image
```

Benefits:

* Faster Builds
* Better Storage Efficiency
* Layer Reuse

---

# Pulling Images from Docker Hub

Docker Hub is a public registry containing thousands of images.

Download an image:

```bash
docker pull nginx
```

Example Output:

```text
Using default tag: latest
latest: Pulling from library/nginx
Status: Downloaded newer image
```

---

# Viewing Available Images

List downloaded images:

```bash
docker images
```

Example Output:

```text
REPOSITORY   TAG       IMAGE ID
nginx        latest    xxxxxxxx
ubuntu       latest    xxxxxxxx
```

---

# Creating a Container

Run a container:

```bash
docker run nginx
```

Docker will:

1. Check if image exists locally
2. Download image if required
3. Create container
4. Start container

---

# Running a Container in Background

```bash
docker run -d nginx
```

The -d flag means:

```text
Detached Mode
```

Container runs in the background.

---

# Viewing Running Containers

```bash
docker ps
```

Displays:

* Container ID
* Image
* Status
* Ports
* Names

---

# Viewing All Containers

```bash
docker ps -a
```

Shows:

* Running Containers
* Stopped Containers

---

# Stopping a Container

```bash
docker stop <container-id>
```

Example:

```bash
docker stop abc123
```

---

# Starting a Stopped Container

```bash
docker start <container-id>
```

---

# Restarting a Container

```bash
docker restart <container-id>
```

---

# Removing a Container

First stop the container:

```bash
docker stop <container-id>
```

Then remove it:

```bash
docker rm <container-id>
```

---

# Removing an Image

```bash
docker rmi <image-id>
```

Example:

```bash
docker rmi nginx
```

---

# Container Lifecycle

Every container goes through different states:

```text
Docker Image
      │
      ▼
Container Created
      │
      ▼
Running
      │
      ▼
Stopped
      │
      ▼
Removed
```

Understanding this lifecycle is important for managing Docker containers.

---

# Useful Commands Summary

```bash
docker pull nginx
docker images
docker run nginx
docker run -d nginx
docker ps
docker ps -a
docker stop <container-id>
docker start <container-id>
docker restart <container-id>
docker rm <container-id>
docker rmi <image-id>
```

---

# Key Takeaways

* Docker Images are templates used to create containers.
* Containers are running instances of images.
* Multiple containers can be created from a single image.
* Docker Hub provides ready-to-use images.
* Containers have a lifecycle from creation to removal.
* Docker commands help manage images and containers efficiently.

---

# What I Learned Today

Today I learned the difference between Docker Images and Containers, how images are downloaded from Docker Hub, how containers are created and managed, and the complete lifecycle of a Docker container.
