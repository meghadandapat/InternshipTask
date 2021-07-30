import { Button} from "react-bootstrap";
import React, { useState } from "react";
import Editmodal from "./Editmodal";
const Table = ({
  usersPerPage,
  deleteHandler,
  searchTerm,
  setUsersPerPage,
}) => {
  const [selectedId, setSelectedId] = useState([]);
  const [isDeselected, setIsDeselected] = useState()
  
  //creates an array which stores ids of all selected rows
  //needed for deleteSelected function
  const selectHandler = (e, id) => {
    if (e.target.checked) {
      selectedId.push(id);
    } else {
      selectedId.pop(id);
    }
    setSelectedId(selectedId);
  };


//function to delete all selected rows together
  const deleteSelected = (selectedId) => {
    const newUsers = usersPerPage.filter(
      (user) => !selectedId.includes(user.id)
    );
    setUsersPerPage(newUsers);
  };

  //shortcut component on top left to select and deselect all rows
  const deselectAll = (e) => {
    if (e.target.checked) {
      setIsDeselected(true)
    }
    else {
      setIsDeselected()
    }
  }
 



  return (
    <div>
      <table className="table border shadow table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">
              <input style={{transform:"scale(1.5)"}}
                type="checkbox" onChange={deselectAll} />
            </th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"> Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersPerPage
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.role.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((user) => (
              <tr key={user.id}>
                <th scope="row">
                  <input
                    type="checkbox"
                    onChange={(e) => selectHandler(e, user.id)}
                    checked={isDeselected}
                    style={{transform:"scale(1.5)"}}
                  />
                </th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <Editmodal id={ user.id}/>.
                  <Button variant="dark" onClick={() => deleteHandler(user.id)}>
                    <i className="far fa-trash-alt"></i>
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <button
        className="btn btn-danger btn-md m-2"
        onClick={() => {
          deleteSelected(selectedId);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Table;
