import React from 'react';
import cls from './Header.module.scss';

const Header = () => {
    return (
        <div className={cls.header}>
            <h1
                className={cls.title}
            >
                tamagochi
            </h1>
        </div>
    );
};

export default Header;