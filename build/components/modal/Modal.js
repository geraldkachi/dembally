import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ClickOutside } from "../../hooks/ClickOutside";
const Modal = (props) => {
    const { type, icon, show, title, children, subTitle, closeModal } = props;
    return (_jsx(_Fragment, { children: show && (_jsxs(_Fragment, { children: [_jsx("div", { className: `justify-center items-center flex overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none mx-3 ${show ? 'block' : 'hidden'}`, children: _jsx(ClickOutside, { onclickoutside: () => closeModal(false), className: ` fixed z-50 rounded-xl mx-0 overflow-hidden`, style: {
                            top: show ? '50%' : '-50%',
                            opacity: show ? 1 : 0,
                            // width: '40%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }, children: _jsx("div", { style: { overflow: 'hidden' }, className: "relative my-6 mx-auto overflow-hidden", children: _jsxs("div", { className: "overflow-y-hidden border-0 rounded-3xl p-5 sm:p-10 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none", children: [_jsxs("svg", { className: "icon solid text-grey-slate cursor-pointer float-right m-4 absolute top-0 right-0", onClick: () => closeModal(false), width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsxs("g", { filter: "url(#filter0_b_1_654)", children: [_jsx("path", { d: "M20.0002 36.6666C29.2049 36.6666 36.6668 29.2047 36.6668 19.9999C36.6668 10.7952 29.2049 3.33325 20.0002 3.33325C10.7954 3.33325 3.3335 10.7952 3.3335 19.9999C3.3335 29.2047 10.7954 36.6666 20.0002 36.6666Z", fill: "white", fillOpacity: "0.3" }), _jsx("path", { d: "M20.0002 36.6666C29.2049 36.6666 36.6668 29.2047 36.6668 19.9999C36.6668 10.7952 29.2049 3.33325 20.0002 3.33325C10.7954 3.33325 3.3335 10.7952 3.3335 19.9999C3.3335 29.2047 10.7954 36.6666 20.0002 36.6666Z", stroke: "#2568FF", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }), _jsx("path", { d: "M25 15L15 25", stroke: "#2568FF", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M15 15L25 25", stroke: "#2568FF", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("defs", { children: _jsxs("filter", { id: "filter0_b_1_654", x: "-13.6665", y: "-13.6667", width: "67.3333", height: "67.3333", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB", children: [_jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }), _jsx("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "8" }), _jsx("feComposite", { in2: "SourceAlpha", operator: "in", result: "effect1_backgroundBlur_1_654" }), _jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_backgroundBlur_1_654", result: "shape" })] }) })] }), type === "icon" && (_jsx("div", { className: "flex items-center justify-center m-auto mt-10 w-20 h-20 rounded-full", children: icon })), _jsxs("div", { className: "mx-auto", children: [_jsx("h5", { className: "text-4xl font-semibold mt-5 text- w-80", children: title && title }), _jsx("p", { className: "text-center container mt-2 text-grey-slate text-base w-80", children: subTitle })] }), children] }) }) }) }), _jsx("div", { className: "opacity-25 fixed inset-0 z-40 bg-black" })] })) }));
};
export default Modal;