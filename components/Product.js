import styled from 'styled-components'
import Text from "./text/Text";
import BoldText from "./text/BoldText";

const ProductStyle = styled.div`
width: 242px;
height: 401px;
background: #FFFFFF;
border: 1px solid #E6E6E6;
box-sizing: border-box;
border-radius: 4px;
@media (max-width: 768px) {
width: 100%;
height: 142px;
display: flex;
align-items: start;
border: 0;
padding-bottom: 12px;

margin-top: 6px;
}
`
const ImgStyle = styled.img`
width: 242px;
height: 242px;
margin-bottom: 12px;
border-radius: 4px 4px 0px 0px;
@media (max-width: 768px) {
width: 124px;
height: 124px;
}
`

const ButtonStyle = styled.button`
width: 106px;
height: 40px;
border: 1px solid #DBDBDB;
box-sizing: border-box;
border-radius: 8px;
`

const GreenNewStyle = styled.div`
width: 79px;
height: 26px;
background: #44C477;
border-radius: 26px;
text-align:  center;
display: flex;
align-items: center;
  justify-content: center;
  text-transform: uppercase;
  position: relative;
  left: 12px;
  bottom : 242px;
  @media (max-width: 768px) {
  display: none;
  
}
`
const BlockNewBottom = styled.div`

margin: 0 12px;
position: ${props => props.position || 'initial'};
bottom:${props => props.bottom || 0};
& div:nth-child(n){
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  align-items: center;
  }
  
@media (max-width: 768px) {
width: 100%;
  position: relative;
  bottom: 4px;
  &>h4:first-child{
  margin-bottom: 9px;
  }
  &>div:nth-child(n){
  margin-bottom: 16px;
  }
  &>div:last-child{
  margin-bottom: 0;
  }
}
@media (max-width: 420px) {
  & h4:first-child{
  font-size: 12px;
  }
  
}

`

export default (props) => {
    const styleNew = {position: 'relative', bottom: '26px'};
    const newTitle=props.title.length>30?props.title.slice(0, 27).concat('...'):props.title;
    return (
        <ProductStyle>
            <div>
                <ImgStyle src={props.image ? props.image.desktop.webp_x2 : ''}/>
                {props.is_new ?
                    <GreenNewStyle>
                        <BoldText size={'10px'} color={'#FFFFFF'}>Новинка</BoldText>
                    </GreenNewStyle> : null}
            </div>
            <BlockNewBottom position={props.is_new ? 'relative' : null}
                            bottom={props.is_new ? '26px' : null}>
                <Text height={'40px'} bottom={'11px'}>{props.title}</Text>
                <div className='price_style'>
                    <BoldText>{parseFloat(props.price).toLocaleString()} ₽</BoldText>
                    {props.is_new ? <Text size={'11px'}>Новое</Text> : null}
                </div>
                <div>
                    <ButtonStyle><Text size={'14px'}>В корзину</Text></ButtonStyle>
                    <img src='/img/like.svg'/>
                </div>
            </BlockNewBottom>
        </ProductStyle>
    )
}