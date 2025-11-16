import calcualtePriceOfBookSet from "./calcualtePriceOfBookSet";
export default function checkOut(bookSets) {
	let priceAfterDiscount = 0;
	for (const bookSet of bookSets) {
		const priceOfBookSet = calcualtePriceOfBookSet(bookSet);
		priceAfterDiscount += priceOfBookSet;
	}
	return priceAfterDiscount;
}
