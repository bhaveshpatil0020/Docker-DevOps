# Day 01 - Introduction to Docker 🐳

## Overview

Today I started learning Docker, one of the most important tools in modern DevOps.

The goal of this session was to understand:

* Why Docker was created
* Problems Docker solves
* What containers are
* Containers vs Virtual Machines
* Docker Workflow
* Docker Architecture

---

# The Problem with Traditional Deployments

Before Docker, deploying applications was often difficult.

A developer writes code and tests it locally.

The application works perfectly in:

* Development Environment
* Testing Environment

But when deployed to Production, it suddenly fails.

This is commonly known as:

> "It works on my machine."

### Common Reasons

* Missing dependencies
* Configuration differences
* Version mismatches
* Operating system differences

This leads to:

* Deployment failures
* Longer troubleshooting
* Delayed releases
* Frustration between Development and Operations teams

---

# How Docker Solves This Problem

Docker packages everything required by an application into a single unit called a **Container Image**.

This includes:

* Application code
* Libraries
* Dependencies
* Runtime
* Configuration files

Because the entire environment is packaged together, the application behaves consistently across all environments.

```text
Development → Testing → Production
        Same Docker Image
```

This eliminates the "works on my machine" problem.

---

# What is a Container?

A Container is a lightweight and isolated package that contains everything needed to run an application.

### Characteristics

### Isolated

Containers run independently from each other.

A problem in one container does not affect others.

### Lightweight

Containers share the host operating system kernel.

This makes them much smaller than Virtual Machines.

### Portable

Containers can run on any machine where Docker is installed.

Examples:

* Laptop
* Virtual Machine
* AWS EC2
* Azure VM
* Google Cloud VM

---

# Docker vs Container

These terms are often confused.

### Docker

Docker is the platform used to build, manage, and run containers.

### Container

A container is the running instance of an application.

Simple example:

```text
Docker → Creates Container
Container → Runs Application
```

---

# Containers vs Virtual Machines

## Virtual Machine Architecture

```text
Physical Server
│
├── Hypervisor
│
├── VM 1
│   └── Guest OS
│   └── Application
│
├── VM 2
│   └── Guest OS
│   └── Application
│
└── VM 3
    └── Guest OS
    └── Application
```

Each VM requires its own operating system.

This increases:

* Storage usage
* Memory usage
* Startup time

---

## Container Architecture

```text
Physical Server
│
├── Host Operating System
│
├── Docker Engine
│
├── Container 1
├── Container 2
└── Container 3
```

Containers share the host OS kernel.

Benefits:

* Faster startup
* Smaller size
* Better resource utilization

---

# VM vs Container Comparison

| Feature        | Virtual Machine   | Container         |
| -------------- | ----------------- | ----------------- |
| Isolation      | Full OS Isolation | Process Isolation |
| OS             | Own Guest OS      | Shared Host OS    |
| Size           | Several GB        | Few MB            |
| Startup Time   | Minutes           | Seconds           |
| Resource Usage | High              | Low               |
| Technology     | Hypervisor        | Docker Engine     |

---

# Docker Workflow

Docker follows a simple workflow:

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
docker push
    │
    ▼
Docker Registry
    │
    ▼
docker pull
    │
    ▼
docker run
    │
    ▼
Container
```

---

## Dockerfile

A Dockerfile is a text file containing instructions to build an image.

Example tasks:

* Choose base image
* Copy application files
* Install dependencies
* Define startup command

---

## Docker Image

A Docker Image is a blueprint used to create containers.

Think of it as a template.

Examples:

* Ubuntu Image
* Nginx Image
* MySQL Image

---

## Docker Registry

A Registry stores Docker Images.

Examples:

* Docker Hub
* AWS ECR
* Google Artifact Registry

---

## Docker Container

A running instance of an image.

```text
Image → Container
```

One image can create multiple containers.

---

# Docker Architecture

Docker uses a Client-Server architecture.

```text
Docker Client
      │
      ▼
Docker Daemon (dockerd)
      │
      ▼
Docker Images
Docker Containers
Docker Networks
Docker Volumes
```

---

## Docker Client

Used to execute commands.

Examples:

```bash
docker build
docker run
docker ps
```

---

## Docker Daemon

Background service responsible for:

* Building images
* Running containers
* Managing networks
* Managing volumes

---

## Registry

Stores Docker Images.

Docker pulls images from a registry when required.

Example:

```bash
docker pull nginx
```

---

# Key Takeaways

* Docker solves the "works on my machine" problem.
* Containers package applications with all required dependencies.
* Containers are lightweight compared to Virtual Machines.
* Docker Images are blueprints used to create containers.
* Docker follows the Build → Ship → Run workflow.
* Docker uses a Client-Server architecture.
* Docker improves portability, consistency, and deployment speed.

---

# What I Learned Today

Today I learned why Docker was created and how it solves deployment challenges. I understood the difference between containers and virtual machines, explored Docker's workflow, and learned about key components such as Docker Images, Containers, Dockerfile, Docker Registry, Docker Client, and Docker Daemon.
