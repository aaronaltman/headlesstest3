import React from 'react';
import Image from 'next/image';
import 'components/AaronLogoGrid/AaronLogoGrid.module.scss';

const AaronLogoGrid = () => {
    const images = [
        'https://bpheadlesst596.wpengine.com/wp-content/uploads/2023/04/acm-blueprint/media/365/ff21d357-e318-3c8e-8ff2-ca15dbd1fa76.jpg',
        'https://bpheadlesst596.wpengine.com/wp-content/uploads/2023/04/acm-blueprint/media/365/ff21d357-e318-3c8e-8ff2-ca15dbd1fa76.jpg',
        'https://bpheadlesst596.wpengine.com/wp-content/uploads/2023/04/acm-blueprint/media/365/ff21d357-e318-3c8e-8ff2-ca15dbd1fa76.jpg',
        'https://bpheadlesst596.wpengine.com/wp-content/uploads/2023/04/acm-blueprint/media/365/ff21d357-e318-3c8e-8ff2-ca15dbd1fa76.jpg',
        'https://bpheadlesst596.wpengine.com/wp-content/uploads/2023/04/acm-blueprint/media/365/ff21d357-e318-3c8e-8ff2-ca15dbd1fa76.jpg',
        'https://bpheadlesst596.wpengine.com/wp-content/uploads/2023/04/acm-blueprint/media/365/ff21d357-e318-3c8e-8ff2-ca15dbd1fa76.jpg',
        'https://bpheadlesst596.wpengine.com/wp-content/uploads/2023/04/acm-blueprint/media/365/ff21d357-e318-3c8e-8ff2-ca15dbd1fa76.jpg',
        'https://bpheadlesst596.wpengine.com/wp-content/uploads/2023/04/acm-blueprint/media/365/ff21d357-e318-3c8e-8ff2-ca15dbd1fa76.jpg',
        'https://bpheadlesst596.wpengine.com/wp-content/uploads/2023/04/acm-blueprint/media/365/ff21d357-e318-3c8e-8ff2-ca15dbd1fa76.jpg',
    ];

    return (
        <div className="aaron-logo-grid">
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

