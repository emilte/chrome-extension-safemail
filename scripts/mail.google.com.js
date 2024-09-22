import { TRUSTED_DOMAINS } from '../utils/constants.js';
import { getDomain, makeDomainElement, mark } from '../utils/helpers.js';

function main() {
	const mailBody = document.querySelector('[data-message-id]');
	if (!mailBody) return;

	/**
	 * Select all links with href.
	 * After being parsed, the href will be removed and excluded from future queries.
	 */
	const links = mailBody.querySelectorAll('a[href]');
	// const links = mailBody.querySelectorAll(`a:not([${MARKER}])`);

	for (const link of links) {
		link.title = link.href; // Show full url on hover.

		// Skip link if domain is allowed.
		const { domain } = getDomain(link);
		if (TRUSTED_DOMAINS.includes(domain)) {
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

setTimeout(main, 2000); // Some delay to give page time to render on full reload.
window.addEventListener('popstate', () => setTimeout(main, 300)); // Some delay to wait for render.
window.addEventListener('hashchange', () => setTimeout(main, 300)); // Some delay to wait for render.
