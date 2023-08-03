import react from 'react'
import styles from './pink.module.css'
import { montserrat } from '@/app/fonts';

interface IPinkHeader{
    pinkText: string;
    pinkFontSize?: number;
    blackText: string;
    blackFontSize?: number;
}


export const PinkHeader: react.FC<IPinkHeader> = (props) => {
    const pinkfz = props.pinkFontSize ? props.pinkFontSize : 20;
    const darkfz = props.blackFontSize ? props.blackFontSize : 40;
    return <div className={styles.pink__container}>
        <div className={styles.pink + ' ' + montserrat.className} style={{fontSize: pinkfz}}>{props.pinkText}</div>
        <div className={styles.dark} style={{fontSize: darkfz}}>{props.blackText}</div>
    </div>
}