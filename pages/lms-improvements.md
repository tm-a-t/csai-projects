---
title: "LMS Improvements"
term: Fall 2025
type: Management Course Project
mentors: [ Alexander Avdiushenko ]
students: [ Artem Abaturov, Sofia Petrenko ]
keywords: [ LMS, UX, editor, filters, testing ]
picture: /assets/lms-improvements-cover.png
pictureAlt: Add assignment page with rich text editor
---

The LMS used in JB University Programs is part of everyday work: students read materials and submit assignments there, and instructors review work and discuss it in comments. Over time, several annoying issues have built up. The text editor is old and fragile: it often breaks formatting, behaves badly when you paste text from other sources, and has almost no proper support for images and other media. This leads to oddly formatted assignments and extra support requests.

There are other UX problems too. Filters in the assignment list reset whenever you refresh the page or follow links, so students and instructors have to set them up again and again. Editing a comment opens a separate page, which makes you lose the context of the discussion and slows down simple corrections.

For developers, the system is also inconvenient. It still uses a pipenv-based setup for Python dependencies, builds in CI are slow, and there are very few UI tests for important user flows. Because of this, some bugs and old issues can make it into production more easily, and fixing things takes longer than it should.

## Report

In this project we focused on these specific pain points and tried to make the LMS noticeably more comfortable both for users and for developers. First, we replaced the old text editor with a modern editor based on tiptap and rolled it out to the main LMS pages where people write and read content. The new editor keeps formatting more reliably, handles pasted text more cleanly, supports working with images, and has a simpler, clearer toolbar.

Next, we made assignment list filters remember themselves. The system now stores the selected filters for each user and restores them after a page refresh or when you come back to the list. This reduces repetitive clicking and helps users keep the exact set of assignments they are interested in.

We also changed how comment editing works. Instead of opening a separate edit page, a comment can now be edited inline, directly where it is shown. This keeps the discussion on one screen, makes quick fixes much easier, and reduces the number of extra page loads.

On the technical side, we switched from pipenv to a more modern dependency tool (uv). In parallel, we added UI tests for three key scenarios: working with the editor, using filters in the assignment list, and editing comments inline.
