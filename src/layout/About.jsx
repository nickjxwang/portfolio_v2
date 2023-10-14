import AboutImg from '../assets/about.jpg'

const About = () => {
    return (
        <section
            className='w-full mx-auto px-6 relative h-full xl:w-3/4 lg:w-[85%] md:px-0 sm:section'
            id='about'
        >
            <div className='grid grid-rows-4 md:grid-cols-5 md:grid-rows-1'>
                <div className='h-full row-span-2 md:col-span-3 md:order-1'>
                    <div className='lg:px-10 md:px-2'>
                        <div className='relative '>
                            <h2 className='absolute -top-6 -left-8 -z-10 text-body text-[5rem] md:-left-14 md:-top-12 lg:text-[9rem] md:text-[8rem]'>
                                About
                            </h2>

                            <div className='w-[95%] mx-auto mt-[7.5rem] xl:px-10 xl:w-full'>
                                <p className='text-text text-sm font-normal mb-6 md:text-xl'>
                                    I'm passionate about web development and
                                    have experience in interactive design. I
                                    excel at problem-solving and transforming
                                    visual concepts into dynamic, interactive,
                                    and user-friendly websites.
                                </p>
                            </div>
                        </div>

                        <div className='grid grid-rows-2 gap-4 px-2 sm:px-4 xl:px-5 md:gap-10'>
                            <div className='flex flex-col gap-3 md:gap-10'>
                                <h3 className='text-xs text-title md:text-xl'>
                                    Development
                                </h3>
                                <ul className='grid grid-cols-4 gap-2 text-[10px] font-normal text-title sm:text-base md:grid-cols-3 md:gap-6 sm:mx-2 md:mx-4 lg:mx-6'>
                                    <li className='border sm:py-2 sm:px-2 py-1 rounded-[.2rem] text-center'>
                                        <p>HTML/CSS</p>
                                    </li>
                                    <li className='border sm:py-2 sm:px-2 py-1 rounded-[.2rem] text-center'>
                                        <p>Javascript</p>
                                    </li>
                                    <li className='border sm:py-2 sm:px-2 py-1 rounded-[.2rem] text-center'>
                                        <p>React</p>
                                    </li>
                                    <li className='border sm:py-2 sm:px-2 py-1 rounded-[.2rem] text-center'>
                                        <p>TailwindCSS</p>
                                    </li>
                                    <li className='border sm:py-2 sm:px-2 py-1 rounded-[.2rem] text-center'>
                                        <p>Git</p>
                                    </li>
                                    <li className='border sm:py-2 sm:px-2 py-1 rounded-[.2rem] text-center'>
                                        <p>Unity</p>
                                    </li>
                                    <li className='border sm:py-2 sm:px-2 py-1 rounded-[.2rem] text-center'>
                                        <p>C#</p>
                                    </li>
                                </ul>
                            </div>
                            <div className=''>
                                <h3 className='text-xs text-title mb-3 md:text-xl md:mb-10'>
                                    Design
                                </h3>
                                <ul className='grid grid-cols-4 gap-2 text-[10px] font-normal text-title sm:text-base md:grid-cols-3 md:gap-6 sm:mx-2 md:mx-4 lg:mx-6'>
                                    <li className='border sm:py-2 sm:px-2 py-[2px] rounded-[.2rem] text-center'>
                                        <p>Figma</p>
                                    </li>
                                    <li className='border sm:py-2 sm:px-2 py-[2px] rounded-[.2rem] text-center'>
                                        <p>Photoshop</p>
                                    </li>
                                    <li className='border sm:py-2 sm:px-2 py-[2px] rounded-[.2rem] text-center'>
                                        <p>Illustrator</p>
                                    </li>
                                    <li className='border sm:py-2 sm:px-2 py-[2px] rounded-[.2rem] text-center'>
                                        <p>After Effect</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row-span-2 md:col-span-2 h-full'>
                    <div className='w-[90%] h-full mx-auto bg-about bg-cover bg-no-repeat  xl:w-[100%] xl:bg-[center_left_3rem] lg:bg-[center_left_2rem] md:h-full lg:w-full md:bg-[center_left_-2rem'></div>
                </div>
            </div>
        </section>
    )
}
export default About
