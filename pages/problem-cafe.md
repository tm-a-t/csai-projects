---
title: "Problem Café: STEM Problem Searcher"
term: Fall 2025
type: Management Course Project
mentors: [ Dmitriy Botov, Fedor Bakharev ]
students: [ Ilya Kondakov, Maxim Levitskiy, Svyatoslav Suglobov, Artem Ivanov ]
keywords: [ STEM, education, problem search, AI, LaTeX ]
picture: /assets/problem_cafe_cover.png
pictureAlt: search interface showing "hard number theory problems for 9 grade"
---

High-quality contest and training problems are mostly stored in unstructured formats — PDFs, scans, and inconsistent LaTeX — which makes them difficult to search, filter, translate, and reuse.

As a result, creating targeted problem sets requires significant manual effort and does not scale.

## Report

We defined the following SMART goal: By December 20, deploy a website equipped with a better UI than problems.ru, featuring tools for building printable problem sets and an extendable database of marked STEM problems. The project aims to provide end users with an easy way to create papers, reach 25 weekly active users (WAU) within the first six months, maintain at least a 70% retention rate (measured as the share of users who create a file at least one day after their first one), and generate around 100 papers per month.

Our hypotheses:

- If teachers can quickly search and export problems by topics, they will spend less time on preparation because they will avoid manual search, selection, and formatting.<br>
  ⇒ Enable fast search and easy download
- If AI fills the problem data, curators will upload problems more effectively, because review takes less time than filling data.<br>
  ⇒ Build semi-automatic upload form

User stories:

<img src="/assets/problem_cafe_user_story_1.png" alt="User story 1: As a teacher, I want to browse an endless feed of problems on my lesson topic so that I can quickly compile problems on my topic for students">

<img src="/assets/problem_cafe_user_story_2.png" alt="User story 2: As a teacher, I want to quickly change adjacent categories so that I can efficiently find problems in related topics">

<img src="/assets/problem_cafe_user_story_3.png" alt="User story 3: As a teacher, I want to convert problems to PDF with a single click, so that I can instantly print or send them to students">

<img src="/assets/problem_cafe_user_story_4.png" alt="User story 4: As a site curator, I want to automatically fill problem metadata so that I don't have to enter it manually">

The result is available at [problem.cafe](https://problem.cafe).
