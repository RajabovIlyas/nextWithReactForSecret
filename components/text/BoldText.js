import styled from 'styled-components'

const StyleBoldText=styled.h2`
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: ${props=>props.size||'16px'};
line-height: 140%;
color: ${props=>props.color||'#1B1B1B'};
margin-bottom: ${props=>props.bottom||''};
`

export default (props)=>{
    return(
        <>
        <StyleBoldText {...props}/>
        </>
    )
}