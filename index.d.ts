export namespace Shuttle {
	export type PaymentAction = 'PAYMENT' | 'AUTH';

	export type PaymentFrequency = 'ONEOFF' | 'WEEKLY' | 'FORTNIGHTLY' | 'BIMONTHLY' |
		'MONTHLY' | 'QUARTERLY' | 'ANNUALLY'


	export interface Address {
		line1?: string;
		line2?: string;
		line3?: string;
		line4?: string;
		line5?: string;
		line6?: string;
		country?: string;
	}
	export interface CreateAccount {
		crm_key?: string;
		tag?: string;
		first_name?: string;
		last_name?: string;
		company?: string;
		email?: string;
		phone?: string;
		address?: Address;
	}

	export interface LineItem {
		sku: string;
		name: string;
		quantity: string;
		unit_price: string;
		total_amount: string;
		total_tax?: string;
		item_url: string;
		image_url: string;
	}
	export interface DoPaymentParams {
		instance_key: string;
		alt_key?: string;
		amount: string;
		currency: string;
		title?: string;
		checkout_text?: string;
		force_add?: boolean;
		disable_recipt?: boolean;
		disable_redirect?: boolean;
		disable_new_window?: boolean;
		success_url?: string;
		cancel_url?: string;
		description?: string;
		nonce?: string;
		action?: PaymentAction;
		account?: string | { id: string } | CreateAccount;
		frequency?: PaymentFrequency;
		occurances?: number;
		start_date?: string;
		start_days?: number;
		save_card?: boolean;
		shipping?: Address;
		line_items?: LineItem[];
	}
	export interface Shuttle {
		bind(): never;
		doPayment(options: DoPaymentParams, signature: string): never;
	}
}

declare global {
	const Shuttle: Shuttle.Shuttle;
}