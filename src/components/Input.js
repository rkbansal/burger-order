export default function Input({placeHolder, val, setValue, type, disable}){
    function onChange(e){
        if(setValue){
            setValue(e.target.value);
        }
    }

    return <input className="input-box" placeholder={placeHolder} val={val} min={0} onChange={onChange} type={type || "text"} disabled={disable}/>
}