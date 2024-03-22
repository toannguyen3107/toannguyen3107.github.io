import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

type CardItem = {
  subtitle: string;
  date: string;
  header: string;
  img: string;
  link: string;
};

interface CardButtonProps {
  item: CardItem;
}

const CardButton: React.FC<CardButtonProps> = ({ item }) => {
  const router = useRouter();
  
  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <div onClick={() => handleClick(item.link)} style={{ cursor: 'pointer' }}>
      <Card className="py-4 bg-[#52525B] border-2 hover:bg-[#71717A] active:bg-[#27272A]">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{item.subtitle}</p>
          <small className="text-default-500">{item.date}</small>
          <h4 className="font-bold text-large">{item.header}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={item.img}
            width={270}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default CardButton;
