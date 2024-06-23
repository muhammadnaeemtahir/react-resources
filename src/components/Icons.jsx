// import react icons 

import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { ImBug } from "react-icons/im";
import { HiExternalLink } from "react-icons/hi";

export const Icons = ({ title = 'Icons' }) => {
    return (
        <>
            <section className="py-5 border-bottom border-dark border-2" id="icons">
                <h1 className="text-center display-4">{title}</h1>
                <div className="d-flex justify-content-center gap-5 align-items-center my-5">
                    <IconContext.Provider value={{ color: 'purple', size: '3rem' }}>
                        <FaReact />
                        <FiHeart />
                        <ImBug />
                    </IconContext.Provider>
                </div>
                <a className="d-block text-center" href="https://react-icons.github.io/react-icons/" target='_blank'>
                    <HiExternalLink size='1.2rem' className="me-1" />
                    https://react-icons.github.io/react-icons/
                </a>
            </section>
        </>
    )
}
