# chrome-extension-safemail

Disable links from untrusted domains.


## How to:
1. Clone repo
2. Go to `chrome://extensions`
3. Load unpacked -> select this folder


## Customize

You can modify the code as desired.
Add new files in `scripts/*` to implement support for other mail clients.
The filename must match the domain exactly (including subdomains).

> Changing any of these files requires a reload of the extension:
> - `content.js`
> - `manifest.json`
> - `background.json`