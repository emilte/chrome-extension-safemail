# chrome-extension-safemail

Disable links from untrusted domains.
<br>
Supported clients: Gmail
<br>
Supported browsers: Google Chrome, Firefox

> For Chrome, [click here](https://github.com/emilte/chrome-extension-safemail)

## Example

<details>
<summary>Example email from Untappd</summary>

![Example](/assets/example.png)

</details>

## How to:

1. Clone repo
2. `git checkout firefox`
3. Paste this in the search bar of Firefox `about:debugging#/runtime/this-firefox`
4. Load Temporary Add-On... -> select `manifest.json` in this folder
5. Update `TRUSTED_DOMAINS` or `SECRET_TRUSTED_DOMAINS` in `utils/secret.js`

## Why use this extension?

Ever taken a peek at the spam or trash folder, browsing potential emails trapped by an inconcise filter?
Do you fear accidentally clicking a suspicious or malicious link?

Using this extension, you can feel safer when reading mails.
It will reduce the chances of clicking links from spoofed emails.
Any link within an email redirecting to a domain not specified in `TRUSTED_DOMAINS` will be disabled. The untrusted domain will also be highlighted.

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
