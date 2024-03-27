import CircleLoader from "react-spinners/CircleLoader";

export default function Loading() {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <CircleLoader
              size={100}
              color="#36d7b7"
            />
          </div>
    ); 
}