import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/lazy'


// import react icons 
import { HiExternalLink } from "react-icons/hi";

export const VideoPlayer = ({ title = 'React Player' }) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <section className="py-5 border-bottom border-dark border-2" id="video-player">
                <h1 className="text-center display-4">{title}</h1>
                <div className="row my-5">
                    <div className="col-12">
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                            controls
                            light
                            width='100%'
                            height={windowWidth >= 800 ? '400px' : '200px'}
                        />
                    </div>
                </div>
                <a className="d-block text-center" href="https://www.npmjs.com/package/react-player" target='_blank'>
                    <HiExternalLink size='1.2rem' className="me-1" />
                    https://www.npmjs.com/package/react-player
                </a>
            </section>
        </>
    )
}
