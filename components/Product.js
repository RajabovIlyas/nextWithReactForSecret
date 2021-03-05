import styled from 'styled-components'
import Text from "./text/Text";
import BoldText from "./text/BoldText";

const ProductStyle=styled.div`
width: 242px;
height: 401px;
background: #FFFFFF;
border: 1px solid #E6E6E6;
box-sizing: border-box;
border-radius: 4px;
`
const ImgStyle=styled.img`
width: 100%;
height: 242px;
margin-bottom: 12px;
border-radius: 4px 4px 0px 0px;
`

const ButtonStyle=styled.button`
width: 106px;
height: 40px;
border: 1px solid #DBDBDB;
box-sizing: border-box;
border-radius: 8px;
`

const GreenNewStyle=styled.div`

`

export default (props)=>{
    console.log(props);
    return(
        <ProductStyle>
            <ImgStyle src={props.image?props.image.desktop.webp_x2:''}/>
            <div style={{margin: '0 12px'}}>
            <Text height={'40px'} bottom={'11px'}>{props.title}</Text>
            <BoldText bottom={'18px'}>{parseFloat(props.price)} ₽</BoldText>
                <ButtonStyle><Text size={'14px'}>В корзину</Text></ButtonStyle>
            </div>
            </ProductStyle>
    )
}