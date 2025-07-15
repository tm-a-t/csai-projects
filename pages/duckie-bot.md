---
title: Duckiebot Autonomous Driving Stack
term: Spring 2025
type: Term Project
mentors: [ Ilia Nechaev, Tatiana Berlenko ]
students: [ Maria Fadeeva, Artem Grigorash, Egor Lomakin, Ivan Voevodskiy ]
keywords: [ robotics, computer vision, autonomous driving, ROS2 ]
picture: /assets/duckie.jpg
pictureAlt: robots on a road with markings
---

The goal of this project is to develop an autonomous driving stack for Duckiebot hardware platform using ROS2. The final
system should enable the robot to navigate a city-like environment and follow road markings.  

The robot should be capable of:

1. Following road markings autonomously
2. Navigating through intersections
3. Localize itself in the environment using April Tags placed at intersections
4. Follow a predefined (possibly looped) route
5. Emergency stop in front of large object
6. Understand and follow traffic light colors

## Report

To achieve these goals, students had to understand the ROS2 framework, learn how to work with robot’s sensors and
actuators, and implement a set of nodes that can perform the target actions. Working with robots is not trivial,
starting with the launch of the project. Robots operate in the real world with a great deal of uncertainty, and quite
often a situation arises where a program that was just working perfectly starts to throw errors. The students coped
perfectly with all the challenges. As a result, students implemented an application that can do each of the target
actions and combine all of this in one ROS2 node that sequentially calls the rest nodes. See
a [demo](https://github.com/DuckiebotNup2025SpringProject/Driving/blob/main/demo.MOV) and
a [project repository](https://github.com/DuckiebotNup2025SpringProject/Driving).
