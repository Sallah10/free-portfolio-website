import demo from '../../assets/./undraw_project_completed_w0oq 1.png'
import js from '../../assets/./JS-Lo 1.png'
import html5 from '../../assets/./html-5-logo-svgrepo-com 1.png'
import css3 from '../../assets/./css3-logo-svgrepo-com 1.png'
import bootstrap from '../../assets/./bootstrap-4-logo-svgrepo-com 1.png'
import './experience.css'

const Experience = () => {
  return (
    <>
      <div id='skills flex flex-col items-center'>
        <h1 className='flex justify-center text-3xl text-red-700 font-bold pt-6 pb-2 mt-4' > Skills </h1>
        <div className='stack flex justify-between'>
          <div className='intros flex flex-col pl-5 pt-24 font-medium text-lg text-slate-800 md:pl-24'>
            <p>I have vast experience in the following web technologies:</p>
            <div className='tools font-bold flex flex-row justify-evenly items-center pt-10 gap-10'>
              <div className='eachTools '>
                <img src={html5} alt="html" className='-mt-1'/>
                <img src={css3} alt="css3" />
              </div>
              <div className='eachTools '>
                <img src={js} alt="js" className='-ml-5'/>
                <img src={bootstrap} alt="bootstrap" className='bootstrap -ml-10'/>
              </div>   
            </div>
          </div>
          <div className='demo  pt-10 h-10 md:pr-24 self-center'>
            <img src={demo} alt="Demo" className='demo'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience