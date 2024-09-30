import { parseMailBody } from '../utils/helpers.js';


function main() {
	let mailBody = document.querySelector('.wide-content-host'); // Reading.
	if (!mailBody) {
        mailBody = document.querySelector('[data-app-section="MailReadCompose"]'); // Composing.}
    } 
    
    parseMailBody(mailBody)
    
}

// Outlook uses a different mechanism of mutating url, run main on interval.
setInterval(main, 3000); 
