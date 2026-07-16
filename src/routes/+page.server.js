/** @type {import('./$types').PageServerLoad} */
export function load({ locals }) {
	if (locals.isAppLauncher) {
		return {
			pageTitle: null,
			metaTitle: 'FullVue',
			metaDescription: 'Enter your company subdomain to open FullVue.',
			metaKeywords: ''
		};
	}

	return {
		pageTitle: null,
		metaTitle: 'FullVue | Jobs, field service, invoicing & ops in one system',
		metaKeywords:
			'ERP, field service, job costing, invoicing, QuickBooks Online, purchasing, inventory, payroll, small business operations',
		metaDescription:
			'FullVue connects quotes, jobs, scheduling, invoicing, purchasing, inventory, time, and HR for operators who run crews and counters—and syncs billing data to QuickBooks Online.'
	};
}
