import {PortBlogPreview} from "./port-blog-preview";
import {PortBlogTitle} from "./port-blog-title";
import {PortBlogDesc} from "./port-blog-desc";
//import { BlogObject } from "./port-blog";

export default function PortBlogEntry({blog} : { blog: BlogObject}) {
    return (
    <>
        <a href={blog.link}>
        <div class="blogentry">
            <PortBlogPreview imagePath={blog.previewImage}/>
            <PortBlogTitle title={blog.title}/>
            <PortBlogDesc descript={blog.desc}/>
        </div>
        </a>
    </>
    );
}
