import styled from 'styled-components'
import Product from "./Product";


const GridContent=styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,242px);
  grid-gap: 12px;
  align-items: center;
  margin-left:38px;
  @media (max-width: 768px) {
    margin:0;
    grid-template-columns: 1fr;
    &>div{
    border-bottom: 1px solid #E6E6E6;
    }
    &>div:last-child{
    border-bottom: 0;
    }
  }
`

export default (props) => {
    return (
        <GridContent>
            { props.products.map(prod=>
                <Product {...prod} key={prod.id}/>
            )}
        </GridContent>
    )
}