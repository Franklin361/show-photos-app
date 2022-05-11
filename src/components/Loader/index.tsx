import "./style.scss";

interface Props {
    fullScreen?: boolean;
    centerAbsoulte?: boolean;
}

export const Loader = ({ fullScreen = false, centerAbsoulte = false }: Props) => {
    return <>{fullScreen ? <LoaderFullScreen /> : <LoaderGeneric centerAbsoulte={centerAbsoulte} />}</>;
};

export const LoaderFullScreen = () => {
    return (
        <div className='container-loader'>
            <div className='loader' />
            <span>Loading ...</span>
        </div>
    );
};

export const LoaderGeneric = ({ centerAbsoulte }: Pick<Props, 'centerAbsoulte'>) => {
    return (
        <div className={`container-loader-generic ${ centerAbsoulte ? 'absolute-center' : '' }`}>
            <div className='loader' />
            <span>Loading ...</span>
        </div>
    );
};
