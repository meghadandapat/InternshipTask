import React, {useState} from "react";
const EditableRow = () => {
    const [editMembers, setEditMembers] = useState({
        name: "",
        email: "",
        role: "",
      });
  return (
    <React.Fragment>
      <td>
        <input type="text" placeholder="Enter name" name="name" onChange={(e) =>
            setEditMembers({ ...editMembers, name: e.target.value })
          }
          value={editMembers.name}/>
      </td>
      <td>
              <input type="email" placeholder="Enter Email" name="email"
              onChange={(e) =>
                setEditMembers({ ...editMembers, email: e.target.value })
              }  value={editMembers.email} />   
      </td>
      <td>
        <input type="text" placeholder="Enter role" name="role"      onChange={(e) =>
            setEditMembers({ ...editMembers, role: e.target.value })
          }
          value={editMembers.role} />
      </td>
    </React.Fragment>
  );
};
export default EditableRow;
