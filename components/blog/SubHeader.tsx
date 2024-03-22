type ItemType = {
    num: string;
    content: string;
}

interface SubHeaderProps {
    item: ItemType;
}

const SubHeader: React.FC<SubHeaderProps> = ({ item }) => {
    return <p className="text-[1.3rem] font-semibold text-red-500">{item.num}. {item.content}</p>;
}

export default SubHeader;
