import React from 'react';

interface SpinnerProps {
    size?: number;
    text?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 40, text='' }) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.7)', // semi-transparent white background
                zIndex: 9999, // ensure spinner appears on top of other content
            }}
        >
        <p className='px-5'>{text}</p>
        <svg
            width={size}
            height={size}
            viewBox="0 0 38 38"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000"
        >
            <g fill="none" fillRule="evenodd">
                <g transform="translate(1 1)" strokeWidth="2">
                    <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
                    <path d="M36 18c0-9.94-8.06-18-18-18">
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 18 18"
                            to="360 18 18"
                            dur="1s"
                            repeatCount="indefinite"
                        />
                    </path>
                </g>
            </g>
        </svg>
    </div>
  );
};

export default Spinner;
