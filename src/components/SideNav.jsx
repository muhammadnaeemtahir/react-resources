import { useState } from "react";

// import react icons
import { FaBars } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

export const SideNav = () => {
    const [isToggle, setIsToggle] = useState(true)

    return (
        <>
            <div className="d-md-none d-block">
                <button className="btn border-0 position-absolute" style={{ left: 20, top: 20, zIndex: 1000 }}
                    onClick={() => setIsToggle(!isToggle)}
                >
                    <FaBars size='1.5rem' />
                </button>
            </div>

            <div className={`col-md-3 bg-light shadow-sm border-end p-5 overflow-y-scroll custom-scrollbar vh-100 d-md-block ${isToggle ? 'd-none' : ''}`}>
                <a href="/" className="text-decoration-none">
                    <h1 className="display-6 pb-2 pt-md-0 pt-5"
                        style={{ color: 'purple' }}>
                        React Resources
                        <FaReact color="purple" className="ms-2" />
                    </h1>
                </a>
                <aside className="vh-100 d-flex flex-column gap-2 mt-3">
                    <a className="p-1 text-decoration-none" href="#count-up">CountUp</a>
                    <a className="p-1 text-decoration-none" href="#toast-notifications">Toast Notifications</a>
                    <a className="p-1 text-decoration-none" href="#credit-cards">Credit Cards</a>
                    <a className="p-1 text-decoration-none" href="#form-validations">Form Validations <br /> (Formik & Yup) </a>
                    <a className="p-1 text-decoration-none" href="#icons">Icons</a>
                    <a className="p-1 text-decoration-none" href="#modals">Modals</a>
                    <a className="p-1 text-decoration-none" href="#tooltips">ToolTips</a>
                    <a className="p-1 text-decoration-none" href="#color-picker">Color Picker</a>
                    <a className="p-1 text-decoration-none" href="#date-picker">Date Picker</a>
                    <a className="p-1 text-decoration-none" href="#video-player">Video Player</a>
                    <a className="p-1 text-decoration-none" href="#react-spinners">React Spinners</a>
                </aside>
            </div>
        </>
    )
}