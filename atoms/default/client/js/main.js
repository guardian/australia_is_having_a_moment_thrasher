var el = document.createElement('script');
el.src = '<%= atomPath %>/app.js';
document.body.appendChild(el);

if (window.resize) {
  const html = document.querySelector('html')
  const body = document.querySelector('body')

  html.style.overflow = 'hidden'
  html.style.margin = '0px'
  html.style.padding = '0px'

  body.style.overflow = 'hidden'
  body.style.margin = '0px'
  body.style.padding = '0px'
}

if (
  window.frameElement &&
  window.frameElement.classList.contains("interactive-atom-fence")
) {
  var embedhtml = document.querySelector("html");
  var embedbody = document.querySelector("body");
  embedbody.classList.add("ge-liveblog");
  embedhtml.style.overflow = "hidden";
  embedhtml.style.padding = "0";
  embedhtml.style.margin = "0";
  embedbody.style.overflow = "hidden";
  embedbody.style.padding = "0";
  embedbody.style.margin = "0";
  setTimeout(() => {
    window.resize();
  }, 100);
}

window.fbAsyncInit = function() {
    FB.init({
      appId            : '180444840287',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.10'
    });
    FB.AppEvents.logPageView();
};
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));