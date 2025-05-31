export function PortBlogPreview({imagePath="public/images/test.jpg"}) {
    return (
    <>
        <div className="blog-preview-image">
            <img src={imagePath} />
        </div>
    </>
    )
}
