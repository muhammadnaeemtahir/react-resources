
// import components
import { TopHeader } from "./components/TopHeader";
import { SideNav } from "./components/SideNav";
import { Main } from "./components/Main";

// react toast configuration
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      {/* must be initiaize (within the app root) */}
      <ToastContainer />
      <TopHeader />

      <div className="row g-0 pt-md-5">
        <SideNav />
        <Main />
      </div>
    </>
  )
}

export default App