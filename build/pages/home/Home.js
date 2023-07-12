import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from "react";
import { Hero } from "../../components";
const Home = () => {
    const ref = useRef(null);
    const scrollToSection = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
    // const scrollToSection = (elementRef: unknown) => {
    //   console.log('scrollToSection')
    //   window.scrollTo({
    //     top: elementRef.current.offsetTop,
    //     // top: elementRef.current?.scrollIntoView({behavior: 'smooth'}),
    //     behavior: 'smooth'
    //   });
    // };
    return (_jsx("div", { children: _jsx(Hero, { ...{ scrollToSection, ref } }) }));
};
export default Home;
