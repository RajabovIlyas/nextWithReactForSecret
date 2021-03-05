import styled from 'styled-components'

const StyleText=styled.h4`
font-family: Montserrat;
font-style: normal;
font-size: ${props=>props.size||'14px'};
line-height: 140%;
color: ${props=>props.color||'#1B1B1B'};
margin-bottom: ${props=>props.bottom||0};
margin-left: ${props=>props.left||0};
height: ${props=>props.height||'auto'};
`

export default (props)=>{
    return(
        <StyleText {...props}/>
    )
}