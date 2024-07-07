import { useState } from 'react';
import Cards from 'react-credit-cards-2';

import 'react-credit-cards-2/dist/es/styles-compiled.css';

// import react icons 
import { HiExternalLink } from "react-icons/hi";

export const CreditCards = ({ title = 'Credit Cards' }) => {

    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;

        setState((prev) => ({ ...prev, [name]: value }));
    }

    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    }

    return (
        <>
            <section className="py-5 border-bottom border-dark border-2" id="icons">
                <h1 className="text-center display-4">{title}</h1>
                <div className="row align-items-center my-5">
                    <div className="col-md-4 mb-md-0 mb-3">
                        <Cards
                            number={state.number}
                            expiry={state.expiry}
                            cvc={state.cvc}
                            name={state.name}
                            focused={state.focus}
                        />
                    </div>
                    <div className="col-md-8">
                        <form className='row'>
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Account Name"
                                    className='form-control mb-3'
                                    value={state.name}
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="number"
                                    name="number"
                                    placeholder="Card Number"
                                    className='form-control mb-3'
                                    value={state.number}
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    name="expiry"
                                    placeholder="Card Expiry"
                                    className='form-control mb-3'
                                    value={state.expiry}
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    name="cvc"
                                    placeholder="CVC"
                                    className='form-control mb-3'
                                    value={state.cvc}
                                    onChange={handleInputChange}
                                    onFocus={handleInputFocus}
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <a className="d-block text-center" href="https://www.npmjs.com/package/react-credit-cards-2" target='_blank'>
                    <HiExternalLink size='1.2rem' className="me-1" />
                    https://www.npmjs.com/package/react-credit-cards-2
                </a>
            </section>
        </>
    )
}
