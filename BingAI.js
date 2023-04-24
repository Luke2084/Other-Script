/*
脚本原创：LiuYaChen
*/
   const headers = $request.headers;

   delete headers["user-agent"];
   

   headers['User-Agent'] = `AppleWebKit/537.36 Chrome/110.0 Safari/537.36 Edg/110.0`;
   $done({ headers });
