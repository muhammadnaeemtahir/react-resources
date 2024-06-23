import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

// import react icons 
import { HiExternalLink } from "react-icons/hi";

export const ToolTips = ({ title = 'Tooltips' }) => {
    return (
        <>
            <section className="py-5 border-bottom border-dark border-2">
                <h1 className="text-center display-4">{title}</h1>
                <Tippy content="Hello!">
                    <button className='btn btn-lg text-white d-block mx-auto my-5' style={{
                        backgroundColor: 'purple'
                    }}>
                        Hover!
                    </button>
                </Tippy>
                <a className="d-block text-center" href="https://github.com/atomiks/tippyjs-react" target='_blank'>
                    <HiExternalLink size='1.2rem' className="me-1" />
                    https://github.com/atomiks/tippyjs-react
                </a>
            </section>
        </>
    )
}
