import { useState } from "react";
import Modal from "react-modal";

// import react icons 
import { HiExternalLink } from "react-icons/hi";
import { IoCloseCircle } from "react-icons/io5";

Modal.setAppElement('#root')
export const Modals = ({ title = 'Modals' }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <section className="py-5 border-bottom border-dark border-2">
                <h1 className="text-center display-4">{title}</h1>
                <button onClick={() => setIsModalOpen(true)} className="btn btn-lg text-white my-5 d-block mx-auto" style={{ backgroundColor: 'purple' }}>Try Modal!</button>
                <Modal isOpen={isModalOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setIsModalOpen(false)}
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.50)'
                        }
                    }}
                >
                    <button className="btn border-0 float-end" onClick={() => setIsModalOpen(false)}>
                        <IoCloseCircle color='purple' size='2.5rem' />
                    </button>
                    <h1>Modal Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique impedit perspiciatis debitis! Beatae, in. Omnis totam aliquam voluptate voluptatem voluptatum.</p>
                </Modal>
                <a className="d-block text-center" href="https://www.npmjs.com/package/react-modal" target='_blank'>
                    <HiExternalLink size='1.2rem' className="me-1" />
                    https://www.npmjs.com/package/react-modal
                </a>
            </section>
        </>
    )
}
