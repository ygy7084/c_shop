if (typeof _izooto !== 'undefined') throw Error('Duplicate Pixel Found !!');

const Izooto = function (c) {
  const a = this;
  a.throwError = function (a) {
    throw Error(a);
  };
  a.log = function (b) {
    a.debug == 1 && console.log(b);
  };
  a.checkAlternates = function () {
    typeof window._izAlternate !== 'object' ?
      a.log('No alternate implementations found') :
      Object.keys(_izAlternate).map((b, d) => {
        Object.keys(a).map((d, c) => {
          d === b && (a[d] = _izAlternate[b]);
        });
      });
  };
  a.checkBrowser = function () {
    let a = navigator.userAgent.toLowerCase();
    parseFloat(navigator.appVersion);
    parseInt(navigator.appVersion, 10);
    let d = '',e,c;
    if ((e = a.indexOf('opr/')) != -1) {
      var f = 'Opera';
      var g = a.substring(e + 4);
    } else {
      (e = a.indexOf('opera')) != -1 ?
      (f = 'Opera', g = a.substring(e + 6), (e = a.indexOf('version')) != -1 && (g = a.substring(e + 8))) :
      (e = a.indexOf('msie')) != -1 ?
        (f = 'Microsoft Internet Explorer', g = a.substring(e + 5)) :
        (e = a.indexOf('crios')) != -1 ?
        (f = 'Other', a.substring(e + 6), g = d = '40') :
        (e = a.indexOf('chrome')) != -1 ?
        (f = 'Chrome', g = a.substring(e + 7), /(.*?)wv\)/.test(a) && (f = 'Other', g = d = '41')) :
        (e = a.indexOf('safari')) != -1 && (/mac/.test(a) || /ipad|iphone|ipod/.test(a)) ?
        (f = 'Safari', g = a.substring(e + 7), (e = a.indexOf('version')) != -1 && (g = a.substring(e + 8))) :
        (e = a.indexOf('firefox')) != -1 ?
        (f = 'Firefox', g = a.substring(e + 8)) :
        (f = 'Other', g = '1');
    }
    (c = g.indexOf(';')) != -1 && (g = g.substring(0, c));
    (c = g.indexOf(' ')) != -1 && (g = g.substring(0, c));
    a = parseInt('' + g, 10);
    isNaN(a) && (g = '' + parseFloat(navigator.appVersion), a = parseInt(navigator.appVersion, 10));
    if (d == '40' || d == '41')
      a = d;
    return f + '-' + a + '-' + g;
  };
  a.checkIfSafari = function () {
    if (a.deviceType != 1) return 0; const b = a.checkBrowser().split('-'); return b[0] == 'Safari' &&
b[1] >= 7 ? 1 : 0;
  }; a.incog = function (a) { const b = window.RequestFileSystem || window.webkitRequestFileSystem; if (b) return b(window.TEMPORARY, 100, (b) => { a(!1); }, (b) => { a(!0); }); a(!1); }; a.checkIfChrome = function () { const b = a.checkBrowser().split('-'); return b[0] == 'Chrome' && b[1] >= 42 ? 1 : 0; }; a.checkIfFirefox = function () { const b = a.checkBrowser().split('-'); return a.deviceType != 1 && b[0] == 'Firefox' && b[1] >= 48 ? 1 : b[0] == 'Firefox' && b[1] >= 44 ? 1 : 0; }; a.checkSubDomain = function () {
    let b = window.location.href; b.substr(b.lastIndexOf('?') +
1).indexOf('action=prompt') !== -1 ? (b = 1, a.overridePromptType()) : b = 0; return b;
  }; a.isTablet = function (a) { if (/android/.test(a)) { if (!1 === /mobile/.test(a)) return !0; } else if (!0 === /ipad/.test(a)) return !0; return !1; }; a.isMobile = function () {
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent ||
navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent ||
navigator.vendor || window.opera).substr(0, 4));
  }; a.getDevice = function () { navigator.userAgent.toLowerCase(); return a.isTablet() ? 2 : a.isMobile() ? 3 : 1; }; a.getOS = function () { const a = navigator.userAgent.toLowerCase(); return /windows phone/i.test(a) ? 6 : /android/i.test(a) ? 4 : /ipad|iphone|ipod/.test(a) && !window.MSStream ? 5 : /linux/i.test(a) ? 2 : /macintosh|mac os x/i.test(a) ? 3 : /windows|win32/i.test(a) ? 1 : 7; }; a.getBrowser = function () {
    let b = a.checkBrowser().split('-'),
      d = b[2]; return b[0] == 'Chrome' ? [1, d] : b[0] == 'Safari' ? [2, d] : b[0] ==
'Firefox' ? [3, d] : b[0] == 'Opera' ? [4, d] : [5, d];
  }; a.activePrompt = function () { if (a.locationProtocol === 'http:' || a.locationProtocol === 'https:' && a.isSdkHttps != 1 && a.isSubDomain != 1) try { window.addEventListener('beforeunload', (b) => { a.removeStorage('izpt'); document.cookie = 'izpt=1;path=/;' + a.cDomain + 'max-age=-30000;'; }), a.cookieLess ? a.setStorage('izpt', 1) : document.cookie = 'izpt=1;path=/;' + a.cDomain + 'max-age=300;'; } catch (b) {} }; a.getSessionId = function () {
    return 'iz-' + Math.random().toString(36).substr(2, 16) + (65536 * (1 + Math.random()) |
0).toString(16).substring(1);
  }; a.setSession = function () { return a.getSessionId(); }; a.setEnrPixel = function () {
    if (a.izootoStatus == 1) {
      try {
        let b = ''; b = (new Date()).getTimezoneOffset(); const d = 's=1&pid=' + a.client + '&izid=' + a.unid + '&btype=' + a.browser + '&dtype=' + a.deviceType + '&tz=' + (b + 330) + '&bver=' + a.browserVer + '&os=' + a.os + '&pt=' + a.promptType + a.optinParam; iframe = document.createElement('IFRAME'); iframe.setAttribute('src', a.setEnrUrl + '?' + d); iframe.style.width = '0px'; iframe.style.height = '0px'; iframe.style.border = '0px'; iframe.setAttribute('visibility',
          'hidden'); iframe.style.display = 'none'; document.body != null ? document.body.appendChild(iframe) : document.head.appendChild(iframe);
      } catch (e) { a.log('izooto:: unable to set ENR ' + e); }
    }
  }; a.setCookie = function (b, d) { let e = new Date(); e.setTime(e.getTime() + 1296E8); e = 'expires=' + e.toUTCString(); document.cookie = b + '=' + d + ';path=/;' + a.cDomain + e; }; a.removeStorage = function (b) {
    b == 'iztoken' && (b = a.tokenCookie); document.cookie = b + '=1;path=/;expires=Thu, 2 Aug 1991 20:47:11 UTC;'; a.cDomain != '' && (document.cookie = b + '=1;path=/;' + a.cDomain +
'expires=Thu, 2 Aug 1991 20:47:11 UTC;'); localStorage.removeItem(b);
  }; a.getCookie = function (a) { a += '='; for (let b = decodeURIComponent(document.cookie).split(';'), e = 0; e < b.length; e++) { for (var c = b[e]; c.charAt(0) == ' ';)c = c.substring(1); if (c.indexOf(a) == 0) return c.substring(a.length, c.length); } return ''; }; a.setStorageWithTime = function (b, d) {
    let e = { izstatus:a.tokenExpire, izpt:300, izDl:a.repeatPromptDelay }; e.izDl *= 60; if (void 0 != e[b]) {
      const c = new Date(); e = c.setTime(c.getTime() + 1E3 * e[b]); e = { v:d, t:e }; e = encodeURIComponent(JSON.stringify(e));
      localStorage.setItem(b, e);
    } else localStorage.setItem(b, d);
  }; a.getStorageWithTime = function (b, d, e) { if (void 0 == e.t || e.t == '' || isNaN(e.t)) return d; d = new Date(); d.setTime(d.getTime()); if ((e.t - d) / 1E3 > 0) return void 0 != e.v ? e.v : ''; a.removeStorage(b); return ''; }; a.setStorage = function (b, d) { b == 'iztoken' && (b = a.tokenCookie); d = encodeURIComponent(d); a.cookieLess ? b != a.tokenCookie ? a.setStorageWithTime(b, d) : a.isLocalStorage && localStorage.setItem(b, d) : (a.isLocalStorage && localStorage.setItem(b, d), a.setCookie(b, d)); }; a.getStorage =
function (b) {
  if (b == 'iztoken') return b = a.tokenCookie, localStorage.getItem(b) === null ? a.getCookie(b) : decodeURIComponent(localStorage.getItem(b)) || a.getCookie(b) ? decodeURIComponent(localStorage.getItem(b)) || a.getCookie(b) : ''; let d = ''; try { d = localStorage.getItem(b), d = d === null ? '' : decodeURIComponent(d); } catch (f) { d = ''; } if (d == '') return a.getCookie(b); try {
    let e = JSON.parse(d),
      c = a.getStorageWithTime(b, d, e); return c != '' ? c : a.getCookie(b);
  } catch (f) {} return d;
}; a.loadDesign = function (a, d) {
    if (typeof a !== 'object') return '';
    for (const b in a)a.hasOwnProperty(b) && (d = d.replace(new RegExp('{{--' + b + '--}}', 'g'), a[b])); return d;
  }; a.overridePromptType = function () {
    let b = window.location.href.substr(window.location.href.lastIndexOf('?') + 1),
      d = b.indexOf('izpt='); d !== -1 && (b = b.substr(d + 5, 1), b === '0' || b === '1' || b === '2') && (a.promptType = Number.parseInt(b));
  }; a.detectAutoPrompt = function () {
    let b = !0; if (Object.prototype.toString.call(window._izq) === '[object Array]') {
      for (let d = 0; d < window._izq.length; d++) {
        const e = window._izq[d]; if (Object.prototype.toString.call(e) ===
'[object Array]') for (let c = 0; c < e.length; c++) { const f = e[c]; Object.prototype.toString.call(f) === '[object Object]' && f.hasOwnProperty('auto_prompt') && (b = f.auto_prompt); }
      }a.autoPrompt = !1 === b ? !1 : !0; a.autoPrompt || (a.promptType = 2, a.dialogDesign = '', a.processQueue());
    }
  }; a.client = void 0 !== c.client ? c.client : a.throwError('iZooto:: Configuration parameter not found (client)'); a.sourceOrigin = void 0 !== c.sourceOrigin ? c.sourceOrigin : a.throwError('iZooto:: Configuration parameter not found (sourceOrigin)');
  a.domainRoot = void 0 !== c.domainRoot ? c.domainRoot : a.throwError('iZooto:: Configuration parameter not found (domainRoot)'); a.isSdkHttps = void 0 !== c.isSdkHttps ? c.isSdkHttps : a.throwError('iZooto:: Configuration parameter not found (isSdkHttps)'); a.manifestName = void 0 !== c.manifestName ? c.manifestName : a.throwError('iZooto:: Configuration parameter not found (manifestName)'); a.serviceWorkerName = void 0 !== c.serviceWorkerName ? c.serviceWorkerName : a.throwError('iZooto:: Configuration parameter not found (serviceWorkerName)');
  a.swScope = void 0 !== c.swScope ? c.swScope : ''; a.webPushId = void 0 !== c.webPushId ? c.webPushId : ''; a.webServiceUrl = void 0 !== c.webServiceUrl ? c.webServiceUrl : ''; a.mobileAllowed = void 0 !== c.mobileAllowed ? c.mobileAllowed : 1; a.desktopAllowed = void 0 !== c.desktopAllowed ? c.desktopAllowed : 1; a.preDomainCheck = void 0 !== c.preDomainCheck ? c.preDomainCheck : 0; a.setEnr = void 0 !== c.setEnr ? c.setEnr : 1; a.izootoStatus = void 0 !== c.izootoStatus ? c.izootoStatus : 1; a.httpsNoRoot = void 0 !== c.httpsNoRoot ? c.httpsNoRoot : 0; a.cookieLess = void 0 !==
c.cookieLess ? c.cookieLess : 0; a.promptType = void 0 !== c.promptFlow ? c.promptFlow : 0; a.fullPopUp = void 0 !== c.fullPopUp ? c.fullPopUp : 0; a.isSubDomain = a.checkSubDomain(); a.isReSubscribe = 0; a.isMsgReciever = 0; a.locationPrompt = void 0 !== c.locationPrompt ? c.locationPrompt : 0; a.debug = void 0 !== c.debug ? c.debug : 0; a.isShopify = void 0 !== c.isShopify ? c.isShopify : 0; a.locationProtocol = document.location.protocol; a.setEnrUrl = a.locationProtocol + '//events.izooto.com/index.php'; a.sendEnrUrl = a.locationProtocol + '//events.izooto.com/api.php';
  a.promptDelay = void 0 !== c.promptDelay ? c.promptDelay : 0; a.optInCloseDelay = void 0 !== c.optInCloseDelay ? c.optInCloseDelay : 60; a.repeatPromptDelay = void 0 !== c.repeatPromptDelay ? c.repeatPromptDelay : 0; a.tokenExpire = void 0 !== c.tokenExpire ? c.tokenExpire : 86400; a.allowedDomain = void 0 !== c.allowedDomain ? c.allowedDomain : ''; a.cDomain = void 0 !== c.cDomain ? c.cDomain : ''; a.tokenFilter = void 0 !== c.tokenFilter ? c.tokenFilter : 0; a.izTags = void 0 !== c.tagsEnabled ? c.tagsEnabled : 0; a.izTagLink = a.locationProtocol + '//events.izooto.com/tags.php';
  a.supURL = a.locationProtocol + '//sw.izooto.com/sup.php'; a.eventsURL = a.locationProtocol + '//sw.izooto.com/ev.php'; a.hidePopup = void 0 !== c.hidePopup ? c.hidePopup : !0; a.bkey = 0; a.bkeySent = 0; a.pluginStatus = 0; a.autoPrompt = !0; a.calledManually = !1; a.deviceType = a.getDevice(); a.browserArr = a.getBrowser(); a.browser = a.browserArr[0]; a.browserVer = a.browserArr[1]; a.os = a.getOS(); a.isLocalStorage = 'localStorage' in window && window.localStorage !== null; a.serviceWorker = a.domainRoot + a.serviceWorkerName; a.manifest = a.domainRoot + a.manifestName;
  a.isSafari = a.checkIfSafari(); a.isChrome = a.checkIfChrome(); a.isFirefox = a.checkIfFirefox(); a.unid = a.setSession(); a.httpContentLoaded = 0; a.incognitoChecked = 0; a.isChrome && (parseInt(a.browserVer) > 61 || parseInt(a.browserVer) > 60 && a.deviceType != 1) && (a.isSdkHttps == 0 && a.promptType == 0 || a.isSdkHttps && a.locationProtocol == 'http:' || a.isSubDomain) && (a.promptType = 1); a.iconWhite = void 0 != c.poweredByIcon && c.poweredByIcon === 0 ? '' : '<img class="izbranding" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAAAPCAMAAAAMJKc9AAAAjVBMVEUAAACKiIiKiIiKiIiKiIiKiIiSjoKKiIiKiIiKiIiKiIj//vWKiIiKiIiKiIj///////////////////+KiIj///////////////////////////r////////////////////////////////////////////41h342CX30QP42Sz///+KiIj42i730gTHrF7KAAAAK3RSTlMAd+4i3WYQzJkzVQW7qkSSZ1wQpYh8HIZx7jwt+dHFrE/gup5DNyQ+2Y1xoV/zZQAAAkdJREFUSMfdk+tymzAQhY9k7hhs7hhsE+NL2u6m7/943cVpTeN2phmnM51+PwRIMPo4u8L/S/OER1iwkuCPCJYQDAv+AncQrR9TWQChdd+j4gCe/wv7LdFYP6iCpdF/9cOQPfgWsFHqsE3hWsuhmTLwlmz9VxUdfI9DkZuM2IVCwjbDlUuR5U8T5/eopNZ1OUXgeDbymBdiZAO4vHA5QsqurKB0FqGdpRIhKdUZN84bEsYcSkW7jq7gLf0q/22vlEgSwOMoKUPrRCaJJB44xmWg9PWt0DFAcusVNogcRNbDjHwgYXOCEDc9snXWbqlSy9NlmuxOWsEdrWKg7rr4LhVhGUxBG9/4SemLgzKpBKxoNjC3AgXiasMkwM+sSdEd+n0DoaA9UB9k8vgaW4WVjAVaLefpXuV7Kh4vS+NwGFkoUyoJFN/M2xapfFcGNnpjsidhryotbQA0dIgRb6hoD1TFRKt2Q1m/o6HviNqK6HSvMvWKxO1zFLID7ZWUI1XRPAx7Zt4rYiVDyBZz6j0pzWs+O0D2OwNPenumQ0UDcBLFI2UYaa2ZHe9VricIKDkElyLgaDuoiq7YFLidIBb0XYgvZidoS8Ku936oxFvKptsCyOkwUCu+tMUg0zvqgUpWPoRUkpyjxW/w/PVTPO2/x0j7vL7kF6IuX9HY0abPjzRKKitUuiZVw0cQsMEblSIHPr+8XFXGNV1BS0qNgoRNjJ4ow4GEIcZfoc0geF+eIdRNd1lNVEB2HJqL+sk1hzw3NeKqKFr8e3wDHdZCDjBsROUAAAAASUVORK5CYII=" style="vertical-align: middle !important; padding-right: 3px !important;">';
  a.iconBlue = '<img class="izbranding" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAAAPCAMAAAAMJKc9AAAAb1BMVEUAAACKiIiKiIiKiIgNUqANUqAMUaELUKGKiIiKiIiKiIiKiIiKiIgLUKKKiIgNUqAMUaEMUaCKiIiKiIiKiIgNUqCKiIgNUqANUqAMUqAMUKKKiIgNUqAMUqANUqD32yn/9xD67Bv63yUMUqCKiIg7jdR8AAAAI3RSTlMAd+4iyeGrat1mzJkzIBGML/RVu6qZREMKFLmIX1B8+HVcPEBtRIgAAAJSSURBVEjH3ZTpbtswEISHtO6Lkqz7sJNw3/8Zu0sathK3QAP3R5EBJHKxOj6NhsSPVRBNeEUnEnX4K+VnOStiZaenrrXh+Kim+vso/MxCp99BSYAqe6a3LHMnCe02Bk7LjmdNf0DBWcm3ZkVBFTIN6HZISA9ItaZCOQ+qM+nsjgKVVVQwnCMi9yWhsAQ3M2ZrL8Z6RXjS3IS/Rxl0mtKAPKl0WxGdmEjnSOmUUouBUu5gTU6FPrjSoluF+fD4yIpiX409pm3b9tA2JZuwxyNE5bYJ7Gat1PPuqmNWVnQdUFHbrYVOWtW1bA8SlRKwZnJVkSige2SFFNoEra5wUOyM8ek1y+iIGnnnKI2AkYx3KZahR9zwsEwHV0Tn3BmtMpV1a8YMIoeSu6l4A/X4QTmz6qLL8Unj3ZeS38FDzfFxRRjxIWYEC/+6OuDJXvtq+YJyc6Wi86oSKloNkXPFBzRTx9hi4PvWXLc4Kg6EpKk9SuTyE/C5t+EkmFtgF+eMRGlyTTHoC4rLiubQUltQAsnKQK2giB+KKvUpK5IeFKRxUL1Y0VLijhLZRuwPbO+xQru71iwHGuffE4pfQewBFaCVARIixYC+owfgsYKI/LVgXjxWUHNMbekj0cxSLDaQRWNNYI3zYaoFoBHakWeva6DhUDmUqMTb2w3F1ByPizGmrLkhkcaFcxI3DFbfwmu4CvGyclJfd1u2//16fff7Stzf95WLG7nrwhTObhMqEd2i9c8V9ZKLj+v1Q6rxgrp3MjVXJrq4DG19FDvXjAw7VzP+L/0Cmos+Ujvzdw8AAAAASUVORK5CYII=">';
  a.locale = c.locale !== 'undefined' && c.locale !== '' ? c.locale : 'en'; a.closeMsg = void 0 !== c.closeMsg && c.closeMsg !== '' ? c.closeMsg : 'CLOSE'; a.subscribedMsg = void 0 !== c.subscribedMsg && c.subscribedMsg !== '' ? c.subscribedMsg : 'Subscribed'; a.alreadySubscribedMsg = void 0 !== c.alreadySubscribedMsg && c.alreadySubscribedMsg !== '' ? c.alreadySubscribedMsg : "You've already subscribed to notifications."; a.clickOnAllowMsg = void 0 !== c.clickOnAllowMsg && c.clickOnAllowMsg !== '' ? c.clickOnAllowMsg : 'Click On allow to subscribe to notifications';
  a.blockedMsg = void 0 !== c.blockedMsg && c.blockedMsg !== '' ? c.blockedMsg : 'Blocked'; a.alreadyDeniedMsg = void 0 !== c.alreadyDeniedMsg && c.alreadyDeniedMsg !== '' ? c.alreadyDeniedMsg : "You've blocked notifications from this site."; a.thanksForSubscribingMsg = void 0 !== c.thanksForSubscribingMsg && c.thanksForSubscribingMsg !== '' ? c.thanksForSubscribingMsg : 'Thank you for subscribing to push notifications!'; a.promptDesign = void 0 !== c.promptDesign ? c.promptDesign : {}; a.siteUrl = void 0 !== c.siteUrl ? c.siteUrl : ''; a.promptDesign.poweredbysrc =
'https://www.izooto.com/?utm_source=referral&utm_medium=PoweredBy&utm_campaign=' + encodeURIComponent(a.siteUrl); a.defaultDialogDesign = '<meta charset="utf-8"><style>.iz_container{text-align: center; display:table-cell; vertical-align:middle;}.iz_overlay{text-shadow: 0px 0px !important;position:fixed;top:0px;left:0px;width:100%;height:100%;background:rgba(0, 0, 0, 0.32); z-index: 9999999;}.iz_content{font-family:arial;position:absolute;top:50%;left:50%;width:25%;transform:translate(-50%,-50%);background:#fff;border-radius:10px 10px 0px 0px;border-radius:10px;text-align: center; display:inline-block;}.iz_btn{margin-left:auto!important; margin-right:auto!important; text-align: center;margin-top: 3%!important; background: #6FCBCF; color: #fff; margin-bottom: 4%!important; padding: 10px!important; border-radius: 4px; width: 140px; border: none; font-size: 13px; letter-spacing: 1px; box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); transition: all .3s ease-out; cursor: pointer;}.iz_btn:hover{box-shadow:0 5px 11px 0 rgba(0,0,0,0.18),0 4px 15px 0 rgba(0,0,0,0.15);cursor:pointer;}.iz_head_txt{color:white!important;line-height: 24px; font-size: 18px;}.iz_top{padding-bottom: 10px!important;border-radius:10px 10px 0px 0px;background: #5D5D5D; color: #fff; padding: 30px!important;}.iz_txt{margin-top: 15px; font-size: 14px; color: #FF9595;}@media only screen and (max-width: 600px) and (min-height: 300px){.iz_content{background: #fff none repeat scroll 0 0; border-radius: 10px; display: inline-block; left: 50%; position: absolute; text-align: center; top: 50%; transform: translate(-50%, -50%); width: 90%!important;}.iz_head_txt{color:white!important;line-height: 24px;font-size: 120%;}.iz_txt{color: #ff9595; font-size: 100%; margin-top: 15px;}}@media only screen and (max-width: 800px){.iz_content{background: #fff none repeat scroll 0 0; border-radius: 10px; display: inline-block; left: 50%; position: absolute; text-align: center; top: 50%; transform: translate(-EUNITNO50%, -50%); width: 65%;}.iz_head_txt{color:white!important;line-height: 24px; font-size: 120%;}.iz_txt{color: #ff9595; font-size: 100%; margin-top: 15px;}}</style><div class="iz_overlay"> <div class="iz_container"> <div class="iz_content"> <center> <div class="iz_top"> <div class="iz_head_txt">' +
a.thanksForSubscribingMsg + '</div><div style="text-align: right !important;position: absolute !important;    right: 0px !important;margin-top: 5px !important;"><a href="' + a.promptDesign.poweredbysrc + '" target="_blank" style="cursor: pointer !important;">' + a.iconWhite + '</a></div></div><div class="iz_btn" onclick="_izooto.openPopup();">' + a.closeMsg + '</div> </center> </div></div></div>'; a.dialogDesign = void 0 !== c.dialogDesign && c.dialogDesign != '' ? c.dialogDesign : a.defaultDialogDesign; a.branding = void 0 !==
c.branding ? c.branding : 1; a.httpsBranding = "<style type='text/css'>.iz-https-branding{position:fixed!important;z-index:2147483646;padding:1px 14px;background:#000;text-align:center;color:#fff;font-family:Arial;font-size:12px;font-weight:400;opacity: .65;top:0!important;right:0!important;border-radius:2px}.iz-https-branding img{padding-left:2px;display:inline-block;vertical-align:middle;max-width:60px!important}.iz-branding-content span{vertical-align:middle;color:#fff}.iz-https-branding:hover{visibility:visible}@media only screen and (max-width: 600px){.iz-https-branding{top:auto !important;right:0px !important;left:0px !important;bottom:28%;width:auto !important}}@media only screen and (max-width: 400px){.iz-https-branding{bottom:33%}}</style><div class='iz-https-branding'><div class='iz-branding-content'><a href='" +
a.promptDesign.poweredbysrc + "' target='_blank' style='text-decoration: none;'><span>Notifications Powered By </span><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAYCAMAAACRH25gAAAATlBMVEUAAAD///////////////////7////////////////////////////////////////////////////////31Bn42Sv42Sz////42Sr20ABMp0RkAAAAF3RSTlMAkxoQhUGtTjMkZ+rgoW7NuVz0eVknb7zWT80AAAEOSURBVDjL7ZHbbsQgDEQBQwjhEpLddrb//6O1jRKlah+q7VPVjhSN7HBsbMwf1W35AQy05+ECrPOzcAYuzaulOaroO/BchC5JAwcEDH1exWK/wOvlsF9MWLa4IhOXCkGTKehcO+IRXDSaaa53ktsAjgsB2MPpme1mLIB8wbcOyTi5ttZIwMZviL0xRxEQd7HApobcmD9QN0E0aTDgjCqblAoTbAd3t/BmBRlIsJ7w2FcwB5wY6GPEJFee9OiGOmBJ1g8wr/Ht8TJgGThQcqZjIlcQPXsq2BiWz1LCCQOdp70/FCZgwVA0eYxDu7osQVqL6vl6Te31ruab81Y1G+enKj+JXR/y5nmZGvzrV+kdgQgTu1UUeUkAAAAASUVORK5CYII=' width='60'></a></div></div>";
  a.overlay = void 0 !== c.overlay ? c.overlay : 0; a.overlayMessage = void 0 !== c.overlayMessage ? c.overlayMessage : "Click on 'allow' to subscribe to notifications"; a.httpsOverlay = "<style>.iz-arrow {z-index: 999999!important;position: fixed;top: 20%; left:18%; width:100%}.iz-branding {color:white;font-size: larger;position:absolute;top:30%; left:25%; z-index: 999999!important;}.iz-arrow img{transform: rotate(180deg);}@media screen and (max-width:600px){.iz-arrow {width: 100%;position: fixed;top: auto;bottom:35%;left: 65%;border-radius: 0px;}.moz-transfer{width: 100%;position: fixed;top: auto;bottom: 30%;left: 65% !important; border-radius: 0px; }.moz-transfer img{transform: rotate(180deg) !important;}.iz-arrow img {transform: rotate(0deg);}.iz-branding {color:white;font-size: larger;position:fixed;top:40%;left:17%;width:100%}}</style><div id='izooto_desktop_overlay' style='z-index: 999999999;position: fixed;height: 100%;top: 0px;left: 0px;width: 100%;background: rgba(0, 0, 0, 0.89);' onclick=\"_izooto.displayOverlay();\"><div class='izoverlay-container'><div class='iz-arrow' id='iz_arrow'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABaCAMAAAD+feq9AAAAmVBMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzP///8xMTH4+Pjk5OQ/Pz9LS0s5OTnLy8ujo6NgYGDt7e15eXmtra1paWm4uLiampqCgoLFxcXAwMCRkZFxcXFSUlLc3NzW1tbR0dFYWFiLi4sD3OOnAAAAGHRSTlMAE/TVrOkwCd+5lH5zoVCKZB3FWUYlzTud0PxJAAADs0lEQVRYw62ZCZaiUAxFGQRBEJwlDCKDCM66/8V1vmX3ocyntCu+BdyT85KXj1EZaoZuD1zPHPeVz0mDu77Ys7n6GapvQEvGYujOPlG16ejwTZplO96YzVVHk7sPx+JwjB9oq+eafS53agvudR2dq/0medQ8cZZMm/venbtpwiCMmi2SH2Czz6x3gpy4PgWoMKrq4+reP3uq8riu6FtShsFdeXO7gpDumCzufCDm7HAOHsp39d0Ka8Djzux2uahonQknjKHJs8FCSB0F/xTuilhw/TkrFqLcLA1a3LQWXMtVOeU6Gg5DGba5l3u99lJhyMNhWG0R2+I2G2GDo3JdqPPgG3ediHJNjgsDkbQo+KZTIdydciLsaBQblliu5nBCPDIoNrhkWO6AY+4UsdkzNq8RO+RgPVFt/oQN95i1HhdbEOw6ZlY7wpbdwuBJAutzWuYitgwIFifBZb3BGN70mRreEOtx4tCjg4BYzIM+54RXx+wSa6MMB4FjrafBqiLWNtixEdPaa0SwW6YH4wnAnlBz9MBXeB7EF4LdxWCYHOwQIxbK5mDAoZoGxA0pNuUW63cV67CKtTBh1NkVLFQOdoBRkI6Bx6EuDUgkM8vsVx/XwZpQLzHoLAumABvarwy0GYc6xn6dSbF7AFdhJoFaUOHmUpgWHIgFJ66xc0syBfmVGa++DdCQdh2Y7VJ8mbE33N1cYwuaA+4QmBpkpF0lc3UrY1m7KmZmlf5EkoMdwFBhqSeGgE+l27D6PNWXfHJVbKojGdiS2y3FBdhKvg6dz1P3mC0ulTpQAHh8XyWPgcmcLDoDUQLWWOG+Bjv6HNp9hblg48vHB0vV6Xap6QjwN2F+xadAJeoijHpUE7q10xWApT9r4XR+WUq1JrZKpXUs6AUIrdoCyQ+vU5Y8KQbU8KdbRrxNWypXkk+iPPquNMNK/U5jVV8DSKoWJtwe0uCFos2ro8TUQgtueTuer6BnUenojYvO5hy8rfQIYEwJp8uF97RLcMxm75wHhAv7/C1oie3XlwTBcOFx4JiYb9+10IXjSxfCLc6zPX9/UwkXYuICvUJA778W7XIiLr2nH6B5/Ysj1/jLhe7ZP4hAkdl/7YIh8tth7knMvkugPBcuV5z9X67u8VC4sKPQBgNleb9+tVypCxUJ1H9qJpZuEZFALZYMqHABsdemK1A8F9bhX+heXKTJ7DNcIJdYluY9RGWNgBYkUJx795cL5DFhytOFC5nkWMp3oSNQzL9UaKD4mlo/Qv8A93Luwo0zJDcAAAAASUVORK5CYII=' /></div><div class='iz-branding'><div class='iz-text' style='padding-bottom:5px;font-family:'Lato', poppins,sans-serif;'>" +
a.overlayMessage + "</div><div class='iz-powered-text'><a href='" + a.promptDesign.poweredbysrc + "' target='_blank' style='cursor: pointer !important;'>" + a.iconBlue + '</a></div></div></div>'; a.promptDesign.message = void 0 !== a.promptDesign.message ? a.promptDesign.message : 'Click on allow to subscribe to notifications'; a.promptDesign.subMessage = void 0 !== a.promptDesign.subMessage ? a.promptDesign.subMessage : 'Stay updated with the latest happenings on our site'; a.promptDesign.icon = void 0 !== a.promptDesign.icon ? a.promptDesign.icon :
    '//cdnimg.izooto.com/default/6.png'; a.promptDesign.btn1Txt = void 0 !== a.promptDesign.btn1Txt ? a.promptDesign.btn1Txt : 'Later'; a.promptDesign.btn2Txt = void 0 !== a.promptDesign.btn2Txt ? a.promptDesign.btn2Txt : 'Allow'; a.promptMessage = a.promptDesign.message; a.promptSubMessage = a.promptDesign.subMessage; a.promptIcon = a.promptDesign.icon; a.promptBtn1Txt = a.promptDesign.btn1Txt; a.promptBtn2Txt = a.promptDesign.btn2Txt; a.optInDesignType = void 0 !== c.optInDesignType && a.promptType == 1 ? c.optInDesignType : ''; a.optinParam = a.optInDesignType !=
'' ? '&optin=' + a.optInDesignType : ''; a.tokenCookie = void 0 !== c.tokenCookie && c.tokenCookie !== '' ? c.tokenCookie : 'iztoken'; a.isWelcomeNotification = void 0 !== c.welcomeNotification.status ? c.welcomeNotification.status : 0; a.welcomeTitle = void 0 !== c.welcomeNotification.title ? c.welcomeNotification.title : ''; a.welcomeBody = void 0 !== c.welcomeNotification.body ? c.welcomeNotification.body : ''; a.welcomeIcon = void 0 !== c.welcomeNotification.icon ? c.welcomeNotification.icon : ''; a.welcomeUrl = void 0 !== c.welcomeNotification.url ?
    c.welcomeNotification.url : ''; a.welcomeShowAfter = void 0 !== c.welcomeNotification.showAfter ? c.welcomeNotification.showAfter : 0; a.welcomeTimeout = void 0 !== c.welcomeNotification.clickTimeout ? c.welcomeNotification.clickTimeout : 0; a.enableEnricher = 0; a.enricherSrc = ''; a.enableLM = 0; a.lmSrc = '//tags.crwdcntrl.net/c/9222/cc.js?ns=_cc9222'; try {
    void 0 !== c.services && (c.services.hasOwnProperty('LM') && (a.enableLM = void 0 !== c.services.LM.status ? c.services.LM.status : 0), c.services.hasOwnProperty('enricher') && (a.enableEnricher =
void 0 !== c.services.enricher.status ? c.services.enricher.status : 0, a.enricherSrc = void 0 !== c.services.enricher.src ? c.services.enricher.src : ''));
  } catch (b) {} try {
    if (void 0 != window._izootoModule || window.is_wp == 1 || is_wp == 1) {
      if (a.pluginStatus = void 0 !== c.pluginStatus ? c.pluginStatus : 1, a.pluginStatus == 1) {
        if (void 0 != window._izootoModule && window._izootoModule.isMagento == 1) {
          const n = window._izootoModule; void 0 != n.isSdkHttps && n.isSdkHttps == 1 && (a.serviceWorker = '/izooto/assets/sw', a.manifest = '/izooto/assets/manifest', a.swScope =
'/');
        } else a.serviceWorker = a.domainRoot + '/?izooto=sw', a.manifest = a.domainRoot + '/?izooto=manifest';
      }
    }
  } catch (b) {}a.startENR = function () { a.locationProtocol != 'https:' || a.isChrome != 1 && a.isFirefox != 1 || a.isSubDomain != 1 ? a.setEnr == 1 && (a.setEnrPixel(), a.log('izooto:: enr called')) : a.log('izooto:: No Enr'); }; a.injectPixel = function (b) { if (typeof b === 'string' && b !== '') { const d = document.createElement('img'); d.style.height = '0px'; d.style.width = '0px'; d.src = b; a.log('Pixel injected : ' + b); } }; a.loadLM = function () {
    if (a.enableLM == 1 &&
a.lmSrc != '') { const b = (function (a) { function b(a) {} return function (d, e, c) { try { const k = document.createElement('script'); k.type = 'text/javascript'; k.id = d; k.onerror = b; c && (k.onload = c); a.appendChild(k); k.src = e; } catch (m) {} }; }(document.head || document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.body)); a.isSubDomain || b('LOTCC_9222', a.lmSrc, () => { _cc9222.bcp(); }); }
  }; a.loadEnricher = function () {
    if (a.enableEnricher == 1 && a.enricherSrc != '' && !a.isSubDomain) {
      try {
        let b = document.body ? document.body :
            document.head,
          d = document.createElement('script'); d.id = 'enricher'; d.src = a.enricherSrc; b.appendChild(d);
      } catch (e) {}
    }
  }; a.getBaseTagLink = function (b) {
    let d = !1; try { var e = JSON.parse(a.getStorage('iztoken')); d = !0; } catch (f) {} let c = ''; !0 === d && void 0 !== e.keys && (void 0 !== e.keys.auth && (c += '&auth=' + e.keys.auth), void 0 !== e.keys.p256dh && (c += '&pk=' + e.keys.p256dh)); return a.izTagLink + '?pid=' + a.client + '&izid=' + a.unid + '&bKey=' + b + '&btype=' + a.browser + '&dtype=' + a.deviceType + '&bver=' + a.browserVer + '&os=' + a.os + '&pt=' + a.promptType +
a.optinParam + c;
  }; a.addTag = function (b, d) { a.injectPixel(d + ('&tag=' + b + '&operation=add_tag')); }; a.removeTag = function (b, d) { a.injectPixel(d + ('&tag=' + b + '&operation=remove_tag')); }; a.addProperty = function (b, d, e) { a.injectPixel(e + ('&name=' + b + '&value=' + d + '&operation=add_property')); }; a.isJsonString = function (a) { try { JSON.parse(a); } catch (d) { return !1; } return !0; }; a.filterEventJson = function (a, d) {
    try {
      let b = {},
        c = 0; Object.keys(a).map((e) => {
        if (c <= 63 && e.trim() != '' && e.length <= 32) {
          if (newKey = e.toLowerCase(), newKey = newKey.trim(),
            e = a[e], typeof e === 'string' && e != '' && d == 'add')e = e.trim(), e.length <= 32 && e != '' && (b[newKey] = e, c++); else if (typeof e === 'object') {
            if (e instanceof Array && e.length >= 1) {
              let k = [],
                h = 0,
                f; for (f in e) { let l = e[f]; typeof l === 'number' && l != null && h <= 63 && l.toString().length <= 32 ? (k.push(l), h++) : typeof l === 'string' && l.trim() != '' && h <= 63 && l.trim().length <= 32 && (l = l.trim(), k.push(l), h++); }k.length >= 1 && (b[newKey] = k, c++);
            }
          } else {
            typeof e === 'boolean' && d == 'add' ? (b[newKey] = e, c++) : typeof e === 'number' && d == 'add' && e.toString().length <= 32 &&
e != null && (b[newKey] = e, c++);
          }
        }
      }); return b;
    } catch (f) {} return !1;
  }; a.filterEv = function (a) {
    try {
      let b = {},
        e = 0; Object.keys(a).map((d) => { e <= 15 && d.trim() != '' && d.length <= 32 && (newKey = d.toLowerCase(), newKey = newKey.trim(), d = a[d], typeof d === 'string' && d != '' ? (d = d.trim(), d.length <= 32 && d != '' && (b[newKey] = d, e++)) : typeof d === 'boolean' ? (b[newKey] = d, e++) : typeof d === 'number' && d.toString().length <= 32 && d != null && (b[newKey] = d, e++)); }); return b;
    } catch (k) {} return !1;
  }; a.sendEventsData = function (b, d, e) {
    let c = a.getStorage('iztoken');
    c = a.getBrowserKeyFromToken(c); if (b === 'userp') { if (void 0 !== d.add && Object.keys(d.add).length >= 1) { var f = 'add'; var g = a.filterEventJson(d.add, f); } else if (void 0 !== d.remove && Object.keys(d.remove).length >= 1)f = 'remove', g = a.filterEventJson(d.remove, f); else { a.log('Invalid JSON format'); return; } if (!g) { a.log('Invalid Json Data'); return; }d = JSON.stringify(g); } else if (b === 'evt') {
      if (typeof d === 'string' && (d = d.toLowerCase(), d = d.trim(), d.search(' ')), typeof d === 'string' && d != '' || typeof d === 'number') {
        if (f = d, void 0 != e && Object.keys(e).length >= 1) {
          g =
a.filterEv(e); if (!g) { a.log('Invalid Json Data'); return; }d = JSON.stringify(g);
        }
      } else return;
    } else return; if (c != '') {
      c = a.eventsURL + '?pid=' + a.client + '&izid=' + a.unid + '&bKey=' + c + '&btype=' + a.browser + '&dtype=' + a.deviceType + '&bver=' + a.browserVer + '&os=' + a.os + '&pt=' + a.promptType + '&et=' + b + '&act=' + f; if (!(void 0 === e || void 0 != e && Object.keys(e).length < 1) || b != 'evt') if (a.isJsonString(d) && Object.keys(g).length >= 1)a.log('final obj :: ' + d), b = encodeURIComponent(d), c = c + '&val=' + b; else return; try {
        const h = document.createElement('img');
        h.style.height = '0px'; h.style.width = '0px'; h.src = c; a.log(h.src);
      } catch (m) { a.log('event failed'); }
    } else a.log('Invalid events data');
  }; a.syncQueue = function (b, d) {
    if (Object.prototype.toString.call(b) !== '[object Array]')a.log('Invalid _izq : ' + JSON.stringify(b, null, 4)); else if (b.length === 0)a.log('_izq is empty.'); else if (d === null) {
      window._izq.map((b, d) => {
        Object.prototype.toString.call(b) === '[object Array]' ? b[0] === 'register_callback' && typeof b[1] === 'function' && (a.userCallback = b[1], window._izq.splice(d,
          1)) : typeof b === 'object' ? b.hasOwnProperty('autoPrompt') && !1 === b.autoPrompt && (a.autoPrompt = !1, window._izq.splice(d, 1)) : Object.prototype.toString.call(b) === '[object Array]' ? b[0] === 'triggerPrompt' && (a.promptUser(), window._izq.splice(d, 1)) : Object.prototype.toString.call(b) === '[object Array]' && b[0] === 'updateSubscription' && (b[1] != 'subscribe' && b[1] != 'unsubscribe' || a.updateSubscription(b[1]), window._izq.splice(d, 1));
      });
    } else {
      for (let e = null, c = 0; c < b.length; c++) {
        if (e = b[c], Object.prototype.toString.call(e) === '[object Array]' &&
e[0] === 'triggerPrompt' && (a.promptUser(), window._izq.splice(c, 1)), Object.prototype.toString.call(e) === '[object Array]' && (e[0] === 'updateSubscription' ? (e[1] != 'subscribe' && e[1] != 'unsubscribe' || a.updateSubscription(e[1]), window._izq.splice(c, 1)) : e[0] === 'userProfile' ? (void 0 != e[1] && e[1] != '' && a.sendEventsData('userp', e[1]), window._izq.splice(c, 1)) : e[0] === 'event' && (void 0 != e[1] && (typeof e[1] === 'string' || typeof e[1] === 'number') && e[1].toString().trim().length <= 32 && (void 0 != e[2] && typeof e[2] === 'object' ? a.sendEventsData('evt',
            e[1], e[2]) : a.sendEventsData('evt', e[1])), window._izq.splice(c, 1))), Object.prototype.toString.call(e) !== '[object Array]' || e.length !== 2 || typeof e[0] !== 'string')a.log('Invalid queue item at index : ' + c + ' : ' + JSON.stringify(b, null, 4)); else {
          const f = e[0]; e = e[1]; const g = a.getBaseTagLink(d); if (a.izTags !== 1) { a.log('tags disabled'); break; } switch (f) {
            case 'add_tag': if (typeof e !== 'string' || e === '') { a.log('Invalid payload at index (add_tag) : ' + c + ' : ' + JSON.stringify(e, null, 4)); continue; }window._izq.splice(c, 1); a.addTag(e,
              g); break; case 'remove_tag': if (typeof e !== 'string' || e === '') { a.log('Invalid payload at index (remove_tag) : ' + c + ' : ' + JSON.stringify(e, null, 4)); continue; }window._izq.splice(c, 1); a.removeTag(e, g); break; case 'add_property': if (typeof e !== 'object' || typeof e.name !== 'string' || typeof e.value !== 'string' && typeof e.value !== 'number' && typeof e.value !== 'boolean' || e.value === '') { a.log('Invalid payload at index (add_tag) : ' + c + ' : ' + JSON.stringify(e, null, 4)); continue; }window._izq.splice(c, 1); a.addProperty(e.name, e.value,
              g); break; default: a.log('Invalid operation at index : ' + c + ' : ' + f);
          }
        }
      }
    }
  }; a.setupQueue = function () {
    Object.prototype.toString.call(window._izq) !== '[object Array]' && (window._izq = []); window._izq.push = function (b) {
      if (Object.prototype.toString.call(b) === '[object Array]' && b[0] === 'triggerPrompt')a.promptUser(); else if (Object.prototype.toString.call(b) === '[object Array]' && b[0] === 'updateSubscription')b[1] != 'subscribe' && b[1] != 'unsubscribe' || a.updateSubscription(b[1]); else if (Object.prototype.toString.call(b) === '[object Array]' &&
b[0] === 'userProfile') void 0 != b[1] && b[1] != '' && a.sendEventsData('userp', b[1]); else if (Object.prototype.toString.call(b) === '[object Array]' && b[0] === 'event') void 0 != b[1] && (typeof b[1] === 'string' || typeof b[1] === 'number') && b[1].toString().trim().length <= 32 && (void 0 != b[2] && typeof b[2] === 'object' ? a.sendEventsData('evt', b[1], b[2]) : a.sendEventsData('evt', b[1])); else { let d = a.getStorage('iztoken'); d = a.getBrowserKeyFromToken(d); if (d === '')a.log('Token is empty.'); else { const e = []; e.push(b); a.syncQueue(e, d); } }
    };
  }; a.getBrowserKeyFromToken =
function (b) { let d = !0; try { JSON.parse(b); } catch (e) { d = !1; } return d ? a.getSubscriptionKey(b) : b; }; a.processQueue = function () { if (!a.isSubDomain) { let b = a.getStorage('iztoken'); b = a.getBrowserKeyFromToken(b); a.syncQueue(window._izq, null); b === '' ? a.setupQueue() : void 0 !== window._izq && (a.syncQueue(window._izq, b), a.setupQueue()); } }; a.createWelcomeNotification = function () {
    if (a.isWelcomeNotification === 1 && a.welcomeIcon != '' && a.welcomeTitle != '' && a.welcomeBody != '') {
      const b = new Notification(a.welcomeTitle, { icon:a.welcomeIcon,
        body:a.welcomeBody,
        tag:'welcome' }); b.onclick = function () { a.welcomeUrl != '' ? (b.close(), window.open(a.welcomeUrl, '_blank')) : b.close(); }; a.welcomeTimeout > 0 && setTimeout(() => { b.close(); }, a.welcomeTimeout);
    }
  }; a.showWelcomeNotification = function (b) {
    if (a.isWelcomeNotification === 1 && a.welcomeUrl != '' && a.welcomeIcon != '' && a.welcomeTitle != '' && a.welcomeBody != '') {
      let d = !1; try { var e = JSON.parse(b); d = !0; } catch (h) {} let c = ''; if (!0 === d) {
        if (c = '&bKey=' + a.getSubscriptionKey(b), void 0 !== e.keys && void 0 !== e.keys.p256dh) {
          c += '&auth=' +
e.keys.auth, c += '&pk=' + e.keys.p256dh;
        } else { a.isSdkHttps == 1 && a.createWelcomeNotification(); return; }
      } else c = '&bKey=' + b; try {
        let f = new XMLHttpRequest(),
          g = 'pid=' + a.client + '&btype=' + a.browser + c + '&ref=izwp'; f.open('POST', a.locationProtocol + '//api.izooto.com/wn/welcomepush.php', !0); f.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); f.onreadystatechange = function () { f.readyState == 4 && f.status == 200 && a.log(f.responseText); }; f.send(g);
      } catch (h) { a.log('No welcome Notification'); }
    }
  }; a.callUserCallback =
function (b, d) {
  if (typeof a.userCallback === 'function') {
    let e = {}; d && b != 'already_granted' ? (e = { response:'subscribed', statuscode:1 }, a.userCallback(e, !1)) : (b == 'already_granted' ? e = { response:'already subscribed', statuscode:2 } : b == 'denied' ? e = { response:'blocked', statuscode:3 } : b == 'already_denied' ? e = { response:'already blocked', statuscode:4 } : b == 'browser' ? e = { response:'browser not supported', statuscode:5 } : b == 'promptclose' ? e = { response:'prompt closed', statuscode:6 } : b == 'unsubscribed' && (e = { response:'unsubscribed', statuscode:7 }),
      Object.keys(e).length !== 0 && a.userCallback(e));
  }
}; a.sendEnrHit = function (b, d, e) {
    if (b == 'already_granted') if (a.bkeySent == 0)a.bkeySent = 1; else return; let c = a.unid; try {
      const f = document.createElement('img'); f.style.width = '0px'; f.style.height = '0px'; a.locationProtocol == 'https:' ? ht = 1 : ht = 0; let g = ''; g = (new Date()).getTimezoneOffset(); const h = 's=0&pid=' + a.client + '&ht=' + ht + '&izid=' + c + '&btype=' + a.browser + '&dtype=' + a.deviceType + '&tz=' + (g + 330) + '&bver=' + a.browserVer + '&os=' + a.os + '&pt=' + a.promptType + a.optinParam; if (void 0 ===
e) {
        if (b == 'bKey') {
          var m = d,
            l = JSON.parse(m); d = a.getSubscriptionKey(m); Object.keys(l).length > 1 ? f.src = a.sendEnrUrl + '?' + h + '&' + b + '=' + d + '&auth=' + l.keys.auth + '&pk=' + l.keys.p256dh : f.src = a.sendEnrUrl + '?' + h + '&' + b + '=' + d; a.callUserCallback(b, !0);
        } else f.src = a.sendEnrUrl + '?' + h + '&' + b + '=' + d;
      } else {
        m = e; c = 0; try { l = JSON.parse(m), e = a.getSubscriptionKey(m), Object.keys(l).length > 1 && (c = 1); } catch (p) {}f.src = c ? a.sendEnrUrl + '?' + h + '&' + b + '=' + d + '&bKey=' + e + '&auth=' + l.keys.auth + '&pk=' + l.keys.p256dh : a.sendEnrUrl + '?' + h + '&' + b + '=' + d + '&bKey=' +
e;
      }a.log(f.src); b == 'allowed' && void 0 !== e ? a.showWelcomeNotification(m) : b == 'bKey' && a.showWelcomeNotification(m); b != 'allowed' && b != 'already_granted' || void 0 === e ? a.callUserCallback(b, !1) : (a.setStorage('iztoken', m), a.processQueue(), a.callUserCallback(b, !0));
    } catch (p) { a.log('izooto:: ' + p); } if (b == 'prompted' || b == 'divShow')a.activePrompt(), a.repeatPromptDelay != 0 && a.setRepeatPromptDelay(a.repeatPromptDelay), a.removeStorage('iztoken'); b == 'divClosed' && a.optInCloseDelay != 0 && a.setRepeatPromptDelay(a.optInCloseDelay);
  };
  a.getSubscriptionKey = function (b) { b = JSON.parse(b).endpoint; return a.isFirefox == 1 ? b.substring(48) : b.substring(40); }; a.requestSafariPermissions = function () { window.safari.pushNotification.requestPermission(a.webServiceUrl, a.webPushId, { url:window.location.href }, (b) => { b.permission === 'granted' ? (b = b.deviceToken, a.bkey = b, a.sendEnrHit('allowed', '1', b), a.log('Granted Key= ' + b)) : b.permission === 'denied' && a.sendEnrHit('denied', '1'); }); }; a.checkSafariPermission = function () {
    if (a.webPushId != '' && a.webServiceUrl != '') {
      if (a.getStorage('izstatus') ==
3)a.callUserCallback('unsubscribed', !1); else {
        let b = ''; 'safari' in window && 'pushNotification' in window.safari && (b = window.safari.pushNotification.permission(a.webPushId), b.permission === 'default' ? (a.log('Prompted Safari'), a.sendEnrHit('prompted', '1'), a.promptType == 2 ? a.calledManually && a.requestSafariPermissions() : a.promptDelay != 0 ? setTimeout(() => { a.requestSafariPermissions(); }, a.promptDelay) : a.requestSafariPermissions()) : b.permission === 'granted' ? (b = b.deviceToken, a.bkey = b, a.sendEnrHit('already_granted',
          1, b), a.log('Already Granted & key= ' + b)) : b.permission === 'denied' && (a.sendEnrHit('already_denied', 1), a.log('Denied')));
      }
    }
  }; a.closePopWindow = function () { if (self == top && a.isSubDomain) try { setTimeout(() => { window.opener.postMessage(JSON.stringify({ k:'popclose', v:1 }), '*'); window.close(); }, 1E3); } catch (b) { log('iZooto::unable to close popup'); } }; a.brandingScroll = function () { document.getElementById('izooto-branding') != null && (window.pageYOffset > 30 || document.body.scrollTop > 30) && a.closeHttpsBranding(); }; a.openHttpsBranding =
function () {
  if (!a.isSubDomain && a.branding != 0) {
    if (a.deviceType != 1) try { window.addEventListener('scroll', a.brandingScroll); } catch (e) {} try {
      let b = document.getElementsByTagName('body')[0],
        d = document.createElement('div'); d.setAttribute('id', 'izooto-branding'); d.innerHTML = a.httpsBranding; b.appendChild(d);
    } catch (e) {}a.brandingDisable();
  }
}; a.openHttpsOverlay = function () {
    if (!a.isSubDomain && a.overlay != 0) {
      if (a.deviceType != 1) try { window.addEventListener('scroll', a.brandingScroll); } catch (k) {} try {
        if (a.isFirefox === 1) {
          if (a.deviceType ==
3) { let b = a.httpsOverlay; b = b.replace("class='iz-arrow'", "class='izooto-arrow moz-transfer'"); a.httpsOverlay = b.replace('top:40%;', 'top:80%;'); } else parseInt(a.browserVer) > 56 ? (a.httpsOverlay = a.httpsOverlay.replace('left:18%;', 'left:20%;'), a.httpsOverlay = a.httpsOverlay.replace('left:25%;', 'left:27%;')) : (a.httpsOverlay = a.httpsOverlay.replace('left:18%;', 'left:10%;'), a.httpsOverlay = a.httpsOverlay.replace('left:25%;', 'left:17%;'));
        } else {
          a.isChrome === 1 && (parseInt(a.browserVer) > 62 && a.isMobile && (a.httpsOverlay =
''), a.os === 3 && (a.httpsOverlay = a.httpsOverlay.replace('left:18%;', 'left:28%;'), a.httpsOverlay = a.httpsOverlay.replace('left:25%;', 'left:34%;')));
        } let d = document.getElementsByTagName('body')[0],
          e = document.createElement('div'); e.setAttribute('id', 'izooto-branding'); e.innerHTML = a.httpsOverlay; d.appendChild(e);
      } catch (k) {}a.brandingDisable();
    }
  }; a.closeHttpsBranding = function () {
    if (!a.isSubDomain) {
      try { document.getElementById('izooto-branding').remove(); } catch (b) { a.log('Error-Removing-Div' + b); } if (a.deviceType != 1) {
        try {
          window.removeEventListener('scroll',
            a.brandingScroll);
        } catch (b) {}
      }
    }
  }; a.brandingDisable = function () {
    if (a.branding === 0) {
      try {
        let b = document.getElementsByClassName('izbranding'),
          d; for (d in b)b[d].style.display = 'none';
      } catch (e) {}
    }
  }; a.openDialog = function () {
    try {
      let b = document.getElementsByTagName('body')[0],
        d = document.createElement('div'); d.setAttribute('id', 'izmiddle-box'); d.innerHTML = a.dialogDesign; b.appendChild(d);
    } catch (e) {}a.brandingDisable(); a.promptType == 1 ? a.sendEnrHit('divShow', 1) : !0;
  }; a.optinDialog = function () {
    a.getStorage('izDl') || setTimeout(() => { a.openDialog(); },
      a.promptDelay);
  }; a.setRepeatPromptDelay = function (b) { b !== 0 && (b *= 60, a.cookieLess ? a.setStorage('izDl', 1) : document.cookie = 'izDl=1;path=/;max-age=' + b + ';' + a.cDomain); }; a.initialiseState = function () {
    'showNotification' in ServiceWorkerRegistration.prototype ? Notification.permission === 'denied' ? a.log('The user has blocked notifications.') : 'PushManager' in window ? navigator.serviceWorker.ready.then((b) => {
      b.pushManager.getSubscription().then((b) => { b && a.sendSubscriptionToServer(b); }).catch((b) => {
        a.log('Error during getSubscription()',
          b);
      });
    }) : a.log('Push messaging is not supported.') : a.log('Notifications are not supported.');
  }; a.subscribe = function () {
    navigator.serviceWorker.ready.then((b) => {
      b.pushManager.subscribe({ userVisibleOnly:!0 }).then((b) => { a.isFirefox == 1 && a.ag != 1 && (a.ffoxGranted != 1 && a.isSubDomain && top != self ? a.sendMessage('allowed', 1, 'parent') : a.ffoxHttps == 1 && Notification.permission != 'default' && a.closeHttpsBranding(), a.log('Granted & Subscribe')); return a.sendSubscriptionToServer(b); }).catch((b) => {
        a.closeHttpsBranding();
        Notification.permission === 'denied' ? (a.ffoxHttps == 1 ? a.closeHttpsBranding() : a.subscriptionType != 'default' || a.isSubDomain || a.ad == 1 || a.sendEnrHit('denied', 1), a.isFirefox == 1 && a.ad != 1 && (a.subscriptionType != 'default' || a.isSubDomain ? a.isSubDomain && (self != top ? a.sendMessage('denied', '1', 'parent') : (a.sendMessage('denied', '1', 'opener'), a.closePopWindow())) : a.sendEnrHit('denied', '1')), a.log('Permission for Notification is denied')) : (Notification.permission === 'default' && (a.closeHttpsBranding(), a.subscriptionType != 'default' ||
a.isSubDomain ? a.promptType === 1 && a.isSubDomain && self == top ? a.sendMessage('promptclose', 1, 'opener') : a.isFirefox && self != top && a.isSubDomain && a.sendMessage('promptclose', 1, 'parent') : a.callUserCallback('promptclose', !1)), a.closePopWindow(), a.log('Unable to subscribe to push' + b));
      });
    });
  }; a.popupNotice = function (a) { try { document.getElementById('dynamic_iz').innerHTML = '<center>' + a + '</center>'; } catch (d) {} }; a.sendSubscriptionToServer = function (b) {
    b = JSON.stringify(b); a.bkeySent == 0 && (a.subscriptionType != 'default' || a.isSubDomain ?
      self == top && a.isSubDomain ? (a.setStorage('iztoken', b), a.promptType == 0 ? (a.sendMessage('bKey', b, 'opener'), a.popupNotice(a.subscribedMsg)) : a.ag == 1 ? (a.sendMessage('already_granted', 1, 'opener', b), a.popupNotice(a.alreadySubscribedMsg)) : (a.sendMessage('allowed', 1, 'opener', b), a.popupNotice(a.subscribedMsg)), a.closePopWindow()) : a.ag == 1 ? a.sendMessage('already_granted', 1, 'parent', b) : !0 : (a.ag == 1 && a.getStorage('iztoken') == '' && a.updateSubscription('subscribe', b, !0), a.ag == 1 ? a.sendEnrHit('already_granted', '1', b) : a.sendEnrHit('allowed',
        '1', b)), a.bkeySent = 1);
  }; a.subFrame = function () {
    let b = a.sourceOrigin + '?action=prompt'; b = b + '&izpt=' + a.promptType; try { izFrame = document.createElement('IFRAME'), izFrame.setAttribute('src', b), izFrame.setAttribute('id', 'izSubFrame'), izFrame.style.width = '0px', izFrame.style.height = '0px', izFrame.style.border = '0px', izFrame.setAttribute('visibility', 'hidden'), izFrame.style.display = 'none', document.body != null ? document.body.appendChild(izFrame) : document.head.appendChild(izFrame), a.log('izSubFrame set'); } catch (d) {
      a.log('izooto:: unable to subFrame' +
d);
    }
  }; a.closeDialog = function (b) { try { b === 1 ? b = 'divAllowed' : b = 'divClosed', document.getElementById('izmiddle-box').remove(), a.promptType === 1 ? a.sendEnrHit(b, 1) : a.sendEnrHit('msgclose', 1); } catch (d) { a.log('Error-Removing-Div' + d); } }; a.crossDialog = function () { try { document.getElementById('izmiddle-box').remove(); } catch (b) { a.log('Error-Removing-Div' + b); } }; a.openPopup = function () {
    a.closeDialog(1); if (a.isSdkHttps && !a.autoPrompt && a.locationProtocol == 'https:')a.promptUser(); else {
      a.addMsgReciever(); let b = void 0 != window.screenLeft ?
          window.screenLeft : screen.left,
        d = void 0 != window.screenTop ? window.screenTop : screen.top,
        e = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
        c = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
        f = 200,
        g = 200,
        h = a.promptType; if (a.promptType === 1 || a.promptType == 2)h = 1, g = f = 500; b = e / 2 - f / 2 + b; d = c / 2 - g / 2 + d; a.hidePopup && a.promptType === 0 && (g = f = 100, b = d = 1E4); h = a.sourceOrigin +
'?action=prompt&izpt=' + h; a.fullPopUp == 1 && a.promptType != 0 ? window.open(h, 'iZooto Subscription') : window.open(h, 'iZooto Subscription', 'scrollbars=yes, width=' + f + ', height=' + g + ', top=' + d + ', left=' + b);
    }
  }; a.iscomplete = function () { a.docReady = document.readyState === 'complete'; a.docReady && (setTimeout(() => { a.overlay == 1 ? a.openHttpsOverlay() : a.branding == 1 && a.openHttpsBranding(); }, 100), clearInterval(a.complete)); }; a.displayElementsOnPrompt = function () { a.isChrome === 1 && (a.complete = setInterval(a.iscomplete, 100)); };
  a.pushSubscription = function (b, d) {
    if ('Notification' in window) {
      if (b == 'chrome') {
        try {
          navigator.permissions.query({ name:'notifications' }).then((b) => {
            if (b.state === 'prompt') {
              d === 'subDomain' ? a.promptType !== 0 ? self != top ? a.sendMessage('switchPrompt', 1, 'parent') : (a.popupNotice(a.clickOnAllowMsg), a.sendMessage('prompted', 1, 'opener'), a.deviceType != 1 && Notification.requestPermission().then((b) => { b === 'default' && a.closePopWindow(); })) : (console.log('Prompted Http'), a.sendMessage('prompted', 1, 'parent'), Notification.requestPermission().then((b) => {
                b ===
'default' && a.promptType === 0 && self != top && a.sendMessage('promptclose', 1, 'parent');
              })) : d === 'default' && (a.log('Prompted Https'), a.sendEnrHit('prompted', 1), a.locationPrompt && a.deviceType == 1 && navigator.geolocation.getCurrentPosition(() => {}), Notification.requestPermission(), a.isSubDomain || a.displayElementsOnPrompt()), b.onchange = function () {
                a.closeHttpsBranding(); b.state === 'granted' ? (d === 'subDomain' ? a.sendMessage('allowed', 1, 'parent') : d === 'default' && a.httpsNoRoot && (a.addMsgReciever(), a.subFrame()), a.log('Granted'),
                  a.deviceType != 1 && (a.subscribe(), a.log('chrome mobile subscribe'))) : b.state === 'denied' && (d === 'subDomain' ? (self == top ? a.sendMessage('denied', 1, 'opener') : a.sendMessage('denied', 1, 'parent'), a.popupNotice(a.blockedMsg), a.log('Denied'), a.closePopWindow()) : d === 'default' && a.sendEnrHit('denied', 1));
              };
            } else if (b.state === 'granted') {
              a.ag = 1; if (d === 'subDomain') { if (self != top) { if (!a.httpsNoRoot) { const c = a.getStorage('iztoken'); c != '' ? a.sendMessage('izag', c, 'parent') : a.sendMessage('izag', 1, 'parent'); }a.log('ag'); } } else {
                d ===
'default' && a.httpsNoRoot && (a.addMsgReciever(), a.subFrame());
              } a.deviceType != 1 && (a.subscribe(), a.log('chrome mobile ag subscribe'));
            } else b.state === 'denied' && (a.ad = 1, d === 'subDomain' ? (self == top ? a.sendMessage('izad', 1, 'opener') : a.sendMessage('izad', 1, 'parent'), a.popupNotice(a.alreadyDeniedMsg), a.closePopWindow()) : d === 'default' && a.sendEnrHit('already_denied', 1));
          });
        } catch (h) { log('Unable to read notification permissions'); } if (d == 'subDomain' && a.promptType != 0 && self != top && Notification.permission == 'default') return;
      } else if (b ==
'firefox') {
        if ('Notification' in window && typeof Notification.requestPermission === 'function') {
          if (Notification.permission === 'default') {
            var c = function (b) { b === 'granted' && (a.httpsNoRoot ? (a.addMsgReciever(), a.subFrame()) : a.sendMessage('allowed', 1, 'parent'), a.ffoxGranted = 1); a.closeHttpsBranding(); },
              k = function (b) { a.closeHttpsBranding(); a.log('Error while requesting permission : ' + b); },
              f = function () { g >= 46 ? Notification.requestPermission().then(c).catch(k) : Notification.requestPermission(c); }; if (d === 'subDomain') {
              var g = Number.parseInt(a.checkBrowser().split('-')[1]);
              try { if (a.promptType !== 0) { if (self != top) return a.sendMessage('switchPrompt', 1, 'parent'); a.popupNotice(a.clickOnAllowMsg); a.sendMessage('prompted', 1, 'opener'); } else a.ffox = 1, console.log('Prompted Http'), a.sendMessage('prompted', 1, 'parent'); f(); } catch (h) { a.log('Error occured : ' + h); }
            } else a.httpsNoRoot && f(), a.ffoxHttps = 1, a.isSubDomain || a.displayElementsOnPrompt(), a.sendEnrHit('prompted', 1);
          } else {
            Notification.permission === 'granted' ? (a.ag = 1, d === 'subDomain' ? self != top && (a.httpsNoRoot || (f = a.getStorage('iztoken'),
              f != '' ? a.sendMessage('izag', f, 'parent') : a.sendMessage('izag', 1, 'parent')), a.log('ag')) : a.httpsNoRoot && (a.addMsgReciever(), a.subFrame()), a.log('ag_cc')) : Notification.permission === 'denied' && (a.ad = 1, d === 'subDomain' ? (self == top ? a.sendMessage('izad', 1, 'opener') : a.sendMessage('izad', 1, 'parent'), a.popupNotice(a.alreadyDeniedMsg), a.closePopWindow()) : a.sendEnrHit('already_denied', 1), a.log('ad'));
          }
        } else a.log('This browser does not support desktop notification');
      } 'serviceWorker' in navigator ? a.isSubDomain || a.swScope == '' ?
        navigator.serviceWorker.register(a.serviceWorker).then(a.initialiseState).catch((b) => { a.isSubDomain || self != top || a.branding != 1 || a.closeHttpsBranding(); a.log(b); }) : navigator.serviceWorker.register(a.serviceWorker, { scope:a.swScope }).then(a.initialiseState).catch((b) => { a.isSubDomain || self != top || a.branding != 1 || a.closeHttpsBranding(); a.log(b); }) : a.log('Service workers are not supported in this browser.'); try { b == 'chrome' && a.deviceType != 1 ? a.log('chrome mobile subscribe ignore') : a.subscribe(); } catch (h) { a.log('Unable To Subscribe'); }
    }
  };
  a.sendMessage = function (b, d, c, k) { if (a.promptType != 2 || b != 'allowed' && b != 'denied')c === 'parent' ? (b = void 0 === k ? { k:b, v:d } : { k:b, v:d, bkey:k }, window.parent.postMessage(JSON.stringify(b), '*')) : (b = void 0 === k ? { k:b, v:d } : { k:b, v:d, bkey:k }, window.opener.postMessage(JSON.stringify(b), '*')); }; a.setIzstatus = function (b) {
    a.cookieLess ? a.setStorage('izstatus', b) : (date = new Date(), b == 2 && (a.tokenExpire *= 100), date.setTime(date.getTime() + 1E3 * a.tokenExpire), document.cookie = 'izstatus=' + b + ';path=/;max-age=' + a.tokenExpire + ';expires=' +
date.toGMTString() + ';' + a.cDomain);
  }; a.msgReciever = function (b) {
    let d = 0; b = JSON.parse(b); if (a.httpsNoRoot == 1 || a.promptType != 1 && a.promptType != 2) {
      b.k == 'allowed' ? (a.openDialog(), a.setStorage('izid', a.unid), a.sendEnrHit(b.k, b.v)) : void 0 != b.bkey ? (c = a.getStorage('iztoken'), a.setStorage('iztoken', b.bkey), a.httpsNoRoot ? a.ag == 1 ? (a.sendEnrHit(b.k, b.v, b.bkey), a.setIzstatus(1)) : a.sendEnrHit('allowed', b.v, b.bkey) : (a.sendEnrHit(b.k, b.v, b.bkey), a.isReSubscribe != 1 && c != '' || a.updateSubscription('subscribe', b.bkey))) : b.k ==
'bKey' ? (a.setStorage('iztoken', b.v), a.sendEnrHit(b.k, b.v), a.bkeySent = 1, a.processQueue()) : d = 1;
    } else if (void 0 != b.bkey) { var c = a.getStorage('iztoken'); a.setStorage('iztoken', b.bkey); a.processQueue(); a.sendEnrHit(b.k, b.v, b.bkey); b.k == 'allowed' ? a.removeStorage('izstatus') : a.isReSubscribe == 1 ? a.updateSubscription('subscribe', b.bkey) : c == '' && a.updateSubscription('subscribe', b.bkey, !0); } else b.k == 'switchPrompt' ? (a.optinDialog(), a.removeStorage('iztoken')) : b.k == 'denied' && a.setIzstatus(2); b.k == 'prompted' ? (a.getStorage('iztoken'),
      a.removeStorage('iztoken'), a.sendEnrHit(b.k, b.v)) : b.k == 'popclose' && a.deviceType != 1 ? a.callUserCallback('promptclose', !1) : b.k == 'promptclose' ? a.callUserCallback(b.k, !1) : b.k == 'denied' ? a.sendEnrHit(b.k, b.v) : b.k == 'izag' ? (d = a.getStorage('iztoken'), d != '' && a.bkeySent === 0 ? (a.sendEnrHit('already_granted', 1, d), a.bkeySent = 1) : b.v !== 1 ? (a.sendEnrHit('already_granted', 1, b.v), a.bkeySent = 1) : a.promptType == 1 ? a.optinDialog() : d == '' && a.callUserCallback('unsubscribed', !1), a.setIzstatus(1)) : b.k == 'izad' ? (a.sendEnrHit('already_denied',
      1), a.setIzstatus(2)) : d == 1 && a.sendEnrHit(b.k, b.v);
  }; a.setManifest = function () {
    try {
      let b = a.manifest,
        d = document.getElementsByTagName('head')[0],
        c = document.createElement('link'); c.rel = 'manifest'; c.href = b; d.appendChild(c); a.log('manifest');
    } catch (k) {}
  }; a.sendSubscriptionUpdate = function (b, d) {
    const c = a.supURL + '?pid=' + a.client + '&izid=' + a.unid + '&bKey=' + b + '&btype=' + a.browser + '&dtype=' + a.deviceType + '&bver=' + a.browserVer + '&os=' + a.os + '&pt=' + a.promptType + '&action=' + d; try {
      const k = document.createElement('img'); k.style.height =
'0px'; k.style.width = '0px'; k.src = c;
    } catch (f) {}a.log('SUP : ' + c);
  }; a.updateSubscription = function (b, c, e) {
    c = void 0 === c ? a.getStorage('iztoken') : c; c = a.getBrowserKeyFromToken(c); b == 'subscribe' ? (a.removeStorage('izstatus'), c != '' ? (a.sendSubscriptionUpdate(c, 0), a.isReSubscribe === 0 && void 0 === e ? a.callUserCallback('subscribed', !0) : a.isReSubscribe = 0) : (a.isReSubscribe = 1, a.isSafari || a.isSdkHttps == 1 && a.locationProtocol == 'https:' ? a.initIzooto() : (a.promptType = 1, a.openPopup()))) : b == 'unsubscribe' && c != '' && (a.setStorage('izstatus',
      3), a.sendSubscriptionUpdate(c, 2), a.callUserCallback('unsubscribed', !1));
  }; a.addMsgReciever = function () { if (a.isMsgReciever != 1) { a.isMsgReciever = 1; try { window.addEventListener('message', (b) => { if (a.sourceOrigin.indexOf(b.origin) > -1 && b.data) try { a.msgReciever(b.data); } catch (d) {} }); } catch (b) {} } }; a.startSubscription = function (b) {
    b == 'chrome' && (a.incognitoChecked = 1); if (a.locationProtocol === 'http:' || a.locationProtocol === 'https:' && a.isSdkHttps != 1 && a.isSubDomain != 1) {
      if (!a.getStorage('izpt') || a.isSubDomain) {
        var c =
a.getStorage('izstatus'); if (a.httpContentLoaded == 0 || a.promptType != 2) { a.addMsgReciever(); a.httpContentLoaded = 1; const e = a.getStorage('iztoken'); if (a.tokenFilter === 1) { if (e != '') { a.sendEnrHit('already_granted', 1, e); return; } } else if (c != '') { if (c == 1) { if (e == '') { a.callUserCallback('unsubscribed', !1); return; }a.callUserCallback('already_granted', !1); } else c == 2 ? a.callUserCallback('already_denied', !1) : c == 3 && a.callUserCallback('unsubscribed', !1); return; } if (e != '') { a.sendEnrHit('already_granted', 1, e); return; } }c = a.getStorage('iztoken');
        a.promptType === 1 ? c == '' && a.optinDialog() : a.promptType == 2 ? a.calledManually && c == '' && a.openPopup() : a.subFrame();
      }
    } else {
      a.isSubDomain === 1 && a.locationProtocol == 'https:' ? (a.setManifest(), setTimeout(() => { self == top && window.close(); }, 5E4), a.subscriptionType = 'subDomain', a.promptDelay != 0 && Notification.permission == 'default' && a.promptType == 0 && self != top ? setTimeout(() => { a.pushSubscription(b, a.subscriptionType); }, a.promptDelay) : a.pushSubscription(b, a.subscriptionType)) : a.locationProtocol == 'https:' && (c = a.getStorage('izstatus'),
        c == 3 && Notification.permission != 'default' ? a.callUserCallback('unsubscribed', !1) : a.httpsNoRoot == 1 && Notification.permission == 'granted' && c == 1 && a.getStorage('iztoken') != '' ? a.callUserCallback('already_granted', !1) : (a.setManifest(), a.subscriptionType = 'default', a.promptDelay != 0 && Notification.permission == 'default' && a.promptType == 0 ? setTimeout(() => { a.pushSubscription(b, a.subscriptionType); }, a.promptDelay) : a.promptType == 2 && Notification.permission == 'default' ? a.calledManually && a.pushSubscription(b, a.subscriptionType) :
          a.pushSubscription(b, a.subscriptionType)));
    }
  }; a.promptUser = function () { a.promptType != 2 && (a.promptType = 2, a.dialogDesign = '', a.processQueue()); a.calledManually = !0; a.initIzooto(); }; a.shopifyCart = function () {
    try { var b = document.createElement('img'); b.style.width = '0px'; b.style.height = '0px'; b.src = document.location.protocol + '//' + document.location.hostname + a.manifest; } catch (d) {}b = a.getStorage('cart'); void 0 !== b && b !== '' && (b.indexOf('=') != -1 && (b = b.split('=')[1]), b !== a.getStorage('iz_sh_cart') && b != 'ckout=' && (a.setCookie('iz_sh_cart',
      b), _izq.push(['event', 'add_to_cart', { cart_id:b }]), a.log('sent add to cart event : ' + b)));
  }; a.initIzooto = function () {
    if (a.izootoStatus === 1) {
      if (!a.isSubDomain && a.autoPrompt) {
        try { if (window.self != window.top) { a.processQueue(); return; } } catch (b) {} if (a.allowedDomain != '') { if (a.allowedDomain.indexOf(a.locationProtocol + '//' + document.location.hostname) < 0 && !a.isSubDomain) return; a.cDomain = a.allowedDomain.length > 1 && a.cDomain != '' ? 'domain=' + a.cDomain + ';' : ''; }a.enableEnricher == 1 && a.enricherSrc != '' && a.loadEnricher(); a.enableLM ==
1 && a.lmSrc != '' && a.loadLM(); a.isShopify != 1 || a.isSubDomain || a.shopifyCart(); a.detectAutoPrompt();
      }a.processQueue(); a.promptType != 1 || a.isSubDomain || !a.isSdkHttps || a.locationProtocol != 'https:' || Notification.permission != 'default' || a.calledManually || a.isSafari ? a.autoPrompt && !a.isSubDomain && !a.isReSubscribe && a.getStorage('izDl') && (a.locationProtocol == 'https:' && a.isSdkHttps && Notification.permission == 'default' || a.locationProtocol == 'http:' && !a.getStorage('iztoken')) || (a.isSafari ? document.readyState === 'complete' ?
        (a.log('DOM has already loaded, Checking safari in 0.30 seconds'), setTimeout(() => { a.checkSafariPermission(); }, 300)) : window.addEventListener('load', () => { a.log('DOM has loaded now, checking in 0.3 secs'); setTimeout(() => { a.checkSafariPermission(); }, 300); }, !1) : a.isChrome && 'serviceWorker' in navigator ? a.incognitoChecked == 1 ? a.startSubscription('chrome') : a.incog((b) => { b ? a.callUserCallback('browser', !1) : a.startSubscription('chrome'); }) : a.isFirefox && 'serviceWorker' in navigator ? a.startSubscription('firefox') :
        a.callUserCallback('browser', !1)) : (a.autoPrompt = !1, 'serviceWorker' in navigator && (a.isChrome || a.isFirefox) ? a.isChrome ? a.incog((b) => { b ? a.callUserCallback('browser', !1) : a.optinDialog(); }) : a.optinDialog() : a.callUserCallback('browser', !1));
    }
  }; a.loadOptin = function () {
    a.defaultOptinDesign = "<style>@-webkit-keyframes bounceInDown {60%,75%,90%,from,to{-webkit-animation-timing-function:cubic-bezier(.215, .61, .355, 1) !important;animation-timing-function:cubic-bezier(.215, .61, .355, 1);}0%{opacity:0 !important;-webkit-transform:translate3d(-50%, -3000px, 0) !important;transform:translate3d(-50%, -3000px, 0);}60%{opacity:1 !important;-webkit-transform:translate3d(-50%, 25px, 0) !important;transform:translate3d(-50%, 25px, 0);}75%{-webkit-transform:translate3d(-50%, -10px, 0) !important;transform:translate3d(-50%, -10px, 0);}90%{-webkit-transform:translate3d(-50%, 5px, 0) !important;transform:translate3d(-50%, 5px, 0);}to{-webkit-transform:translate3d(-50%, 0, 0) !important;transform:translate3d(-50%, 0, 0);}}@keyframes bounceInDown {60%,75%,90%,from,to{-webkit-animation-timing-function:cubic-bezier(.215, .61, .355, 1) !important;animation-timing-function:cubic-bezier(.215, .61, .355, 1);}0%{opacity:0 !important;-webkit-transform:translate3d(-50%, -3000px, 0) !important;transform:translate3d(-50%, -3000px, 0);}60%{opacity:1 !important;-webkit-transform:translate3d(-50%, 25px, 0) !important;transform:translate3d(-50%, 25px, 0);}75%{-webkit-transform:translate3d(-50%, -10px, 0) !important;transform:translate3d(-50%, -10px, 0);}90%{-webkit-transform:translate3d(-50%, 5px, 0) !important;transform:translate3d(-50%, 5px, 0);}to{-webkit-transform:translate3d(-50%, 0, 0) !important;transform:translate3d(-50%, 0, 0);}}.animated{-webkit-animation-duration:1s !important;animation-duration:1s !important;-webkit-animation-fill-mode:both !important;animation-fill-mode:both !important}.iz_prompt_containr{webkit-animation-name:bounceInDown !important;animation-name:bounceInDown !important;webkit-animation-duration:.8s !important;animation-duration:.8s !important;-webkit-animation-fill-mode:none !important;animation-fill-mode:none !important;position:fixed !important;top:0 !important;left:50% !important;background:#f9f9f9 !important;width:430px !important;height:auto !important;padding:0px 0 !important;border-radius:0 0 4px 4px !important;font-family:'Open Sans', sans-serif !important;z-index:9999999999 !important;box-shadow:0 0 30px rgba(0, 0, 0, .1) !important;transform:translate(-50%, 0) !important;border:1px solid #e6e6e6 !important;padding-bottom:6px !important}.iz_img_container{float:left !important;width:17% !important;height:100% !important;padding-left:10px !important}.izooto-dialog-text{overflow:hidden !important;text-overflow:ellipsis !important;word-wrap:break-word !important;color:#5a5a5a !important;font-size:14px !important;font-weight:700 !important;line-height:1.4em !important;margin-bottom:8px !important;display:-webkit-box !important;-webkit-line-clamp:2 !important;max-height:42px !important;-webkit-box-orient:vertical !important;text-align:left!important}.iz_text_container{width:80% !important;float:right !important;color:#fff !importanttext-align:left!important;}.iz_description{text-align:left!important;line-height:16px!important;word-wrap:break-word !important;text-overflow:ellipsis !important;max-height:32px !important;display:-webkit-box !important;-webkit-line-clamp:2 !important;-webkit-box-orient:vertical !important;overflow:hidden !important;word-wrap:break-word !important;color:#878484 !important;font-weight:400 !important;font-size:12px !important}.iz_title{word-wrap:break-word !important;margin-top:0 !important;margin-bottom:5px !important;font-size:22px !important;line-height:28px !important;font-weight:300 !important}.iz_buttons_container{padding-top:10px !important;padding-right:10px !important;text-align:right !important}.iz_allow_button{white-space:nowrap!important;background:#0e53a1 !important;display:inline-block !important;text-align:center !important;vertical-align:middle !important;line-height:1 !important;font-size:12px !important;letter-spacing:1px !important;min-width:85px !important;max-width:120px !important;cursor:pointer !important;background-image:none !important;color:#fff !important;padding:10px 5px !important;text-overflow:ellipsis !important;border-radius:4px !important;overflow:hidden!important;text-decoration:none !important}.iz_allow_button:hover{background:#2973c5 !important;color:#fff !important}.iz_block_button{margin:6px !important;white-space:nowrap!important;overflow:hidden!important;border:1px solid #bdbdbd !important;color:grey !important;display:inline-block !important;text-align:center !important;vertical-align:middle !important;line-height:1 !important;font-size:12px !important;letter-spacing:1px !important;min-width:85px !important;max-width:120px !important;cursor:pointer !important;background-image:none !important;background:0 0 !important;padding:10px 5px !important;text-overflow:ellipsis !important;border-radius:4px !important;text-decoration:none !important}.iz_block_button:hover{color:#fff !important;background:#bbb !important}.izbranding{width:auto!important;margin-right:8px !important;margin-bottom:-2px!important;float:right !important}.prompt_continer_pdng{width:100%!important;padding:10px 0px !important;float:left !important}.pwrd-img{padding-left:10px !important;float:left !important;margin-top:2.6% !important}.d-display{display:block !important}.m-display{display:none !important}@media screen and (max-width:500px){.d-display{display:none !important}.m-display{display:block !important}.izooto-dialog-text{font-size:15px !important;line-height:20px !important}.iz_description{line-height:16px!important;font-size:13px !important;max-height:36px !important}.iz_allow_button{font-weight:600!important;min-width:80px !important;max-width:100px !important;white-space:nowrap !important;overflow:hidden !important;font-size:12px !important}.iz_block_button{font-weight:600!important;min-width:80px !important;max-width:100px !important;white-space:nowrap !important;overflow:hidden !important;font-size:12px !important}.iz_prompt_containr{position:fixed !important;top:auto !important;bottom:0px !important;width:100% !important;padding:10px 0 !important;padding-bottom:4px !important}.iz_img_container{padding-left:10px !important}.iz_text_container{padding-right:10px !important;width:74% !important}}@media only screen and (max-width: 800px) and (min-width: 601px){.iz_prompt_containr{webkit-animation-name:bounceInDown !important;animation-name:bounceInDown !important;webkit-animation-duration:.8s !important;animation-duration:.8s !important;-webkit-animation-fill-mode:none !important;animation-fill-mode:none !important;position:fixed !important;top:0 !important;left:50% !important;background:#f9f9f9 !important;width:430px !important;height:auto !important;padding:0px 0 !important;border-radius:0 0 4px 4px !important;font-family:'Open Sans', sans-serif !important;z-index:9999999999 !important;box-shadow:0 0 30px rgba(0, 0, 0, .1) !important;transform:translate(-50%, 0) !important;border:1px solid #e6e6e6 !important;padding-bottom:6px !important}}</style><div><div class='iz_prompt_containr animated bounceInDown'><div class='prompt_continer_pdng izooto-inline'><div class='iz_img_container'><img class='iz_img' src='{{--icon--}}' width='60' height='60'></div><div class='iz_text_container'><div class='izooto-dialog-text'>{{--message--}}</div><div class='iz_description'>{{--subMessage--}}</div></div></div><div style='width: 100%;'><a href='{{--poweredbysrc--}}' target='_blank' class='pwrd-img iz-powered-by d-display'><img src='https://cdnimg.izooto.com/optin/120x20-grey.png' class='izbranding'></a><div class='iz_buttons_container'><a onclick='_izooto.openPopup();' href='javascript:void(0)' class='iz_allow_button'>{{--btn2Txt--}}</a><a onclick='_izooto.closeDialog();' href='javascript:void(0)' class='iz_block_button'>{{--btn1Txt--}}</a></div><a href='{{--poweredbysrc--}}' target='_blank' class='pwrd-img2 iz-powered-by m-display'><img src='https://cdnimg.izooto.com/optin/120x20-grey.png' class='izbranding'></a></div></div></div>";
    a.promptType === 1 && (a.dialogDesign = void 0 !== c.optInDesign && c.optInDesign != '' ? c.optInDesign : a.defaultOptinDesign, a.dialogDesign = a.loadDesign(a.promptDesign, a.dialogDesign));
  }; a.deviceType != 1 && a.izootoStatus == 1 ? (a.isChrome == 1 && parseInt(a.browserVer) > 62 && a.isSdkHttps && (a.branding = 0), a.izootoStatus = a.mobileAllowed == 1 ? 1 : 0) : a.deviceType == 1 && a.izootoStatus == 1 && (a.izootoStatus = a.desktopAllowed == 1 ? 1 : 0);
};
(function (c) { typeof c !== 'object' ? console.log('Izooto:: pixel configuration not found.') : (window._izq = window._izq || [], window._izooto = new Izooto(c), window._izooto.checkAlternates(), window._izooto.startENR(), window._izooto.loadOptin(), window._izooto.initIzooto()); }(window.izConfig));
