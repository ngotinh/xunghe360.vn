export default defineEventHandler((event) => {
    const headers = event.req.headers;
    
    if (headers.referer && /facebook\.com|twitter\.com|t\.co/gi.test(headers.referer)) {
        sendRedirect(event,"https://xunghe360.vn/"+event.req.url);
    }
})
