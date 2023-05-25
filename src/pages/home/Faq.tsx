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
  {
    header: 'How can I schedule a consultation or property viewing?',
    content: `To schedule a consultation or property viewing, you may call us at 08164482813 or email us at ayotundebally@gmail.com. Our team of professionals would be delighted to assist you in finding the perfect property match.`
  },
  {
    header: 'Where can I find information about your current and past real estate projects?',
    content: `Please visit the "Projects" tab on our website to explore our diverse portfolio of completed and ongoing real estate developments, highlighting the features and amenities that set us apart.`
  },
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

        <div className="">
          <div className="py-20 sm:py-36 object-cover w-full h-full bg-no-repeat bg-cover bg-center mx-auto bg-[url('/faqfirst.svg')] bg-black bg-opacity-100">
          {/* <div className="absolute h-full w-full bg-black opacity-5"></div> */}
            <div className="mt-36 text-3xl md:text-[56px] text-white font-medium text-center cinz">Frequently Asked Questions</div>
          </div>
        </div>

        <div className="object-cover w-full h-full sm:h-screen bg-no-repeat bg-cover bg-center mx-auto bg-[url('/faqsecond.svg')] bg-black bg-opacity-100">
          <div className="absolute h-full w-full bg-black opacity-70 bg-opacity-90"></div>

          <div className="pt-20 pb-32">
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
