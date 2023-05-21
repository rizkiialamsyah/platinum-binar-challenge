import React from 'react';
const Card = (component) => {
    return (
        <div style={{
            borderRadius: "12px",
            background: "white",
            maxWidth: "500px",
            width: "100%",
            height: "150px",
            border: '1px solid black',
        }}>
            {component.children}
        </div>
    )

}

export default Card