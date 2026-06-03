---
title: "Nexus. A web application for organizing students' academic life: schedule, tasks, chats, and performance analytics"
term: Spring 2026
type: Project Seminar Course Project
mentors: [ Tatiana Berlenko ]
students: [ Svyatoslav Lesnikov, Saveli Kavaleu ]
keywords: [ education, web application, schedule, task management, messaging, analytics ]
picture: /assets/nexus-cover.png
pictureAlt: Nexus dashboard with schedule, tasks, and student analytics
---

Students often have to manage assignments, deadlines, schedules, course communication, and personal messages across several different tools. This makes it easy to miss important updates, lose track of tasks, or spend too much time switching between platforms.

The goal of this project was to create a single web application where students can organize their academic work, communicate with classmates, and quickly see what requires their attention.

## Report

Nexus is a server-rendered web application that brings four everyday student needs into a single interface: a weekly schedule, a task tracker with priorities and deadlines, messaging with groupmates, and grade and attendance analytics. The goal is to replace a scattered toolkit (messenger + notes + spreadsheet + calendar) with one environment built around a shared user profile.

The backend is implemented in Python 3.10+ with FastAPI, SQLAlchemy ORM, Pydantic, and Alembic migrations. The frontend uses Jinja2 templates with vanilla JavaScript and CSS3 (Flexbox/Grid), without an SPA framework. SQLite is used as the default storage, and the whole stack is packaged in Docker for one-command deployment.

The application is split into thematic routers — auth, dashboard, tasks, schedule, profile, messages, channels, and performance — each responsible for its own domain.
