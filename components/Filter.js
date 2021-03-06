import Text from "./text/Text";
import BoldText from "./text/BoldText";
import styled from "styled-components";
import { useState} from "react";


const InputStyle = styled.input`
width: 112px;
height: 42px;

border: 1px solid #DBDBDB;
box-sizing: border-box;
border-radius: ${props => props.border || '0'};

font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 140%;
color: #1B1B1B;
padding: 10px 12px 12px;
`
const Label = styled.label`
display: block;
  position: relative;
  padding-left: 26px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  & input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}



& input:checked ~ span {
  background: #7993A6;
  border-radius: 4px;
}
& input:checked ~ span:after {
  display: block;
}

& span:after {
  left: 5px;
  top: 2px;
  width: 3px;
  height: 6px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  margin: 0 9px 0 0;
}
`
const Checkmark = styled.span`
position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  border: 1px solid #D0D0D0;
box-sizing: border-box;
border-radius: 4px;
  
  &:after {
  content: "";
  position: absolute;
  display: none;
}
`

export default (props) => {
    const [dataFilter, setDataFilter] = useState({
        min: 0,
        max: 499000,
        brands: {
            1: false,
            2: false,
            3: false,
            4: false,
            5: false,
            6: false,
            7: false,
        },
    })

    const handleChange = (value) => {
        value.min = isNaN(value.min) ? 0 : value.min;
        value.max = isNaN(value.max) ? 1 : value.max;
        value.max = value.max === 0 ? 1 : value.max;
        if (value.min >= value.max) {
            value.min = value.max - 1;
        }
        setDataFilter(value);
        props.handleSubmit(value);
    }
    const checkboxChange = (value) => {
        dataFilter.brands[value] = !dataFilter.brands[value];
        setDataFilter(dataFilter);
        props.handleSubmit(dataFilter);
    }
    const brandsName = ['Canon', 'Nikon', 'FujiFilm', 'Sony', 'Olympus', 'Panasonic', 'Другие']

    return (
        <div>
            <Text color={'#898989'} bottom={'5px'}>Товаров {props.meta.total}</Text>
            <BoldText size={'32px'} bottom={'13px'}>Камеры</BoldText>
            <BoldText bottom={'12px'}>Цена, ₽</BoldText>
            <Text>
                <div style={{marginBottom: '25px'}}>
                    <div style={{display: 'flex', justifyContent: 'start'}}>
                        <InputStyle border={'5px 0 0 5px'}
                                    value={dataFilter.min}
                                    onChange={(e) => handleChange({...dataFilter, min: Number(e.target.value)})}/>
                        <InputStyle border={'0 5px 5px 0'}
                                    value={dataFilter.max}
                                    onChange={(e) => handleChange({...dataFilter, max: Number(e.target.value)})}/>
                    </div>
                </div>
                <BoldText bottom={'12px'}>Бренд</BoldText>
                <div style={{marginBottom:'38px'}}>
                {brandsName.map((value, index) => (
                    <Label key={index} style={{marginBottom: '10px', display: 'flex', alignItems: 'center'}}>
                        {value}
                        <input type="checkbox"
                               defaultChecked={dataFilter.brands[index + 1]}
                               value={index + 1}
                               onChange={(e) => checkboxChange(e.target.value)}
                        /> <Checkmark></Checkmark></Label>
                ))}
                </div>
            </Text>
        </div>
    )
}