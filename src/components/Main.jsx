
// import components
import { Icons } from "./Icons"
import { ToastNotification } from "./ToastNotification"
import { Modals } from "./Modals";
import { ToolTips } from "./ToolTips";
import { CountUpAnimate } from "./CountUpAnimate";
import { ColorPicker } from "./ColorPicker";
import { CreditCards } from "./CreditCards";
import { Datepicker } from "./DatePicker";
import { VideoPlayer } from "./VideoPlayer";
import { LoadingSpinner } from "./LoadingSpinner";

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
                    <CreditCards title="Credit Cards" />
                    <Datepicker title="Date Picker" />
                    <VideoPlayer title="Video Player" />
                    <LoadingSpinner title="React Spinners" />
                </div>
            </div>
        </>
    )
}