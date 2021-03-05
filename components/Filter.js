import Text from "./text/Text";
import BoldText from "./text/BoldText";

export default (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Text color={'#898989'} bottom={'5px'}>Товаров {props.meta.total}</Text>
            <BoldText size={'32px'} bottom={'13px'}>Камеры</BoldText>
            <BoldText bottom={'12px'}>Цена, ₽</BoldText>
        </form>
    )
}