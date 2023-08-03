'use client'
import React from "react"
import styles from './button.module.scss'
import { montserrat } from "@/app/fonts";

interface IButton{
    children: React.ReactElement | string;
    type: "active" | "disabled";
    onClick?: () => {}
}

const Button: React.FC<IButton> = (props) => {
    const className = props.type == 'active' ? styles.active : styles.disabled;
    const onClick = props.onClick ? props.onClick : () => {}
    return <button className={className + ' ' + montserrat.className}>{props.children}</button>
}

export default Button