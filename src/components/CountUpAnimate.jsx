import CountUp from 'react-countup';

// import react icons 
import { HiExternalLink } from "react-icons/hi";
import { IoIosRefresh } from "react-icons/io";

export const CountUpAnimate = ({ title = 'CountUp' }) => {
    return (
        <>
            <section className="py-5 border-bottom border-dark border-2" id='count-up'>
                <h1 className="text-center display-4">{title}</h1>
                <div className="d-flex flex-column align-items-center my-5">
                    <CountUp className='h1 mb-3' end={1000} duration={1} prefix='$' decimals={2} />
                    <button className='btn btn-sm text-white' style={{
                        backgroundColor: 'purple',
                    }}
                        onClick={() => {
                            window.location.reload(); // Corrected window.refresh to window.location.reload()
                        }}
                    >
                        <IoIosRefresh className='me-2' size='1.5rem' />
                        Refresh
                    </button>
                </div>
                <a className="d-block text-center" href="https://www.npmjs.com/package/react-countup" target='_blank'>
                    <HiExternalLink size='1.2rem' className="me-1" />
                    https://www.npmjs.com/package/react-countup
                </a>
            </section>
        </>
    )
}
