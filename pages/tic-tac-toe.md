---
title: Tic-tac-toe with Robot Arm
term: Spring 2025
type: Term Project
mentors: [ Kirill Krinkin ]
students: [ Mikhail Malugin ]
keywords: [ robotics, computer vision, robotic arm ]
picture: /assets/2025_roboarm.png
pictureAlt: robotic arm illustration
---

This project tackles the complex challenge of integrating CV with robotic manipulation to create an autonomous
Tic-Tac-Toe playing system using a Kinova Gen3 Lite robotic arm. The primary technical difficulty lies in achieving
precise coordination between visual perception and physical actuation: the system must accurately detect AprilTag/ArUco
markers in 3D space through camera calibration, transform these visual coordinates into the robot’s reference frame, and
execute precise gripper movements to manipulate game pieces without disturbing the board layout. The implementation
addresses critical challenges such as compensating for camera distortion, maintaining consistent marker detection under
varying lighting conditions, calculating accurate inverse kinematics for the robot arm based on visual input, and
ensuring reliable gripper control for picking and placing markers at exact positions.

## Report

This project demonstrates sophisticated sensor-actuator integration through a complete perception-planning-action
pipeline. The system uses computer vision to detect the game state and a minimax algorithm to determine optimal moves.
These algorithmic decisions are then translated into precise physical actions by the Kinova Gen3 Lite robotic arm. The
main challenge was ensuring the robot could accurately place markers while accounting for physical constraints and
potential visual occlusions. The system maintains repeatable accuracy throughout multiple game cycles, allowing it to
play complete games against human opponents without errors.

Key Results:

- AprilTag/ArUco Marker Detection: Implemented marker detection system for field recognition and tracking game pieces on
  the physical board
- Camera Calibration System: Developed automatic calibration using chessboard images to ensure accurate marker detection
  and position measurement
- Game State Detection: Created algorithms to read marker positions from the camera and determine the current state of
  the Tic-Tac-Toe game
- Minimax Algorithm Implementation: Integrated the minimax algorithm for calculating optimal moves, enabling the robot
  to play strategically
- Kinova Gen3 Lite Robot Control: Implemented control functions for the robotic arm to execute physical movements and
  pieces markers on the board
- Gripper Control Integration: Developed gripper control functionality for manipulating physical pieces during gameplay

Sources are available in [GitHub repository](https://github.com/rcicd/tic-tac-robo).
