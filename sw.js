self.addEventListener('fetch', function (event) {
  var url = event.request.url;
  console.log('inside fetch for: ' + url);
  if (url.indexOf('http://') != 0)
    return; // do nothing is it's over https.....

  //if a HTTP resource requested, request instead for the same resource over HTTPS
  var newurl = url.replace('http://', 'https://');
  console.log('fetching instead: ' + newurl);
  event.respondWith(fetch(newurl));
  console.log('after responded with: ' + newurl);
})