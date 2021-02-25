import {useState} from "react";

export default function Search({items, setItems}){
    const [val, setValue] = useState("");
    function onChange(e){
        setValue(e.target.value);
        if(!e.target.value){
            setItems([...items]);
        } else {
            const filteredItems = items.filter((item) => item.name.includes(e.target.value));
            setItems([...filteredItems]);
        }
    }
    return <div>
        <input type="text" onChange={onChange} val={val}/>
    </div>
}