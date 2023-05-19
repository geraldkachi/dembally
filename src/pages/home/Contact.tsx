import { Navbar } from "../../components"
import Footer from "../../components/navbar/Footer"
import Subscribe from "../../components/subscribe/Subscribe"

const Contact = () => {
  return (
    <div>
      <div className="absolute top-0 z-10 w-full">
        <Navbar />
      </div>

      <section className="relative bg-[url(/contactimg.png)] bg-cover bg-center bg-no-repeat sm:h-screen">
      <div className="absolute h-full w-full bg-black opacity-40"></div>

        <div className="relative mx-auto max-w-screen-xl sm:gap-x-56 px-4 sm:py-32 sm:px-6 lg:flex h-screen lg:items-center lg:px-8">
          <div className="hidden sm:flex flex-col justify-between">
            <div className="space-y-2 text-white">
              <h2 className="text-4xl font-bold leading-tight lg:text-5xl pt-14 lg:pt-72">Our Contact</h2>
              <div className="">At Dembally Limited, we prioritise the need a nd satisfaction of our clients; both potential and non. So, feel free to reach us on the contact addresses below</div>
              <div className="">
                <p className="py-10 text-[#FFE19F]">Phone Number</p>
                <p>0816 448 2813</p>
              </div>
              <div className="">
                <p className="py-4 text-[#FFE19F]">Email</p>
                <p>clientservices@dembally.com</p>
              </div>
              <div className="">
                <p className="py-4 text-[#FFE19F]">Address</p>
                <p>Haven of Peace, Plot 2, block 128b, Remi Olowude Way, After Pinnacle petrol station, Marwa Bus stop, Oniru, Lekki.</p>
              </div>
            </div>
            <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
          </div>

          <div className="pt-32 sm:pt-0">

          <form className="space-y-6 ng-untouched p-3 sm:p-10 ng-pristine ng-valid bg-[rgba(24,17,1,0.5)] ">
            <h2 className="text-3xl font-bold leading-tight text-white lg:text-5xl">SCHEDULE AN APPOINTMENT</h2>
            <div>
              <label className="text-sm text-white">Full name</label>
              <input id="name" type="text" placeholder="" className="w-full py-1 sm:py-3 border-b border-[]  bg-transparent placeholder:text-white  focus:outline-none focus:ring-0 focus:text-white" />
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              <div>
                <label className="text-sm text-white">Phone Number</label>
                <input id="phone" type="tel" className="w-full py-1 sm:py-3 text-white border-b border-[]  bg-transparent placeholder:text-white  focus:outline-none focus:ring-0 focus:text-white" />
              </div>

              <div>
                <label className="text-sm text-white">Email</label>
                <input id="email" type="email" className="w-full py-1 sm:py-3 text-white  border-b border-[]  bg-transparent placeholder:text-white  focus:outline-none focus:ring-0 focus:text-white" />
              </div>
            </div>
            <div>
              <label className="text-sm text-white">Description</label>
              <textarea id="message" rows={3} className="w-full py-1 sm:py-3 text-white border-b border-[]  placeholder:text-white  focus:outline-none focus:ring-0 focus:text-white  bg-transparent"></textarea>
            </div>
            <button type="submit" className="w-full py-1 sm:py-3 text-white text-sm font-bold tracking-wide uppercase rounded bg-[#BC994B]">Send Message</button>
          </form>
          </div>


        </div>
      </section>

      <Subscribe />

      <Footer />
    </div>
  )
}

export default Contact


{/* <section className="relative bg-[url(/img1.png)] bg-cover bg-center bg-no-repeat">
<div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
    <div className="max-w-xl mx-auto text-center ltr:sm:text-left rtl:sm:text-right text-white">
        <h1 className="text-3xl font-extrabold sm:text-6xl">Discover Luxurious Living, Redefined</h1>

        <p className="mt-48 mx-auto max-w-screen-2xl sm:text-xl/relaxed text-base">Dembally Limited is a leading real estate development company based in Lagos, Nigeria, dedicated to providing affordable luxury real estate solutions</p>
    </div>
</div>
</section> */}
