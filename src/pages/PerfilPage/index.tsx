import { Loader, OpenModalButton, Title } from "../../components";
import { useGetPost } from "../../hooks";
import { GET_BY_USER } from "../../graphql";
import { PropsUseGetPost } from "../../interfaces";

const props:PropsUseGetPost = {
    img: 'https://res.cloudinary.com/ddeguj0jq/image/upload/v1650991095/Image_perspective_matte_s_jo1cnc.png',
    msg: 'No posts, sorry 😞',
    query: GET_BY_USER,
    typeButtons: 'delete-edit',
    typeAccesData: 'getPostByUser'
}

export const PerfilPage = () => {


    const { loading, showDataOrError } = useGetPost(props)

    return (
        <>
            <Title label='Perfil 📸' mustBeBack />
            <hr />
            {
                loading ? <Loader /> : showDataOrError
            }
            <OpenModalButton icon="camera" typeModal='upload-image' />
        </>
    );
};

