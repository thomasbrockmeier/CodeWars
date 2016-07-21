function domainName(url){
  //your code here
  array = url.replace('https://', '').replace('http://', '').replace('www.', '').split('.');
  return array[0];
}
