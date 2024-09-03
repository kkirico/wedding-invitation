import FadeInComponent from '@/components/FadeInComponent';
import Image from 'next/image';
import image1 from '../../../public/image1.jpg';
import image2 from '../../../public/image2.jpg';
import image3 from '../../../public/image3.jpg';
import image4 from '../../../public/image4.jpg';
import image5 from '../../../public/image5.jpg';
import image6 from '../../../public/image6.jpg';
import image7 from '../../../public/image7.jpg';
import image8 from '../../../public/image8.jpg';
import closing from '../../../public/closing.jpg';
import Spacer from '@/components/Spacer';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

const ImageView = ({ src }: { src: StaticImport }) => {
    if (!src) return null;

    return (
        <FadeInComponent>
            <Image
                onContextMenu={() => false}
                src={src}
                alt="test image"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} // optional
            />

            <Spacer size={1.5}/>
        </FadeInComponent>
    );
};

const Gallery = () => {
    return (
        <>
            <ImageView src={image1}/>
            <ImageView src={image2}/>
            <ImageView src={image3}/>
            <ImageView src={image4}/>
            <ImageView src={image5}/>
            <ImageView src={image6}/>
            <ImageView src={image7}/>
            <ImageView src={image8}/>
            <ImageView src={closing}/>
        </>
    );
};

export default Gallery;