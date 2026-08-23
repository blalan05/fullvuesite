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

// v1.1 (both docs): disclosed the FoundTech Support Account and the automated
// operating access that reads workspace databases; made the Support Account a
// non-billable non-User; moved responsibility for its activity from Customer
// to us in §3.3. The Support Account disclosure is arguably in Customer's
// favour, but disclosing vendor access to a workspace is material either way,
// so the effective date honours the 30-day notice in §19.2 rather than
// bump-and-deploy. Existing customers need that notice sent — §19.2 allows
// email to the account address, in-Service notice, or prominent website notice.
// v1.2 (Subscription Agreement only): aligned enforcement with the lifecycle
// the platform actually implements — trial expiry and non-payment now restrict
// to READ-ONLY (sign in / view / export preserved) instead of suspension, and
// termination for non-payment moved from 21 to 30 days past due (still after
// >=3 reminders). Both changes are in Customer's favour, and no customer has
// accepted any prior version in production yet, so this is effective
// immediately rather than through the Section 19 notice cycle.
export const LEGAL = {
	subscriptionAgreement: { version: '1.2', effective: 'August 22, 2026' },
	termsOfUse: { version: '1.0', effective: 'July 31, 2026' },
	privacyPolicy: { version: '1.1', effective: 'September 9, 2026' }
};
