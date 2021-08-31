---
title: Controlling your radiators – in a tech student way
date: 2021-07-06T01:40:32+03:00
modified: 2021-08-31T11:40:21+03:00
tags: [smart-home]
---

## Why do I want to control my radiators?
I started making my smart home by controlling the temperature. Heating homes makes a big proportion of the energy consumption. So, I wanted to control (turn the knobs) my radiators in a smart way, and found several solutions to this problem. The simplest and cheapest option is a passive thermostatic radiator valve (TVR) which is already found on most radiators (at least in Finland). A smart and expensive option, such as Tado, lets you e.g. schedule cooler temperatures for the night time which saves even more energy. I recommend getting any kind of radiator thermostat right now, because even a TRV saves energy and the investment will pay you back quickly. There is a smart thermostat for every budget.

The path I chose was pretty difficult, because it involves quite a bit of coding in Python. But if your interested, please read more!

## My project
I did some Googling, and found a good middle ground radiator thermostats with a possibility for some hacking as well. Eqiva eQ-3 radiator thermostats have built-in smart features, e.g., they can follow a weekly schedule. This feature in itself is enough for me, and because I found cheap second hand units from Poland (~25 € a piece incl. shipping), I bought them right away.

The best feature of these thermostats is that they can be controlled via Bluetooth. Bluetooth has a short range, so I’d need to be near them to control them with an Android app. However, there are computer scripts on Github for controlling exactly these devices. This means that I can have a computer sitting at my home, with internet and Bluetooth, allowing me to control the thermostats anywhere on the planet, rather than being inside my house.

I also found cheap Bluetooth temperature sensors, Xiaomi Mi. I found computer scripts for these devices as well. I plan to add more different kinds devices to this system in the future.

## Benefits and limitations of this project

This system cost about four times less than the cost of the Tado system. But the best thing was that I could start a new coding project which could save me money also on a long run and save a bit of the planet too. Limitations of this project is the Bluetooth range: if your house is massive (like more than 120 m^2), a single computer with Bluetooth may not be enough. In this situation you should look into connecting several computers together with SSL, or choose easier options.

## What do you need

* A computer that is running 24/7. A Raspberry Pi, or any old laptop is more than fitting for this task. I use an old Lenovo Ideapad which basically has less power than the newest Raspberry Pis. I run Ubuntu on my computer, but any Linux should be fine. I’m not sure if these instructions apply to Windows or Mac computers.
* An external Bluetooth adapter, with the range you need. I used a Logilink adapter with a 50 meter range. There are 100 meter adapters also.
* Bunch of Eqiva eQ-3 and Xiaomi Mi devices. As many as you need or want.
* Good Python skills. I’ll give you pieces of the script, but I’ll give you the pleasure of putting it all together.

The technical side is explained at my Github repository (link is at the end of this website).
