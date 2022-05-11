
import { useQuery, useSubscription, useLazyQuery } from '@apollo/client';
import { useParams, useNavigate } from 'react-router-dom';
import { Title, ImageInformation, LayoutComments, FormComment, Loader, NoData } from "../../components";
import { GetByID, GetFavorite } from "../../interfaces";
import { GET_BY_ID, GET_ISFAVORITE, SUBS_COMMENT_ADDED } from '../../graphql';
import { useEffect } from 'react';


const Main = ({ getPostById }: GetByID) => {


    const [handleData, { data }] = useLazyQuery<GetFavorite>(GET_ISFAVORITE, { variables: { getIsFavoriteId: `${getPostById.id}` } })


    useSubscription(SUBS_COMMENT_ADDED, {
        variables: { idPost: `${getPostById.id}` },
        onSubscriptionData: ({ subscriptionData, client }) => {
            const data = subscriptionData.data.newCommentAdded;
            const dataStorage =  client.readQuery<GetByID>({
                query: GET_BY_ID, variables: { getPostByIdId: `${getPostById.id}` }
            })

            client.writeQuery({
                query: GET_BY_ID,
                variables: { getPostByIdId: `${getPostById.id}` },
                data: {
                    ...dataStorage,
                    getPostById: {
                        ...data
                    }
                }
            })
        }
    });

    function showComments() {
        if (!getPostById || !getPostById?.comments) null;
        if (getPostById.comments.length === 0) return <NoData msg="No commnets sorry 🤯!" size="sm" />
        return <LayoutComments comments={getPostById.comments} />
    }

    useEffect(() => {
        handleData()
    }, [])


    return (
        <div>
            <Title label='The Image 🖼️' mustBeBack />
            <hr />
            <ImageInformation {...getPostById} dataLiked={data?.getIsFavorite ?? null} />
            <hr />
            <FormComment id_post={getPostById.id} />
            {
                showComments()
            }
        </div>
    )
}

export const SingleImagePage = () => {
    const { image } = useParams();
    const navigate = useNavigate()

    const { data, loading } = useQuery<GetByID>(GET_BY_ID, {
        variables: {
            getPostByIdId: `${image}`
        },
        onError: () => { navigate('/home/') }
    })


    return (
        <>

            {
                loading
                    ? <Loader centerAbsoulte />
                    : data && <Main {...data} />
            }
        </>
    );
};
