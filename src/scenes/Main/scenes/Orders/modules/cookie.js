function set(cname, cvalue, exdays = 365) {
  if (!cvalue) { return remove(cname); }
  let d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function remove(cname) {
  let d = new Date();
  d.setTime(d.getTime() - 1000);
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=;" + expires + ";path=/";
}
function get(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
export {
  set,
  remove,
  get,
};
