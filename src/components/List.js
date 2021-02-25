import Item from "./Item";

export default function List({items}){
    return <div className="list row column">
        {items.map((item) => {
            return <Item key={item.name} {...item}/>
        })}
    </div>
}