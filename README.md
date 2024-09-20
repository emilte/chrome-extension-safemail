# chrome-extension-safemail

Disable links from untrusted domains.

## How to:

1. Clone repo
2. Go to `chrome://extensions`
3. Load unpacked -> select this folder
4. Update `TRUSTED_DOMAINS`

## Why use this extension?

Ever taken peek at the spam or trash folder, browsing potential emails trapped by an inconcise filter?
Do you fear accidentally clicking a suspicious or malicious link?

Using this extension, you can feel safer when reading mails.
It will reduce the chances of clicking links from spoofed emails.

The source code is open and only hosted from your local machine.
Any updates is in your full control, no need to worry about 3rd party extensions and dependency injection (afaik).

## Customize

You can modify the code as desired.
Add new files in `scripts/*` to implement support for other mail clients.
The filename must match the domain exactly (including subdomains).

> Changing any of these files requires a reload of the extension:
>
> - `content.js`
> - `manifest.json`
> - `background.json`
