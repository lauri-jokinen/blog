---
title: Creating a smart home -- in a tech student way
date: 2021-07-06T00:40:32+02:00
modified: 2021-07-06T09:11:41+03:00
tags: [smart-home]
---

# Why do I want to control my radiators?
I started making my smart home by controlling the temperature. Heating homes makes a big proportion of the energy consumption. Even though I live in a block of flats, and I cannot control the heating boiler downstairs, I can control the temperature by turning the knobs of the individual radiators. So, I wanted to control my radiators in a smart way, and found several solutions to this problem. In the market there are simple thermostats (they control the valve in order to retain a temperature set by the user), which are not very smart, but actually very effective. There are also very smart options, such as Tado, but they are expensive. I recommend you getting any kind of radiator thermostat, because even the cheapest option saves a lot of energy. The way I chose was pretty difficult, and it might not be your way.

# My project
I did some Googling, and found a good middle ground with possibility for some hacking as well. Eqiva eQ-3 radiator thermostats have built-in smart features, e.g., they can follow a weekly schedule. This feature in itself is enough for me, and because I found cheap second hand units from Poland (~25 € a piece incl. shipping), I bought them right away.

But the best feature of these thermostats is that they can also be controlled via Bluetooth. Bluetooth has a short range, so I'd need to be near them to control them with an Android app. However, there are computer scripts on Github for controlling exactly these devices. This means that I can have computer sitting at my home, and if I can control the computer via internet, then I can also control the thermostats via the computer's Bluetooth. Simply put, I can control the thermostats anywhere on the planet, rather than being inside my house.

I also found cheap Bluetooth temperature sensors, Xiaomi Mi, which we can also read via a computer script.

# Benefits and limitations of this project

This system cost about four times less than the cost of the Tado system. But the best thing was that I could start a new coding project which could save me money also on a long run and save a bit of the planet too. Limitations of this project is the Bluetooth range: if your house is massive (like more than 120 m^2), a single computer with Bluetooth may not be enough. In this situation you should look into connecting several computers together with SSL, or choose easier options.

# What do you need

* A computer that is running 24/7. A Raspberry Pi, or any old laptop is more than fitting for this task. I use an old Lenovo Ideapad which basically has less power than the newest Raspberry Pis. I run Ubuntu on my computer, but any Linux should be fine. I'm not sure if these instructions apply to Windows or Mac computers.
* An external Bluetooth adapter, with the range you need. I used a Logilink adapter with a 50 meter range. There are 100 meter adapters also.
* Bunch of Eqiva eQ-3 and Xiaomi Mi devices. As many as you need or want.
* Good Python skills. I'll give you pieces of the script, but I'll give you the pleasure of putting it all together.

The technical side is explained at my Github repository (link is at the end of this website).
