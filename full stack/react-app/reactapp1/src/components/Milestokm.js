import React, { useState } from "react";

const Milestokm = () => {
    const [miles, SetMiles] = useState(0);
    const [km, SetKm] = useState(0);
    const Calculate = () => {
        let kms = (parseFloat(miles)) * 1.609
        SetKm(kms)
    }

    return (
        <div>
            <input value={miles} onChange={(e) => SetMiles(e.target.value)} placeholder="Enter miles " />
            <button onClick={Calculate}>Calculate</button>
            <h2>Kilometers is {km}</h2>
        </div>
    )
}

export default Milestokm

