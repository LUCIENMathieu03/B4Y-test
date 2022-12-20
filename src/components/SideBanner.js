import '../styles/SideBanner.css';
import User from './User'

function SideBanner(){
  return(
    <div className="sideBanner">
        <p>The Idea pool</p>
        <div className='separator'></div>
        <div>
          <User/>
        </div>
    </div>
  )
}

export default SideBanner