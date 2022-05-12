import shallow from "zustand/shallow";
import { useSubscription } from '@apollo/client';

import { NavBarHome, Modal, Wave } from "../../components";
import { useFilterSelectedStore, useModalStore } from "../../stores";

import { GetByUser, IElementJSX } from "../../interfaces";
import { GET_BY_USER, GET_SORT, SUBS_POST_ADDED } from "../../graphql";


import "./style.scss";

export const HomeLayout = ({ children }: IElementJSX) => {
    
    const filter = useFilterSelectedStore(state => state.filter)
    const { isModalOpen } = useModalStore( (state) => ({ isModalOpen: state.isOpen }), shallow );
    
    
    useSubscription<GetByUser>(SUBS_POST_ADDED, {
        variables: { typeSort: filter },  
        onSubscriptionData: async({ subscriptionData, client }) => {
            const newArr = [...subscriptionData.data!.newPostAdded];
            const dataInStorage = client.readQuery<GetByUser>({ query: GET_SORT, variables:{ typeSort: filter } });
            client.writeQuery({
                query: GET_SORT,
                variables:{
                    typeSort: filter 
                },
                data: {
                    ...dataInStorage,
                    getPostSort: [
                        ...newArr
                    ]
                }
            })
        }
    })
    return (
        <div className='container-layout-home'>
            <Wave color="slateblue" className="wave" />
            <NavBarHome />
            <div className="container-page" >{children}</div>
            {isModalOpen && <Modal />}
        </div>
    );
};
