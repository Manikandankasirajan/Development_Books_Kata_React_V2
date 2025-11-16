import createBookTitleAndCountMapObject from "./createBookTitleAndCountMapObject";
import createBookSets from "./createBookSets";
import checkOut from "./checkOut";

export default function getCartDetails(cart) {
	const bookTitleAndCountMap = createBookTitleAndCountMapObject(cart);
	const bookTitleAndCount = Object.entries(bookTitleAndCountMap);
	let bookSets = createBookSets(bookTitleAndCountMap);
	let priceAfterDiscount = checkOut(bookSets);
	return [bookTitleAndCount, priceAfterDiscount];
}
