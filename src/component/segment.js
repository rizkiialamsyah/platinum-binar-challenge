import React from "react";

const segment = ({children, ...props}) => {
    return (
        <div {...props}>
            {children}
        </div>
    )
}

export default segment