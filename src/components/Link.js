import * as React from "react";
import * as PropTypes from 'prop-types'

const Link = ({ active, children, onClick}) => {
    console.log(active)
    console.log(children)
    console.log(onClick)

    if (active) {
        return <span>{children}</span>
    }

    return (
        <a 
            href=""
            onClick={e => {
                e.preventDefault()
                onClick()
            }}
        >
            {children}
        </a>
    )
}

Link.prototypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link