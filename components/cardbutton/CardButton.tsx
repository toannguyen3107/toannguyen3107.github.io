import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

type CardItem = {
  subtitle: string;
  date: string;
  header: string;
  img: string;
  path: string;
  tag: string[];
};

interface CardButtonProps {
  item: CardItem;
  className: string;
}

const CardButton: React.FC<CardButtonProps> = ({ item, className}) => {
  const router = useRouter();
  
  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <div 
      onClick={() => handleClick(item.path)} 
      style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }} 
      className={className}
    >
      <Card className="py-4 bg-[#52525B] border-2 hover:bg-[#71717A] active:bg-[#27272A] w-[200px]">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold mx-auto">{item.subtitle}</p>
          <small className="text-default-500 mx-auto">{item.date}</small>
          <h4 className="font-bold text-large mx-auto">{item.header}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={item.img}
              width={150}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardButton;
