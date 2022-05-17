import ImageUploading, {ImageListType} from 'react-images-uploading';
import shallow from 'zustand/shallow';
import { useImageSelectedStore } from '../../stores';
import { Button } from '..';
import { useEffect } from 'react';

export const ImageDraggableSelected = () => {
    const { onSelectedImage, images } = useImageSelectedStore(
        ({ onSelectedImage, images }) => ({ onSelectedImage, images }),
        shallow
    );

    const handleChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
        onSelectedImage(imageList);
    };

    useEffect(() => {
        return () => {
            onSelectedImage([]);
        };
    }, []);

    return (
        <ImageUploading multiple={false} value={images} onChange={handleChange} maxNumber={1}>
            {({
                imageList,
                onImageUpload,
                dragProps,
                isDragging,
                onImageRemove,
                onImageUpdate,
            }) => (
                <section>
                    {imageList[0] ? (
                        <div className='image-selected'>
                            <img src={imageList[0].dataURL} alt='' width={300} />
                            <div className='container-buttons-image-selected'>
                                <Button label="Update Image"  onClick={() => { onImageUpdate(0); }} type='button' icon="edit" iconClassName="icon-btn-img" />
                                <Button label="Remove Image"  onClick={() => { onImageRemove(0); }} type='button' icon="delete" iconClassName="icon-btn-img" />
                            </div>
                        </div>
                    ) : (
                        <div
                            onClick={onImageUpload}
                            {...dragProps}
                            className={`drag-drop ${isDragging ? "dragging" : ""}`}>
                            Chosee an Image or Drag and Drop an Image
                        </div>
                    )}
                </section>
            )}
        </ImageUploading>
    );
};