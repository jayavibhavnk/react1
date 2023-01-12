import React from "react";

const Content = () => {
    const course = 'React'
    const wishlist = ['python ', 'javascript ', 'flask']
    const emp = {
        code: 1,
        name: 'ravi',
        dept: 'it'
    }
    return (
        <div>
            <h1>Course is {course}</h1>
            <h1>My wishlist is {wishlist}</h1>
            <h1>Employee Code : {emp.code} Name : {emp.name} Dept : {emp.dept}</h1>
        </div>

    )
}

export default Content;