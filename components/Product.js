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
`
const ImgStyle = styled.img`
width: 100%;
height: 242px;
margin-bottom: 12px;
border-radius: 4px 4px 0px 0px;
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
  
`
const BlockNewBottom = styled.div`
margin: 0 12px;
position: ${props => props.position || 'initial'};
bottom:${props => props.bottom || 0};
`

export default (props) => {
    const styleNew = {position: 'relative', bottom: '26px'};
    return (
        <ProductStyle>
            <div>
                <ImgStyle src={props.image ? props.image.desktop.webp_x2 : ''}/>
                {props.is_new ?
                    <GreenNewStyle><BoldText size={'10px'} color={'#FFFFFF'}>Новинка</BoldText></GreenNewStyle> : null}
            </div>
            <BlockNewBottom position={props.is_new ? 'relative' : null}
                            bottom={props.is_new ? '26px' : null}>
                <Text height={'40px'} bottom={'11px'}>{props.title}</Text>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '18px',
                    alignItems: 'center'
                }}>
                    <BoldText>{parseFloat(props.price)} ₽</BoldText>
                    {props.is_new ? <Text size={'11px'}>Новое</Text> : null}
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '18px',
                    alignItems: 'center'
                }}>
                    <ButtonStyle><Text size={'14px'}>В корзину</Text></ButtonStyle>
                    <img src='/img/svg/Like.svg'/>
                </div>
            </BlockNewBottom>
        </ProductStyle>
    )
}