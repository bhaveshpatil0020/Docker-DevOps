# Day 04 - Docker Volumes

## Overview

Today I learned about Docker Volumes and how Docker stores persistent data.

One of the biggest challenges with containers is that they are temporary by nature. If a container is removed, all data stored inside that container is lost.

Docker Volumes solve this problem by allowing data to persist even after containers are stopped, restarted, or deleted.

---

# Why Do We Need Docker Volumes?

Imagine you are running a PostgreSQL database inside a Docker container.

You create:

* Tables
* Records
* Databases

Everything works perfectly.

Now suppose the container is deleted.

Without a Volume:

```text
Container Deleted
        ↓
Database Deleted
        ↓
Data Lost
```

All your data disappears.

This is why persistent storage is important.

---

# What is a Docker Volume?

A Docker Volume is a storage mechanism managed by Docker that allows data to persist independently of containers.

Think of a volume as a separate storage location outside the container.

```text
Container
     │
     ▼
Docker Volume
     │
     ▼
Persistent Data
```

Even if the container is removed, the volume remains.

---

# Container Storage vs Volume Storage

## Container Storage

```text
Container
│
├── Application
├── Database
└── Data
```

Problem:

```text
Container Removed
        ↓
Everything Removed
```

---

## Volume Storage

```text
Container
     │
     ▼
Volume
     │
     ▼
Data
```

Result:

```text
Container Removed
        ↓
Volume Remains
        ↓
Data Safe
```

---

# Types of Docker Volumes

## Named Volumes

Docker manages the storage location automatically.

Example:

```bash
docker volume create postgres-data
```

This creates a volume named:

```text
postgres-data
```

---

## Bind Mounts

Maps a local folder from your machine into the container.

Example:

```bash
docker run -v C:/data:/app/data nginx
```

Meaning:

```text
Local Folder
      │
      ▼
Container Folder
```

Changes on either side are reflected immediately.

---

## Anonymous Volumes

Created automatically by Docker when no name is provided.

Example:

```bash
docker run -v /data nginx
```

Docker creates a random volume name.

Usually not preferred because management becomes difficult.

---

# Creating a Volume

Create a volume:

```bash
docker volume create myvolume
```

Example Output:

```text
myvolume
```

---

# Listing Volumes

View all available volumes:

```bash
docker volume ls
```

Example Output:

```text
DRIVER    VOLUME NAME
local     myvolume
```

---

# Inspecting a Volume

To view volume details:

```bash
docker volume inspect myvolume
```

This displays:

* Mount location
* Driver information
* Volume configuration

---

# Using a Volume with a Container

Example:

```bash
docker run -d \
-v myvolume:/app/data \
nginx
```

Explanation:

```text
myvolume
      │
      ▼
/app/data
```

Data written inside `/app/data` is stored in the volume.

---

# PostgreSQL Volume Example

Run PostgreSQL with persistent storage:

```bash
docker run -d \
--name postgres-db \
-v postgres-data:/var/lib/postgresql/data \
-e POSTGRES_PASSWORD=password \
postgres
```

Explanation:

* postgres-data → Volume
* /var/lib/postgresql/data → Database storage path

Now database records survive container recreation.

---

# Removing a Volume

Delete a volume:

```bash
docker volume rm myvolume
```

Important:

Removing a volume permanently deletes its data.

---

# Docker Volume Workflow

```text
Create Volume
      │
      ▼
Attach Volume
      │
      ▼
Container Writes Data
      │
      ▼
Container Removed
      │
      ▼
Volume Still Exists
      │
      ▼
Data Preserved
```

---

# Useful Commands Summary

```bash
docker volume create myvolume

docker volume ls

docker volume inspect myvolume

docker volume rm myvolume
```

---

# Real-World Use Cases

Docker Volumes are commonly used for:

* PostgreSQL
* MySQL
* MongoDB
* Application uploads
* Configuration files
* Log storage

Any application that stores important data should use volumes.

---

# Key Takeaways

* Containers are temporary.
* Data stored inside containers can be lost.
* Docker Volumes provide persistent storage.
* Volumes exist independently of containers.
* Named Volumes are the most commonly used type.
* Databases should always use volumes.

---

# What I Learned Today

Today I learned why Docker Volumes are important and how they help preserve data outside containers. I explored different volume types, learned how to create and manage volumes, and understood how databases use volumes to maintain persistent storage.
