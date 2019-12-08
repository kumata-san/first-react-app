import React, { useState } from 'react';
import styled from 'styled-components';

const Item = (props) => {
    const desc = 'サンプル'

    const [isDone, setIsDone] = useState(false)
    const handleClick = () => {
        setIsDone(!isDone)
    }
    return (
        <ItemWrapper>
            <p>{props.text}</p>
            <button onClick={() => setIsDone(!isDone)}>
                { isDone ? '未完了に戻す' : '完了' }
            </button>
            <button onClick={() => {
                props.handleDelete(props.text)
            }}>削除</button>
        </ItemWrapper>
    )
}

const ItemWrapper = styled.li`
    background-color: #1abc9c;
`

export default Item
