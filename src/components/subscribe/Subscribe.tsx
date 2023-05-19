
const Subscribe = () => {
    return (
        <div className="bg-[#fffaf1]">

            <section className="bg-[#fffaf1]">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-2xl font-bold text-[##2E2105] md:text-3xl">
                            Subscribe to our newsletter
                        </h2>

                        <p className="text-[##644F1F] sm:mt-4 sm:block">
                            get the lastes dolor sit amet, consectetur adipisicing elit. Quae dolor
                            officia blanditiis repellat in, vero, aperiam porro ipsum laboriosam
                            consequuntur exercitationem incidunt tempora nisi?
                        </p>
                    </div>

                    <div className="mx-auto mt-8 max-w-xl">
                        <form className="">
                            <div className="flex items-center justify-between gap-4">

                                <div className="sm:flex-1 items-center justify-center gap-x-4">
                                    <label className="sr-only">name</label>

                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full rounded-md border-gray-200 bg-[#F8F7F5] p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                                    />
                                </div>
                                <div className="sm:flex-1">
                                    <label className="sr-only">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="w-full rounded-md border-gray-200 bg-[#F8F7F5] p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                                    />
                                </div>
                            </div>

                            <div className="mt-4 w-full  flex items-center justify-center">
                                <button type="submit" className="flex mt-4 w-full items-center justify-center bg-[#BC994B] px-20 sm:px-28 py-5 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto">
                                    <span className="text-sm font-medium">Subscribe</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Subscribe
