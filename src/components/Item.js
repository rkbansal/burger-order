import React from "react";
export default function Item({name,salad,chessSlices,cutlets, totalSales}){
    return <div className="row">
        <div className="cell">{name}</div>
        <div className="cell">{salad}</div>
        <div className="cell">{chessSlices}</div>
        <div className="cell">{cutlets}</div>
        <div className="cell">{totalSales}</div>
    </div>
}