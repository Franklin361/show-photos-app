import { useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import { useImageSelectedStore, useModalStore } from '../stores';
import { CreatePost, GetByUser, IuseActionPost } from '../interfaces';
import { CREATE_POST, DELETE_POST, GET_BY_USER, UPDATE_POST } from '../graphql';
import { fileUpload, showToast } from '../utils';
import toast from 'react-hot-toast';
import shallow from 'zustand/shallow';



export const useActionPost = (): IuseActionPost => {

    const images = useImageSelectedStore((state) => state.images);
    const { modalOpen, dataModal } = useModalStore(({ dataModal, modalOpen }) => ({ dataModal, modalOpen }), shallow);
    // TPDP
    const [loading, setLoading] = useState(false);
    // TODO: refactor hooks
    const [handleCreateImage, { error }] = useMutation<CreatePost>(CREATE_POST, {
        update: (store, response) => {
            const dataInStorage = store.readQuery<GetByUser>({ query: GET_BY_USER });
            store.writeQuery({
                query: GET_BY_USER,
                data: {
                    ...dataInStorage,
                    getPostByUser: [
                        ...dataInStorage!.getPostByUser,
                        response.data?.createPostImage.post,
                    ]
                }
            })
        }
    });

    const [handleDeletePost] = useMutation<CreatePost>(DELETE_POST, {
        update: (store, response) => {
           
            const dataInStorage = store.readQuery<GetByUser>({ query: GET_BY_USER });

            store.writeQuery({
                query: GET_BY_USER,
                data: {
                    ...dataInStorage,
                    getPostByUser: [
                        ...dataInStorage!.getPostByUser.filter(p => p.id !== response.data?.deletePostImage.post.id)
                    ]
                }
            })
        }
    });

    const [handleUpdateImage] = useMutation<CreatePost>(UPDATE_POST, {
        update: (store, response) => {

            const dataInStorage = store.readQuery<GetByUser>({ query: GET_BY_USER });

            const newData = dataInStorage!.getPostByUser.filter(p => p.id !== response.data?.updatePostImage.post.id);
            store.writeQuery({
                query: GET_BY_USER,
                data: {
                    ...dataInStorage,
                    getPostByUser: [
                        ...newData,
                        response.data?.updatePostImage.post,
                    ]
                }
            })
        }
    });


    const handleActionPost = async (parameter?: any) => {
        if(dataModal){
            if(dataModal?.url_image || dataModal.description){
                updatePost(parameter.description)
            }else{
                deletePost()    
            }
        }else{
            createPost(parameter.description)
        }
    }

    async function updatePost(description: any) {

        if (!dataModal?.url_image && images.length === 0) return alert('Missing the image');
        
        const loading = Loading();
        loading.init();

        let url_image = null;

        if (images.length === 1) {
            url_image = await fileUpload(images[0].file!);
        }

        const { data } = await handleUpdateImage({
            variables: {
                variables: {
                    id: `${dataModal.id}`,
                    description,
                    ...(url_image ? { url_image } : {})
                }
            },
        });

        loading.finish(data!.updatePostImage.message);
    }

    async function createPost(description: any) {
        if (images.length === 0) return alert("Missing the image");
        
        const loading = Loading();
        loading.init();

        const url_image = await fileUpload(images[0].file!);

        const { data } = await handleCreateImage({
            variables: {
                variables: {
                    description,
                    url_image
                }
            },
        });

        loading.finish(data!.createPostImage.message)
    }

    async function deletePost() {
        // TODO:DELETE POST by DataModal
        const loading = Loading();
        loading.init();

        const { data } = await handleDeletePost({
            variables: {
                deletePostImageId: `${dataModal.id}`
            },
        });

        loading.finish(data!.deletePostImage.message)
    }

    function Loading() {

        let _toastId: string | null = null;

        return {
            init: () => { 
                setLoading(true);
                _toastId = toast.loading('Loading...')
             },
            finish: (message: string) => {
                _toastId && toast.dismiss(_toastId);
                modalOpen(false, 'upload-image');
                toast.success(message);
                setLoading(false);
            }
        }
    }

    const handleCloseModal = () => modalOpen(false, 'upload-image')
    const handleDeleteImage = () => modalOpen(true, 'upload-image', { ...dataModal, url_image: null })

    useEffect(() => {
        if (error) {
            setLoading(false);
            showToast({ msg: error.message });
        }
    }, [error])

    return {
        handleActionPost,
        loading,
        dataModal,
        handleCloseModal,
        handleDeleteImage
    }
}