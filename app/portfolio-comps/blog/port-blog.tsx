import PortfolioHeader from "../misc/portfolio-header";
import PortBlogEntry from "./port-blog-entry";
import {PortCarousel} from "../mobile/carousel/port-carousel";
import {blogs} from "./port-blog-data";

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
                    <div id="blogs-carousel">
                       <PortCarousel items={blogs} maxIndex={blogs.length}/>
                    </div>
                    <div class="filler">
                    </div>
                </div>
            </div>
        </>
    );
}
