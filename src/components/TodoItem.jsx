import React from "react";

const TodoItem = ({item, handleDelete,isHidden}) => {
  
  return (
<div style={{marginLeft:"50%" }}>
<tr>
      <td>{item.id}</td>
      <td>{item.title}</td>
      
      <td>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
      </td>
    </tr>
</div>
  );
};
export default TodoItem;