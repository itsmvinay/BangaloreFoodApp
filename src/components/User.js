import { useState } from "react";

const User = (props) => {

    const [count1] = useState(0);
    const [count2] = useState(1);

    return (
        <div className="user-profile">
            <h3>count 1: {count1}</h3>
            <h3>count 2: {count2}</h3>
            <h3>Name: {props.name}</h3>
            <h3>Location: {props.location}</h3>
        </div>
    )
}

export default User;