import "../styles/Badge.css";
export function Badge({title}){
    return <div className="badge">
        <h1 className="badge_title">
            {title}
        </h1>
    </div>
}