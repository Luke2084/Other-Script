/*
脚本原创：hutao571
*/

   ^http://www.bing.com header-replace (\r\nUser-Agent:.+?)\w+\/[\d\.]+(\r\n) AppleWebKit/537.36 Chrome/110.0 Safari/537.36 Edg/110.0
   $done({ headers });
