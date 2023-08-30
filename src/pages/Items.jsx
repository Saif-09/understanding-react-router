import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';
import { ITEMS } from "../data/itemData";

function Items() {
  return (
    <>
      <main>
        <h1>Items Page</h1>
      </main>

     <ul>
      {ITEMS.map((item,index)=>{
        return(
          
           <Link to={`/items/${item.id}`}> <li key={item.id}>{item.title}</li></Link>
          
        )

      })}</ul>

      









      {/* <ul>
        <Link to="/items/item-1"><li>All items</li></Link>
        <Link to="/items/item-2"><li>Create item</li></Link>
        <Link to="/items/item-3"><li>Delete item</li></Link>

      </ul> */}
    </>
  );
}

export default Items;
