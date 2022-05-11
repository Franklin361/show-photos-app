import { useSearchParams } from "react-router-dom";
import { FilterBar, Loader, OpenModalButton, SearchByQuery, Title } from "../../components";
import { useFilterSelectedStore } from "../../stores";
import { GET_BY_DESC, GET_BY_USER, GET_SORT, SUBS_POST_ADDED } from "../../graphql";
import { useGetPost } from "../../hooks";
import { GetByUser, PropsUseGetPost } from "../../interfaces";
import { useMemo } from "react";
import { useApolloClient, useSubscription } from '@apollo/client';

const props: Pick<PropsUseGetPost, 'img' | 'msg' | 'typeButtons'> = {
    img: 'https://res.cloudinary.com/ddeguj0jq/image/upload/v1650991095/Image_perspective_matte_s_jo1cnc.png',
    msg: 'No photos, sorry 😞',
    typeButtons: 'whitout-buttons',
}


export const HomePage = () => {
    const [searchParams] = useSearchParams();
    const queryParams = useMemo(()=>searchParams.get("q"), [searchParams]);
    const filter = useFilterSelectedStore(state => state.filter)

    const { loading, showDataOrError } = useGetPost({
        ...props,
        query: queryParams ? GET_BY_DESC : GET_SORT,
        typeAccesData: queryParams ? 'getPostByDesc' : 'getPostSort',
        variables: {
            ...(queryParams ? { description: queryParams }: {typeSort: filter})
        }
    })

const existQuery = () => {
    if (queryParams) return <SearchByQuery query={queryParams} />;

    return <>
        {!loading && <OpenModalButton icon="search" typeModal='search' />}
        <FilterBar />
    </>
};

return (
    <>
        <Title label="Home 🏘️" />
        <hr />
        {existQuery()}
        <hr />
        {
            loading ? <Loader /> : showDataOrError
        }
    </>
);
};
