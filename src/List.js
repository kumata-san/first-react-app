import React from 'react'
import Item from './Item'

const List = (props) => {
    return (
        <ol>
            {
                props.todos.map((todo) => {
                    return (
                        <Item text={todo.text} handleDelete={props.handleDelete} />
                    )
                })
            }
        </ol>
    )
}

export default List