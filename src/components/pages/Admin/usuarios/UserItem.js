import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserEdit} from '@fortawesome/free-solid-svg-icons'
import {faUserTimes} from '@fortawesome/free-solid-svg-icons'
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'



const UserItem = ({user}) => {
    return (
      <>
        <tr className="text-center">
          <td>{user.name}</td>
          <td>{user.surname}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
          <td>{
          user.active
          ? 
            <FontAwesomeIcon className="text-success"  icon={faCheckCircle} />
            : 
            <FontAwesomeIcon  icon={faTimesCircle} />
            }
          </td>
          <td>
              <div className='d-flex'>
            <button type="button" className="btn" data-toggle="modal" data-target="#UserEdit">
              <FontAwesomeIcon className="text-info"  icon={faUserEdit} />
            </button>
            <button type="button" className="btn">
              <FontAwesomeIcon className="text-danger"  icon={faUserTimes} />
            </button>
              </div>
          </td>
        </tr>
        
      </>
    );
}

export default UserItem
