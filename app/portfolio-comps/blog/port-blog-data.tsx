export interface BlogObject
{
    link : string;
    title : string;
    previewImage : string;
    desc : string
};
export const blogs: BlogObject[] = [
    {
        id: "1",
        link: "https://www.dornerworks.com/blog/sel4-on-risc-v-rocket-chip/",
        title: "seL4 Virtualized on Risc-V",
        previewImage: "/images/blog/riscv-blog.png",
        desc: "Article about getting an seL4 VM running on the RISC-V architechture"
    },
    {
        id: "2",
        link: "https://medium.com/@ericspidledev/youve-got-mail-how-to-setup-a-simple-express-js-mail-service-e3e91d278fa2",
        title: "You've Got Mail",
        previewImage: "/images/blog/smtp-server.png",
        desc: "A quick tutorial on setting up a simple backend mail server using express.js"
    },
    {
        id: "3",
        link: "https://medium.com/@ericspidledev/grab-n-go-a-guide-to-html-s-to-drag-and-drop-api-7b7ff0fb2603",
        title: "Grab'n'Go",
        previewImage: "/images/blog/draggable.png",
        desc: "A guide to HTML's draggable API and how you can use it to make interactive elements"
    },
    {
        id: "4",
        link: "#",
        title: "Coming soon",
        previewImage: "/images/blog/placeholder.jpg",
        desc: "A new article on an interesting topic is on it's way"
    },
    {
        id: "5",
        link: "#",
        title: "Coming soon",
        previewImage: "/images/blog/placeholder.jpg",
        desc: "A new article on an interesting topic is on it's way"
    },
    {
        id: "6",
        link: "#",
        title: "Coming soon",
        previewImage: "/images/blog/placeholder.jpg",
        desc: "A new article on an interesting topic is on it's way"
    },
];
