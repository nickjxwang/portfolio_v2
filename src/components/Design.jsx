const Design = () => {
    return (
        <div className=''>
            <h3 className='mb-3 text-xs text-title md:text-xl md:mb-10'>
                Design
            </h3>
            <ul className='grid grid-cols-4 gap-2 text-[10px] font-normal text-title sm:text-base md:grid-cols-3 md:gap-6 sm:mx-2 md:mx-4 lg:mx-6'>
                <li className='border sm:py-2 sm:px-2 py-[2px] rounded-sm text-center'>
                    <p>Figma</p>
                </li>
                <li className='border sm:py-2 sm:px-2 py-[2px] rounded-sm text-center'>
                    <p>Photoshop</p>
                </li>
                <li className='border sm:py-2 sm:px-2 py-[2px] rounded-sm text-center'>
                    <p>Illustrator</p>
                </li>
                <li className='border sm:py-2 sm:px-2 py-[2px] rounded-sm text-center'>
                    <p>After Effect</p>
                </li>
            </ul>
        </div>
    )
}
export default Design
