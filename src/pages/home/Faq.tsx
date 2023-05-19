import { Carousel } from "antd"
import { Navbar } from "../../components"
import Accordion from "../../components/contactinfo/Accordion"
import Footer from "../../components/navbar/Footer"
import Subscribe from "../../components/subscribe/Subscribe"

import RightArrow from '../../assets/svg/RightArrow';
import LeftArrow from '../../assets/svg/LeftArrow';

const faqArr = [
  {
    header: 'What types of properties does Dembally Limited offer?',
    content: `The Music Rater app is a tool specifically designed for musicians to rate their own music and get feedback from other musicians. It allows musicians to create a profile, upload their music, and receive ratings and comments from other users on the platform.`
  },
  {
    header: 'How do I register on the Platform?',
    content: `The Music Rater app is a tool specifically designed for musicians to rate their own music and get feedback from other musicians. It allows musicians to create a profile, upload their music, and receive ratings and comments from other users on the platform.`
  },
  {
    header: 'How does the rating system work?',
    content: `The Music Rater app is a tool specifically designed for musicians to rate their own music and get feedback from other musicians. It allows musicians to create a profile, upload their music, and receive ratings and comments from other users on the platform.`
  },
  {
    header: 'Can i  upload any type of song  on Music Rater?',
    content: `The Music Rater app is a tool specifically designed for musicians to rate their own music and get feedback from other musicians. It allows musicians to create a profile, upload their music, and receive ratings and comments from other users on the platform.`
  },
  {
    header: 'Do I get feedbacks from other artists on the platform?',
    content: `The Music Rater app is a tool specifically designed for musicians to rate their own music and get feedback from other musicians. It allows musicians to create a profile, upload their music, and receive ratings and comments from other users on the platform.`
  },
  {
    header: 'Is the Music Rater app free to use?',
    content: `The Music Rater app is a tool specifically designed for musicians to rate their own music and get feedback from other musicians. It allows musicians to create a profile, upload their music, and receive ratings and comments from other users on the platform.`
  },
  // {
  //   header: 'Is the Music Rater available on all devices?',
  //   content: `The Music Rater app is a tool specifically designed for musicians to rate their own music and get feedback from other musicians. It allows musicians to create a profile, upload their music, and receive ratings and comments from other users on the platform.`
  // },
  // {
  //   header: 'Is the Music Rater available on all devices?',
  //   content: `The Music Rater app is a tool specifically designed for musicians to rate their own music and get feedback from other musicians. It allows musicians to create a profile, upload their music, and receive ratings and comments from other users on the platform.`
  // },
]

const Faq = () => {

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
    <div>
      <div className="absolute top-0 z-10 w-full">
        <Navbar />
      </div>
      <div>
        {/* <div className="absolute h-full w-full bg-black opacity-70"></div> */}

        <div className="py-20 object-cover w-full h-full bg-no-repeat bg-cover bg-center mx-auto bg-[url('/faqfirst.png')]">
          {/* <div className="absolute h-full w-full bg-black opacity-70"></div> */}
          <div className="mt-52 text-5xl z-10 text-white font-medium text-center">Frequently Asked Questions</div>
        </div>

        <div className="py-20 object-cover w-full h-full sm:h-screen bg-no-repeat bg-cover bg-center mx-auto bg-[url('/aboutbac.png')]">
          <div className="pb-40">
            <Carousel arrows {...settings}>
              <div className="flex items-center justify-center">
              {faqArr.map((item, index) => (
                <Accordion key={`faq_${index}`} heading={<h1 className="font-semibold my-4 text-lg text-[#FFEEC8]">{item.header}</h1>}>
                  <p className="pb-4 text-[#FFEEC8]">{item?.content}</p>
                </Accordion>
              ))}
              </div>
              <div>
              {faqArr.map((item, index) => (
                <Accordion key={`faq_${index}`} heading={<h1 className="font-semibold my-4 text-lg text-[#FFEEC8]">{item.header}</h1>}>
                  <p className="pb-4 text-[#FFEEC8]">{item?.content}</p>
                </Accordion>
              ))}
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <Subscribe />

      <Footer />
    </div>
  )
}

export default Faq

//    Array(7)
//               .fill("")
//               .map((_, index) => (
