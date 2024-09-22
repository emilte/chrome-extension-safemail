import { getSecretTrustedDomains } from './helpers.js';

/** html attribute to mark elements as parsed. */
export const MARKER = 'data-is-link-parsed';

/**
 * List of trusted domains.
 * You can modify this.
 * These will be ignored during parsing.
 * (Don't include subdomains).
 */
export const TRUSTED_DOMAINS = [
	'google.com',
	'facebook.com',
	'github.com',
	'gitlab.com',
	'norwegian.no',
	'instagram.com',
	'twitter.com',
	'bekk.no',
	'reddit.com',
	'linkedin.com',
	'scandichotels.com',
	'flysas.com',
	'youtube.com',
	'forms.gle', // Google Forms.
].concat(await getSecretTrustedDomains());
