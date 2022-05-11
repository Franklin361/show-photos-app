import './style.scss';

interface Props {
    msg:string;
    img?:string;
    size?: 'sm' | 'md' | 'xl'
}

export const NoData = ({ msg, img,size = 'xl' }:Props ) => {
    return(
        <div className='container-nodata'>
            {
                img && <img className='img-nodata' src={img} alt="no-data" width={300} />
            }
            <p className={`message-nodata ${size}`}>{msg}</p>
        </div>
    )
}