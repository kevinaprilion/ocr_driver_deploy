import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
function Loading() {
    return (
        <Loader type="Bars" color="#0036A0" height={40} width={40} />
    );
}

export default Loading