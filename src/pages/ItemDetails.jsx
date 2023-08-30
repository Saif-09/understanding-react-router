import { useParams } from "react-router-dom"

function ItemDetails() {
    const params = useParams();
  return (
    <>
    <div>
      <h1 style={{backgroundColor:"violet"}}>ItemDetails</h1>
    </div>
    <h2>{params.child}</h2>
    </>
  )
}

export default ItemDetails
