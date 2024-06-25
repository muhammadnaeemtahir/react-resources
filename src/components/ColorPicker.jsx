import { useState, useEffect, useRef } from 'react';
import { SketchPicker } from 'react-color';

// import react icons 
import { HiExternalLink } from "react-icons/hi";

export const ColorPicker = ({ title = 'Color Picker' }) => {
    const [color, setColor] = useState('#ffffff')
    const [showColorPicker, setShowColorPicker] = useState(false)
    const [isColorSelected, setIsColorSelected] = useState(false)
    const prevColorRef = useRef(color);

    useEffect(() => {
        if (prevColorRef.current !== color) {
            setIsColorSelected(true);
        }
    }, [color])

    return (
        <>
            <section className="py-5 border-bottom border-dark border-2" id="icons">
                <h1 className="text-center display-4">{title}</h1>
                <div className="my-5">
                    <button onClick={() => setShowColorPicker(!showColorPicker)} className='btn btn-primary d-block mx-auto mb-3'>{showColorPicker ? 'Close Color Picker' : 'Pick A Color'}</button>

                    {
                        showColorPicker && <SketchPicker className='mx-auto d-block mb-3' color={color} onChange={updatedColor => setColor(updatedColor.hex)} />
                    }

                    {
                        isColorSelected && <p className="text-center">
                            <code className="text-dark">You Picked <span className='fw-bold bg-secondary px-2 py-1 rounded text-white'>{color}</span> </code>
                        </p>
                    }

                </div>
                <a className="d-block text-center" href="https://casesandberg.github.io/react-color/" target='_blank'>
                    <HiExternalLink size='1.2rem' className="me-1" />
                    https://casesandberg.github.io/react-color/
                </a>
            </section>
        </>
    )
}
