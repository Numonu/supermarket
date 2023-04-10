import "../styles/Card.css";
export function Card({ url, message, icon }) {
	const backgroundConfig = {
		backgroundImage: `linear-gradient(to top , black , transparent , transparent) , url(${url})`,
	};
	return (
		<div className="card">
            <div className="card_bg"  style={backgroundConfig}> </div>
			<div className="card_about">
				<h1 className="card_message">{message}</h1>
				<span className="card_icon">{icon}</span>
			</div>
		</div>
	);
}
