// react icons 
import { HiExternalLink } from "react-icons/hi";

// react tostify
import { toast } from 'react-toastify';

// custom toast
const CustomToast = ({ closeToast }) => {
    return (
        <>
            <p className="h1 text-danger">This is a custom toast</p>
            <button className="btn btn-sm w-100 btn-danger" onClick={closeToast}>close</button>
        </>
    )
}

export const ToastNotification = ({ title = 'Toast Notifications' }) => {
    const notify = () => {
        toast("Default Notification !");

        toast.success("Success Notification !", {
            position: "top-center",
            autoClose: 8000
        });

        toast.error("Error Notification !", {
            position: "top-left",
            autoClose: false
        });

        toast.warn("Warning Notification !", {
            position: "bottom-left"
        });

        toast.info("Info Notification !", {
            position: "bottom-center"
        });

        toast(<CustomToast />, {
            position: "bottom-right",
            closeButton: false,
            className: 'foo-bar'
        });
    };
    return (
        <>
            <section className="py-5 border-bottom border-dark border-2" id="toast-notifications">

                <h1 className="text-center display-4">{title}</h1>

                <button className="btn btn-lg text-white d-block mx-auto my-5" style={{
                    backgroundColor: 'purple'
                }}
                    onClick={notify}
                >
                    Notify!
                </button>

                <a className="d-block text-center" href="https://www.npmjs.com/package/react-toastify" target='_blank'>
                    <HiExternalLink size='1.2rem' className="me-1" />
                    https://www.npmjs.com/package/react-toastify
                </a>

            </section>
        </>
    )
}
