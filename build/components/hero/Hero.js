import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
//@ts-ignore
import { Fade } from "react-reveal";
import { Modal, Carousel } from "antd";
import { useNavigate } from 'react-router-dom';
import { forwardRef, useState } from 'react';
import Footer from '../navbar/Footer';
import Navbar from '../navbar/Navbar';
import AboutUs from '../aboutUs/AboutUs';
import Subscribe from '../subscribe/Subscribe';
import LeftArrow from '../../assets/svg/LeftArrow';
import RightArrow from '../../assets/svg/RightArrow';
import Testimonial from '../testimonial/Testimonial';
import OurService from "../our-service/OurService";
import WordlClass from "../world-class/WordlClass";
import OurPartners from "../ourpartners/OurPartners";
const Hero = forwardRef(({ scrollToSection }, ref) => {
    const navigate = useNavigate();
    const [stateNew, setStateNew] = useState(false);
    const onFinish = (e) => {
        e.preventDefault();
    };
    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (_jsx("div", { className: className, style: { ...style, display: 'block', background: '', marginRight: '60px', position: 'absolute', width: '100px' }, onClick: onClick, children: _jsx(RightArrow, {}) }));
    };
    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (_jsx("div", { className: className, style: { ...style, display: 'block', background: '', marginLeft: '60px', position: 'absolute', width: '100px', zIndex: 100 }, onClick: onClick, children: _jsx(LeftArrow, {}) }));
    };
    const settings = {
        nextArrow: _jsx(SampleNextArrow, { className: "hidden" }),
        prevArrow: _jsx(SamplePrevArrow, { className: "hidden" })
    };
    return (_jsxs("div", { className: "", children: [_jsx("div", { className: "w-full", children: _jsxs("div", { className: " bg-no bg-center", children: [_jsx("div", { className: "absolute top-0 z-10 w-full", children: _jsx(Navbar, { ...{ scrollToSection } }) }), _jsxs(Carousel, { autoplay: true, arrows: true, ...settings, children: [_jsxs("section", { className: "relative bg-[url(/herosvg.svg)] bg-cover bg-center bg-no-repeat h-screen", children: [_jsx("div", { className: "absolute h-full w-full bg-black opacity-70" }), _jsx("div", { className: "relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8", children: _jsxs("div", { className: "max-w-4xl mx-auto text-center text-white", children: [_jsxs("div", { className: "text-3xl font-extrabold sm:text-6xl pt-36 lg:pt-40", children: [_jsx("h1", { className: 'pb-10 cinz', children: "Discover Luxurious Living, Redefined" }), _jsx("p", { className: 'text-2xl', children: "- Dembally" })] }), _jsxs("p", { className: "mt-32 lg:mt-28 mx-auto max-w-4xl sm:text-xl/relaxed text-base", children: ["Dembally Limited is a leading real estate development company based in Lagos, Nigeria, dedicated to providing ", _jsx("br", { className: "hidden md:block" }), "affordable luxury real estate solutions"] })] }) })] }), _jsxs("section", { className: "relative bg-[url(/herosvg2.svg)] bg-cover bg-center bg-no-repeat h-screen", children: [_jsx("div", { className: "absolute h-full w-full bg-black opacity-70" }), _jsx("div", { className: "relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8", children: _jsxs("div", { className: "max-w-4xl mx-auto text-center text-white", children: [_jsxs("div", { className: "text-3xl font-extrabold sm:text-6xl pt-36 lg:pt-40", children: [_jsx("h1", { className: 'pb-10 cinz', children: "Class" }), _jsxs("p", { className: 'text-base font-light', children: ["Buying real estate is not only the best way, the quickest way, the safest way, but the only ", _jsx("br", { className: "hidden md:block" }), " way to become wealthy."] }), _jsx("p", { className: 'text-base font-normal', children: "- Marshall Field." })] }), _jsxs("p", { className: "mt-32 lg:mt-28 mx-auto max-w-4xl sm:text-xl/relaxed text-base", children: ["Dembally Limited is a leading real estate development company based in Lagos, Nigeria, dedicated to providing ", _jsx("br", { className: "hidden md:block" }), " affordable luxury real estate solutions "] })] }) })] }), _jsxs("section", { className: "relative bg-[url(/herosvg3.svg)] bg-cover bg-center bg-no-repeat h-screen", children: [_jsx("div", { className: "absolute h-full w-full bg-black opacity-70" }), _jsx("div", { className: "relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8", children: _jsxs("div", { className: "max-w-4xl mx-auto text-center text-white", children: [_jsxs("div", { className: "text-3xl font-extrabold sm:text-6xl pt-36 lg:pt-40", children: [_jsx("h1", { className: 'pb-10 cinz', children: "Luxury" }), _jsx("p", { className: 'text-base font-light', children: "\u201CReal estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world.\" " }), _jsx("p", { className: 'text-base font-normal', children: "- Franklin D. Roosevelt" })] }), _jsxs("p", { className: "mt-32 lg:mt-28 mx-auto max-w-4xl sm:text-xl/relaxed text-base", children: ["Dembally Limited is a leading real estate development company based in Lagos, Nigeria, dedicated to providing ", _jsx("br", { className: "hidden md:block" }), "affordable luxury real estate solutions"] })] }) })] }), _jsxs("section", { className: "relative bg-[url(/herosvg4.svg)] bg-cover bg-center bg-no-repeat h-screen", children: [_jsx("div", { className: "absolute h-full w-full bg-black opacity-70" }), _jsx("div", { className: "relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8", children: _jsxs("div", { className: "max-w-4xl mx-auto text-center text-white", children: [_jsxs("div", { className: "text-3xl font-extrabold sm:text-6xl pt-36 lg:pt-40 ", children: [_jsx("h1", { className: 'pb-10 cinz', children: "Elegance" }), _jsx("p", { className: 'text-base font-light', children: "\u201CReal estate investing, even on a very small scale, remains a tried and true means of building an individual's cash flow and wealth.\"" }), _jsx("p", { className: 'text-base font-normal', children: "- Robert Kiyosaki" })] }), _jsxs("p", { className: "mt-32 lg:mt-28 mx-auto max-w-4xl sm:text-xl/relaxed text-base", children: ["Dembally Limited is a leading real estate development company based in Lagos, Nigeria, dedicated to providing ", _jsx("br", { className: "hidden md:block" }), "affordable luxury real estate solutions"] })] }) })] })] })] }) }), _jsx("section", { className: 'max-w-screen-2xl mx-auto' }), _jsx(Fade, { left: true, children: _jsx(AboutUs, {}) }), _jsx(Fade, { left: true, children: _jsx(OurService, {}) }), _jsx(OurPartners, {}), _jsxs("div", { className: "bg-cover bg-[url(/part.svg)] bg-center bg-no-repeat h-[500px] bg-opacity-90 my-auto py-auto ", children: [_jsx("div", { className: "absolute h-[500px] flex-1 w-full bg-black opacity-90" }), _jsx("div", { className: "relative mx-auto py-auto pt-10 sm:pt-20 max-w-screen-xl px-4 sm:px-6 lg:items-center lg:px-8 ", children: _jsx("div", { className: "max-w-3xl lg:ml-auto text-center text-white", children: _jsxs("div", { className: "text-3xl text-left font-extrabold sm:text-6xl", children: [_jsxs("h1", { className: "py-10 cinz", children: ["Luxury Living", _jsx("br", {}), " Redefined"] }), _jsx("p", { className: 'text-base', children: "Dembally Limited is a leading real estate development company based in Lagos, Nigeria, dedicated to providing affordable luxury real estate solutions. We specialize in building top-quality residential and commercial properties that cater to investors seeking high returns on investment (ROI) and first-time homebuyers. Our commitment to providing exceptional value is at the heart of our operations, guaranteeing customer satisfaction every step of the way." })] }) }) })] }), _jsx(WordlClass, {}), _jsx(Testimonial, {}), _jsx(Subscribe, {}), _jsx("div", { ref: ref, id: "contact" }), _jsx("section", { className: "py-6 bg-[#181101]", children: _jsxs("div", { className: "max-w-7xl border-b border-[#FFFAF1]  mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between", children: [_jsx("h1", { className: "text-3xl font-semibold leading-tight text-center lg:text-left text-white cinz", children: "Having any enquiries to make or thoughts to share?" }), _jsx("button", { className: "px-20 py-5 text-lg font-semibold rounded bg-[#BC994B] text-white whitespace-nowrap", children: "Let's Talk" })] }) }), _jsx(Footer, {}), _jsx(Modal, { open: stateNew, onCancel: () => setStateNew(false), footer: null, closeIcon: _jsx(_Fragment, { children: _jsxs("svg", { className: "icon solid text-grey-slate cursor-pointer float-right m-4 absolute top-0 right-0", width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsxs("g", { filter: "url(#filter0_b_1_654)", children: [_jsx("path", { d: "M20.0002 36.6666C29.2049 36.6666 36.6668 29.2047 36.6668 19.9999C36.6668 10.7952 29.2049 3.33325 20.0002 3.33325C10.7954 3.33325 3.3335 10.7952 3.3335 19.9999C3.3335 29.2047 10.7954 36.6666 20.0002 36.6666Z", fill: "white", fillOpacity: "0.3" }), _jsx("path", { d: "M20.0002 36.6666C29.2049 36.6666 36.6668 29.2047 36.6668 19.9999C36.6668 10.7952 29.2049 3.33325 20.0002 3.33325C10.7954 3.33325 3.3335 10.7952 3.3335 19.9999C3.3335 29.2047 10.7954 36.6666 20.0002 36.6666Z", stroke: "#2568FF", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }), _jsx("path", { d: "M25 15L15 25", stroke: "#2568FF", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M15 15L25 25", stroke: "#2568FF", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("defs", { children: _jsxs("filter", { id: "filter0_b_1_654", x: "-13.6665", y: "-13.6667", width: "67.3333", height: "67.3333", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB", children: [_jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }), _jsx("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "8" }), _jsx("feComposite", { in2: "SourceAlpha", operator: "in", result: "effect1_backgroundBlur_1_654" }), _jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_backgroundBlur_1_654", result: "shape" })] }) })] }) }), maskClosable: false, width: 1000 })] }));
});
export default Hero;