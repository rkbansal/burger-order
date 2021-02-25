import React, { useState } from "react";
import { Button } from 'antd';
import List from "../components/List";
import Search from "../components/Search";
import Header from "../components/Header";
export default function Sales(){
    const [filteredSales, setFilteredSales] = useState([]);
    let allSales = localStorage.getItem("sales") || "";
    allSales = JSON.parse(allSales);
    return <div className="row column">
        <Search items={allSales} setItems={setFilteredSales}/>
        <Header headings={["name","salad","cheese","cutlet","total"]}></Header>
        <List items={filteredSales}/>
        <Button onClick={()=>{
            window.location.href = "/order";
        }}>Go Back</Button>
    </div>
}