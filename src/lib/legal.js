// Single source of truth for legal document versions.
//
// Bump a version and effective date ONLY when the corresponding document
// changes. These values are rendered on the documents themselves, shown at
// the trial-signup checkbox, and stamped server-side into the control-plane
// signup record as proof of which versions a customer accepted.
//
// Material changes to the Subscription Agreement or Privacy Policy require
// 30 days advance notice per Section 19 of the Subscription Agreement —
// do not bump-and-deploy a material change without that notice process.
// Keep superseded versions available on request (git history is the archive).

export const LEGAL = {
	subscriptionAgreement: { version: '1.0', effective: 'July 31, 2026' },
	termsOfUse: { version: '1.0', effective: 'July 31, 2026' },
	privacyPolicy: { version: '1.0', effective: 'July 31, 2026' }
};
