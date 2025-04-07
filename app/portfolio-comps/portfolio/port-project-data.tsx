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
using potentiometers. This project was also selected to be 1/3 shown off at GVSU's project showcase (voted on by classmates). This project involved a
great understanding of circuit design and the differnt types of circuits that go into turning sound waves to amplified speaker output.
`

const doomPendDesc = `
This was my senior project for GVSU's engineering program. The project was done for Dornerworks and the goal was to rework an outdated
existing demo that they had to take to trade shows. The demo consisted of 2 VM's running on seL4: the first playing the classic game doom
and the other controlling an inverted pendulum (a ruler that balances and adjusts itself using PID controls). When a large red button
was pressed the doom game would shutdown while the pendulum continuned running. For my part of the project I rewrote the inverted pendulum
algorithim in C and FreeRTOS and also got freeRTOS running as a guest under seL4. I also assisted in doing controls calculations
to improve the robustness of the pendulum algorthim since some parameters of the system were changed while making improvements.
The project was a success and Dornerworks still takes it to trade shows to show off seL4 capabilities. This project involved Linux,
embedded, and seL4 skills to succeed.`

const dexterLiveDesc = `
Dexter live is a web application that provides configuration and analytics to dexter laundromat owners. The web app also provides APIs for
Dexter’s mobile app that takes payment called Dexter Pay. Using a gateway computer all of Dexter’s washers and dryers push data to
the cloud that can then be used to track revenue and consumer behavior. The work I performed on the app included making updates to
the Dexer Pay API to allow for a better mobile experience. I also used AWS Cloudfront to make the delivery of updates quicker for
laundromats all over the world
`

const dexterControlsDesc = `
Dexter controls are the embedded devices responsible for pushing data and other analytics up to Dexter Live. It also is all of the
firmware and GUI interfaces that run the Dexter Washers and Dryers. The type of work on this project varied which gave me a lot of
exposure to different tech. Sometimes I would be adding recipes or packages to the Yocto distro other times I'd be making bug fixes
or improvements in the C++ application that handled money and user input. I also taught myself QML/Qt to fulfill Dexter's needs when
our main GUI developer left Dornerworks.`

const xhciUsbDesc = `
USB has become the defacto standard for how devices interact with computers now a days. So it is no surprise that seL4 would want
to support USB devices so guests or the hypervisor itself could use the wide variety of devices that rely on USB. While, seL4
did have some USB device support it only supported the older EHCI host controller. This is where I was tasked with porting a
XHCI USB driver to seL4 so that newer platforms could also make use of seL4's USB stack. This was one of the more challenging
projects I've tackled in my career so far as USB is an incredibly complex standard. I was able to not only get the XHCI device driver
working in seL4 but I also created a few USB device drivers. This proved out the functionality of the XHCI driver. Later I would be
moved to other projects but my work was the starting point for adding USB Hub support and cleaning up the driver code.
`

const droneDemoDesc = `
One of my first tasks as a full time engineer at Dornerworks was to overhaul an existing seL4 demo we had to make it more
interactive for potential customers. My work for this demo involved getting Airsim and Ardupilot talking to each other
via seL4 VMs on new ruggadized hardware. I first had to port the existing demo to the ruggadized hardware in seL4 before I could
start work on any of the improvements. This involved working with Yocto recipes and DTS files to get everything in order. Once
this was done I then used Ardupilot's android app and Airsim on a laptop to make my imrpovements. Using routing rules in Linux and some
configuration I was able to have the Ardupilot app send drone commands through seL4's VM and then display the result in Airsim.
`
const hwMgrDesc = `
hw-mgr was a tool I developed for Dornerworks (DW) as an intern. During Covid-19 many people were forced to work remotely and this caused
a challenge when sharing hardware. One of my first tasks when starting at DW was to create a remote system that allowed for users
to check out, test on, and return hardware virtually. Utilizing DW's CI server at the time I wrote a python application that allowed users to share
hardware while SSH'd into the server. Using Gitlab's API I was able to lockdown hardware that was currently in use for a CI/CD pipeline as
well. This not only led to increased productivty but also protected more expensive hardware by keeping it in one spot. This task involved working with python,
gitlab's API and bash to create a remote testing enviornment that engineers all across DW could use.
`

const rcCarDesc =`
Using a ESP32 and Android studio I and a team of engineering students were able to write a app that connected to the
ESP32 over bluetooth and drove a remote control car around. My part in this was designing and getting the bluetooth
Android app working. I had never done any mobile development before this project and the class was only 6 weeks long.
Using Android studio I was able to get the application hooked up over bluetooth and sending data. I also designed a very
simple control interface to send the direction and speed at which the car should drive. I am proud of this project
since I was able to learn a new technology in such a short amount of time.
`
const riscvSel4GuestDesc = `
Risc-V is an up and coming architecture that allows chip designers to use an open and royalty free ISA set to bring their
boards to market. While I was an intern at DW my task across 2 rotations was to get a guest running under seL4 on a RISC-V
softcore Rocketchip. The rocketchip ran on the PL of a ZYNQMP SoC. I completed this work but not without some help
(Thank you Robert Vanvossen and Michael Doran). At the time this was considered to be the first RISC-V guest running on seL4
on real hardware (QEMU was done before this). I wrote an article about which can be found below in the blogs section.
`

export const projects : ModalProject[] = [
    createProject("Lunar Logger", lunarLoggerDesc, "rocket.svg", false, 0, "lunar-logger-demo.png"),
    createProject("Networked Coffee", networkedCoffeeDesc, "coffee.svg", false, 0, ""),
    createProject("Car Dashboard", dashboardDesc, "speedometer.svg", false, 2, "dashboard-demo.jpg"),
    createProject("seL4 Doom Pendulum",doomPendDesc, "video-games.svg", false, 2, "doom-pend-demo.jpg"),
    createProject("Magic Mirror", magicMirrorDesc, "mirror.svg",false, 0, "magic-mirror.png"),
    createProject("Dexter Live", dexterLiveDesc, "wifi.svg", false, 1, 'dexter-live.png'),
    createProject("Dexter Controls", dexterControlsDesc, "laundry.svg", false, 1, ''),
    createProject("seL4 XHCI USB", xhciUsbDesc, "usb.svg", false, 1, 'usb.jpg'),
    createProject("Hw-Mgr", hwMgrDesc, "share.svg", false, 1, 'hw-mgr.png'),
    createProject("seL4 Drone Demo", droneDemoDesc, "drone.svg", false, 1, ''),
    createProject("RISC-V seL4 Guest", riscvSel4GuestDesc, "riscv.svg", false, 1, 'risc-v.png'),
    createProject("GV Napster", napsterDesc, "data-transfer.svg", false, 2, "gv-napster-demo.png"),
    createProject("Stereo PCB", pcbDesc, "music.svg", false, 2, "pcb.jpg"),
    createProject("Bluetooth RC Car", rcCarDesc, "rc.svg", false, 2, ''),
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
