import  {welcome,success_message} from '../Constants'
import './lastpage.css'

function Lastpage(){
    return(
            <div className='block'>
                    <p className='success_message'>{success_message}</p>
                    <div className='message'>{welcome} </div>
            </div>
            )
}
export default Lastpage