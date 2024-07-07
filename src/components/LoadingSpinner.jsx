// import react icons 
import { HiExternalLink } from "react-icons/hi";

import { BeatLoader, RingLoader, PacmanLoader } from 'react-spinners'

export const LoadingSpinner = ({ title = 'React Spinners' }) => {
    return (
        <>
            <section className="py-5 border-bottom border-dark border-2" id="react-spinners">
                <h1 className="text-center display-4">{title}</h1>
                <div className="d-flex justify-content-center gap-5 align-items-center my-5">
                    <PacmanLoader color="purple" loading={true} />
                    <BeatLoader color="purple" loading={true} />
                    <RingLoader color="purple" loading={true} />
                </div>
                <a className="d-block text-center" href="https://www.davidhu.io/react-spinners/" target='_blank'>
                    <HiExternalLink size='1.2rem' className="me-1" />
                    https://www.davidhu.io/react-spinners/
                </a>
            </section>
        </>
    )
}
