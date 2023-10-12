import emailjs from '@emailjs/browser'
import { useRef } from 'react'
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
            className='w-full mx-auto px-6 relative h-full xl:w-3/4 lg:w-[85%] md:px-0 sm:section'
            id='contact'
        >
            <div className='flex flex-col'>
                <div className='lg:px-10 md:px-2'>
                    <div className='relative'>
                        <h2 className='absolute -top-6 -left-8 -z-10 text-body text-[5rem] xl:-left-2 lg:text-[9rem] md:text-[8rem]'>
                            Contact
                        </h2>

                        <div className='w-[95%] flex flex-col my-[8rem] justify-center items-center mx-auto xl:mt-[4.2rem] xl:mb-0 xl:px-10 xl:w-full'>
                            <form
                                ref={form}
                                onSubmit={sendEmail}
                                className='w-96 pt-16'
                            >
                                <div className='relative mb-8 h-16'>
                                    <label className='absolute bg-[#f0f0f0] top-[-.85rem] left-5 text-sm p-1 px-2 z-10'>
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

                                <div className='relative mt-8 h-16'>
                                    <label className='absolute bg-[#f0f0f0] top-[-.85rem] left-5 text-sm p-1 px-2 z-10'>
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

                                <div className='relative h-44 mt-8'>
                                    <label className='absolute bg-[#f0f0f0] top-[-.85rem] left-5 text-sm p-1 px-2 z-10'>
                                        Message
                                    </label>
                                    <textarea
                                        className='contact-form-input resize-none'
                                        name='message'
                                        cols='30'
                                        rows='10'
                                        placeholder='Writing your message'
                                        required
                                    />
                                </div>
                            </form>
                            <button
                                className='button-c button--flex gap-2 mt-8'
                                type='submit'
                            >
                                <span className='text-container'>
                                    Send Message
                                </span>
                                <div className='text-container'>
                                    <RiSendPlaneLine />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        // <div className='container-c flex flex-col items-center'>
        //     <form ref={form} onSubmit={sendEmail} className='w-96'>
        //         <div className='relative mb-8 h-16'>
        //             <label className='absolute bg-body top-[-.85rem] left-5 text-sm p-1 px-2 z-10'>
        //                 Name
        //             </label>
        //             <input
        //                 className='contact-form-input'
        //                 type='text'
        //                 name='name'
        //                 placeholder='Insert your name'
        //                 required
        //             />
        //         </div>

        //         <div className='relative mt-8 h-16'>
        //             <label className='absolute bg-body top-[-.85rem] left-5 text-sm p-1 px-2 z-10'>
        //                 Email
        //             </label>
        //             <input
        //                 className='contact-form-input'
        //                 type='email'
        //                 name='email'
        //                 placeholder='Insert your email'
        //                 required
        //             />
        //         </div>

        //         <div className='relative h-44 mt-8'>
        //             <label className='absolute bg-body top-[-.85rem] left-5 text-sm p-1 px-2 z-10'>
        //                 Message
        //             </label>
        //             <textarea
        //                 className='contact-form-input resize-none'
        //                 name='message'
        //                 cols='30'
        //                 rows='10'
        //                 placeholder='Writing your message'
        //                 required
        //             />
        //         </div>
        //     </form>
        //     <button className='button-c button--flex gap-2 mt-8' type='submit'>
        //         <span className='text-container'>Send Message</span>
        //         <div className='text-container'>
        //             <RiSendPlaneLine />
        //         </div>
        //     </button>
        // </div>

        // <section className='' id='contact'>
        //     <div className='section--title flex flex-col gap-2 items-center '>
        //         <h2 className=''>Contact Me</h2>
        //         <div className='w-[80px] h-[1px] gradient-line rounded-lg'></div>
        //     </div>

        //     <div className='container-c flex flex-col items-center'>
        //         <form ref={form} onSubmit={sendEmail} className='w-96'>
        //             <div className='relative mb-8 h-16'>
        //                 <label className='absolute bg-body top-[-.85rem] left-5 text-sm p-1 px-2 z-10'>
        //                     Name
        //                 </label>
        //                 <input
        //                     className='contact-form-input'
        //                     type='text'
        //                     name='name'
        //                     placeholder='Insert your name'
        //                     required
        //                 />
        //             </div>

        //             <div className='relative mt-8 h-16'>
        //                 <label className='absolute bg-body top-[-.85rem] left-5 text-sm p-1 px-2 z-10'>
        //                     Email
        //                 </label>
        //                 <input
        //                     className='contact-form-input'
        //                     type='email'
        //                     name='email'
        //                     placeholder='Insert your email'
        //                     required
        //                 />
        //             </div>

        //             <div className='relative h-44 mt-8'>
        //                 <label className='absolute bg-body top-[-.85rem] left-5 text-sm p-1 px-2 z-10'>
        //                     Message
        //                 </label>
        //                 <textarea
        //                     className='contact-form-input resize-none'
        //                     name='message'
        //                     cols='30'
        //                     rows='10'
        //                     placeholder='Writing your message'
        //                     required
        //                 />
        //             </div>
        //         </form>
        //         <button
        //             className='button-c button--flex gap-2 mt-8'
        //             type='submit'
        //         >
        //             <span className='text-container'>Send Message</span>
        //             <div className='text-container'>
        //                 <RiSendPlaneLine />
        //             </div>
        //         </button>
        //     </div>
        // </section>
    )
}
export default Contact
