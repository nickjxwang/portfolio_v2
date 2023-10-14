import { useEffect, useState } from 'react'
import { projectsNav } from '../context/projects_context'

const ProjectNav = ({ active, handleClick }) => {
    return (
        <div className='flex text-sm mt-0 pt-0 text-title justify-center items-center gap-3 mb-6 xl:pt-6 lg:gap-4 lg:mb-12 md:mt-14'>
            {projectsNav.map((item, index) => {
                return (
                    <span
                        className={`cursor-pointer capitalize font-medium rounded-[.2rem] px-2 py-1 lg:px-4 transition duration-300 hover:bg-title_dark hover:bg-opacity-70 hover:text-container ${
                            active === index
                                ? 'bg-title_dark bg-opacity-70  text-container'
                                : 'text-title '
                        }`}
                        onClick={e => handleClick(e, index)}
                        key={index}
                    >
                        {item.name}
                    </span>
                )
            })}
        </div>
    )
}
export default ProjectNav
