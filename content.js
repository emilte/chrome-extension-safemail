function injectScript(file) {
	const script = document.createElement('script');
	script.type = 'module';
	script.src = chrome.runtime.getURL(file); // Must be available as web_accessible_resources.
	(document.head || document.documentElement).appendChild(script);
}

const CURRENT_DOMAIN = window.location.hostname;

injectScript(`scripts/${CURRENT_DOMAIN}.js`); // Inject custom domain js.
