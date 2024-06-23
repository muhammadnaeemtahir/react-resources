// import components
import { Icons } from "./components/Icons"
import { ToastNotification } from "./components/ToastNotification"
import { Modals } from "./components/Modals";
import { ToolTips } from "./components/ToolTips";

// react toast configuration
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      {/* must be initiaize (within the app root) */}
      <ToastContainer />

      <div className="container">
        <Icons title="Icons" />
        <ToastNotification title="Toast Notifications" />
        <Modals title="Modals" />
        <ToolTips title="ToolTips" />
      </div>
    </>
  )
}

export default App