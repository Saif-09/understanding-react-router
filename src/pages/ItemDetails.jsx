import { useParams } from "react-router-dom";
import { ITEMS } from "../data/itemData";

function ItemDetails() {
    const {child} = useParams();
    const item = ITEMS.find((item)=>item.id===child)
    console.log(item);
  return (
    <>
    <main>
    <div>
      <h1 >ItemDetails</h1>
    </div>
    </main>
    <h2>{item.title}</h2>
    <h3>{item.description}</h3>
    </>
  )
}

export default ItemDetails
