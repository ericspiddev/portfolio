export function PortModalVideo({vid}) {
    return (
        <div className="port-video-container">
            <video src={`videos/${vid}`} muted controls autoPlay playsInline className="port-video">
                Your browser does not support playing demo videos
            </video>
        </div>
    );
}
