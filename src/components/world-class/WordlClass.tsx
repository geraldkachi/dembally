const WordlClass = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between gap-5">
        <div className="flex flex-1 flex-col">
          <p className="text-[40px] cinz">We offer Class</p>
        </div>
        <div className="flex flex-1 flex-col">
          <p>Dembally Limited is a leading real estate development company based in Lagos, Nigeria, dedicated to providing affordable luxury real estate solutions. We specialize in building top-quality residential and commercial properties that cater to investors seeking high returns on investment (ROI) and first-time homebuyers. Our commitment to providing exceptional value is at the heart of our operations, guaranteeing customer satisfaction every step of the way.</p>
        </div>
      </div>
      <div className="grid md:grid-cols-5 my-10 gap-x-10">
        <img src="/worldclass.svg" className='col-span-1 h-full bg-contain bg-center bg-no-repeat' alt="" />
        <img src="/worldclass.svg" className='sm:col-span-3 bg-cover bg-center bg-no-repeat' alt="" />
        <img src="/worldclass.svg" className='col-span-1 h-full bg-cover bg-center bg-no-repeat' alt="" />
      </div>
    </div>
  )
}

export default WordlClass
