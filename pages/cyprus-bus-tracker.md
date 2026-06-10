---
title: CyprusBusTracker. Real-Time Bus Tracking for Cyprus
term: Spring 2026
type: Project Seminar Course Project
mentors: [ Tatiana Berlenko ]
students: [ Anton Kogun, Sergei Gordeev, Galalu Anton ]
keywords: [ cyprus, transport, gtfs, realtime, routing, telegram ]
picture: https://github.com/user-attachments/assets/8dbf7c1a-5420-46c4-8b2a-d19a84ca6388
pictureAlt: CyprusBusTracker interface with map, arrivals, routes, and Telegram alerts
---

Public transport data in Cyprus is fragmented across regional operators and is usually published as raw GTFS schedules plus a national GTFS-Realtime feed. Existing rider tools do not consistently combine schedules, live bus locations, route planning, and English-friendly access in one interface, so commuters and visitors often need multiple apps or pages.

This is especially inconvenient on routes with 30–60 minute headways, where missing one bus can seriously affect a trip. The data is available publicly, but it needs to be unified into a practical service with a live map, route planning, stop arrivals, and proactive notifications.

## Report

This project implements a Cyprus bus tracking and routing system based on public GTFS and GTFS-Realtime data. The backend merges static schedules from seven district feeds, stores them in PostgreSQL, consumes live vehicle and trip-update feeds, and serves a Leaflet-based web map with stops, buses, route shapes, stop-arrival popups, and point-to-point trip planning.

Routing is handled by OpenTripPlanner using the merged GTFS feed and OpenStreetMap data for Cyprus. The web interface lets users inspect live buses, view arrivals for a selected stop, draw full route shapes, and generate itineraries with walking and bus legs. A Telegram bot adds subscription-based notifications for selected stop-route pairs and sends alerts shortly before the bus reaches the stop.

The system is deployed as a Docker Compose stack with separate containers for the FastAPI backend, PostgreSQL, OpenTripPlanner, and the Telegram bot. The backend is written in Python 3.11, uses SQLAlchemy asyncio and pandas for GTFS ingestion, exposes REST endpoints through FastAPI OpenAPI, and refreshes schedule data daily via APScheduler. The architecture is mostly reusable for other regions with GTFS and OSM data; Cyprus-specific parts are the feed URLs and the bundled island map data.
