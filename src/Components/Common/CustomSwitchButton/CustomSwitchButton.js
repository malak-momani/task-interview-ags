import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core/';
import { useState } from 'react';

const CustomSwitchButton = ({ btnsDescriptions }) => {
    const [selected, setSelected] = useState('')
    const onClick = (e) => {
        setSelected(e?.target?.innerText)
    }
    return (
        <ButtonGroup variant="contained" aria-label="text primary button group">
            {btnsDescriptions.map((description) =>
                <Button
                    key={description}
                    color={selected === description.toUpperCase() ? 'primary' : 'default' }
                    onClick={onClick}
                    >
                    {description}
                
                </Button>)}
        </ButtonGroup>
    );
}

export default CustomSwitchButton;
