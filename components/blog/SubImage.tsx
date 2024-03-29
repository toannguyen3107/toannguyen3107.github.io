import React from "react";
import { Image } from "@nextui-org/react";
type imgType = {
    alt: string;
    path: string;
    size: number
};

interface SubImageProps {
    img: imgType;
}

const SubImage: React.FC<SubImageProps> = ({ img }) => {
    return (
        <div className="flex justify-center">
            <Image
                width={img.size}
                alt={img.alt}
                src={img.path}
                className="my-3 text-center"
            />
        </div>

    );
}

export default SubImage;