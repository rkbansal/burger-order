export default function OrderCalculation({salad, chessSlices, bun, cutlets, setTotal}){
    const total = (salad == "Yes" ? 5 : 0) + bun * 5 + chessSlices * 1 + cutlets * 2;
    setTotal(total)
    return <div className="title">Total: {total}</div>
}