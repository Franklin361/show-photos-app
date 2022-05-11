import { showToast } from './';
import toast from 'react-hot-toast';

export const fileUpload = async(file:File) => {
    const cloudinaryUrl = import.meta.env.VITE_HOST_CLOUDINARY as string;

    const formData = new FormData();
    formData.append('upload_preset','show-photos')
    formData.append('file', file);

    try {
        
        const res = await fetch(cloudinaryUrl,{
            method: 'POST',
            body: formData
        });

        if(res.ok){
            const data = await res.json();
            return data.secure_url;
        }else{
            console.log(await res.json())
        }

    } catch (error) {
        showToast({ msg: `Couln'd save image ❌ 
        Try it again later, please 🖐️` })
    }

};

/*
    const url_image = await fileUpload(file);
*/