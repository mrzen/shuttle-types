
export interface DoPaymentParams {
	instance_key: string;
	alt_key?: string;
	amount: string;
	currency: string;
}

export interface Shuttle {
	bind(): never;
	doPayment(options: DoPaymentParams, signature: string): never;
}

declare global {
	const Shuttle: Shuttle;
}