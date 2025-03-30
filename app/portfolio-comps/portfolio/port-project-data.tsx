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
`
const magicMirrorDesc = `
The magic mirror is a project I did where using two way glass, a raspberry pi and the
magic mirror repo (need to add link). I created a smart mirror that displayed all sorts of
different things. The date, time, custom messages, current news headlines. Most of these come
with the base magic mirror repo but I am in the process of creating some of my own MM modules.
The first one I plan to make is a module that shows/generates a daily workout plan each day.
`
const dashboardDesc = `
An embedded car dashboard using an MSP432 and various peripheral devices. The car dashboard used I2C and SPI to communicate
with peripheral devices and create a fully functional interface. This interface included an odometer, blinkers, speedometer
and a fully functional menu system using an LCD display. The menu could be customized using various colors and displayed the time, temperature and speed on different menus.
`

const napsterDesc = `

`

export const projects : ModalProject[] = [
    createProject("Lunar Logger", lunarLoggerDesc, "rocket.svg", false, 0, "lunar-logger-demo.png"),
    createProject("Networked Coffee", networkedCoffeeDesc, "coffee.svg", false, 0, "magic-mirror.png"),
    createProject("Car Dashboard", dashboardDesc, "speedometer.svg", false, 2, "dashboard-demo.jpg"),
    createProject("seL4 Doom Pendulum", "desc here", "video-games.svg", false, 2, "doom-pend-demo.jpg"),
    createProject("Magic Mirror", magicMirrorDesc, "mirror.svg",false, 0, "magic-mirror.png"),
    createProject("Dexter Live", "desc here", "wifi.svg", false, 1),
    createProject("Dexter Controls", "desc here", "laundry.svg", false,1),
    createProject("seL4 XHCI USB", "desc here", "usb.svg", false,1),
    createProject("Hw-Mgr", "desc here", "share.svg", false, 1),
    createProject("seL4 Drone Demo", "desc here", "drone.svg", false, 1),
    createProject("RISC-V seL4 Guest", "desc here", "riscv.svg", false, 1),
    createProject("GV Napster", "desc here", "data-transfer.svg", false, 2),
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
