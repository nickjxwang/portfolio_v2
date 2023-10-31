const Development = () => {
    return (
        <div className='flex flex-col gap-3 md:gap-10'>
            <h3 className='text-xs text-title md:text-xl'>Development</h3>
            <ul className='grid grid-cols-4 gap-2 text-[10px] font-normal text-title sm:text-base md:grid-cols-3 md:gap-6 sm:mx-2 md:mx-4 lg:mx-6'>
                <li className='py-1 text-center border rounded-sm sm:py-2 sm:px-2'>
                    <p>HTML/CSS</p>
                </li>
                <li className='py-1 text-center border rounded-sm sm:py-2 sm:px-2'>
                    <p>Javascript</p>
                </li>
                <li className='py-1 text-center border rounded-sm sm:py-2 sm:px-2'>
                    <p>React</p>
                </li>
                <li className='py-1 text-center border rounded-sm sm:py-2 sm:px-2'>
                    <p>Tailwind CSS</p>
                </li>
                <li className='py-1 text-center border rounded-sm sm:py-2 sm:px-2'>
                    <p>Git</p>
                </li>
                <li className='py-1 text-center border rounded-sm sm:py-2 sm:px-2'>
                    <p>Unity</p>
                </li>
                <li className='py-1 text-center border rounded-sm sm:py-2 sm:px-2'>
                    <p>C#</p>
                </li>
            </ul>
        </div>
    )
}
export default Development
