export function Grid({children ,columns = 1 , rows = 1 , gap="1rem"}){
    const gridDefault = {
        display: "grid",
        gridTemplateColumns : `repeat( ${columns} , 1fr)`,
        gridTemplateRows : `repeat( ${rows} , 1fr)`,
        placeItems : "center",
        gap : gap
    }
    return <div style={gridDefault}>
        {children}
    </div>
}