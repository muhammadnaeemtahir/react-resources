import { useState } from "react";

// import components
import { Icons } from "./components/Icons"
import { ToastNotification } from "./components/ToastNotification"
import { Modals } from "./components/Modals";
import { ToolTips } from "./components/ToolTips";
import { CountUpAnimate } from "./components/CountUpAnimate";

// react toast configuration
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// icons
import { FaReact } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const App = () => {
  const [isToggle, setIsToggle] = useState(true)

  return (
    <>
      {/* must be initiaize (within the app root) */}
      <ToastContainer />

      <div className="d-md-none d-block">
        <button className="btn border-0 position-absolute" style={{
          left: 20,
          top: 20,
          zIndex: 1000
        }}
          onClick={() => setIsToggle(!isToggle)}
        >
          <FaBars size='1.5rem' />
        </button>
      </div>

      <div className="row g-0">
        <div className={`col-md-3 bg-light shadow-sm border-end p-5 d-md-block ${isToggle ? 'd-none' : ''}`}>
          <h1 className="display-5 pb-2 pt-md-0 pt-5"
            style={{
              color: 'purple'
            }}>
            React Practical
            <FaReact color="purple" className="ms-2" />
          </h1>
          <aside className="vh-100 d-flex flex-column gap-2 mt-3">
            <a className="p-1 text-decoration-none" href="#icons">Icons</a>
            <a className="p-1 text-decoration-none" href="#toast-notifications">Toast Notifications</a>
            <a className="p-1 text-decoration-none" href="#modals">Modals</a>
            <a className="p-1 text-decoration-none" href="#tooltips">ToolTips</a>
            <a className="p-1 text-decoration-none" href="#count-up">CountUp</a>
          </aside>
        </div>

        <div className="col-md-9">
          <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" className="container px-5 pt-5 vh-100 overflow-y-scroll" tabIndex="0">
            <Icons title="Icons" />
            <ToastNotification title="Toast Notifications" />
            <Modals title="Modals" />
            <ToolTips title="ToolTips" />
            <CountUpAnimate title="CountUp" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App