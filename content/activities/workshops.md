---
type: "page"
title: "QGIS User Conference 2026"
subtitle: "5-6 October 2026, Laax, Switzerland"
heroImage: "hero.webp"
heroLogo: "logo-white.webp"
heroMenu: "uc-2026"
heroIsUserConference: true
heroSize: "is-halfheight"
HasBanner: true
draft: false
sidebar: true
---

{{< content-start >}}

# Workshop Day

{{< rich-box-start >}}
{{< rich-content-start themeClass="coloring-6">}}

The Workshop Day takes place on **Wednesday, 7 October 2026** — the day after the main conference.

Workshops run for 4 hours including a coffee break, giving you enough time to go deep into a topic with hands-on guidance from experienced instructors. Two sessions are offered: a morning session and an afternoon session, with 5 (or 6) parallel workshops each. Lunch is included between the two sessions.

All workshops are held in English and require separate registration. Places are limited, so register early to secure your spot. A conference ticket is required to attend.

{{< rich-content-end >}}
{{< rich-box-end >}}

{{< rich-box-start >}}
{{< rich-content-start themeClass="coloring-2">}}

## Practical Information

| | |
|---|---|
| Date | Wednesday, 7 October 2026 |
| Morning session | 09:00–12:30 (incl. coffee break) |
| Lunch | 12:30–14:00 (included in registration) |
| Afternoon session | 14:00–17:30 (incl. coffee break) |
| Location | Laax Murschetg |
| Price | €170, registration required |
| Capacity | Limited — register early |

Registration opens together with conference tickets. Workshops can be added during ticket purchase or later, subject to availability.

[Register on ti.to/qgis/uc-2026](https://ti.to/qgis/uc-2026)

{{< rich-content-end >}}
{{< rich-box-end >}}

---

## Morning Session — 09:00–12:30

{{< columns-start >}}
{{< column-start class="is-half" >}}

{{< rich-box-start >}}
{{< rich-content-start themeClass="coloring-1">}}

### Working with Point Cloud Data in QGIS

**Speakers:** Kurt Menke, Martin Dobias

**Tentative capacity:** 30

One of the areas in which QGIS has developed the most in recent years is the support of point cloud data. There are now many options for displaying point clouds in both 2D and 3D and in the elevation profile panel. There are also many tools for processing point clouds. It is now even possible to edit point cloud attributes.

This comprehensive workshop will teach you how to work with point cloud data in QGIS. You will learn how to style point clouds to highlight important features, and process and edit them to extract meaningful information. The workshop you'll learn to:

* Load and display point clouds in 2D.
* Explore point clouds using Elevation profiles.
* View point clouds in 3D.
* Create Virtual Point Clouds (VPCs).
* Use Point Cloud Processing Tools to filter, convert and analyze point cloud datasets.
* Edit Point Cloud attributes.
* Use PDAL Wrench

**Software:**
To get the most out of this workshop you are encouraged to install QGIS (v 4.x). There are several important enhancements and new processing tools for working with point clouds which are included with the release of QGIS 4.

Note 1: If you will be using a corporate laptop where permissions can be problematic, consider getting these installations completed with IT before you travel to the conference.

Note 2: It is recommended that you also bring a tablet. There is an accompanying step-by-step tutorial. Having a tablet will allow you to read the tutorial on your tablet while working on your laptop.

**Data:** We will provide the data for the workshop.

*This workshop will be co-taught by Kurt Menke (Septima) and Martin Dobias (Lutra Consulting).*

{{< rich-content-end >}}
{{< rich-box-end >}}

{{< column-end >}}
{{< column-start class="is-half" >}}

{{< rich-box-start >}}
{{< rich-content-start themeClass="coloring-1">}}

### Getting started with Mergin Maps

**Speakers:** Saber Razmjooei, Julien WADDLE

**Tentative capacity:** 30

Mergin Maps is an open-source mobile application based on QGIS that makes field data collection easier.

With Mergin Maps, you can take your QGIS projects with you anywhere in the field. You can then add, store, and edit your data collaboratively, synchronizing it in real time between team members and from the mobile app to QGIS. In this workshop, discover all the benefits of collecting data with Mergin Maps compared with a traditional approach.

Discover how the Mergin Maps ecosystem integrates with QGIS:

* The Mergin Maps QGIS plugin
* The Mergin Maps mobile app
* Mergin Maps Server and Web

This workshop offers an introduction to using Mergin Maps: converting a QGIS project into a Mergin Maps-compatible project, creating forms suited to mobile interfaces, and putting mobile data entry into practice with the app.

The workshop will also cover best practices for maintaining a Mergin Maps project, as well as an overview of the advanced features offered by Mergin Maps, including photo management, GNSS receiver support, synchronization with a PostGIS database, geofencing, and more.

And also… a look at the future improvements we are currently working on for upcoming versions of Mergin Maps!

{{< rich-content-end >}}
{{< rich-box-end >}}

{{< column-end >}}
{{< columns-end >}}

{{< columns-start >}}
{{< column-start class="is-half" >}}

{{< rich-box-start >}}
{{< rich-content-start themeClass="coloring-1">}}

### Level up your QGIS plugin development skills

**Speakers:** Joona Laine, Riikka Nousiainen

**Tentative capacity:** TBD

Developing software as a team typically requires choosing and following coding standards to ensure things run smoothly (larger the team, stricter the rules). QGIS plugin development is no exception. This workshop aims to introduce modern Python development tools for QGIS plugin development.

During the session, we will create a simple QGIS plugin and set up the development environment using best practices. We will cover at least the following topics:

* Configuring Python formatting and linting tools alongside with modern package management (flake8-qgis, ruff, mypy, prek, uv)
* Trying out writing unit tests for the plugin and its UI components (pytest-qgis, pytest-qt)
* Learning how to update translations (qgis-plugin-dev-tools, Qt Linguist)
* Setting up a CI pipelines for running tests and publishing your plugin automatically with GitHub Actions

{{< rich-content-end >}}
{{< rich-box-end >}}

{{< column-end >}}
{{< column-start class="is-half" >}}

{{< rich-box-start >}}
{{< rich-content-start themeClass="coloring-1">}}

### Building QGIS Teamspace with NextGIS Web: from local deployment to version-controlled collaborative editing

**Speakers:** Eduard Kazakov, Aleksei Novikov

**Tentative capacity:** 12

QGIS is widely used for geospatial analysis, editing, and cartography, but organizing collaborative workflows for teams working on shared datasets can be challenging. Common issues include synchronizing desktop and web environments, managing simultaneous edits, tracking data changes, and coordinating work across multiple users.

This hands-on workshop introduces an open-source workflow for collaborative QGIS environments using NextGIS Web — an open-source Web GIS server designed for publishing and managing geospatial data and web maps. It integrates closely with QGIS and provides features useful for collaborative teams, including:

* Publishing QGIS projects to the web while preserving map styles (QGIS is used as the rendering backend to ensure strong desktop–web style compatibility).
* Connecting multiple QGIS instances to shared server-hosted datasets.
* Simultaneous data editing from QGIS with interactive conflict resolution.
* Working with feature attachments (photos, documents, and other files) from both QGIS and the web interface.
* Built-in version control for vector datasets, allowing teams to track who changed what and when, review history, and roll back changes.
* Flexible user roles and permissions for managing team access.

During the workshop, participants will deploy their own NextGIS Web instance locally using Docker, perform initial configuration, and explore practical workflows for managing shared spatial data.

Attendees will learn how to:

* deploy and configure a NextGIS Web server,
* publish QGIS projects as web maps,
* connect QGIS to shared server datasets,
* perform collaborative editing,
* track and review data changes using version control.

The workshop will conclude with a multi-user exercise, where participants collaborate on a shared QGIS project to experience real-world team workflows including simultaneous editing and change tracking.

**Requirements:** Docker Engine installed and working on your laptop (local deployment is part of the workshop). If Docker cannot be run locally, cloud instances can be provided. QGIS Desktop installed. Basic experience working with QGIS. Basic familiarity with Docker is helpful but not required.

{{< rich-content-end >}}
{{< rich-box-end >}}

{{< column-end >}}
{{< columns-end >}}

{{< columns-start >}}
{{< column-start class="is-half" >}}

{{< rich-box-start >}}
{{< rich-content-start themeClass="coloring-1">}}

### QFieldCloud deep dive: self-hosting, APIs and custom integrations

**Speaker:** Ivan Ivanov

**Tentative capacity:** 16

QFieldCloud powers field data collection for thousands of projects, but most users only see the surface. This hands-on workshop goes under the hood.

The goal is to spin up a self-hosted QFieldCloud instance from scratch, then work through the official Python SDK (qfieldcloud-sdk) to automate real workflows: creating and managing projects, uploading QGIS project files, triggering packaging jobs, polling job status, and downloading packaged data programmatically.

We'll also cover organization and collaborator management via the API, and dig into the job/package cycle that sits at the heart of any automated field data pipeline — giving participants the tools to wire QFieldCloud into their own infrastructure, whether that's a CI/CD pipeline, a data processing script, or a lightweight custom app. If time permits, we'll sketch out a small LLM-assisted layer on top of the API.

*Aimed at developers, GIS engineers and technically-minded power users. Bring a laptop with Python installed.*

{{< rich-content-end >}}
{{< rich-box-end >}}

{{< column-end >}}
{{< column-start class="is-half" >}}

{{< rich-box-start >}}
{{< rich-content-start themeClass="coloring-1">}}

### Building an Open System of Systems in QGIS for AI Driven Urban Environmental Monitoring and Decision Support

**Speaker:** Sultan Hasan Alsultan

**Tentative capacity:** 30

Urban environmental challenges such as illegal dumping, land degradation, and ground instability increasingly require integrated, data-driven responses that go beyond isolated geospatial analysis. While a wide range of tools exists for satellite processing, spatial modelling, and field data collection, these systems often operate independently, limiting their effectiveness in real-world operational environments. This workshop introduces a practical framework for building an open System of Systems (SoS) using QGIS as a central integration platform for urban environmental monitoring and decision support.

The workshop positions QGIS not merely as a desktop GIS tool, but as an orchestration layer capable of connecting heterogeneous subsystems, including satellite-based Earth observation (e.g., Sentinel-1 InSAR products), AI-assisted detection workflows, multi-criteria decision analysis (MCDA), and field-based data collection. Participants will learn how to integrate these components into a coherent workflow that transforms raw geospatial data into actionable intelligence.

Through guided, hands-on sessions, participants will work with real-world datasets to (1) import and visualize time-series InSAR outputs, (2) integrate multiple spatial indicators relevant to urban environmental conditions, (3) implement MCDA techniques within QGIS for spatial prioritization, and (4) conceptualize how these analytical components can be embedded within a broader System of Systems architecture supporting operational decision-making.

The workshop emphasizes open-source tools, reproducible workflows, and interoperability, aligning with current discussions on GIS sovereignty and sustainable digital infrastructure. By the end of the session, participants will gain both technical skills and conceptual understanding of how QGIS can be leveraged as a strategic platform for integrating data, analytics, and operations in complex urban systems.

This workshop is suitable for GIS practitioners, urban planners, researchers, and decision-makers interested in advancing from standalone spatial analysis toward integrated, system-level geospatial solutions.

{{< rich-content-end >}}
{{< rich-box-end >}}

{{< column-end >}}
{{< columns-end >}}

---

## Afternoon Session — 14:00–17:30

{{< columns-start >}}
{{< column-start class="is-half" >}}

{{< rich-box-start >}}
{{< rich-content-start themeClass="coloring-3">}}

### Hydrological Analysis in QGIS

**Speaker:** Hans van der Kwast

**Tentative capacity:** 16

In this workshop, we will explore the diverse range of tools available in QGIS for conducting comprehensive hydrological analysis. Participants will gain hands-on experience with tools from GRASS, SAGA, WhiteboxTools, and PCRaster processing provider plugins, as well as other specialized plugins designed for hydrological studies.

Our interactive session will cover practical exercises on deriving streams and catchments, and calculating essential morphometric parameters such as drainage density, concentration time, and hypsometric curves. By the end of the workshop, attendees will have a solid understanding of how to leverage QGIS for hydrological analysis, enabling them to apply these techniques to their own projects and research.

{{< rich-content-end >}}
{{< rich-box-end >}}

{{< column-end >}}
{{< column-start class="is-half" >}}

{{< rich-box-start >}}
{{< rich-content-start themeClass="coloring-3">}}

### QGIS Graphical Modeler: Build Smarter Workflows with Algorithms and Expressions

**Speaker:** Berit Mohr

**Tentative capacity:** 30

Tired of repetitive GIS workflows that consume time and lead to errors? This hands-on workshop will show you how to automate and streamline spatial data analysis using QGIS expressions, built-in geoprocessing algorithms, and the Graphical Modeler — without writing a single line of code.

In today's GIS workflows, repetitive tasks and manual processing can be time-consuming and prone to errors. Whether you are transferring data between layers, running step-by-step spatial analyses, or performing complex geoprocessing tasks, automation can significantly improve efficiency and accuracy. Based on a used case we will create an efficient, repeatable workflow using OSM data and openly available satellite imagery.

**What you'll learn:**

* How to use QGIS expressions to enhance vector and raster analysis
* How to combine algorithms into automated workflows using the Graphical Modeler
* How to process and analyze spatial data without scripting
* How to work with real-world open datasets in a structured way

**Workshop structure:**

1. Introduction to QGIS Graphical Modeler – we discuss the main elements and logic behind the tool
2. Vector & Raster Analysis – Learn how to apply expressions and algorithms to perform meaningful spatial operations (e.g., selections, buffer, raster calculations).
3. Workflow Design – Manually build step-by-step processing chains using QGIS tools and expressions.
4. Model Automation – Use the Graphical Modeler to convert your workflow into a repeatable, parameterized model.

By the end of the session, you'll have practical experience building robust, automated models that improve efficiency, reduce errors, and boost the quality of your spatial analyses — all within the QGIS environment.

{{< rich-content-end >}}
{{< rich-box-end >}}

{{< column-end >}}
{{< columns-end >}}

{{< columns-start >}}
{{< column-start class="is-half" >}}

{{< rich-box-start >}}
{{< rich-content-start themeClass="coloring-3">}}

### Introduction to QField plugin authoring Workshop

**Speaker:** Mathieu Pellerin

**Tentative capacity:** 30

For almost two years now, QGIS' best field companion QField has gained a plugin framework that allows users to expand the capabilities of QField through QML and Javascript. This workshop introduces the framework and goes through practical examples aimed at empowering the participants into writing their own plugins.

The workshop will introduce participants to QField's plugin framework and its two main plugin types: app-wide plugins and project-scoped plugins. We will look into the decision-making around settling on Javascript/QML as the scripting language and look at its strengths.

We will then go through several practical plugin building examples that will cover:

* Integration with online REST API endpoints
* Georeferenced visual map canvas overlays in QML language
* Feature creation and iteration via plugin
* Customization of QField user interface

The workshop will also provide participants with resources to further increase their knowledge beyond the workshop session itself.

{{< rich-content-end >}}
{{< rich-box-end >}}

{{< column-end >}}
{{< column-start class="is-half" >}}

{{< rich-box-start >}}
{{< rich-content-start themeClass="coloring-3">}}

### Click, click, click… or maybe QGIS UI automation? (without Python)

**Speaker:** Michal Pilarski

**Tentative capacity:** 30

During the workshop, participants will learn how to reduce repetitive manual tasks in QGIS by automating the user interface. The workshop will use Robot Framework and the QGISLibrary package, which make it possible to control a desktop application without writing Python code. Examples will include automating clicks, keyboard actions, opening tools, and performing typical GIS operations, helping to speed up work and reduce the number of potential errors. The workshop will also be enriched with AI vibecoding techniques to support faster creation of automation scenarios.

**3 Key Takeaways:**

1. Learn how to automate repetitive tasks in QGIS without writing Python code.
2. Understand how to use Robot Framework and QGISLibrary to control the QGIS user interface.
3. Discover how vibecoding can help create automation scenarios faster and more intuitively.

**Agenda:**

1. Introduction to QGIS UI automation
2. Overview of Robot Framework and QGISLibrary
3. Setting up the environment
4. Automating clicks, menus, and tools in QGIS
5. Creating simple automation scenarios
6. Using AI vibecoding to generate automation ideas and scripts
7. Running, testing, and improving workflows
8. Q&A and discussion

{{< rich-content-end >}}
{{< rich-box-end >}}

{{< column-end >}}
{{< columns-end >}}

{{< columns-start >}}
{{< column-start class="is-half" >}}

{{< rich-box-start >}}
{{< rich-content-start themeClass="coloring-3">}}

### Setting up your own self-hosted data capture infrastructure with Mergin Maps

**Speaker:** Julien WADDLE

**Tentative capacity:** 12

Mergin Maps is built on an ecosystem of components that can also be deployed and used locally for development, testing, and integration purposes.

If you want to really understand how Mergin Maps works under the hood, the best way is to run the whole stack yourself. In this workshop, we're going to walk through setting up Mergin Maps Community Edition (CE) locally on your own machine.

Having a local setup is incredibly useful. Instead of testing things on a live server, you get a fast, isolated environment where you can freely experiment. We'll show you exactly how the database, server, and client apps connect. It's the perfect sandbox for debugging issues, trying out custom integrations, or just getting comfortable with the architecture. By the end of the session, you'll have a working local instance and a much better grasp on how to manage the platform on your own terms.

{{< rich-content-end >}}
{{< rich-box-end >}}

{{< column-end >}}
{{< columns-end >}}

{{< content-end >}}
