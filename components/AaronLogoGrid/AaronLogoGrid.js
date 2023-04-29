import React from 'react';
import Image from 'next/image';

const AaronLogoGrid = () => {
    const images = [
        'https://example.com/a-logo.png',
        'https://example.com/b-logo.png',
        'https://example.com/c-logo.png',
        'https://example.com/d-logo.png',
        'https://example.com/e-logo.png',
        'https://example.com/f-logo.png',
        'https://example.com/g-logo.png',
        'https://example.com/h-logo.png',
        'https://example.com/i-logo.png',
    ];

    return (
        <div>
            <div className="grid">
                {images.map((src, index) => (
                    <div key={index} className="logo-wrapper">
                        <Image src={src} alt={`Logo ${index}`} width={200} height={200} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AaronLogoGrid;
