


const UserItem = ({user}) => {
    return (
      <>
        <tr className="text-center">
          <td>{user.name}</td>
          <td>{user.surname}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
          <td>{user.status}</td>
          <td>
              <div>
            <button type="button" className="btn btn-info mx-2  px-3"></button>
            <button type="button" className="btn btn-danger mx-2  px-3"></button>
              </div>
          </td>
        </tr>
      </>
    );
}

export default UserItem
