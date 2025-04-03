---
layout: about
title: Home
permalink: /
subtitle: About GreenScope

profile:
  align: right
  image: icons/GS.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Environmental Archive</p>
    <p>ESP32, PHP, SQL and Jekyll</p>
social: true
---


## Brief Description
GreenScope is a an Archive that stores information regarding the environment of Pakistan. It uses it's own apparatus called EEDLs (ESP Environmental Data Loggers) to gather relevant information. EEDLs are mini weather stations which take live readings and transmit them to the GreenScope database. GreenScope offers features such as graphing, AI data analysis and API keys to import readings for your own projects.

## Goal
We wish to promote the usage of Robotics in Measuring & Monitoring the environmental conditions of Pakistan at a greater extent. We wish to display a method cheap enough so that it can be used in remote non-urban areas. For this purpose the apparatus we developed, EEDL, costs roughly Rs 50K. We wish to make the data collected by GreenScope available to all including students to promote student projects based upon environment. This is why we not only provide an AI chatbot to analyze the data based on user requirements, but we also provide API keys to import the data into your own program.

## Scalability
At the current stage, Green Scope is just going to record data from different parts of Lahore, Pakistan, but the main selling point of our site is it's scalability. We are creating Green Scope in such a way that minimizes initial configurations and helps in the ease of expansion of the system. We intend to use a unified transmission setup that can be configured directly from the EEDL allowing us to introduce as many new EEDLs with no changes to the website. Should there be a need to make changes to the website we are using Jekyll, a static site builder, to ensure that any additions can be made by simply filling up a few variables.

---

# The Plan

{% include figure.liquid loading="eager" path="/assets/img/charts/Mind%20Map.svg" title="Mind Map" class="img-fluid rounded z-depth-1" style="background-color: white" %}

<div style="display: flex; justify-content: center;"><a href="/assets/pdf/Mind%20Map.pdf" target="_blank" rel="noopener noreferrer">
<p style="font-size: 1.5em">View PDF <i class="fa-solid fa-file-pdf"></i></p>
</a></div>

---

## EEDL
EEDL stands for *ESP32 Environmental Data Logger*. It uses multiple dedicated sensors to take readings and calculate certain values and transmits the values to the GreenScope database using PHP and SQL. The ESP32 serves as the control unit, transmitter and a sequencer.

---