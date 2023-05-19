import { Navbar } from "../../components"
import Accordion from "../../components/contactinfo/Accordion"
import Footer from "../../components/navbar/Footer"
import Subscribe from "../../components/subscribe/Subscribe"


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

  return (
    <div>
      <div className="absolute top-0 z-10 w-full">
        <Navbar />
      </div>

      <div className="py-20 object-cover w-full h-full bg-no-repeat bg-cover bg-center mx-auto bg-[url('/faqfirst.png')]">
        <div className="mt-52 text-5xl z-10 text-white font-medium text-center">Frequently Asked Questions</div>
      </div>

      <div className="py-20 object-cover w-full h-full sm:h-screen bg-no-repeat bg-cover bg-center mx-auto bg-[url('/aboutbac.png')]">
        <div className="pb-40">
          {faqArr.map((item, index) => (
            <Accordion key={`faq_${index}`} heading={
              <h1 className="font-semibold my-4 text-lg">{item.header}</h1>}>
              <p className="pb-4">{item?.content}</p>
            </Accordion>
          ))}
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
