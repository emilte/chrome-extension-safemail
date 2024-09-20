import { INTERVAL_MS, MARKER, TRUSTED_DOMAINS } from '../utils/constants.js';
import { getDomain, makeDomainElement, mark } from '../utils/helpers.js';

function main() {
	const mailBody = document.querySelector('[data-message-id]');
	if (!mailBody) return;

	const links = mailBody.querySelectorAll(`a:not([${MARKER}])`);
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

// Run main regularly. (Maybe use eventListener?)
setInterval(main, INTERVAL_MS);
