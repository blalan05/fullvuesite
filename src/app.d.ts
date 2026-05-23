// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare global {
	interface Window {
		dataLayer?: unknown[];
		gtag?: (...args: unknown[]) => void;
	}

	namespace App {
		// interface Error {}
		interface Locals {
			isAppLauncher: boolean;
		}
		interface PageData {
			isAppLauncher?: boolean;
			pageTitle?: string | null;
			metaTitle?: string;
			metaDescription?: string;
			metaKeywords?: string;
		}
		// interface Platform {}
	}
}

export {};
