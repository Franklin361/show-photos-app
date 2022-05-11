import { useQuery } from '@apollo/client';
import { GetByUser, PropsUseGetPost } from '../interfaces';
import { LayoutContainerCards } from '../layouts';
import { NoData } from '../components/NoData';

export const useGetPost = ({ query, typeAccesData, typeButtons, msg, img, variables = {} }: PropsUseGetPost) => {
    
    const { data, loading, error } = useQuery<GetByUser>(query, {
        variables
    })

    const existData = () => {
        // console.log({data:data![typeAccesData] , typeAccesData});
        if(!data?.[typeAccesData]) return;
        if(data?.[typeAccesData].length === 0) return <NoData msg={msg} img={img} />
        return <LayoutContainerCards cards={data![typeAccesData]} typeButtons={typeButtons} />
    }

    const showDataOrError = error
        ? <p>{error.message}</p>
        : data && existData()


    return {
        showDataOrError,
        loading
    }

}