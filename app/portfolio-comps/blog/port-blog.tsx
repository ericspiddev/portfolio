import PortfolioHeader from "../misc/portfolio-header";
import PortBlogEntry from "./port-blog-entry";

export interface BlogObject
{
    link : string;
    title : string;
    previewImage : string; 
    desc : string
};

const test: BlogObject = {
    link: "https://www.dornerworks.com/blog/sel4-on-risc-v-rocket-chip/",
    title: "seL4 Virtualized on Risc-V",
    previewImage: "public/images/blog/riscv-blog.png",
    desc: "Article about getting an seL4 VM running on the RISC-V architechture"
};

export function PortBlog() { 
    return (
        <>
            <div class="section-common">
                <div class ="section-text-common"> 
                <PortfolioHeader header="Blog"/>
                <p> Articles I've written about all sorts of topics</p> 
                <PortBlogEntry blog={test}/>
                </div>
            </div>
        </>
    );
}
