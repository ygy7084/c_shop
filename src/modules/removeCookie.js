/* global document, browser  */
export default function removeCookie(name) {
  console.log(document.cookie);
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}
