import React, { useState } from "react";

const DemoForm = () => {
    const [name, SetName] = useState('jvnk')

    const handleChange = (e) => {
        SetName(e.target.value)
    }

    return (
        <form>
            <input value={name} onChange={handleChange} />
            <p>your name is {name}</p>
        </form>
    )

}

export default DemoForm