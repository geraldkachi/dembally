//@ts-ignore
import { Fade } from "react-reveal"
import { Modal, Carousel } from "antd";
import { useNavigate } from 'react-router-dom'
import { FormEvent, Ref, forwardRef, useState } from 'react'

import Footer from '../navbar/Footer'
import Navbar from '../navbar/Navbar';
import AboutUs from '../aboutUs/AboutUs';
import Subscribe from '../subscribe/Subscribe';
import LeftArrow from '../../assets/svg/LeftArrow';
import RightArrow from '../../assets/svg/RightArrow';
import Testimonial from '../testimonial/Testimonial';
import OurService from "../our-service/OurService";



interface Props {
    scrollToSection?: () => void
}

const Hero = forwardRef(({ scrollToSection }: Props, ref: Ref<HTMLDivElement>) => {
    const navigate = useNavigate()
    const [stateNew, setStateNew] = useState<boolean>(false)

    const onFinish = (e: FormEvent) => {
        e.preventDefault()
    }

    const SampleNextArrow = (props: any) => {
        const { className, style, onClick } = props
        return (
            <div
                className={className}
                style={{ ...style, display: 'block', background: '', marginRight: '60px', position: 'absolute', width: '100px' }}
                onClick={onClick}
            >
                <RightArrow />
            </div>
        )
    }

    const SamplePrevArrow = (props: any) => {
        const { className, style, onClick } = props
        return (
            <div
                className={className}
                style={{ ...style, display: 'block', background: '', marginLeft: '60px', position: 'absolute', width: '100px', zIndex: 100 }}
                onClick={onClick}
            >
                <LeftArrow />
            </div>
        )
    }

    const settings = {
        nextArrow: <SampleNextArrow className="hidden" />,
        prevArrow: <SamplePrevArrow className="hidden" />
    }


    return (
        <div className="">
            <div className="w-full">
                <div className=" bg-no bg-center">
                    <div className="absolute top-0 z-10 w-full">
                        <Navbar {...{ scrollToSection }} />
                    </div>

                    <Carousel autoplay arrows {...settings}>
                        <section className="relative bg-[url(/herosvg.svg)] bg-cover bg-center bg-no-repeat h-screen">
                            <div className="absolute h-full w-full bg-black opacity-70"></div>
                            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                                <div className="max-w-7xl mx-auto text-center text-white">
                                    <div className="text-3xl font-extrabold sm:text-6xl pt-40 lg:pt-56">
                                        <h1 className='pb-10'>Discover Luxurious Living, Redefined</h1>
                                        <p className='text-2xl'>- Dembally</p>
                                    </div>

                                    <p className="mt-32 lg:mt-72 mx-auto max-w-screen-2xl sm:text-xl/relaxed text-base">Dembally Limited is a leading real estate development company based in Lagos, Nigeria, dedicated to providing <br className="hidden md:block" />
                                        affordable luxury real estate solutions</p>
                                </div>
                            </div>
                        </section>

                        <section className="relative bg-[url(/herosvg2.svg)] bg-cover bg-center bg-no-repeat h-screen">
                            <div className="absolute h-full w-full bg-black opacity-70"></div>
                            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                                <div className="max-w-7xl mx-auto text-center text-white">
                                    <div className="text-3xl font-extrabold sm:text-6xl pt-40 lg:pt-56">
                                        <h1 className='pb-10'>Class</h1>
                                        <p className='text-base font-light'>Buying real estate is not only the best way, the quickest way, the safest way, but the only <br className="hidden md:block" /> way to become wealthy.</p>
                                        <p className='text-base font-normal'>- Marshall Field.</p>
                                    </div>

                                    <p className="mt-32 lg:mt-72 mx-auto max-w-screen-2xl sm:text-xl/relaxed text-base">Dembally Limited is a leading real estate development company based in Lagos, Nigeria, dedicated to providing <br className="hidden md:block" /> affordable luxury real estate solutions </p>
                                </div>
                            </div>
                        </section>

                        <section className="relative bg-[url(/herosvg3.svg)] bg-cover bg-center bg-no-repeat h-screen">
                            <div className="absolute h-full w-full bg-black opacity-70"></div>
                            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                                <div className="max-w-7xl mx-auto text-center text-white">
                                    <div className="text-3xl font-extrabold sm:text-6xl pt-40 lg:pt-56">
                                        <h1 className='pb-10'>Luxury</h1>
                                        <p className='text-base font-light'>“Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world." </p>
                                        <p className='text-base font-normal'>- Franklin D. Roosevelt</p>
                                    </div>

                                    <p className="mt-32 lg:mt-72 mx-auto max-w-screen-2xl sm:text-xl/relaxed text-base">Dembally Limited is a leading real estate development company based in Lagos, Nigeria, dedicated to providing <br className="hidden md:block" />
                                        affordable luxury real estate solutions</p>
                                </div>
                            </div>
                        </section>

                        <section className="relative bg-[url(/herosvg4.svg)] bg-cover bg-center bg-no-repeat h-screen">
                            <div className="absolute h-full w-full bg-black opacity-70"></div>
                            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                                <div className="max-w-7xl mx-auto text-center text-white">
                                    <div className="text-3xl font-extrabold sm:text-6xl pt-40 lg:pt-56 ">
                                        <h1 className='pb-10'>Elegance</h1>
                                        <p className='text-base font-light'>“Real estate investing, even on a very small scale, remains a tried and true means of building an individual's cash flow and wealth."</p>
                                        <p className='text-base font-normal'>- Robert Kiyosaki</p>
                                    </div>

                                    <p className="mt-32 lg:mt-72 mx-auto max-w-screen-2xl sm:text-xl/relaxed text-base">Dembally Limited is a leading real estate development company based in Lagos, Nigeria, dedicated to providing <br className="hidden md:block" />
                                        affordable luxury real estate solutions</p>
                                </div>
                            </div>
                        </section>
                    </Carousel>
                </div>


            </div>
            <section className='max-w-screen-2xl mx-auto'>

            </section>

            <Fade left>
                <AboutUs />
            </Fade>
            <Fade left>
                <OurService />
            </Fade>

            <Testimonial />
            <div className="bg-cover bg-[url(/part.svg)] bg-center bg-no-repeat h-[500px] bg-opacity-90 my-auto">
                <div className="absolute h-[500px] flex-1 w-full bg-black opacity-90"></div>
                <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:items-center lg:px-8 ">
                    <div className="max-w-3xl lg:ml-auto text-center text-white">
                        <div className="text-3xl text-left font-extrabold sm:text-6xl">
                            <h1 className="py-10">Luxury Living<br /> Redefined</h1>
                            <p className='text-base'>Dembally Limited is a leading real estate development company based in Lagos, Nigeria, dedicated to providing affordable luxury real estate solutions. We specialize in building top-quality residential and commercial properties that cater to investors seeking high returns on investment (ROI) and first-time homebuyers. Our commitment to providing exceptional value is at the heart of our operations, guaranteeing customer satisfaction every step of the way.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Subscribe />

            <div ref={ref} id="contact">

            </div>

            <section className="py-6 bg-[#181101]">
                <div className="max-w-7xl mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
                    <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left text-white">Having any enquiries to make or thoughts to share?</h1>
                    <button className="px-20 py-5 text-lg font-semibold rounded bg-[#BC994B] text-white">Let&apos;s Talk</button>
                </div>
            </section>
            <Footer />


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
                {/* <Modal show={stateNew} closeModal={setStateNew}> */}
                {/* <PlaceOrder {...{ setStateNew }} /> */}
            </Modal>
        </div>
    )
})

export default Hero
