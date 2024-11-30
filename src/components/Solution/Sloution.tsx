import React from 'react';

const Solution: React.FC = () => {
    return (
        <div
            style={{
                backgroundImage: `url('/images/sloution/Group.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className="flex h-[57rem] p-[6rem]"
        >
            <div
                style={{
                    backgroundImage: `url('/images/sloution/top-viewframeconcept.png')`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
                className="w-[35rem] bg-black h-[33rem] rounded-md"
            ></div>
            <div></div>
        </div>
    );
};

export default Solution;
