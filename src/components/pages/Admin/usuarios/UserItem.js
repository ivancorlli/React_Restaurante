import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserTimes} from '@fortawesome/free-solid-svg-icons'
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'



const UserItem = ({user, deleteUser}) => {
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
            {
              user.role === 'ADMIN'
              ?
              <span></span>
              :
              <button type="button" className="btn" onClick={()=>deleteUser(user._id)}>
              <FontAwesomeIcon className="text-danger"  icon={faUserTimes} />
              </button>
            }
          </td>
        </tr>
        
      </>
    );
}

export default UserItem
