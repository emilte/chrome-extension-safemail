import { parseMailBody } from '../utils/helpers.js';

function main() {
	const mailBody = document.querySelector('[data-message-id]');
	parseMailBody(mailBody)
}

setTimeout(main, 2000); // Some delay to give page time to render on full reload.
window.addEventListener('popstate', () => setTimeout(main, 300)); // Some delay to wait for render.
window.addEventListener('hashchange', () => setTimeout(main, 300)); // Some delay to wait for render.
