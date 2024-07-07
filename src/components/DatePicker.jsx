import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// import react icons 
import { HiExternalLink } from "react-icons/hi";

export const Datepicker = ({ title = 'Date Picker' }) => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <>
            <section className="py-5 border-bottom border-dark border-2" id="date-picker">
                <h1 className="text-center display-4">{title}</h1>
                <div className="d-flex justify-content-center gap-5 align-items-center my-5">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showMonthDropdown
                        isClearable
                        placeholderText="Selected a date"
                        className="form-control"
                    />
                </div>
                <a className="d-block text-center" href="https://reactdatepicker.com/" target='_blank'>
                    <HiExternalLink size='1.2rem' className="me-1" />
                    https://reactdatepicker.com/
                </a>
            </section>
        </>
    )
}
