const twitterBaseUrl = 'https://twitter.com/intent/tweet?text=';

export default function share(title, shareURL, fbImg, twImg, hashTag, FBmessage = '') {
  var twImgText = twImg ? ` ${twImg.trim()} ` : ' ';
  return function(network, extra = '') {
    var twitterMessage = `${extra}${title}${twImgText}${hashTag}`;
    var shareWindow;
    if (network === 'twitter') {
      shareWindow = twitterBaseUrl + encodeURIComponent(twitterMessage + ' ') + shareURL;
    } else if (network === 'email') {
      shareWindow = 'mailto:?subject=' + encodeURIComponent(title) + '&body=' + shareURL;
    }

    if (network != 'facebook') {
      window.open(shareWindow, network + 'share', 'width=640,height=320');
    } else {
      shareWindow = facebookBaseUrl + shareURL + fbImgQry;
      if (FB) {
        FB.ui({
          method: 'share_open_graph',
          action_type: 'og.likes',
          action_properties: JSON.stringify({
            object: {
              'og:url': shareURL,
              'og:title': title,
              'og:description': FBmessage,
              'og:image': fbImg
            }
          })
        }, function(response) {
          console.log(response)
        });
      }
    }
  }
}