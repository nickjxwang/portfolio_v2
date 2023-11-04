const SingleProjectVideo = ({ project }) => {
    return (
        <div className='relative overflow-hidden'>
            <div className='pt-[56.25%]'>
                <iframe
                    title='Video Player'
                    src={project.video}
                    allowFullScreen
                    className='absolute top-0 left-0 w-full h-full p-4 xl:p-28'
                ></iframe>
            </div>
        </div>
    )
}
export default SingleProjectVideo
