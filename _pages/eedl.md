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
---

# What is EEDL?

EEDL is our own custom hardware. It is made bby using an ESP32 connected to multiple different sensors to record a variety of environmental aspects all of which can be found below. EEDL takes it's data to a high degree of accuracy, taking multiple values in a row and using a little bit of mathematics and statistics it will calculate the average. For now we have decided that we will take the mean of the interquartile range.

EEDL will repeat this for each sensor and store the values in a structure called reading. Finally it will sequentially access a `.php` file—`write.php` from DBA—and upload the values from the reading structure.

In the case of a failure in uploading, the EEDL will continue to store the data locally on a builtin SD Card to ensure the data is not lost. Data from this SD Card can later be manually uploaded using another ESP32 device.

## Hardware
### Sensors (Subject to change depending on availability)

| **Sensor**                   | **Price (Rs)** | **Parameters Recorded**                                    | **Communication Method** | **Calibration**  |
|:----------------------------:|:--------------:|:----------------------------------------------------------:|:-------------------------:|:---------------:|
| **BME280**                   | 500            | Temperature (°C), Relative Humidity (%), Pressure (hPa)    | I2C                       | None            |
| **BH1750**                   | 400            | Light Intensity (lux)                                      | I2C                       | None            |
| **SCD41**                    | 6,000          | CO₂ Concentration (ppm)                                    | I2C                       | None            |
| **CCS811**                   | 1,500          | Smoke Concentration (ppm)                                  | I2C                       | None            |
| **PMS5003**                  | 4,000          | PM2.5 Concentration (µg/m³)                                | Serial                    | None            |
| **SPEC Sensors 3SP-CO-1000** | 5,600          | CO Concentration (ppm)                                     | Current?                  | None?           |
| **TGS822**                   | 3,000          | Methane Concentration (ppm)                                | Analog                    | Analog to ppm   |

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
| 7.1 | CO<sub>2</sub> concentration |
| 7.2 | CO concentration             |
| 7.3 | CH<sub>4</sub> concentration |
| 7.4 | Smoke concentration          |
| 7.5 | PM2.5 concentration          |
| 7.6 | Air Quality Index            |