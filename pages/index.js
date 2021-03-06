import styled from 'styled-components'
import Filter from "../components/Filter";
import Content from "../components/Content";
import {useState} from "react";

const GridStyle = styled.div`
  max-width: 1300px;
  padding: 64px 30px;
  margin:0 auto;
  display: grid;
  grid-template-columns: 224px 1fr;
`

const getDataApi = async (value = {min: undefined, max: undefined, brands: undefined}) => {
    const params = [];
    console.log('params', params)
    if (value.min !== null && value.min !== undefined) {
        await params.push(['price[min]', value.min.toString()])
    }
    if (value.max !== null && value.max !== undefined) {
        await params.push(['price[max]', value.max.toString()])
    }
    if (value.brands !== null && value.brands !== undefined) {
        Object.keys(value.brands).forEach(key => {
            if (value.brands[key]) {
                params.push(['brands[]', key.toString()])
            }
        })

    }
    const url = new URL('https://getlens-master.stage.dev.family/api/pages/kamery')
    url.search = new URLSearchParams(params).toString();
    console.log(url);
    return await fetch(url).then(async res => {
        const data = await res.json();
        return {props: data};
    })
}

const Index = (props) => {
    const [data, setData] = useState(props);
    const handleSubmit = (value) => {
        console.log(value);
        getDataApi(value).then(data => setData(data.props)).catch(err => console.log('ERRRRRRRRRRRROR'));
    }
    console.log(data);
    return (
        <GridStyle>
            <Filter handleSubmit={handleSubmit} meta={data.meta}/>
            <Content products={data.products}/>
        </GridStyle>
    )
}

export const getServerSideProps = async () => {
    return await getDataApi();

}

export default Index;
