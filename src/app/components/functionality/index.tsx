import react from 'react'
import styles from './functionality.module.css'
import { PinkHeader } from '../pinkHeader'
import { Block } from '../block';
import { inter } from '@/app/fonts';


interface ITour{
    src: string;
    title: string;
    description: string;
    places: string;
    time: string;
}

const Tour: react.FC<ITour> = (props) => {
    return <Block className={styles.tour_container}>
        <div className={styles.img_block}>
            <img src={props.src} alt="" />
        </div>
        <div className={styles.body}>
            <div className={styles.head}>
                <div className={styles.head__city}>
                    {props.title}
                </div>
                <div className={styles.time}>
                    {props.time}
                </div>
            </div>
            <div className={styles.description + ' ' + inter.className}>
                {props.description}
            </div>
            <div className={styles.places}>
                {props.places}
            </div>
        </div>
    </Block>
}


export const Functionality: react.FC = () => {

    return <div className={styles.centered}>
        <div className={styles.sized}>
            <PinkHeader pinkText='Наши предложения' blackText='Примеры составленных туров'/>
            <div className={styles.tours}>
                <Tour 
                    src='/image.jpg'
                    title='Нижний новгород'
                    time='2 дня'
                    description='Исторические места'
                    places='12 точек'
                />
                <Tour 
                    src='/image.jpg'
                    title='Нижний новгород'
                    time='2 дня'
                    description='Исторические места'
                    places='12 точек'
                />
                <Tour 
                    src='/image.jpg'
                    title='Нижний новгород'
                    time='2 дня'
                    description='Исторические места'
                    places='12 точек'
                />
                <Tour 
                    src='/image.jpg'
                    title='Нижний новгород'
                    time='2 дня'
                    description='Исторические места'
                    places='12 точек'
                />
            </div>
        </div>
    </div>
}
