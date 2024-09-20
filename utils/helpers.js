import { MARKER } from './constants.js';

/**
 * Extract url and domain from a tag.
 */
function getDomain(link) {
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
function makeDomainElement(link) {
	const { url, domain } = getDomain(link);

	const domainSpan = document.createElement('span');
	domainSpan.textContent = ` (${domain})`;
	domainSpan.title = url;
	domainSpan.style.color = 'red';
	domainSpan.style.background = 'black';
	domainSpan.style.fontSize = 'small';

	return domainSpan;
}

/**
 *  Mark to skip element in the future.
 */
function mark(link) {
	link.setAttribute(MARKER, true);
}
