import { useEffect, useState } from 'react'
import ProjectNav from '../components/ProjectNav'
import Projects from '../components/Projects'
import { projectsData } from '../context/projects_context'

const Works = () => {
    const [item, setItem] = useState({ name: 'all' })
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0)

    useEffect(() => {
        if (item.name === 'all') {
            setProjects(projectsData)
        } else {
            const newProjects = projectsData.filter(
                project =>
                    project.category.toLowerCase() === item.name.toLowerCase()
            )
            setProjects(newProjects)
        }
    }, [item])

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent })
        setActive(index)
    }

    return (
        <section
            className='w-full mx-auto px-6 relative h-full xl:w-3/4 lg:w-[85%] md:px-0'
            id='projects'
        >
            <div className='flex flex-col'>
                <div className='h-full'>
                    <div className='lg:px-10 md:px-2'>
                        <div className='relative '>
                            <h2 className='absolute -top-6 -left-8 -z-10 text-body text-[5rem] xl:-left-2 lg:text-[9rem] md:text-[8rem]'>
                                Projects
                            </h2>

                            <div className='w-[95%] mx-auto mt-[7.5rem] xl:px-10 xl:w-full'>
                                <ProjectNav
                                    active={active}
                                    handleClick={handleClick}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <Projects projects={projects} />
                </div>
            </div>
        </section>
    )
}
export default Works
