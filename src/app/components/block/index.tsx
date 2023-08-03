'use client'

import react from 'react'
import styles from './block.module.css'

interface IBlock{
    children: react.ReactElement | string | react.ReactElement[];
    className?: string;
}

export const Block: react.FC<IBlock> = (props) => {
    const className = props.className ? styles.container + ' ' + props.className : styles.container
    return <div className={className}>{props.children}</div>
}