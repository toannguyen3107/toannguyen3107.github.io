
interface SubParaProps {
    content: string
}

const SubPara: React.FC<SubParaProps> = ({ content }) => {
    return <p className="text-[1rem]"> &emsp;{ content }</p>;
}
export default SubPara;