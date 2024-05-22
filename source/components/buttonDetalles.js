import { TouchableOpacity } from "react-native";
import TextWhite from "./textWhite";

export default BotonDetalles = (props) =>{
    const { texto, onPres } = props;
    return(
        <TouchableOpacity onPress={onPres}>
            <TextWhite texto={texto} size={20}></TextWhite>
        </TouchableOpacity>
    );
};