
Researching a global solution for the mixed content proglem caused by html pages accessed over https with old content that have absolute urls over http.

( trying to avoid changing all content to fix the problem on the server ) 

I was thinking why not have a global hook using service worker and fetch api that will redirect the request before it gets out from the browser to the same url over https.

The code actually works and the request is requested over HTTPS but the warning still exists, and in the future will become bigger as browser support for HTTP will be dropped. ( chrome will require all sites to work over HTTPS ) 




Mixed Content: The page at https://mydomain/test.html was loaded over HTTPS, but requested an insecure image http://whateverdomain/test222.jpg. This content should also be served over HTTPS.


for example a correct page: https://ofercet.github.io/fetchpoc/secure.html
