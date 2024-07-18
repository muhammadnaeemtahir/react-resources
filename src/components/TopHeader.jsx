import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

export const TopHeader = ({ siteTitle }) => {
    return (
        <>
            <nav class="navbar fixed-top bg-body-tertiary">
                <div class="container align-items-center justify-content-end gap-2">
                    <a href="https://www.linkedin.com/in/muhammadnaeemtahir/" target="_blank">
                        <FaLinkedin size="2rem" color="purple" />
                    </a>
                    <a href="https://github.com/muhammadnaeemtahir/react-resources" target="_blank">
                        <FaGithubSquare size="2rem" color="purple" />
                    </a>
                </div>
            </nav>
        </>
    )
}