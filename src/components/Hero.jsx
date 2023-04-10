import "../styles/Hero.css";
export function Hero({ title, subtitle, description, url }) {
	const backgroundConfig = {
		background: `linear-gradient(to top , black , transparent) , url(${url})`,
        backgroundSize: "cover",
	};
	return (
		<div className="hero" style={backgroundConfig}>
			<div className="hero_header">
				<h1 className="hero_title">{title}</h1>
				<h2 className="hero_subtitle">{subtitle}</h2>
			</div>
			<p className="hero_description">{description}</p>
		</div>
	);
}
