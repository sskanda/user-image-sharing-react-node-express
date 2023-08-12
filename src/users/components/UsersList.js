import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";
const UsersList = (props) => {
  if (props.items.length === 0) {
    return <h2>No USers Found</h2>;
  } else {
    return (
      <ul>
        {props.items.map((users) => (
          <UserItem
            key={users.id}
            id={users.id}
            name={users.name}
            image={users.image}
            placeCount={users.places}
          ></UserItem>
        ))}
      </ul>
    );
  }
};
export default UsersList;
