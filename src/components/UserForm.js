import React, { useState } from "react";
import Input from "./Input";
import OrderCalculation from "./OrderCalculations";
import RadioButton from "./Radio";
import { Button } from 'antd';
export default function UserForm({setSales}){
    const [name, setName] = useState("");
    const [salad, setSalad] = useState("No");
    const [chessSlices, setChessSlices] = useState(0);
    const [cutlets, setCutlets] = useState(0);
    const [total, setTotal] = useState(0);
    const maxBun = 2;
    const options = ["Yes", "No"];

    function onSubmit(){
        setSales((sales) => {
            console.log(sales);
            const allSales = [...sales, {name,salad, chessSlices, cutlets, totalSales: total}];
            localStorage.setItem("sales", JSON.stringify(allSales));
            return allSales;
        });
        window.location.href = "/sales";
    }

    return <div className="row column">
        <div className="form">
            <Input placeHolder="Name" val={name} setValue={setName}/>
            <Input placeHolder={maxBun} val={maxBun} disable={true}/>
            <RadioButton value={salad} setValue={setSalad} options={options} title={"salad"}/>
            <Input placeHolder="Cheese Slices" val={chessSlices} setValue={setChessSlices} type="number"/>
            <Input placeHolder="Cutlets" val={cutlets} setValue={setCutlets} type="number"/>
        </div>
        <OrderCalculation salad={salad} chessSlices={chessSlices} bun={maxBun} cutlets={cutlets} setTotal={setTotal}/>
        <Button className="primary-btn" onClick={onSubmit}>Order</Button>
    </div>
}