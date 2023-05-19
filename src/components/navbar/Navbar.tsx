import { Modal } from 'antd'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logonav from '../../assets/svg/Logonav'

interface Props {
    scrollToSection?: () => void | undefined,
}
const Navbar = ({ scrollToSection }: Props) => {
    const [stateNew, setStateNew] = useState<boolean>(false)
    const navigate = useNavigate()


    return (
        // <div className=' sm:fixed top-0 w-full z-50 border-b-2 border-white'>
            <div className="">
            <div className="bg-transparent  max-w-7xl  flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center">
                    <Logonav />
                </Link>


                <div className="justify-between items-center flex text-[#8A8986]">
                    <Link to="/" className={`${window.location.pathname === '/' && 'hiden text-white'} mx-4`}>Home</Link>
                    <Link to="/about" className={`${window.location.pathname === '/about' && 'hiden text-white'} mx-4`}>About</Link>
                    <Link to="/faq" className={`${window.location.pathname === '/faq' && 'hiden text-white'} mx-4`}>Faq</Link>
                </div>

                <div className="hidden sm:flex md:order-2">
                    <button type="button" onClick={() => navigate('/contact')} className="flex items-center border border-[#F6CD72]  text-white bg-transparent focus:outline-none  font-medium rounded-md text-sm px-10 sm:py-3 py-6 text-center mr-3 md:mr-0">
                        Contact Us
                    </button>

                </div>
            </div>


            <div className="overflow-hidden">
                <Modal open={stateNew} onCancel={() => setStateNew(false)} footer={null}
                    closeIcon={
                        <>
                            <svg className="icon solid text-grey-slate cursor-pointer float-right m-4 absolute top-0 right-0"

                                width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_b_1_654)">
                                    <path d="M20.0002 36.6666C29.2049 36.6666 36.6668 29.2047 36.6668 19.9999C36.6668 10.7952 29.2049 3.33325 20.0002 3.33325C10.7954 3.33325 3.3335 10.7952 3.3335 19.9999C3.3335 29.2047 10.7954 36.6666 20.0002 36.6666Z" fill="white" fillOpacity="0.3" />
                                    <path d="M20.0002 36.6666C29.2049 36.6666 36.6668 29.2047 36.6668 19.9999C36.6668 10.7952 29.2049 3.33325 20.0002 3.33325C10.7954 3.33325 3.3335 10.7952 3.3335 19.9999C3.3335 29.2047 10.7954 36.6666 20.0002 36.6666Z" stroke="#2568FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <path d="M25 15L15 25" stroke="#2568FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15 15L25 25" stroke="#2568FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <defs>
                                    <filter id="filter0_b_1_654" x="-13.6665" y="-13.6667" width="67.3333" height="67.3333" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="8" />
                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_654" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_654" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </>
                    }
                    maskClosable={false}
                    width={1000}
                >
                </Modal>
            </div>
        </div>
    )
}

export default Navbar
