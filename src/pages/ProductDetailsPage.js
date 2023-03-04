import { useParams } from "react-router-dom";
const ProductDetailsPage = () => {
	const {id} = useParams();
	console.log(id);
	return (
		<div>This is ProductDetailsPage</div>
	);
}
 
export default ProductDetailsPage;