---
layout: project
title: DBA
img: icons/DBA.png
permalink: /DBA/
project: true
nav: true
nav_order: 5
icons:
  - file: php/php-original.svg
    site: devicons
  - file: https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/mysql/mysql-original.svg
repository: 
  - GreenScope/DBA
description: >
  Program files for interacting with the GreenScope Database, enabling secure data upload and extraction via API key authentication 
---

# What is DBA?

DBA (Database Access) is a system designed to securely manage real-time sensor data from EEDL, our custom hardware. The system ensures efficient data collection, storage, and retrieval while maintaining security through API key authentication.

## How It Works

### Software

{% include figure.liquid loading="eager" path="/assets/img/charts/DBA%20Write%20Code.svg" title="Flowchart" class="img-fluid rounded z-depth-1" style="background-color: white" %}

<div style="display: flex; justify-content: center;"><a href="/assets/pdf/DBA%20Write%20Code.pdf" target="_blank" rel="noopener noreferrer">
<p style="font-size: 1.5em">View PDF <i class="fa-solid fa-file-pdf"></i></p>
</a></div>

### Real-Time Data Collection

EEDL gathers live sensor readings from our diverse range of sensors. This data is processed and temporarily stored in the Live Sensor Value (LSV) table. For database storage and organization, the collected data is formatted into structured tables and stored in the database. 

After every predefined time interval, the latest reading of each sensor is recorded in its corresponding permanent record table. The interval is determined based on location, ensuring that consecutive records of the same location maintain a consistent time difference.

This website fetches stored data from the database, dynamically updating tables with real-time values. Users can access historical and live sensor readings for monitoring and analysis using this website!

## Database Structure

The database consists of 2X + 1 tables, where X is the number of sensors.

1. X Permanent Recording Tables: One table per sensor, permanently storing recorded data.
2. X Live Recording Only Tables (LSV): One table per sensor, containing only the latest recorded value.
3. 1 Location Table: Stores information for each EEDL set up, with unique API keys for authentication.

Each EEDL will have a unique API Key, which will be used to verify its authenticity.

## Core Files in the Repository

1. `write.php` - Handles incoming sensor data, storing it in the database and temporarily saving live values in the LSV table.
2. `live_sensor.php` – Retrieves the latest real-time reading from a specified sensor.
3. `full_sensor.php` – Extracts complete sensor data from the database and provides it as a CSV file for download.

This repository does not contain database credentials, ensuring security. It is only to show the source code and give a better understanding of it.
