import { portfolioTabTypes } from './port-portfolio';

export interface ModalProject
{
    title : string;
    desc : string;
    projectImg: string;
    hasGallery: boolean;
    projectType: int;
    previewImg: string;
};

const lunarLoggerDesc = `
Lunar logger is a tracking app used for managing the status and tasks of projects.
Written using dotnet's ASP MVC it allows users to create issues within projects to track the progress
of tasks. The web app allows users to add other users to a proejct and assign issues to them.
Each project consists of categories and each category holds issues. Switching issues between
categories is as simple as click and dragging the issue from one column to the other.
The issues all track the created date, modified date, and estimated time for completion.
The project uses Razor pages, C#, dotnet, javascript and microsoft SQL.
`

const networkedCoffeeDesc = `
Ever wanted to make coffee from the comfort of your own bed? That is certianly possibly these days
with smart coffee makers allowing you access from your phone. This project I created my own smart coffee
maker using an ESP32 and wifi connectivity. The application allows you to send an HTTP message over you wifi
network to toggle a coffee machine on/off. I plan am on creating a full functional website for the
coffee maker that can be used to control it in a user friendly way. I also want to create a PCB for the necessary
circuitry to clean things up. (The initial project was heavily inspired by a video done by Low Level Learning on Youtube)
This project utilized embedded C and the ESP-IDF. It also required a good understanding of the HTTP protocol and some web
skills for making the webpage
`

const magicMirrorDesc = `
The magic mirror is a project I did where using two way glass, a raspberry pi and the
magic mirror repo (need to add link). I created a smart mirror that displayed all sorts of
different things. The date, time, custom messages, current news headlines. Most of these come
with the base magic mirror repo but I am in the process of creating some of my own MM modules.
The first one I plan to make is a module that shows/generates a daily workout plan each day.
This project utilizied Linux, javascript and embedded skills for setting up the Raspberry Pi
and configring magic mirror. Also some real world hardware skills for connecting everything up
and actually building the mirror and frame.
`

const dashboardDesc = `
An embedded car dashboard using an MSP432 and various peripheral devices. The car dashboard used I2C and SPI to communicate
with peripheral devices and create a user friendly interface. This interface included an odometer, blinkers, speedometer
and a menu system using an LCD display. The menu could be customized using various colors and displayed the time,
temperature and speed on different menus. The dashboard also could take commands from a smartphone over bluetooth
using a simple off the shelf peripeheral that sent data to the MSP432. This project was selected to be 1 of 3 shown off
at GVSU's project showcase (voted on by classmates). It utilized embedded C and understanding various protocols used in embedded
systems like I2C, SPI, as well as other lowlevel concepts
`

const napsterDesc = `
GV napster is a peer to peer transfer app that supports a simplified version of the FTP protocol. The app provides a GUI that allows two way
transfers between other instances of GV Napster using network sockets. GV Napster supports commands like connect, list, stor, retr and quit.
Using these commands a user can store retrieve and list files that other instances have. All of which show up in a nicely formatted table
so the user can quickly determine which file they'd like to grab. The original backend of this app was written in pure C but due to the GUI
requirement and time constraints was converted to Python. This project utilized python, Qt, threading and the use of network sockets to
communicate between processes.
`

const pcbDesc = `
This project was for a circuit class I took in my undergrad where we were tasked with creating a speaker using a PCB board.
The design allowed for output of two speakers, and a microphone that amplified a users voice. It also took in a aux cord in
order to play sound so music from a phone could be played over the speaker. The speaker was also required to be adjustable in volume
using potentiometers. This project was also selected to be 1/3 shown off at GVSU's project showcase (voted on by classmates). This project involved a great understanding of circuit design and the differnt types of circuits that go into turning sound waves to amplified speaker output.
`

const doomPendDesc = `
This was my senior project for GVSU's engineering program. The project was done for Dornerworks and the goal was to rework an outdated
existing demo that they had to take to trade shows. The demo consisted of 2 VM's running on seL4: the first playing the classic game doom
and the other controlling an inverted pendulum (a ruler that balances and adjusts itself using PID controls). When a large red button
was pressed the doom game would shutdown while the pendulum continuned running. For my part of the project I rewrote the inverted pendulum
algorithim in C and FreeRTOS and also got freeRTOS running as a guest under seL4. I also assisted in doing controls calculations
to improve the robustness of the pendulum algorthim since some parameters of the system were changed while making improvements.
The project was a success and Dornerworks still takes it to trade shows to show off seL4 capabilities. This project involved Linux,
embedded, and seL4 skills to succeed.
`
export const projects : ModalProject[] = [
    createProject("Lunar Logger", lunarLoggerDesc, "rocket.svg", false, 0, "lunar-logger-demo.png"),
    createProject("Networked Coffee", networkedCoffeeDesc, "coffee.svg", false, 0, "magic-mirror.png"),
    createProject("Car Dashboard", dashboardDesc, "speedometer.svg", false, 2, "dashboard-demo.jpg"),
    createProject("seL4 Doom Pendulum",doomPendDesc, "video-games.svg", false, 2, "doom-pend-demo.jpg"),
    createProject("Magic Mirror", magicMirrorDesc, "mirror.svg",false, 0, "magic-mirror.png"),
    createProject("Dexter Live", "desc here", "wifi.svg", false, 1),
    createProject("Dexter Controls", "desc here", "laundry.svg", false,1),
    createProject("seL4 XHCI USB", "desc here", "usb.svg", false,1),
    createProject("Hw-Mgr", "desc here", "share.svg", false, 1),
    createProject("seL4 Drone Demo", "desc here", "drone.svg", false, 1),
    createProject("RISC-V seL4 Guest", "desc here", "riscv.svg", false, 1),
    createProject("GV Napster", napsterDesc, "data-transfer.svg", false, 2, "gv-napster-demo.png"),
    createProject("Stereo PCB", pcbDesc, "music.svg", false, 2, "pcb.jpg"),
];


function createProject(title, desc, projectImg, hasGallery=false, projectType, previewImg) : ModalProject
{
    return {
        title,
        desc,
        projectImg,
        hasGallery,
        projectType,
        previewImg,
    };
}
