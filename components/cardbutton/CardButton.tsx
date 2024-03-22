import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

type CardItem = {
  subtitle: string,
  date: string, 
  header: string, 
  img: string
}

interface CardButtonProps{
  item: CardItem
}

const CardButton: React.FC<CardButtonProps> = ({item}) => {
  return (
    <Card className="py-4">
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
  );
}
export default CardButton;