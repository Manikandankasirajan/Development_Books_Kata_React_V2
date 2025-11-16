import createBookTitleAndCountMapObject from "./createBookTitleAndCountMapObject";

export default function getCartDetails(cart) {
	const bookTitleAndCountMap = createBookTitleAndCountMapObject(cart);
	const bookTitleAndCount = Object.entries(bookTitleAndCountMap);
	return bookTitleAndCount;
}
