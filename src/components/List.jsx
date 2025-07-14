import React from 'react'

const List = ({text,className}) => {
    return (
        <li className={`font-dm text-primary hover:text-secondary text-sm font-normal hover:font-bold cursor-pointer duration-500 list-none ${className}`}>{text}</li>

    )
}

export default List