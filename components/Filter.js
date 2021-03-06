import Text from "./text/Text";
import BoldText from "./text/BoldText";
import styled from "styled-components";
import {createRef, useState} from "react";

const CheckboxStyle = styled.input`

`
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

export default (props) => {
    const [dataFilter,setDataFilter]=useState({
        min:0,
        max:499000,
        brands:{
            1:false,
            2:false,
            3:false,
            4:false,
            5:false,
            6:false,
            7:false,
        },
    })

    const handleChange=(value)=>{
        value.min=isNaN(value.min)?0:value.min;
        value.max=isNaN(value.max)?1:value.max;
        value.max=value.max===0?1:value.max;
        if(value.min>=value.max){
            value.min=value.max-1;
        }
        setDataFilter(value);
        props.handleSubmit(value);
    }
    const checkboxChange=(value)=>{
        dataFilter.brands[value]=!dataFilter.brands[value];
        setDataFilter(dataFilter);
        props.handleSubmit(dataFilter);
    }
    const brandsName=['Canon','Nikon','FujiFilm','Sony','Olympus','Panasonic','Другие']

    return (
        <div>
            <Text color={'#898989'} bottom={'5px'}>Товаров {props.meta.total}</Text>
            <BoldText size={'32px'} bottom={'13px'}>Камеры</BoldText>
            <BoldText bottom={'12px'}>Цена, ₽</BoldText>
            <div style={{marginBottom: '25px'}}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <InputStyle border={'5px 0 0 5px'}
                                value={dataFilter.min}
                                onChange={(e)=>handleChange({...dataFilter,min:Number(e.target.value)})}/>
                    <InputStyle border={'0 5px 5px 0'}
                                value={dataFilter.max}
                                onChange={(e)=>handleChange({...dataFilter,max:Number(e.target.value)})}/>
                </div>
            </div>
            <BoldText bottom={'12px'}>Бренд</BoldText>
            <ul>
                <Text>
                    {brandsName.map((value,index)=>(
                        <li key={index}><input type="checkbox"
                                   defaultChecked={dataFilter.brands[index+1]}
                                   value={index+1}
                                   onChange={(e)=>checkboxChange(e.target.value)}
                        />{value}</li>
                    ))}
                </Text>
            </ul>
        </div>
    )
}