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
		metaTitle: 'Small Business ERP & Job Costing Software | FullVue',
		metaKeywords: '',
		metaDescription:
			'One system for shops that bill time and materials — quotes, jobs, job costing, inventory, invoicing — with invoices and bills sent to QuickBooks Online.'
	};
}
