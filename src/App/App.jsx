import { Badge } from "../components/Badge";
import { Brand } from "../components/Brand";
import { Card } from "../components/Card";
import { Category } from "../components/Category";
import { Chip } from "../components/Chip";
import { Hero } from "../components/Hero";
import { Line } from "../components/Line";
import { Search } from "../components/Search";
import { Fluid } from "../layout/Fluid";
import { Grid } from "../layout/Grid";
import "./App.css";
import data from "../database/products.json";

export function App() {
	return (
		<div className="screen">
			<div className="wrapper">
				<div className="header">
					<Brand
						title="supermarket"
						icon={<i class="fa-solid fa-fire"></i>}
					/>
					<Search placehoder="search product" />
					<Fluid>
						
						<Chip icon={<i class="fa-solid fa-cart-shopping"></i>} />
						<Chip icon={<i class="fa-solid fa-user"></i>} />
					</Fluid>
				</div>
				<div className="grid">
					<div className="grid_hero">
						<Hero
							title="Aprovecha este viernes de descuentos 🎉"
							description="✨ Mas de 200 productos con un descuento espectacular! ✨"
							url="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						/>
					</div>
					<div className="grid_aside">
						<Fluid
							config={{ flexDirection: "column", gap: ".5rem" }}
						>
							<Category
								title="frutas"
								icon={<i class="fa-solid fa-lemon"></i>}
							/>
							<Category
								title="verduras"
								icon={<i class="fa-solid fa-carrot"></i>}
							/>
							<Category
								title="bebidas"
								icon={<i class="fa-solid fa-bottle-water"></i>}
							/>
							<Category
								title="carnes"
								icon={
									<i class="fa-solid fa-drumstick-bite"></i>
								}
							/>
							<Category
								title="otros"
								icon={
									<i class="fa-solid fa-basket-shopping"></i>
								}
							/>
						</Fluid>
					</div>
					<div className="grid_main">
						<Fluid config={{ flexDirection: "column" }}>
							<Brand title="Products" />
							<Line />
							<Fluid config={{ justifyContent: "flex-start" }}>
								<Badge title="New" />
								<Badge title="Offer" />
								<Badge title="Selled" />
								<Badge title="Popular" />
								<Badge title="Recent" />
								<Badge title="Free" />
							</Fluid>
							<Grid columns={4}>
								{data.fruits.map((e, i) => (
									<Card
										key={i}
										message="comprar"
										icon={
											<i class="fa-solid fa-chevron-down"></i>
										}
										url={e.url}
									/>
								))}
							</Grid>
						</Fluid>
					</div>
				</div>
			</div>
		</div>
	);
}
