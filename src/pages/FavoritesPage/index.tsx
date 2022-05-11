import { Loader, Title } from '../../components';
import { useGetPost } from "../../hooks";
import { GET_FAVORITES } from "../../graphql";
import { PropsUseGetPost } from '../../interfaces';

const props: PropsUseGetPost = {
    img: 'https://res.cloudinary.com/ddeguj0jq/image/upload/v1650991095/Image_perspective_matte_s_jo1cnc.png',
    msg: 'No favorites, sorry 😞',
    query: GET_FAVORITES,
    typeButtons: 'whitout-buttons',
    typeAccesData: 'getFavoritesByUser'
}

export const FavoritesPage = () => {

    const { loading, showDataOrError } = useGetPost(props)

    return (
        <>
            <Title label="My favorite photos 😙" mustBeBack />
            <hr />
            {
                loading ? <Loader /> : showDataOrError
            }
        </>
    );
};
