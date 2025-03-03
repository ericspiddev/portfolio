import PortfolioHeader from "../misc/portfolio-header";
import PortBlogEntry from "./port-blog-entry";
export function PortBlog() { 
    return (
        <>
            <div class="section-common">
                <div class ="section-text-common"> 
                <PortfolioHeader header="Blog"/>
                <p> Blog if we have one here </p> 
                <PortBlogEntry/>
                </div>
            </div>
        </>
    );
}
