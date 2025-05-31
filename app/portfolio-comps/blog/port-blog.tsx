import PortfolioHeader from "../misc/portfolio-header";
import PortBlogEntry from "./port-blog-entry";
import {PortCarousel} from "../mobile/carousel/port-carousel";
import {blogs} from "./port-blog-data";

export function PortBlog() {
    return (
        <>
            <div className="section-common">
                <div className="section-text-common">
                    <PortfolioHeader header="Blog"/>
                    <p> Articles I've written about all sorts of topics</p>
                    <div id="blogs-container">
                        {
                            blogs.map((blog) => (
                            <PortBlogEntry blog={blog} key={blog.id}/>))
                        }
                    </div>
                    <div id="blogs-carousel">
                       <PortCarousel items={blogs} maxIndex={blogs.length}/>
                    </div>
                    <div className="filler">
                    </div>
                </div>
            </div>
        </>
    );
}
