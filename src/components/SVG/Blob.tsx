import { ISVGProps } from '../../interfaces';

export const Blob = ({ size, color, className }:ISVGProps) => {
    return (
        <svg 
            viewBox='35 38 117 140' 
            xmlns='http://www.w3.org/2000/svg'
            className={className}
            width={size}
            height={size}
            
        >
            <path
                fill={color}
                d='M37.9,-31.4C47.3,-18.5,51.7,-2.8,50.8,15.6C49.8,34.1,43.3,55.4,27.5,66.8C11.6,78.1,-13.7,79.6,-29.6,69.1C-45.5,58.5,-52,35.9,-57.8,12.6C-63.6,-10.7,-68.6,-34.7,-58.8,-47.6C-49.1,-60.6,-24.5,-62.4,-5.1,-58.4C14.3,-54.3,28.6,-44.2,37.9,-31.4Z'
                transform='translate(100 100)'
            />
        </svg>
    );
};
