import React from 'react';
import { Button } from 'antd';

const CustomButton = (props) => {
    const { text, fn } = props;
    return (
        <Button
            type="primary"
            onClick={fn()}
        >
            {text}
        </Button>
    );
};

export default CustomButton;