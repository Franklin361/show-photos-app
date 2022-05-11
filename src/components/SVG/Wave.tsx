import { ISVGProps } from "../../interfaces";

export const Wave = ({ size, color, className }: ISVGProps) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'
            width={size}
            height={size}
            className={className}>
           <path fill={color} fillOpacity="1" d="M0,192L40,170.7C80,149,160,107,240,101.3C320,96,400,128,480,128C560,128,640,96,720,80C800,64,880,64,960,90.7C1040,117,1120,171,1200,186.7C1280,203,1360,181,1400,170.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
    );
};
