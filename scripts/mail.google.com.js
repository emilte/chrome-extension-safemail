import { parseMailBody } from '../utils/helpers.js';

function main() {
	const mailBody = document.querySelector('[data-message-id]');
	parseMailBody(mailBody);
}

setTimeout(main, 1800); // Some delay to give page time to render on full reload.
window.addEventListener('popstate', () => setTimeout(main, 300)); // Some delay to wait for render.
window.addEventListener('hashchange', () => setTimeout(main, 300)); // Some delay to wait for render.

// Gmail is sneaky with data-saferedirecturl attribute.
// It looks like links are parsed after fully loaded DOM, then replacing the entire element.
// Run main again after some time to parse potentially new links.
setTimeout(main, 2800); // Seems to be the sweet spot to reduce jitter.
setTimeout(main, 5000); // For redundancy.
