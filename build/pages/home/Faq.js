import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Carousel } from "antd";
import { Navbar } from "../../components";
import Accordion from "../../components/contactinfo/Accordion";
import Footer from "../../components/navbar/Footer";
import Subscribe from "../../components/subscribe/Subscribe";
import RightArrow from '../../assets/svg/RightArrow';
import LeftArrow from '../../assets/svg/LeftArrow';
const faqArr2 = [
    {
        header: 'How can I schedule a consultation or property viewing?',
        content: `To schedule a consultation or property viewing, you may call us at 08164482813 or email us at ayotundebally@gmail.com. Our team of professionals would be delighted to assist you in finding the perfect property match.`
    },
    {
        header: 'Where can I find information about your current and past real estate projects?',
        content: `Please visit the "Projects" tab on our website to explore our diverse portfolio of completed and ongoing real estate developments, highlighting the features and amenities that set us apart.`
    },
    {
        header: 'Is investing in property in Nigeria a safe and profitable option?',
        content: `Yes, investing in real estate, particularly in thriving urban areas like Lagos, has proven to be a secure and profitable avenue for investors. Dembally Limited focuses on offering properties with high potential for capital appreciation and rental income, ensuring a rewarding investment experience.`
    },
    {
        header: 'What legal documentation is necessary for foreign investors looking to invest in Nigerian property?',
        content: `Foreign investors require a Certificate of Capital Importation (CCI) and must acquire suitable legal advice to navigate the property registration process. We recommend that foreign investors seek the help of reliable legal and real estate professionals, such as our team at Dembally Limited, to ensure a smooth and hassle-free property acquisition experience.`
    },
    {
        header: 'How do I go about investing in a property if I am living abroad?',
        content: `At Dembally Limited, we can guide you through the entire property acquisition process from afar, ensuring you make informed decisions and receive full assistance in handling legal procedures and documentation.`
    },
    {
        header: 'What kind of returns can I expect from investing in a Dembally Limited property?',
        content: `While specific returns vary based on factors such as location and property type, our properties are designed to yield high capital appreciation and rental income for investors, making them ideal choices for long-term investment strategies.`
    },
    {
        header: 'Are there any tax implications for property investors in Nigeria?',
        content: ` Property investors in Nigeria must pay various taxes, such as Land Use Charge, Capital Gains Tax, and Stamp Duty. It is essential to consult with your tax advisor or a real estate professional like Dembally Limited to better understand your tax obligations and benefits.`
    },
    // {
    //   header: '',
    //   content: ``
    // },
];
const faqArr = [
    {
        header: 'What types of properties does Dembally Limited offer?',
        content: `We offer a range of affordable luxury residential and commercial properties, thoughtfully designed to cater to various requirements and budgets of investors and first-time homebuyers in Lagos, Nigeria.`
    },
    {
        header: 'What sets Dembally Limited apart from other real estate developers?',
        content: `Our unique selling proposition lies in our commitment to providing properties with notable ROI for investors and comfortable homes for first-time buyers. We also prioritize energy efficiency, security, clean water, and a child-friendly environment, along with a transparent and comprehensive after-build property management system.`
    },
    {
        header: 'Do your properties come with land approval from the government?',
        content: `Yes, all our properties come with the necessary government land approvals to ensure seamless ownership transitions and avoid any complications for our clients.`
    },
    {
        header: 'What flexible payment options do you offer?',
        content: `At Dembally Limited, we understand that each client has unique financial needs. We offer convenient payment options, tailored to suit various budgets, ensuring that our luxury properties remain accessible and affordable.`
    },
    {
        header: 'Do you provide after-build property management services??',
        content: `Yes, we take pride in our transparent and comprehensive after-build property management system, which allows our clients to enjoy a stress-free experience and maintain the value of their investment.`
    },
    {
        header: 'What measures do you take to ensure energy efficiency in your properties?',
        content: `We incorporate state-of-the-art energy-saving technologies and design practices in our properties, resulting in reduced utility costs and a minimal carbon footprint.`
    },
];
const Faq = () => {
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
    return (_jsxs("div", { children: [_jsx("div", { className: "absolute top-0 z-10 w-full", children: _jsx(Navbar, {}) }), _jsxs("div", { children: [_jsx("div", { className: "", children: _jsx("div", { className: "py-20 sm:py-36 object-cover w-full h-full bg-no-repeat bg-cover bg-center mx-auto bg-[url('/faqfirst.svg')] bg-black bg-opacity-100", children: _jsx("div", { className: "mt-36 text-3xl md:text-[56px] text-white font-medium text-center cinz", children: "Frequently Asked Questions" }) }) }), _jsx("div", { children: _jsxs("div", { className: "relative object-cover w-full sm:h-max bg-no-repeat bg-cover bg-center mx-auto bg-[url('/faqsecond.svg')] bg-black bg-opacity-100 opacity-100", children: [_jsx("div", { className: "absolute h-full flex-1 w-full bg-black opacity-70 bg-opacity-100" }), _jsx("div", { className: "py-20", children: _jsxs(Carousel, { arrows: true, ...settings, children: [_jsx("div", { className: "flex items-center justify-center", children: faqArr.map((item, index) => (_jsx(Accordion, { heading: _jsx("h1", { className: "font-semibold my-4 text-base text-[#FFEEC8]", children: item.header }), children: _jsx("p", { className: "pb-4 text-[#FFEEC8]", children: item?.content }) }, `faq_${index}`))) }), _jsx("div", { children: faqArr2.map((item, index) => (_jsx(Accordion, { heading: _jsx("h1", { className: "font-semibold my-4 text-base text-[#FFEEC8]", children: item.header }), children: _jsx("p", { className: "pb-4 text-[#FFEEC8]", children: item?.content }) }, `faq_${index}`))) })] }) })] }) })] }), _jsx(Subscribe, {}), _jsx(Footer, {})] }));
};
export default Faq;
