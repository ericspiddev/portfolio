import PortfolioHeader from "../misc/portfolio-header";
import PortBlogEntry from "./port-blog-entry";

export interface BlogObject
{
    link : string;
    title : string;
    previewImage : string; 
    desc : string
};

const blogs: BlogObject[] = [
    {
        id: "1",
        link: "https://www.dornerworks.com/blog/sel4-on-risc-v-rocket-chip/",
        title: "seL4 Virtualized on Risc-V",
        previewImage: "public/images/blog/riscv-blog.png",
        desc: "Article about getting an seL4 VM running on the RISC-V architechture" 
    },
    {   
        id: "2",
        link: "#",
        title: "Coming soon",
        previewImage: "public/images/blog/placeholder.jpg", 
        desc: "A new article on an interesting topic is on it's way"  
    },
    {
        id: "3",
        link: "#",
        title: "Coming soon",
        previewImage: "public/images/blog/placeholder.jpg",
        desc: "A new article on an interesting topic is on it's way" 
    },
    {
        id: "4",
        link: "#",
        title: "Coming soon",
        previewImage: "public/images/blog/placeholder.jpg",
        desc: "A new article on an interesting topic is on it's way" 
    },
    {
        id: "5",
        link: "#",
        title: "Coming soon",
        previewImage: "public/images/blog/placeholder.jpg",
        desc: "A new article on an interesting topic is on it's way" 
    },
    {
        id: "6",
        link: "#",
        title: "Coming soon",
        previewImage: "public/images/blog/placeholder.jpg",
        desc: "A new article on an interesting topic is on it's way" 
    },
];


export function PortBlog() { 
    return (
        <>
            <div class="section-common">
                <div class ="section-text-common"> 
                    <PortfolioHeader header="Blog"/>
                    <p> Articles I've written about all sorts of topics</p> 
                    <div id="blogs-container">
                        {
                            blogs.map((blog) => (
                            <PortBlogEntry blog={blog}/>))
                        }
                    </div>
                    <div class="filler">
                        <p> MORE &gt;  </p>
                    </div>
                </div>
            </div>
        </>
    );
}
