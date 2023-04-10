import "../styles/Category.css";
export function Category({title, icon}){
    return <div className="category">
        <h1 className="category_title">{title}</h1>
        <div className="category_icon">
            {icon}
        </div>
    </div>
}