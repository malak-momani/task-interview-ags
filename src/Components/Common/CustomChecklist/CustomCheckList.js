import React from 'react';
import './CustomChecklist.css'
import { useState } from 'react';

const CustomCheckList = ({ images, type }) => {
    const [selected, setSelected] = useState('');
    return images.map((img) =>
        <center
            key={img}
            className={selected === img ? 'selected-img' : 'imageHover'}
            onClick={() => setSelected(img)}
        >
            <img src={img} alt={img} className={`class-${type}`} />
        </center>
    )
}



export default CustomCheckList;