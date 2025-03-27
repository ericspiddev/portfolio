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
        link: "#",
        title: "Coming soon",
        previewImage: "/images/blog/placeholder.jpg",
        desc: "A new article on an interesting topic is on it's way"
    },
    {
        id: "3",
        link: "#",
        title: "Coming soon",
        previewImage: "/images/blog/placeholder.jpg",
        desc: "A new article on an interesting topic is on it's way"
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
