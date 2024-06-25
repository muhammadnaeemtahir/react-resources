
// import components
import { Icons } from "./Icons"
import { ToastNotification } from "./ToastNotification"
import { Modals } from "./Modals";
import { ToolTips } from "./ToolTips";
import { CountUpAnimate } from "./CountUpAnimate";
import { ColorPicker } from "./ColorPicker";

export const Main = () => {
    return (
        <>
            <div className="col-md-9">
                <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" className="container px-5 pt-5 vh-100 overflow-y-scroll" tabIndex="0">
                    <Icons title="Icons" />
                    <ToastNotification title="Toast Notifications" />
                    <Modals title="Modals" />
                    <ToolTips title="ToolTips" />
                    <CountUpAnimate title="CountUp" />
                    <ColorPicker title="Color Picker" />
                </div>
            </div>
        </>
    )
}