import "../styles/Brand.css";
export function Brand({title, icon}){
    return <div className="brand">
        <div className="brand_icon">{icon}</div>
        <h1 className="brand_title">{title}</h1>
    </div>
}