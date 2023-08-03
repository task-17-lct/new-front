'use client'
import react from 'react'
import { Block } from '../block'
import { BackPack } from '../icons/backpack'
import { inter, montserrat } from '@/app/fonts'
import styles from './intro.module.css'
import { Play } from 'next/font/google'
import { PlayIcon } from '../icons/play'
import { GlobusIcon } from '../icons/globus'

export const Intro: react.FC = () => {

    return <div className={styles.centered}>
        <div className={styles.sized}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <Block>
                        <span className={montserrat.className + ' ' + styles.kaif__text}>
                            Исследуй мир с кайфом
                        </span>
                        <BackPack />
                    </Block>
                    <div>
                        <h2 className={styles.info__header}>
                            Тур  <span className={styles.colored}>учитывая ваши вкусы</span> по всей России
                        </h2>
                    </div>
                    <span className={styles.description + ' ' + inter.className}>
                        Первый в мире планировщик туров который 
                        учитывает ваши предпочтения
                    </span>
                    <div className={styles.actions}>
                        <Block className={styles.reg_block + ' ' + montserrat.className}>
                            <div>Зарегистрироваться</div>
                        </Block>
                        <div className={styles.play_block}>
                            <span>Демо</span>
                            <PlayIcon />
                        </div>
                    </div>
                </div>
                <div className={styles.decorations}>
                    <div className={styles.globus}>
                        <GlobusIcon />
                    </div>
                    <div className={styles.photos}>
                        <div className={styles.first}>
                            <img src="/first.png" alt="" />
                            <img src="/second.png" alt="" />
                        </div>
                        <div className={styles.second}>
                            <img src="/third.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}