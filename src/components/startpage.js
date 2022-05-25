import './startpage.css';
import {instruction1, instruction2, instruction3, instruction4, button} from '../Constants';
function Startpage(){
    return(
        <div className='app'>
        
                <div className='content'>
                     <p className='name'>{instruction1}</p>
                     <p>{instruction2}</p>
                     <p>{instruction3}</p>
                     <p className='wish'>{instruction4}</p>
                     <button className='start'>{button}</button>
                </div>
        
        </div>
    )
}
export default Startpage;