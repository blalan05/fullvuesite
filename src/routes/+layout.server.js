/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals }) {
	return {
		isAppLauncher: locals.isAppLauncher ?? false
	};
}
