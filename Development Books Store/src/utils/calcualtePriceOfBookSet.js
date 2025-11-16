import { DISCOUNT_RULE } from "../data/constants";
export default function calcualtePriceOfBookSet(bookSet) {
	const bookCount = bookSet.length;
	const actualPrice = calculateActualPrice(bookCount);
	const discountPrice = calculateDiscountPrice(bookCount);
	return actualPrice - discountPrice;
}

function calculateActualPrice(bookCount) {
	return bookCount * 50;
}

function calculateDiscountPrice(bookCount) {
	return bookCount * 50 * (DISCOUNT_RULE[bookCount] / 100);
}
