import React from 'react';
import CustomButton from '../../Button/ui/Button';
import { Flex } from 'antd';
import cls from './ControlBar.module.scss';

const ControlBar = (props) => {
    const { beast } = props;
    return (
        <div className={cls.ControlBar}>
            <Flex gap="middle" wrap="wrap">
                <CustomButton text={'покушать'}/>
                <CustomButton text={'поспать'}/>
                <CustomButton text={'убрать'}/>
            </Flex>
        </div>
    );
};

export default ControlBar;