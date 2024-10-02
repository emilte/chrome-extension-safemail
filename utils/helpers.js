import { MARKER, TRUSTED_DOMAINS } from './constants.js';

export function parseMailBody(el) {
	if (!el) return;

	/**
	 * Select all links with href.
	 * After being parsed, the href will be removed and excluded from future queries.
	 */
	const links = el.querySelectorAll('a[href]');
	// const links = mailBody.querySelectorAll(`a:not([${MARKER}])`);

	for (const link of links) {
		link.title = link.href; // Show full url on hover.
		link.removeAttribute('data-saferedirecturl'); // Looking at you Gmail, sneaky...

		// Skip link if domain is allowed.
		const { domain } = getDomain(link);
		if (TRUSTED_DOMAINS.includes(domain)) {
			link.style.color = 'green';
			mark(link);
			continue;
		}

		// Append the new span element behind the link.
		link.appendChild(makeDomainElement(link));

		mark(link);

		// Make link invalid, but keep looking like one.
		link.style.cursor = 'pointer';
		link.style.color = 'blue';
		link.removeAttribute('href');
	}
}

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
 *
 */
// export function makeFakeLink(link) {
// 	const span = document.createElement('span');
// 	span.textContent = link.textContent;
// 	span.title = link.href;
// 	span.style.color = '#15c';
// 	span.style.textDecoration = 'underline';
// 	span.style.cursor = 'pointer';

// 	return span;
// }

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
	domainSpan.style.display = 'inline-block';

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

/**
 * Set n Timeouts.
 */
export function setnTimeOut(f, ...delays) {
	for (const delay of delays) {
		setTimeout(f, delay);
	}
}
