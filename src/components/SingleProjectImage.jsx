const SingleProjectImage = ({ project }) => {
    return (
        <div className='mb-4 md:mb-10'>
            <div className=''>
                <img
                    src={project.image}
                    alt=''
                    className='w-full p-4 mx-auto bg-cover md:p-8'
                />
            </div>
        </div>
    )
}
export default SingleProjectImage
