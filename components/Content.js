import styled from 'styled-components'
import Product from "./Product";


const GridContent=styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,242px);
  grid-gap: 12px;
  align-items: center;
  margin-left:38px;
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