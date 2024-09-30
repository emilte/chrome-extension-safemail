import { main } from './outlook.live.com.js';

// Outlook uses a different mechanism of mutating url, run main on interval.
setInterval(main, 3000); 
