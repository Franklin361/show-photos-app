
import { AiFillDislike, AiFillLike, AiOutlineArrowLeft, AiOutlineCamera, AiOutlineCloseCircle, AiOutlineDelete, AiOutlineDislike, AiOutlineEdit, AiOutlineFieldTime, AiOutlineFileImage, AiOutlineHeart, AiOutlineHome, AiOutlineLike, AiOutlineLock, AiOutlineLogout, AiOutlineMail, AiOutlineMenu, AiOutlineMessage, AiOutlineSearch, AiOutlineUpload, AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";
import { IPropsIcon } from '../interfaces';


export const Icon = ({name, ...props} : IPropsIcon) => {

    const selectedIcon = {
        "user-add": <AiOutlineUserAdd {...props}/>,
        "camera": <AiOutlineCamera {...props}/>,
        "user": <AiOutlineUser {...props} />,
        "email": <AiOutlineMail {...props} />,
        "lock": <AiOutlineLock {...props} />,   
        "like": <AiOutlineLike {...props} />,   
        "dislike": <AiOutlineDislike {...props} />,   
        "dislike-fill": <AiFillDislike {...props} />,   
        "like-fill": <AiFillLike {...props} />,   
        "burger": <AiOutlineMenu {...props} />,   
        "search": <AiOutlineSearch {...props} />,   
        "close": <AiOutlineCloseCircle {...props} />,   
        "comment": <AiOutlineMessage {...props} />,   
        "home": <AiOutlineHome {...props} />,   
        "heart": <AiOutlineHeart {...props} />,   
        "image": <AiOutlineFileImage {...props} />,   
        "log-out": <AiOutlineLogout {...props} />,   
        "delete": <AiOutlineDelete {...props} />,   
        "edit": <AiOutlineEdit {...props} />,   
        "arrow-left": <AiOutlineArrowLeft {...props} />,   
        "watch": <AiOutlineFieldTime {...props} />,   
        "upload": <AiOutlineUpload {...props} />
    }
    

    return selectedIcon[name] ?? null
}