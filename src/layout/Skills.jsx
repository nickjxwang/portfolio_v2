import Design from '../components/Design'
import Development from '../components/Development'

const Skills = () => {
    return (
        <section className='' id='skills'>
            <div className='section--title flex flex-col gap-2 items-center '>
                <h2 className=''>Skills</h2>
                <div className='w-[80px] h-[1px] gradient-line rounded-lg'></div>
            </div>

            <div className='grid lg:gap-12 md:gap-0 skills-container'>
                <Development />
                <Design />
            </div>
        </section>
    )
}
export default Skills
