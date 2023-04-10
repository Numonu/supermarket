import "../styles/Search.css";
export function Search({placehoder}){
    return <div className="search">
        <input className="search_writespace" type="text" maxLength="40" placeholder={placehoder}/>
        <i class="search_icon fa-solid fa-magnifying-glass"></i>
    </div>
}