---
title: "TeamChem: AI-Powered Team Builder"
term: Spring 2026
type: Project Seminar Course Project
mentors: [ Tatiana Berlenko ]
students: [ Aleksei Gurianov, Ilya Mikhaylov ]
keywords: [ HR, team building, AI, recruitment, web app ]
picture: https://github.com/user-attachments/assets/621a9821-d08f-4944-a072-aa2818cc9deb
pictureAlt: TeamChem interface showing team recommendations and workflow screens
---

Assembling a project team is a multi-objective decision made under pressure. HR leads must balance candidate pools, budgets, required roles, and risk tolerance, while also reasoning about how people might work together. Experienced hiring managers can defend their choices, but this judgment is hard to transfer to new HR leads or founders making first technical hires.

Most existing tools miss this decision point. Applicant tracking systems score individual candidates, and capacity planners mostly reshuffle internal staff. TeamChem focuses on the practical question: given a candidate pool, budget, and constraints, recommend a team and clearly explain why.

## Report

TeamChem is a full-stack web app for building project teams from candidate data. A user uploads candidate dossiers (CVs, screening notes, and psychological assessments), sets the hiring baseline, and generates a recommended team with fit scores, projected cost, risk labels, and short explanations for each selection.

The intended workflow uses an OpenAI-backed multi-step pipeline: individual candidate analysis, team selection against the baseline, and team-dynamics evaluation. When no OpenAI key is configured, the system falls back to deterministic scoring based on role-token overlap, skills, and file evidence; this deterministic path is shown in the screenshots.

The project runs as a Docker Compose stack with a React + TypeScript frontend, FastAPI backend, Postgres database, and MinIO object storage for uploaded PDFs. The workflow covers landing and sign-in pages, project dashboard, baseline configuration, candidate import, generated team report, dynamics explanation, file upload, and activity history. The result is an auditable recommendation flow: an HR lead can upload a ZIP, configure the baseline, generate a team, inspect risks and gaps, and later reconstruct the decision from recorded events.

<img src="https://github.com/user-attachments/assets/621a9821-d08f-4944-a072-aa2818cc9deb" alt="TeamChem product screens">
