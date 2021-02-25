export default function Header({headings}){
    return <div className="row">
        {headings.map((heading) => <div className="header cell">{heading}</div>)}
    </div>
}