import React from 'react';

const Videohandler = ({ file }) => {
    return (
        <>
            <video className='mb-5' width='800px' height='400px' controls>
                <source src='/src/assets/كم التكلفة الحقيقية لمشروع الدروب شبينغ؟  عبدالله الفوزان 720 x 1280.mp4' />
            </video >
        </>
    );
}

export default Videohandler;