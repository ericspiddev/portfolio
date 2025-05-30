import { portfolioTabTypes } from './port-portfolio';

export interface ModalProject
{
    id : integer
    title : string;
    desc : string;
    projectImg: string;
    hasGallery: boolean;
    projectType: int;
    previewImg: string;
    demo: string;
    results: string[]
};

interface projectResult {
    id: integer,
    result: string,
};

const lunarLoggerDesc = `
Lunar logger is a tracking app used for managing the status and tasks of projects.
Written using dotnet's ASP MVC it allows users to create issues within projects to track the progress
of tasks. The web app allows users to add other users to a project and assign issues to them.
Each project consists of categories and each category holds issues. Switching issues between
categories is as simple as drag and dropping the issue from one column to the other.
The issues all track the created date, modified date, and estimated time for completion.
`
const lunarLoggerResults = [
    "Worked with ASP MVC to create a full stack web application that supports the typical CRUD operations",
    "Created responsive, draggable issue cards using JS's drag API",
    "Used bootstrap and Sass to create a custom space theme for the site",
    "Wrote custom logic that allows project owners to add and remove users from projects",
]

const networkedCoffeeDesc = `
Ever wanted to make coffee from the comfort of your own bed? That is certainly possibly these days
with smart coffee makers allowing you access from your phone. This project I created my own smart coffee
maker using an ESP32 and wifi connectivity. The application allows you to send an HTTP message over you wifi
network to toggle a coffee machine on/off. I plan on creating a full functional website for the
coffee maker that can be used to control it in a user friendly way. I also want to create a PCB for the necessary
circuitry to clean things up. (The initial project was heavily inspired by a video done by Low Level Learning on Youtube)
This project utilized embedded C and the ESP-IDF. It also required a good understanding of the HTTP protocol and some web
skills for making the webpage
`
const networkedCoffeeResults = [
    "Utilized the ESP32 IDF to bootstrap a project",
    "Created an HTTP server in C that parsed requests made to the ESP32",
    "Wrote a timer driver that turns the coffee machine off after 5 minutes for safety",
    "Wired up a circuit from the ESP32 and relays to bridge the DC/AC gap between the ESP32 and the coffee machine",
    "Exposure to lwip and other embedded libraries"
];

const magicMirrorDesc = `
The magic mirror is a project I did where using two way glass, a raspberry pi and the
magic mirror repo. I created a smart mirror that displayed all sorts of
different things. The date, time, custom messages, current news headlines. Most of these come
with the base magic mirror repo but I am in the process of creating some of my own MM modules.
The first one I plan to make is a module that shows/generates a daily workout plan each day.
This project utilizied Linux, javascript and embedded skills for setting up the Raspberry Pi
and configring magic mirror. Also some real world hardware skills for connecting everything up
and actually building the mirror and frame.
`
const magicMirrorResults = [
    "Setup a rapsberry pi and raspdebian for running the mirror",
    "Built a frame and backing structure to display the laptop screen through 2-way glass",
    "Customized some modules to include messages that were relevant to me",
    "Setup static IP/network configs and SSH to allow for easy debug and config access",
    "Started work on my own custom module to pull data from the web and display it to the mirror",
];

const dashboardDesc = `
An embedded car dashboard using an MSP432 and various peripheral devices. The car dashboard used I2C and SPI to communicate
with peripheral devices and create a user friendly interface. This interface included an odometer, blinkers, speedometer
and a menu system using an LCD display. The menu could be customized using various colors and displayed the time,
temperature and speed on different menus. The dashboard also could take commands from a smartphone over bluetooth
using a simple off the shelf peripeheral that sent data to the MSP432. This project was selected to be 1 of 3 shown off
at GVSU's project showcase (voted on by classmates). It utilized embedded C and understanding various protocols used in embedded
systems like I2C, SPI, as well as other lowlevel concepts
`
const dashboardResults = [
    "Created a dashboard that reported speed, miles travelled, RPM, and turn signals",
    "Used I2C and SPI to communicate with multiple peripherals including EPROM to save settings between power cycles",
    "Added interactive LCD for users to set and get various settings on the dashboard",
    "Supported communuication via bluetooth and a phone using a COTS bluetooth chip and the MSP432",
    "Voted 1 of 3 projects to attend Grand Valley's Project Showcase for best in class",

];

const napsterDesc = `
GV napster is a peer to peer transfer app that supports a simplified version of the FTP protocol. The app provides a GUI that allows two way
transfers between other instances of GV Napster using network sockets. GV Napster supports commands like connect, list, stor, retr and quit.
Using these commands a user can store retrieve and list files that other instances have. All of which show up in a nicely formatted table
so the user can quickly determine which file they'd like to grab. The original backend of this app was written in pure C but due to the GUI
requirement and time constraints was converted to Python. This project utilized python, Qt, threading and the use of network sockets to
communicate between processes.
`
const napsterResults =[
    "Created a fully functional peer to peer Qt application that communicated over sockets",
    "Integrated backend code with front end code in python based on users's commands",
    "Implemented a simple FTP protocol that supported list, create, get and put commands",
    "Wrote the inital backend in C using low level socket APIs (ended up going to python for Qt)",
]

const pcbDesc = `
This project was for a circuit class I took in my undergrad where we were tasked with creating a speaker using a PCB board.
The design allowed for output of two speakers, and a microphone that amplified a users voice. It also took in an aux cord in
order to play sound so music from a phone could be played over the speaker. The speaker was also required to be adjustable in volume
using potentiometers. This project was also selected to be 1/3 shown off at GVSU's project showcase (voted on by classmates). This project involved a
great understanding of circuit design and the differnt types of circuits that go into turning sound waves to amplified speaker output.
`
const pcbResults =[
    "Used OP amps and filter circuits to design a speaker that amplified audio signals",
    "Integrated a microphone, and speakers to the circuit to to create a full stereo system",
    "Also integrated an audio jack so the music could be played off of a phone",
    "Voted 1 of 3 projects to attend Grand Valley's Project Showcase for best in class",
]

const doomPendDesc = `
This was my senior project for GVSU's engineering program. The project was done for Dornerworks and the goal was to rework an outdated
existing demo that they had to take to trade shows. The demo consisted of 2 VM's running on seL4: the first playing the classic game doom
and the other controlling an inverted pendulum (a ruler that balances and adjusts itself using PID controls). When a large red button
was pressed the doom game would shutdown while the pendulum continuned running. For my part of the project I rewrote the inverted pendulum
algorithim in C and FreeRTOS and also got freeRTOS running as a guest under seL4. I also assisted in doing controls calculations
to improve the robustness of the pendulum algorthim since some parameters of the system were changed while making improvements.
The project was a success and Dornerworks still takes it to trade shows to show off seL4 capabilities. This project involved Linux,
embedded, and seL4 skills to succeed.`
const doomPendResults = [
    "Rewrote the original control algorithm in C (was python)",
    "Integrated the algorithm with freeRTOS to provde realtime capabilitles",
    "Virtualized freeRTOS under seL4",
    "Point of Contact with Dornerworks to ensure expections were met and everyone was on the same page ",
]

const dexterLiveDesc = `
Dexter live is a web application that provides configuration and analytics to dexter laundromat owners. The web app also provides APIs for
Dexter’s mobile app that takes payment called Dexter Pay. Using a gateway computer all of Dexter’s washers and dryers push data to
the cloud that can then be used to track revenue and consumer behavior. The work I performed on the app included making updates to
the Dexer Pay API to allow for a better mobile experience. I also used AWS Cloudfront to make the delivery of updates quicker for
laundromats all over the world
`
const dexterLiveResults = [
    "Made improvements to the Ruby on Rails Dexter Live app and all of its associated applications",
    "Integrated Cloudfront with DexterLive so users all over the world could dowload firmware images with better speeds",
    "Updated DexterLive's Pay API to include new models of Washers/Dryers as well as the capacity and error status of each",
    "Revamped the DexterLive internet speed test to use simulated firmware images to give owners a better idea of their real internet speeds",
];

const dexterControlsDesc = `
Dexter controls are the embedded devices responsible for pushing data and other analytics up to Dexter Live. It also is all of the
firmware and GUI interfaces that run the Dexter Washers and Dryers. The type of work on this project varied which gave me a lot of
exposure to different tech. Sometimes I would be adding recipes or packages to the Yocto distro other times I'd be making bug fixes
or improvements in the C++ application that handled money and user input. I also taught myself QML/Qt to fulfill Dexter's needs when
our main GUI developer left Dornerworks.`
const dexterControlsResults = [
    "Supported and improved Dexter's Dryer/Washer firmware stack",
    "Created both features and bug fixes for the full stack of Software running on Dexter Washers/Dryers",
    "Added a help menu for users to give instructions on how to load laundry and start cycles",
    "Improved the integrity of card payments by adding CRC16 field and checks in the touchscreen application",
    "Reworked the entire Dryer cycle logic in both the firmware and touchscreen application to fix bugs and improve future maintainability",
    "Fixed numerous bugs that spanned across Yocto, U-Boot and the touchscreen application."

];

const xhciUsbDesc = `
USB has become the defacto standard for how devices interact with computers now a days. So it is no surprise that seL4 would want
to support USB devices so guests or the hypervisor itself could use the wide variety of devices that rely on USB. While, seL4
did have some USB device support it only supported the older EHCI host controller. This is where I was tasked with porting a
XHCI USB driver to seL4 so that newer platforms could also make use of seL4's USB stack. This was one of the more challenging
projects I've tackled in my career so far as USB is an incredibly complex standard. I was able to not only get the XHCI device driver
working in seL4 but I also created a few USB device drivers. This proved out the functionality of the XHCI driver. Later I would be
moved to other projects but my work was the starting point for adding USB Hub support and cleaning up the driver code.
`
const xhciUsbResults = [
    "Ported the XHCI U-boot driver over to seL4's components",
    "Debugged and fixed various USB drivers already present in seL4 that didn't work with XHCI",
    "Wrote drivers for several classes of USB drivers including HID and CDC",
    "Started implementation for hub support in XHCI devices before the project's phase ended"
];

const droneDemoDesc = `
One of my first tasks as a full time engineer at Dornerworks was to overhaul an existing seL4 demo we had to make it more
interactive for potential customers. My work for this demo involved getting Airsim and Ardupilot talking to each other
via seL4 VMs on new ruggadized hardware. I first had to port the existing demo to the ruggadized hardware in seL4 before I could
start work on any of the improvements. This involved working with Yocto recipes and DTS files to get everything in order. Once
this was done I then used Ardupilot's android app and Airsim on a laptop to make my improvements. Using routing rules in Linux and some
configuration I was able to have the Ardupilot app send drone commands through seL4's VM and then display the result in Airsim.
`
const droneDemoResults= [
    "Reworked an existing demo on COTS hardware to show off containers in seL4 using AirSim, Ardupilot, and Mission Planner",
    "Made the necessary changes to boot the original demo on the NAI68ARM2 hardware",
    "Fixed an issue with the old demo where it was using localhost in Airsim rather then actual ethernet traffic",
    "Integrated a tablet and the mission planner app to make the demo interactive",
    "Setup Linux ip routing rules to allow mission planner to communicate with the docker container running in a VM",
]
const hwMgrDesc = `
hw-mgr was a tool I developed for Dornerworks (DW) as an intern. During Covid-19 many people were forced to work remotely and this caused
a challenge when sharing hardware. One of my first tasks when starting at DW was to create a remote system that allowed for users
to check out, test on, and return hardware virtually. Utilizing DW's CI server at the time I wrote a python application that allowed users to share
hardware while SSH'd into the server. Using Gitlab's API I was able to lockdown hardware that was currently in use for a CI/CD pipeline as
well. This not only led to increased productivty but also protected more expensive hardware by keeping it in one spot. This task involved working with python,
gitlab's API and bash to create a remote testing enviornment that engineers all across DW could use.
`
const hwMgrResults = [
    "Created a hardware checkout system so remote workers could easily share hardware for testing",
    "Protected hardware by keeping it in one place rather then constantly moving between people",
    "Improved efficiency for new members to get up and running with testing hardware",
    "Used Gitlab's API to block checkout for any device being used by a CI/CD pipeline.",
    "Made it easy for anyone to add or remove hardware and lock down hardware to specific projects using Gitlab's API"
]

const rcCarDesc =`
Using a ESP32 and Android studio I and a team of engineering students were able to write an app that connected to the
ESP32 over bluetooth and drove a remote control car around. My part in this was designing and getting the bluetooth
Android app working. The others focused on the RC car. I had never done any mobile development before this project and the class was only 6 weeks long.
Using Android studio I was able to get the application hooked up over bluetooth and sending data. I also designed a very
simple control interface to send the direction and speed at which the car should drive. I am proud of this project
since I was able to learn a new technology in such a short amount of time.
`
const rcCarResults = [
    "Designed a Android app that drove a RC car using bluetooth",
    "Worked with Android Studio's Bluetooth API to initalize, receive and respond to data",
    "Created a GUI interface that turned button presses into directions for the car",
    "Completed the course in about 6 Weeks without ever writing a mobile app before",
]
const riscvSel4GuestDesc = `
Risc-V is an up and coming architecture that allows chip designers to use an open and royalty free ISA to bring their
boards to market. While I was an intern at DW my task across 2 rotations was to get a guest running under seL4 on a RISC-V
softcore Rocketchip. The rocketchip ran on the PL of a ZYNQMP SoC. I completed this work but not without some help
(Thank you Robert Vanvossen and Michael Doran). At the time this was considered to be the first RISC-V guest running on seL4
on real hardware (QEMU was done before this). I wrote an article about this which can be found below in the blogs section.
`
const riscvSel4GuestResults = [
    "Successfully booted a buildroot linux guest underneath seL4 on RISC-V.",
    "Debugged various issues when trying to boot the guest that resulted in digging through RISC-V assembly",
    "Added support to the seL4 RISC-V VMM for 16 bit instructions (similar to Thumb2 on ARM)",
    "Fixed some issues with interrupts and ACKing in the RISC-V VMM with some help (Thanks Robbie)",
    "Received an outstanding techncial contribution award at DW as a co-op for this task",
];

export const projects : ModalProject[] = [
    createProject(0,"Lunar Logger", lunarLoggerDesc, "rocket.svg", false, 0, "lunar-logger-demo.png", lunarLoggerResults, "lunar-logger.mp4"),
    createProject(1,"Networked Coffee", networkedCoffeeDesc, "coffee.svg", false, 0, "coffee-maker.svg", networkedCoffeeResults),
    createProject(2,"Car Dashboard", dashboardDesc, "speedometer.svg", false, 2, "dashboard-demo.jpg", dashboardResults),
    createProject(3,"seL4 Doom Pendulum",doomPendDesc, "video-games.svg", false, 2, "doom-pend-demo.jpg", doomPendResults, "doom-demo.mp4"),
    createProject(4,"Magic Mirror", magicMirrorDesc, "mirror.svg",false, 0, "magic-mirror.png", magicMirrorResults),
    createProject(5,"Dexter Live", dexterLiveDesc, "wifi.svg", false, 1, 'dexter-live.png', dexterLiveResults),
    createProject(6,"Dexter Controls", dexterControlsDesc, "laundry.svg", false, 1, 'dexter-controls.png', dexterControlsResults),
    createProject(7,"seL4 XHCI USB", xhciUsbDesc, "usb.svg", false, 1, 'usb.jpg', xhciUsbResults),
    createProject(8,"Hw-Mgr", hwMgrDesc, "share.svg", false, 1, 'hw-mgr.png', hwMgrResults),
    createProject(9,"seL4 Drone Demo", droneDemoDesc, "drone.svg", false, 1, 'ardupilot-planner.jpg', droneDemoResults),
    createProject(10,"RISC-V seL4 Guest", riscvSel4GuestDesc, "riscv.svg", false, 1, 'risc-v.png', riscvSel4GuestResults),
    createProject(11,"GV Napster", napsterDesc, "data-transfer.svg", false, 2, "gv-napster-demo.png", napsterResults),
    createProject(12,"Stereo PCB", pcbDesc, "music.svg", false, 2, "pcb.jpg", pcbResults ),
    createProject(13,"Bluetooth RC Car", rcCarDesc, "rc.svg", false, 2, "android-rc-app.png", rcCarResults, "rc-car.mp4"),
];

function createProject(id, title, desc, projectImg, hasGallery=false, projectType, previewImg, results, demo) : ModalProject
{
    return {
        id,
        title,
        desc,
        projectImg,
        hasGallery,
        projectType,
        previewImg,
        demo,
        results
    };
}
