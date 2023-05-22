import { Navbar } from "../../components"
import Footer from "../../components/navbar/Footer"
import Subscribe from "../../components/subscribe/Subscribe"

const About = () => {
  return (
    <div>
      <div className="absolute top-0 z-10 w-full">
        <Navbar />
      </div>
      <section className="relative bg-[url(/aboutpage.svg)] bg-cover bg-center bg-no-repeat lg:h-screen">
        <div className="absolute h-full w-full bg-black opacity-40"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-3xl lg:ml-auto text-center text-white bg-[rgba(24,17,1,0.9)]">
            <div className="text-3xl text-left font-extrabold sm:text-6xl p-5 md:p-20 border-l-[15px] border-[#BC994B]">
              <h1 className='py-10'>About Us</h1>
              <p className='text-base'>Dembally Limited is a leading real estate development company based in Lagos, Nigeria, dedicated to providing affordable luxury real estate solutions. We specialize in building top-quality residential and commercial properties that cater to investors seeking high returns on investment (ROI) and first-time homebuyers. Our commitment to providing exceptional value is at the heart of our operations, guaranteeing customer satisfaction every step of the way.</p>
            </div>
          </div>
        </div>
      </section>



      <div className="max-w-7xl mx-auto space-y-12 mt-10 sm:mt-40">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          {/* <img src="https://source.unsplash.com/640x480/?1" alt="" className="h-80 dark:bg-gray-500 aspect-video" /> */}
          <div className="flex flex-col justify-center flex-1 p-6 text-[#2E2105]">
            <span className="text-2xl uppercase">Amenities</span>
            <p className="my-6 text-base">Our competitive and meticulously designed properties come fully equipped with energy-saving electricity, security, clean water, and a child-friendly environment. Furthermore, we pride ourselves on our transparent and comprehensive after-build property management system, ensuring that our clients continue to enjoy a stress-free experience, long after the purchase.</p>
          </div>

          <div className="flex flex-col justify-center flex-1 p-6 text-[#2E2105]">
            <span className="text-2xl uppercase">Regulations</span>
            {/* <h3 className="text-3xl font-bold"></h3> */}
            <p className="my-6 text-base">At Dembally Limited, we offer flexible payment options tailored to suit various budgets and match the diverse needs of our clientele. Our properties are fully compliant with government land regulations to provide our clients with peace of mind and seamless ownership transitions.</p>
            {/* <button type="button" className="self-start">Action</button> */}
          </div>
        </div>
        <div className="grid md:grid-cols-5 gap-5 my-5 py-10">
          <div className="sm:col-span-2 bg-[url(about01.svg)] bg-cover bg-center bg-no-repeat h-[538px]"></div>
          <div className="sm:col-span-2 md:col-span-1 lg:col-span-1 bg-[url(about02.svg)] bg-cover bg-center bg-no-repeat h-[538px] md:h-[500px] my-auto"></div>
          <div className="sm:col-span-2 bg-[url(about03.svg)] bg-cover bg-center bg-no-repeat h-[538px]"></div>
        </div>
      </div>


      <section className="relative bg-[url(/vision.svg)] bg-cover bg-center bg-no-repeat h-[519px] ">
        <div className="absolute h-full w-full bg-black opacity-70"></div>
        <div className="relative mx-auto my-auto max-w-screen-xl px-4 sm:px-6 lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-md mx-auto text-center text-white">
            <div className="text-3xl font-extrabold pt-20">
              <h1 className='pb-10 text-2xl font-medium'>Mission</h1>
              <p className='text-base'>To revolutionalize the real estate industry in Nigeria by delivering top-tier, energy-efficient properties that are both affordable and luxurious, while providing unparalleled value and exceptional customer service.</p>
            </div>
          </div>

          <hr className="bg-white max-w-xl mx-auto border-white border-5 my-4" />

          <div className="max-w-md mx-auto text-center text-white">
            <div className="text-3xl font-extrabold">
              <h1 className='pb-10 text-2xl font-medium'>Vision</h1>
              <p className='text-base'>To become the premier real estate development company in Nigeria, renowned for our unwavering commitment to quality, innovation, and customer satisfaction.</p>
            </div>

            <p className="mt-32 sm:mt-80 mx-auto max-w-screen-2xl sm:text-xl/relaxed text-base">Dembally Limited is a leading real estate development company based in Lagos, Nigeria, dedicated to providing <br />
              affordable luxury real estate solutions</p>
          </div>
        </div>
      </section >

      <Subscribe />

      <Footer />
    </div >
  )
}

export default About
