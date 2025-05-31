import {PortBlogPreview} from "./port-blog-preview";
import {PortBlogTitle} from "./port-blog-title";
import {PortBlogDesc} from "./port-blog-desc";

export default function PortBlogEntry({blog, index=-1, maxIndex=-1} : { blog: BlogObject, integer, integer} ) {

    return (
    <>
        <a href={blog.link}>
        <div className="blogentry">
            <PortBlogPreview imagePath={blog.previewImage}/>
            <PortBlogTitle title={blog.title}/>
            <PortBlogDesc descript={blog.desc}/>
            <p className={ (index > -1) ? 'caro-counter' : 'hidden'}>{index + 1}/{maxIndex}</p>
        </div>
        </a>
    </>
    );
}
