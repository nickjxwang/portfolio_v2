const SingleProjectVideo = ({ project }) => {
    return (
        <div className='w-full bg-[#f0f0f0] mb-8'>
            <div className='relative pb-[60%]'>
                <iframe
                    width='100%'
                    height='100%'
                    title='Youtube Video'
                    src={project.video}
                    className='absolute top-0 left-0 w-full h-full p-4'
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}
export default SingleProjectVideo
