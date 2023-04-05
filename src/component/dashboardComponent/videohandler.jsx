import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video/dist';
import 'react-html5video/dist/styles.css';
const Videohandler = ({ file }) => {
    return (
        <Video loop
            poster='src/assets/img/Baldski.png'
            onCanPlayThrough={() => { console.log('video play') }}
        >
            <source src={file} type='video/mp4' />
        </Video>
    );
}

export default Videohandler;