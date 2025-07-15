---
title: Generating Astronomy Olympiad Problems
term: Spring 2025
type: Term Project
mentors: [ Alexander Avdiushenko ]
students: [ Svyatoslav Suglobov ]
keywords: [ LLM, GenAI, astronomy, olympiad ]
picture: /assets/astro_topics.png
pictureAlt: embedding graph, showing tasks classified by topics
---

Currently, Large Language Models (LLMs) are frequently used to generate challenging problems across various disciplines
such as maths, physics, chemistry and biology.
In this project, we aim to generate astronomy tasks with an LLM for a variety of competitions and levels.

## Report

We created a multi-agent console app that successfully generates astronomy tasks based on previous competitions. It
allows extracting problems from PDF docs, searching with semantic using DeepSeek API or other LLM providers, also it
generates solutions for astronomy tasks.

<img src="/assets/astro_diagram.png" alt="agent diagram">

The presented diagram illustrates the pipeline of a generator, designed to transform user prompt into refined, solvable
task formulations and deliver final outputs through iterative enhancement. Each component in the flow performs a
distinct role, contributing to a modular and intelligent system.  

The project has generated significant attention in the Olympiad community. The generator was used to produce original
problems for the qualification tests of the Russian team at the International Astronomy Olympiad. 

Astronomy does not present unique challenges — we can extend the project to mathematics and physics Olympiad problems,
provided a suitable dataset is available.
