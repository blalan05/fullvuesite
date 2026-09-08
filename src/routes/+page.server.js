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
			'FullVue runs jobs, field, and invoicing in one system—with one-way QuickBooks Online push and Ask FullVue AI for answers from your data.'
	};
}
