import { MARKER } from './constants.js';

/**
 * Extract url and domain from a tag.
 */
export function getDomain(link) {
	const url = new URL(link.href);
	let domain = url.hostname;
	// Remove subdomains.
	const domainParts = domain.split('.');
	if (domainParts.length > 2) {
		domain = domainParts.slice(-2).join('.');
	}
	return { url, domain };
}

/**
 * Create a new span element to display the domain.
 */
export function makeDomainElement(link) {
	const { url, domain } = getDomain(link);

	const domainSpan = document.createElement('span');
	domainSpan.textContent = domain;
	domainSpan.title = url;
	domainSpan.style.border = '1px solid red';
	domainSpan.style.borderRadius = '10px';
	domainSpan.style.padding = '0 3px';
	domainSpan.style.color = 'red';
	domainSpan.style.background = 'black';
	domainSpan.style.fontSize = 'small';

	return domainSpan;
}

/**
 *  Mark to skip element in the future.
 */
export function mark(link) {
	link.setAttribute(MARKER, true);
}

/**
 * Attempt to import extended list of trusted domains outside VCS.
 */
export async function getSecretTrustedDomains() {
	try {
		const secret = await import('./secret.js');
		return secret.SECRET_TRUSTED_DOMAINS;
	} catch (error) {
		return [];
	}
}
