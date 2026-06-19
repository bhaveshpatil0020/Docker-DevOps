# Day 05 - Docker Networking

## Overview

Today I learned how containers communicate with each other using Docker Networking.

When multiple containers are running, they often need to exchange data. For example:

* A Flask application needs to connect to PostgreSQL.
* A Web Server needs to communicate with a Backend API.
* Multiple microservices need to interact with each other.

Docker Networking makes this communication possible.

---

# Why Do We Need Docker Networking?

Imagine two containers:

```text
Container A (Flask App)

Container B (PostgreSQL)
```

The Flask application needs to connect to the database.

Without networking:

* Containers cannot communicate easily.
* Applications become isolated.
* Multi-container applications won't work properly.

Docker Networking solves this problem.

---

# What is Docker Networking?

Docker Networking allows containers to communicate:

* With each other
* With the host machine
* With external networks

Docker automatically creates networks and connects containers when needed.

---

# Types of Docker Networks

## Bridge Network

The default Docker network.

When you create a container without specifying a network, Docker connects it to the bridge network.

Example:

```bash
docker network ls
```

Output:

```text
bridge
host
none
```

---

## Host Network

The container shares the host machine's network.

Benefits:

* Better performance
* No network isolation

Used in special scenarios.

---

## None Network

The container has no network access.

Example:

```bash
docker run --network none nginx
```

Result:

* No internet access
* No communication with other containers

---

# Viewing Available Networks

List all Docker networks:

```bash
docker network ls
```

Example Output:

```text
NETWORK ID      NAME      DRIVER
xxxxxx          bridge    bridge
xxxxxx          host      host
xxxxxx          none      null
```

---

# Creating a Custom Network

Custom networks are preferred for multi-container applications.

Create a network:

```bash
docker network create mynetwork
```

Verify:

```bash
docker network ls
```

---

# Running Containers in a Network

Create a PostgreSQL container:

```bash
docker run -d \
--name postgres-db \
--network mynetwork \
postgres
```

Create a Flask container:

```bash
docker run -d \
--name flask-app \
--network mynetwork \
flask-app
```

Now both containers can communicate.

---

# Container Communication

Inside the same network, containers can communicate using container names.

Example:

```text
postgres-db
```

instead of:

```text
192.168.x.x
```

This is called **DNS Resolution**.

Docker automatically resolves container names.

---

# Flask and PostgreSQL Example

Database Container:

```text
postgres-db
```

Flask Application:

```python
DB_HOST = "postgres-db"
```

Docker automatically connects the application to the database.

No IP address is required.

---

# Inspecting a Network

View detailed network information:

```bash
docker network inspect mynetwork
```

Displays:

* Connected containers
* IP addresses
* Network configuration

---

# Connecting an Existing Container

Connect a running container:

```bash
docker network connect mynetwork nginx
```

Now the container joins the network.

---

# Disconnecting a Container

Remove container from network:

```bash
docker network disconnect mynetwork nginx
```

---

# Removing a Network

Delete a network:

```bash
docker network rm mynetwork
```

Note:

The network must not have active containers attached.

---

# Networking Workflow

```text
Create Network
      │
      ▼
Attach Containers
      │
      ▼
Containers Discover Each Other
      │
      ▼
Communication Established
```

---

# Useful Commands Summary

```bash
docker network ls

docker network create mynetwork

docker network inspect mynetwork

docker network connect mynetwork nginx

docker network disconnect mynetwork nginx

docker network rm mynetwork
```

---

# Real-World Example

Three-Tier Application:

```text
Frontend Container
        │
        ▼
Backend Container
        │
        ▼
Database Container
```

All containers communicate through Docker Networks.

This is exactly how many modern applications are deployed.

---

# Key Takeaways

* Docker Networking allows containers to communicate.
* Bridge is the default network type.
* Custom networks are recommended for multi-container applications.
* Containers can communicate using container names.
* Docker provides automatic DNS resolution.
* Networking is essential for microservices and multi-container applications.

---

# What I Learned Today

Today I learned how Docker Networking enables communication between containers. I explored different network types, created custom networks, connected containers, and understood how applications like Flask and PostgreSQL communicate inside Docker environments.
