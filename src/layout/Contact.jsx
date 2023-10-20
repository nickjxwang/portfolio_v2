import emailjs from '@emailjs/browser'
import { useEffect, useRef } from 'react'
import { RiSendPlaneLine } from 'react-icons/ri'

const Contact = () => {
    const form = useRef()

    const sendEmail = e => {
        e.preventDefault()

        emailjs.sendForm(
            'service_s583u0h',
            'template_a1fx8ro',
            form.current,
            'Tc3X2wBUz9w1GP8PO'
        )

        e.target.reset()
    }

    return (
        <section
            className='w-full mx-auto px-6 relative h-full xl:px-20 lg:w-[85%] lg:px-0'
            id='contact'
        >
            <div className='flex flex-col'>
                <div className='lg:px-10 md:px-2'>
                    <div className='relative'>
                        <h2 className='absolute -top-6 -left-8 -z-10 text-body text-[5rem] xl:-left-2 lg:text-[9rem] md:text-[8rem]'>
                            Contact
                        </h2>

                        <div className='w-[95%] flex flex-col my-[8rem] justify-center items-center mx-auto xl:px-10 xl:w-full'>
                            <form
                                ref={form}
                                onSubmit={sendEmail}
                                className='pt-16 w-80 sm:w-96'
                            >
                                <div className='relative h-16 mb-8'>
                                    <label className='absolute text-title bg-[#f0f0f0] top-[-.85rem] left-5 text-sm p-1 px-2 z-10'>
                                        Name
                                    </label>
                                    <input
                                        className='contact-form-input'
                                        type='text'
                                        name='name'
                                        placeholder='Insert your name'
                                        required
                                    />
                                </div>

                                <div className='relative h-16 mt-8'>
                                    <label className='absolute text-title bg-[#f0f0f0] top-[-.85rem] left-5 text-sm p-1 px-2 z-10'>
                                        Email
                                    </label>
                                    <input
                                        className='contact-form-input'
                                        type='email'
                                        name='email'
                                        placeholder='Insert your email'
                                        required
                                    />
                                </div>

                                <div className='relative mt-8 h-44'>
                                    <label className='absolute text-title bg-[#f0f0f0] top-[-.85rem] left-5 text-sm p-1 px-2 z-10'>
                                        Message
                                    </label>
                                    <textarea
                                        className='resize-none contact-form-input'
                                        name='message'
                                        cols='30'
                                        rows='10'
                                        placeholder='Writing your message'
                                        required
                                    />
                                </div>
                            </form>
                            <button
                                className='bg-[#f0f0f0] border-[1px] rounded-sm inline-flex items-center py-4 px-5 font-medium gap-2 mt-8 group transition duration-300 hover:bg-title_dark'
                                type='submit'
                            >
                                <span className='text-title_dark group-hover:text-[#f0f0f0]'>
                                    Send Message
                                </span>
                                <div className='text-title_dark group-hover:text-[#f0f0f0]'>
                                    <RiSendPlaneLine />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact
