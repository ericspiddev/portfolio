export function PortBlogPreview({imagePath="public/images/test.jpg"}) {
    return (
    <>
        <div class="blog-preview-image">
            <img src={imagePath} />
        </div>
    </>
    )
}
