'use client'

import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from './select.module.css'
import { montserrat } from "@/app/fonts";
import { usePathname } from "next/navigation";


interface ISelect {
    options: {
        link: string;
        value: string;
    }[]
}

const Select: React.FC<ISelect> = (props) => {
    const router = usePathname();
    console.log(router);
    const [path, setPath] = useState(props.options[0].link)

    const listenToPopstate = () => {
        const winPath = window.location.pathname;
        setPath(winPath);
    };
    return <div className={styles.container}>
        {
            props.options.map(
                e => <Link 
                    href={e.link} 
                    className={montserrat.className + ' ' + (e.link == path ? styles.active : styles.disabled)}
                    onClick={() => {
                        setPath(e.link)
                    }}
                >{e.value}</Link>
            )
        }
    </div>
}

export default Select