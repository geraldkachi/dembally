import { Modal } from 'antd'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import CloseIcon from './close.svg'
import Logonav from '../../assets/svg/Logonav'
import useWindowDimensions from '../../hooks/useDimension'

const Navbar = () => {
    const [nav, setNav] = useState<boolean>(true);
    const [stateNew, setStateNew] = useState<boolean>(false)
    const navigate = useNavigate()
    const { width } = useWindowDimensions()


    useEffect(() => {
        if (!nav) document.body.style.overflowY = 'hidden'
        return () => {
            document.body.style.overflowY = 'unset'
        }
    }, [nav])

    const NavIcon = () => <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.5 8.14394H3.5C3.09 8.14394 2.75 7.80394 2.75 7.39394C2.75 6.98394 3.09 6.64394 3.5 6.64394H21.5C21.91 6.64394 22.25 6.98394 22.25 7.39394C22.25 7.80394 21.91 8.14394 21.5 8.14394Z" fill="#ffffff" />
        <path d="M21.5 13.1439H3.5C3.09 13.1439 2.75 12.8039 2.75 12.3939C2.75 11.9839 3.09 11.6439 3.5 11.6439H21.5C21.91 11.6439 22.25 11.9839 22.25 12.3939C22.25 12.8039 21.91 13.1439 21.5 13.1439Z" fill="#ffffff" />
        <path d="M21.5 18.1439H3.5C3.09 18.1439 2.75 17.8039 2.75 17.3939C2.75 16.9839 3.09 16.6439 3.5 16.6439H21.5C21.91 16.6439 22.25 16.9839 22.25 17.3939C22.25 17.8039 21.91 18.1439 21.5 18.1439Z" fill="#ffffff" />
    </svg>


    return (
        // <div className=' sm:fixed top-0 w-full z-50 border-b-2 border-white'>
        <div className="">
            <div className="bg-transparent  max-w-7xl  flex items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center">
                    <Logonav />
                </Link>


                {/* <div className="justify-between items-center sm:hidden flex text-[#8A8986] font-semibold">
                    <Link to="/" className={`${window.location.pathname === '/' && 'hidden text-white'} mx-3 sm:mx-4 text-[#d1c9b7]`}>Home</Link>
                    <Link to="/about" className={`${window.location.pathname === '/about' && 'hidden text-white'} mx-3 sm:mx-4 text-[#d1c9b7]`}>About</Link>
                    <Link to="/faq" className={`${window.location.pathname === '/faq' && 'hidden text-white'} mx-3 sm:mx-4 text-[#d1c9b7]`}>Faq</Link>
                </div> */}
                <div className="justify-between items-center hidden sm:flex text-[#8A8986] font-semibold">
                    <Link to="/" className={`${window.location.pathname === '/' && ' text-white border-b-4 border-[#BC994B]'} mx-3 sm:mx-4 text-[#d1c9b7]`}>Home</Link>
                    <Link to="/about" className={`${window.location.pathname === '/about' && ' text-white border-b-4 border-[#BC994B]'} mx-3 sm:mx-4 text-[#d1c9b7]`}>About</Link>
                    <Link to="/faq" className={`${window.location.pathname === '/faq' && ' text-white border-b-4 border-[#BC994B]'} mx-3 sm:mx-4 text-[#d1c9b7]`}>Faq</Link>
                </div>

                <div className="sm:flex md:order-2 lg:block hidden">
                    <button type="button" onClick={() => navigate('/contact')} className={`${window.location.pathname === '/contact' && 'block'} whitespace-nowrap flex items-center border border-[#F6CD72]  text-white bg-transparent focus:outline-none  font-medium rounded-md text-sm px-5 sm:px-10 py-3 text-center mr-3 md:mr-0`}>
                        Contact Us
                    </button>

                </div>

                <div onClick={() => setNav(prev => !prev)} className='block sm:hidden text-black cursor-pointer'>

                    {nav && <NavIcon />}

                </div>
            </div>

            {/* <ClickOutside onclickoutside={() => setNav(prev => !prev)} className={!nav ? 'fixed left-0 top-0 h-full w-full border-r border-r-gray-300 bg-[#e9eddb] ease-in-out duration-500 shadow-lg z-[9999px]' : 'ease-in-out duration-500 fixed left-[-100%]'}> */}
            <div
                // onClick={() => setNav(prev => !prev)}
                className={(!nav && (width <= 640))? 'fixed left-0 top-0 h-full w-full border-r border-r-gray-300 bg-[#000] bg-opacity-90 ease-in-out duration-500 shadow-lg z-[19999px]' : 'ease-in-out duration-500 fixed left-[-100%]'}>

                <div className='absolute top-4 right-4 cursor-pointer' onClick={() => setNav(prev => !prev)}>
                    <img className='w-8 h-8 cursor-pointer' src={CloseIcon} alt="CloseIcon" />
                </div>
                <div className="flex flex-col justify-evenly items-center py-10 my-auto h-full mx-auto px-5 text-[#8A8986] font-semibold">

                    {/* <div className="justify-between items-center flex-col flex "> */}
                        <Link to="/" className={`${window.location.pathname === '/' && ' text-white border-b-4 border-[#BC994B]'} mx-3 sm:mx-4 text-[#d1c9b7]`}>Home</Link>
                        <Link to="/about" className={`${window.location.pathname === '/about' && ' text-white border-b-4 border-[#BC994B]'} mx-3 sm:mx-4 text-[#d1c9b7]`}>About</Link>
                        <Link to="/faq" className={`${window.location.pathname === '/faq' && ' text-white border-b-4 border-[#BC994B]'} mx-3 sm:mx-4 text-[#d1c9b7]`}>Faq</Link>
                    {/* </div> */}

                    <button type="button" onClick={() => navigate('/contact')} className={`${window.location.pathname === '/contact' && 'block'} w-full whitespace-nowrap flex flex-col items-center border border-[#F6CD72]  bg-[#F6CD72] text-amber-900 focus:outline-none  font-medium rounded-md text-sm px-5 sm:px-10 py-3 text-center md:mr-0 z-[9999px]`}>
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
