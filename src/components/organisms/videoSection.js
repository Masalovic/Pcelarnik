import "../../styles/organisms/videoSection.scss";
import Video from "../../assets/pcelar-video.mp4";

const VideoSection = () => {
    return (
    <div className="video-section">
        <video autoPlay muted loop id="myVideo">
            <source src={Video} type="video/mp4" />
        </video>
            <div className="video-content">
                <div className="text-content">
            <h2>Confine yourself to the present.</h2>
            <p>Marcus Aurelius</p></div>
</div>
        </div>
    )
};


export default VideoSection;