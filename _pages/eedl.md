---
layout: project
title: EEDL
img: EEDL.png
permalink: /EEDL/
project: true
nav: true
nav_order: 4 
icons:
  - file: https://www.espressif.com/sites/all/themes/espressif/images/logo-guidelines/primary-vertical-logo.png
repository:
  - GreenScope/EEDL
description: >
  A custom ESP32 based mini weather station. The EEDL is the hardware for the GreenScope project.
pretty_table: true
---

# What is EEDL?

EEDL is our own custom hardware. It is made bby using an ESP32 connected to multiple different sensors to record a variety of environmental aspects all of which can be found below. EEDL takes it's data to a high degree of accuracy, taking multiple values in a row and using a little bit of mathematics and statistics it will calculate the average. For now we have decided that we will take the mean of the interquartile range.

EEDL will repeat this for each sensor and store the values in a structure called reading. Finally it will sequentially access a `.php` file—`write.php` from DBA—and upload the values from the reading structure.

In the case of a failure in uploading, the EEDL will continue to store the data locally on a builtin SD Card to ensure the data is not lost. Data from this SD Card can later be manually uploaded using another ESP32 device.

## Software

{% include figure.liquid loading="eager" path="/assets/img/EEDL%20Main%20Code.svg" title="Flowchart" class="img-fluid rounded z-depth-1" style="background-color: white" %}

<div style="display: flex; justify-content: center;"><a href="/assets/pdf/EEDL%20Main%20Code.pdf" target="_blank" rel="noopener noreferrer">
<p style="font-size: 1.5em">View Flowchart <i class="fa-solid fa-file-pdf"></i></p>
</a></div>

## Hardware
### Sensors

| **Sensor**  | **Parameters Recorded**                  | **Communication Method** |
|:-----------:|:----------------------------------------:|:------------------------:|
| **DHT11**   | Temperature (°C), Relative Humidity (%)  | Single Data Line         |
| **BMP280**  | Pressure (hPa)                           | I2C                      |
| **BH1750**  | Light Intensity (lux)                    | I2C                      |
| **MQ2**     | Smoke Concentration (ppm)                | Analog                   |
| **MQ4**     | Methane Concentration (ppm)              | Analog                   |
| **MQ7**     | CO Concentration (ppm)                   | Analog                   |
| **PMS5003** | PM1.0, PM2.5, PM10 Concentration (µg/m³) | Serial                   |
| **MQ135**   | Air Quality Index                        | Analog                   |

---

## List of recordings

| No# | Quantity Name                |
|:---:|:-----------------------------|
| 1   | Temperature                  |
| 2   | Relative Humidity            |
| 3   | Absolute Humidity            |
| 4   | Dew Point                    |
| 5   | Atmospheric Pressure         |
| 6   | Light Intensity              |
| 7   | Air Content                  |
| 7.1 | MQ135 Raw Voltage            |
| 7.2 | CO concentration             |
| 7.3 | CH<sub>4</sub> concentration |
| 7.4 | Smoke concentration          |
| 7.5 | PM2.5 concentration          |
| 7.6 | Air Quality Index (Estimate) |