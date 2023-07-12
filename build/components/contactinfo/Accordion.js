import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import CollapseIcon from "../../assets/svg/CollapseIcon";
import PlusIcon from "../../assets/svg/PlusIcon";
function Accordion({ heading, showHeader = true, open = false, children, activeClass = "", otherClasses, }) {
    const [openAccordion, setopenAccordion] = useState(false);
    const toggleAccordion = () => {
        setopenAccordion(!openAccordion);
    };
    const ref = useRef();
    return (_jsxs("div", { className: `relative bg-transparent rounded-lg max-w-4xl mx-auto mb-4  ${openAccordion ? activeClass : ""} ${otherClasses || ""}`, children: [showHeader && (_jsx("div", { className: `w-full rounded-lg px-5 ${open || openAccordion
                    ? ""
                    : ""
                //   : "border shadow-[0px_8px_22px_rgba(151,143,175,0.08)]"
                }`, children: _jsxs("div", { onClick: toggleAccordion, className: `flex cursor-pointer items-center justify-between py-2 space-x-3 bg-transparent`, children: [_jsx("button", { type: "button", children: open || openAccordion ? (_jsx(CollapseIcon, { color: "#FFEEC8" })) : (_jsx(PlusIcon, { color: "#FFEEC8" })) }), _jsxs("span", { style: { flexGrow: 2 }, className: "font-medium text-left cinz", children: [heading, " "] })] }) })), _jsx("div", { ref: ref, style: {
                    maxHeight: open || openAccordion ? ref.current.scrollHeight : 0,
                }, className: `relative transition-all
        } overflow-hidden transition-all duration-[0.7rem] ml-10 ml-16`, children: _jsx("div", { className: "px-5", children: children }) })] }));
}
export default Accordion;
