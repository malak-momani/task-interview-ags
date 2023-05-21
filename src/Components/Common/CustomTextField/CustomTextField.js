import * as React from 'react';
import { Input, InputLabel } from '@material-ui/core';

export default function CustomTextField(
    {
        width,
        isFullWidth,
        isMultiline,
        id,
        value,
        InputProps,
        onChange,
        color,
        variant,
        name,
        customClass,
        label,
        placeholder,
    }
) {
    return (
        <div>
            <InputLabel>{label}</InputLabel>
            <Input
                classes={[customClass] || {}}
                fullWidth={isFullWidth || false}
                multiline={isMultiline || false}
                id={id}
                value={value}
                InputProps={InputProps || null}
                onChange={onChange}
                color={color || 'primary'}
                name={name}
                placeholder={placeholder}
            />
        </div>
    );
}