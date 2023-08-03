import React from "react";
import styles from './header.module.css'
import Logo from "../icons/logo";
import Select from "../select";
import Button from "../button";

const Header: React.FC = () => {
    return <div className={styles.centered}>
        <div className={styles.container}>
            <Logo />
            <Select 
                options={[
                    {
                        'link': '#',
                        'value': 'Главная'
                    },
                    {
                        'link': '#functions',
                        'value': 'Функционал'
                    },
                    {
                        'link': '#examples',
                        'value': 'Примеры туров'
                    },
                    {
                        'link': '#getting-started',
                        'value': 'С чего начать'
                    }
                ]}
            />
            <div className={styles.login_block}>
                <Button type="disabled">Вход</Button>
                <Button type="active">Регистрация</Button>
            </div>
        </div>
    </div>
}

export default Header;