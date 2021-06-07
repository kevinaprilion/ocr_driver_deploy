import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

interface IProps {
    color: string;
    height: number;
    width: number;
}

const CircularLoad:React.FC<IProps> = ({color, height, width}) => {
    return (
        <Loader type="TailSpin" color={color} height={height} width={width} />
    );
}

export default CircularLoad



