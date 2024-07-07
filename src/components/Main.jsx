
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
import { Forms } from "./Forms";

export const Main = () => {
    return (
        <>
            <div className="col-md-9">
                <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" className="container px-5 pt-5 vh-100 overflow-y-scroll" tabIndex="0">
                    <CountUpAnimate title="CountUp" />
                    <ToastNotification title="Toast Notifications" />
                    <CreditCards title="Credit Cards" />
                    <Forms title="Form Validations" />
                    <Modals title="Modals" />
                    <Icons title="Icons" />
                    <ToolTips title="ToolTips" />
                    <ColorPicker title="Color Picker" />
                    <Datepicker title="Date Picker" />
                    <VideoPlayer title="Video Player" />
                    <LoadingSpinner title="React Spinners" />
                </div>
            </div>
        </>
    )
}