export function Fluid({ children, config }) {
	const flexDefault = {
		display: "flex",
        justifyContent: "center",
		flexDirection: "row",
		flexWrap: "wrap",
		gap: "1rem",
	};

	if (config) {
		Object.entries(config).map(([key , value]) => {
            config[key] && (flexDefault[key] = value);
        })
		return <div style={flexDefault}>{children}</div>;
	}
	return <div style={flexDefault}>{children}</div>;
}
