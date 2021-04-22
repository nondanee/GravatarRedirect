const mirror = [
    'cdn.v2ex.com/gravatar/',
    'sdn.geekzu.org/avatar/',
    'dn-qiniu-avatar.qbox.me/avatar/',
    'gravatar.loli.net/avatar/',
]

chrome.webRequest.onBeforeRequest.addListener(
    details => ({
        redirectUrl: details.url.replace(
            /\/\/\w*\.?gravatar\.com\/avatar\//,
            mirror[3]
        )
    }),
    {
        urls: ['*://*.gravatar.com/*'],
    },
    ['blocking']
)