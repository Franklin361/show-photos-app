import toast from 'react-hot-toast';
interface Props {
    msg: string
}
export const showToast =  async( {msg}:Props ) => {
    toast.error(msg)
}