---
title: "SportStats: Football Analytics"
term: Spring 2026
type: Project Seminar Course Project
mentors: [ Tatiana Berlenko ]
students: [ Daniel Emeka-Ilozor, Assylkhan Balmukhanov ]
keywords: [ football, analytics, Flask, computer vision, YOLOv8 ]
picture: https://github.com/user-attachments/assets/4609bc25-3659-4382-8128-212e9c35e1e8
pictureAlt: SportStats interface with prediction, xG, Elo, and tournament analytics
---

Public football data is widely available, but practical analytics tools are often paid, closed, or tied to proprietary datasets. This makes it hard for students, fans, and small teams to experiment with methods such as match prediction, expected goals, Elo ratings, tournament simulation, passing networks, and video-based player tracking.

SportStats addresses this by providing a self-contained web application that runs core football analytics techniques on bundled open data. The goal is not to replace professional platforms, but to make foundational models reproducible, inspectable, and easy to run locally without API keys, subscriptions, or external services.

## Report

The statistical part of the project is implemented as a Flask web app. It includes Poisson-based match prediction with Monte Carlo simulation, a logistic-regression xG calculator, international Elo ratings, a 2026 World Cup simulator, and a passing-network visualizer built from JSON pass-event data. The app uses local CSV and JSON files and does not require a database.

The computer-vision part is separated from the lightweight analytics runtime. It uses YOLOv8 to detect players, referees, and the ball, colour clustering for team assignment, optical flow for camera-motion correction, and homography-based pitch mapping to estimate player speed and distance. Heavy CV dependencies are optional, while the main analytics pages run with a minimal Python environment or Docker.

<img src="https://github.com/user-attachments/assets/4609bc25-3659-4382-8128-212e9c35e1e8" alt="SportStats pages showing predictor, xG, Elo ratings, passing network, and World Cup simulation">
