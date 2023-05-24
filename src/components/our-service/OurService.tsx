import { Carousel } from "antd";
import LeftArrow from '../../assets/svg/LeftArrow';
import RightArrow from '../../assets/svg/RightArrow';

const OurService = () => {

    const SampleNextArrow = (props: any) => {
        const { className, style, onClick } = props
        return (
            <div
                className={className}
                style={{ ...style, display: 'block', background: '', marginRight: '60px', position: 'absolute', width: '100px' }}
                onClick={onClick}
            >
                <RightArrow color="#261F0E" />
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
                <LeftArrow color="#261F0E" />
            </div>
        )
    }

    const settings = {
        nextArrow: <SampleNextArrow className="hidden" />,
        prevArrow: <SamplePrevArrow className="hidden" />
    }


    return (
        <Carousel autoplay arrows {...settings}>
            <div className=" bg-[#FEEEC8] h-full md:h-screen">
                <div className="grid md:grid-cols-2 xl:h-screen max-w-7xl mx-auto gap-x-4 md:py-20">
                    <div className="">
                        <img src="/ourservice.svg" className="bg-cover bg-center bg-no-repeat h-full sm:h-[700px]" alt="life" />
                    </div>

                    <div className="flex items-center justify-center text-black p-6">
                        <div>
                            <p className="text-3xl md:text-5xl my-5 cinz">Property Brokerage</p>
                            <p className="my-10 text-base text-">Dembally Limited is a leading real estate development company based in Lagos, Nigeria, dedicated to providing affordable luxury real estate solutions. We specialize in building top-quality residential and commercial properties that cater to investors seeking high returns on investment (ROI) and first-time homebuyers. Our commitment to providing exceptional value is at the heart of our operations, guaranteeing customer satisfaction every step of the way.</p>
                            <div>
                                <p className="flex items-center gap-2 cursor-pointer">
                                    <span>
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.078 6.96731C12.7838 6.67572 12.3089 6.67784 12.0173 6.97204C11.7257 7.26624 11.7278 7.74111 12.022 8.03269L13.4324 9.43054C14.0073 10.0003 14.3927 10.3839 14.6518 10.7065C14.6637 10.7213 14.6751 10.7358 14.6862 10.75L7.75 10.75C7.33579 10.75 7 11.0858 7 11.5C7 11.9142 7.33579 12.25 7.75 12.25L14.6862 12.25C14.6751 12.2642 14.6637 12.2787 14.6518 12.2935C14.3927 12.6161 14.0073 12.9997 13.4324 13.5695L12.022 14.9673C11.7278 15.2589 11.7257 15.7338 12.0173 16.028C12.3089 16.3222 12.7838 16.3243 13.078 16.0327L14.5191 14.6043C15.0553 14.073 15.5025 13.6298 15.8213 13.2328C16.1557 12.8163 16.4101 12.3787 16.4781 11.8455C16.4927 11.7308 16.5 11.6154 16.5 11.5C16.5 11.3846 16.4927 11.2692 16.4781 11.1545C16.4101 10.6213 16.1557 10.1837 15.8213 9.76724C15.5025 9.37023 15.0553 8.92705 14.5191 8.39568L13.078 6.96731Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.75 0.75C5.81294 0.75 1 5.56294 1 11.5C1 17.4371 5.81294 22.25 11.75 22.25C17.6871 22.25 22.5 17.4371 22.5 11.5C22.5 5.56294 17.6871 0.75 11.75 0.75ZM2.5 11.5C2.5 6.39137 6.64137 2.25 11.75 2.25C16.8586 2.25 21 6.39137 21 11.5C21 16.6086 16.8586 20.75 11.75 20.75C6.64137 20.75 2.5 16.6086 2.5 11.5Z" fill="white" />
                                            <path d="M13.078 6.96731C12.7838 6.67572 12.3089 6.67784 12.0173 6.97204C11.7257 7.26624 11.7278 7.74111 12.022 8.03269L13.4324 9.43054C14.0073 10.0003 14.3927 10.3839 14.6518 10.7065C14.6637 10.7213 14.6751 10.7358 14.6862 10.75L7.75 10.75C7.33579 10.75 7 11.0858 7 11.5C7 11.9142 7.33579 12.25 7.75 12.25L14.6862 12.25C14.6751 12.2642 14.6637 12.2787 14.6518 12.2935C14.3927 12.6161 14.0073 12.9997 13.4324 13.5695L12.022 14.9673C11.7278 15.2589 11.7257 15.7338 12.0173 16.028C12.3089 16.3222 12.7838 16.3243 13.078 16.0327L14.5191 14.6043C15.0553 14.073 15.5025 13.6298 15.8213 13.2328C16.1557 12.8163 16.4101 12.3787 16.4781 11.8455C16.4927 11.7308 16.5 11.6154 16.5 11.5C16.5 11.3846 16.4927 11.2692 16.4781 11.1545C16.4101 10.6213 16.1557 10.1837 15.8213 9.76724C15.5025 9.37023 15.0553 8.92705 14.5191 8.39568L13.078 6.96731Z" stroke="#181101" strokeWidth="0.5" strokeLinecap="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.75 0.75C5.81294 0.75 1 5.56294 1 11.5C1 17.4371 5.81294 22.25 11.75 22.25C17.6871 22.25 22.5 17.4371 22.5 11.5C22.5 5.56294 17.6871 0.75 11.75 0.75ZM2.5 11.5C2.5 6.39137 6.64137 2.25 11.75 2.25C16.8586 2.25 21 6.39137 21 11.5C21 16.6086 16.8586 20.75 11.75 20.75C6.64137 20.75 2.5 16.6086 2.5 11.5Z" stroke="#181101" strokeWidth="0.5" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                    Read more</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* second sreen */}
            <div className=" bg-[#FEEEC8] h-full md:h-screen">
                <div className="grid md:grid-cols-2 xl:h-screen max-w-7xl mx-auto gap-x-4 md:py-20">
                    <div className="order-last md:order-1">
                        <img src="/ourservice2.svg" className="bg-cover bg-center bg-no-repeat h-full sm:h-[700px]" alt="life" />
                    </div>

                    <div className="flex items-center justify-center text-black p-6">
                        <div>
                            <p className="text-3xl md:text-5xl my-5 cinz">Project Management</p>
                            <p className="my-10 text-base text-">Dembally Limited is a leading real estate development company based in Lagos, Nigeria, dedicated to providing affordable luxury real estate solutions. We specialize in building top-quality residential and commercial properties that cater to investors seeking high returns on investment (ROI) and first-time homebuyers. Our commitment to providing exceptional value is at the heart of our operations, guaranteeing customer satisfaction every step of the way.</p>
                            <div>
                                <p className="flex items-center gap-2 cursor-pointer">
                                    <span>
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.078 6.96731C12.7838 6.67572 12.3089 6.67784 12.0173 6.97204C11.7257 7.26624 11.7278 7.74111 12.022 8.03269L13.4324 9.43054C14.0073 10.0003 14.3927 10.3839 14.6518 10.7065C14.6637 10.7213 14.6751 10.7358 14.6862 10.75L7.75 10.75C7.33579 10.75 7 11.0858 7 11.5C7 11.9142 7.33579 12.25 7.75 12.25L14.6862 12.25C14.6751 12.2642 14.6637 12.2787 14.6518 12.2935C14.3927 12.6161 14.0073 12.9997 13.4324 13.5695L12.022 14.9673C11.7278 15.2589 11.7257 15.7338 12.0173 16.028C12.3089 16.3222 12.7838 16.3243 13.078 16.0327L14.5191 14.6043C15.0553 14.073 15.5025 13.6298 15.8213 13.2328C16.1557 12.8163 16.4101 12.3787 16.4781 11.8455C16.4927 11.7308 16.5 11.6154 16.5 11.5C16.5 11.3846 16.4927 11.2692 16.4781 11.1545C16.4101 10.6213 16.1557 10.1837 15.8213 9.76724C15.5025 9.37023 15.0553 8.92705 14.5191 8.39568L13.078 6.96731Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.75 0.75C5.81294 0.75 1 5.56294 1 11.5C1 17.4371 5.81294 22.25 11.75 22.25C17.6871 22.25 22.5 17.4371 22.5 11.5C22.5 5.56294 17.6871 0.75 11.75 0.75ZM2.5 11.5C2.5 6.39137 6.64137 2.25 11.75 2.25C16.8586 2.25 21 6.39137 21 11.5C21 16.6086 16.8586 20.75 11.75 20.75C6.64137 20.75 2.5 16.6086 2.5 11.5Z" fill="white" />
                                            <path d="M13.078 6.96731C12.7838 6.67572 12.3089 6.67784 12.0173 6.97204C11.7257 7.26624 11.7278 7.74111 12.022 8.03269L13.4324 9.43054C14.0073 10.0003 14.3927 10.3839 14.6518 10.7065C14.6637 10.7213 14.6751 10.7358 14.6862 10.75L7.75 10.75C7.33579 10.75 7 11.0858 7 11.5C7 11.9142 7.33579 12.25 7.75 12.25L14.6862 12.25C14.6751 12.2642 14.6637 12.2787 14.6518 12.2935C14.3927 12.6161 14.0073 12.9997 13.4324 13.5695L12.022 14.9673C11.7278 15.2589 11.7257 15.7338 12.0173 16.028C12.3089 16.3222 12.7838 16.3243 13.078 16.0327L14.5191 14.6043C15.0553 14.073 15.5025 13.6298 15.8213 13.2328C16.1557 12.8163 16.4101 12.3787 16.4781 11.8455C16.4927 11.7308 16.5 11.6154 16.5 11.5C16.5 11.3846 16.4927 11.2692 16.4781 11.1545C16.4101 10.6213 16.1557 10.1837 15.8213 9.76724C15.5025 9.37023 15.0553 8.92705 14.5191 8.39568L13.078 6.96731Z" stroke="#181101" strokeWidth="0.5" strokeLinecap="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.75 0.75C5.81294 0.75 1 5.56294 1 11.5C1 17.4371 5.81294 22.25 11.75 22.25C17.6871 22.25 22.5 17.4371 22.5 11.5C22.5 5.56294 17.6871 0.75 11.75 0.75ZM2.5 11.5C2.5 6.39137 6.64137 2.25 11.75 2.25C16.8586 2.25 21 6.39137 21 11.5C21 16.6086 16.8586 20.75 11.75 20.75C6.64137 20.75 2.5 16.6086 2.5 11.5Z" stroke="#181101" strokeWidth="0.5" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                    Read more</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Carousel>
    )
}

export default OurService
