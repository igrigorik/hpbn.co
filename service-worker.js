/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","648e3dec564c87d40300e30abf7a464d"],["7a58c37113db4464699ec4f4646b5566.json","7a58c37113db4464699ec4f4646b5566"],["assets/5e7a4451127bdccbb9346f1c8744c0d9.js","5e7a4451127bdccbb9346f1c8744c0d9"],["assets/b708e9296b5e26f6bd725561648a1dda.css","b708e9296b5e26f6bd725561648a1dda"],["assets/diagrams/0220cddf71377e3527a891fc7730625e.svg","0220cddf71377e3527a891fc7730625e"],["assets/diagrams/030c9cc04270134bf2ca3f324980d2bc.svg","030c9cc04270134bf2ca3f324980d2bc"],["assets/diagrams/06b379fb58cbcab5530946c7059bfdef.svg","06b379fb58cbcab5530946c7059bfdef"],["assets/diagrams/084666d979c7b1507df8c538f5557ac9.svg","084666d979c7b1507df8c538f5557ac9"],["assets/diagrams/0a9df9be8ccde8d1f7b59514f74cc63b.svg","0a9df9be8ccde8d1f7b59514f74cc63b"],["assets/diagrams/0b2435f40a21288f26b55208d5a8c5b1.svg","0b2435f40a21288f26b55208d5a8c5b1"],["assets/diagrams/0b393b7cfa29c3479ab323f5e768c055.svg","0b393b7cfa29c3479ab323f5e768c055"],["assets/diagrams/0b9e45b8e052568d223d110681dbf7d3.svg","0b9e45b8e052568d223d110681dbf7d3"],["assets/diagrams/0c1f6cd359e0ec1180aaefdae072335d.svg","0c1f6cd359e0ec1180aaefdae072335d"],["assets/diagrams/13f28d4c3bcea2a8e4420b3278ebffaf.png","13f28d4c3bcea2a8e4420b3278ebffaf"],["assets/diagrams/19e54ddeee77adfc1c724b912f7b2694.svg","19e54ddeee77adfc1c724b912f7b2694"],["assets/diagrams/1a86ca9ae4a3c0e208ddf2f7fdc38b95.svg","1a86ca9ae4a3c0e208ddf2f7fdc38b95"],["assets/diagrams/1a8db2948eb2aad0dd47470c6c011a42.svg","1a8db2948eb2aad0dd47470c6c011a42"],["assets/diagrams/1d7d7e4dc5954b7ee5beb4312a660849.svg","1d7d7e4dc5954b7ee5beb4312a660849"],["assets/diagrams/2a9b83c6b43e961a41a847c3227dcad2.svg","2a9b83c6b43e961a41a847c3227dcad2"],["assets/diagrams/2aaa8d11ee7fd2d8a332e6dc68dc50ae.svg","2aaa8d11ee7fd2d8a332e6dc68dc50ae"],["assets/diagrams/33926d81cc07b922f40ddab7ab00c538.svg","33926d81cc07b922f40ddab7ab00c538"],["assets/diagrams/3394fb4dab93efdd5e49475316c9496f.svg","3394fb4dab93efdd5e49475316c9496f"],["assets/diagrams/37d7e7aded91fc715d7acdefb738793b.png","37d7e7aded91fc715d7acdefb738793b"],["assets/diagrams/3a5cce13fbae63d778029e6fceb51acf.svg","3a5cce13fbae63d778029e6fceb51acf"],["assets/diagrams/40348f35c6999c3ec04290d7177b0b45.svg","40348f35c6999c3ec04290d7177b0b45"],["assets/diagrams/44b1b32df5642e4f8f9c29e901020fbc.svg","44b1b32df5642e4f8f9c29e901020fbc"],["assets/diagrams/4603275cd98c93aeb8c46b1b1afa0ba6.svg","4603275cd98c93aeb8c46b1b1afa0ba6"],["assets/diagrams/47ba5b32e42cf5a06c3741d29ef9b94a.svg","47ba5b32e42cf5a06c3741d29ef9b94a"],["assets/diagrams/4b4766fd02af08ca2894b4cce8b44d85.svg","4b4766fd02af08ca2894b4cce8b44d85"],["assets/diagrams/4c8e63b20be72571abece33e8373575a.png","4c8e63b20be72571abece33e8373575a"],["assets/diagrams/4ee6145071a2992920f9681c069824a4.svg","4ee6145071a2992920f9681c069824a4"],["assets/diagrams/52d5ea44c0ddf990c5296ed2f69f3842.png","52d5ea44c0ddf990c5296ed2f69f3842"],["assets/diagrams/54af0f14aaabe6664274d81d60e38d40.svg","54af0f14aaabe6664274d81d60e38d40"],["assets/diagrams/57c4f352ad8414417d225ecb3665ad07.svg","57c4f352ad8414417d225ecb3665ad07"],["assets/diagrams/5bd4955aeda62721100af43140382c44.svg","5bd4955aeda62721100af43140382c44"],["assets/diagrams/61dc2bae615536155a5af7203ad191fd.png","61dc2bae615536155a5af7203ad191fd"],["assets/diagrams/69aa329ffbfae6fd0446de77623c93fb.svg","69aa329ffbfae6fd0446de77623c93fb"],["assets/diagrams/6c3d168f45e9a1b2965f790c5cd794f0.svg","6c3d168f45e9a1b2965f790c5cd794f0"],["assets/diagrams/6cb3c673b9ae40cfbd2a88ffa02bfc66.svg","6cb3c673b9ae40cfbd2a88ffa02bfc66"],["assets/diagrams/6ff953c25c7677f6bb49c6eb0b8737b1.svg","6ff953c25c7677f6bb49c6eb0b8737b1"],["assets/diagrams/7298dbfb0d0807b5978271b23db938fa.svg","7298dbfb0d0807b5978271b23db938fa"],["assets/diagrams/7414b52caa2f33a9e2feb40afdda9d9e.png","7414b52caa2f33a9e2feb40afdda9d9e"],["assets/diagrams/7695893485cffda5a58d1500a1dd2d7f.svg","7695893485cffda5a58d1500a1dd2d7f"],["assets/diagrams/773ecb15832075c0b56021aa3ad15233.svg","773ecb15832075c0b56021aa3ad15233"],["assets/diagrams/7791d95cced297a18105e4c33c4622a1.svg","7791d95cced297a18105e4c33c4622a1"],["assets/diagrams/80b1e53b1da56b72562364413befa137.svg","80b1e53b1da56b72562364413befa137"],["assets/diagrams/8199bc14fc3e692d5ea83792822d5def.png","8199bc14fc3e692d5ea83792822d5def"],["assets/diagrams/82966133085de5c9aed3229838166dc5.svg","82966133085de5c9aed3229838166dc5"],["assets/diagrams/84cf0f29175e4b11a2343e73105637c5.svg","84cf0f29175e4b11a2343e73105637c5"],["assets/diagrams/8696009a007572bf2da042cb6cef3ec1.png","8696009a007572bf2da042cb6cef3ec1"],["assets/diagrams/8c1bfcf5483aaa50b543906a6e96d284.svg","8c1bfcf5483aaa50b543906a6e96d284"],["assets/diagrams/8e6931bb40fc26c511ad15645e7b6113.svg","8e6931bb40fc26c511ad15645e7b6113"],["assets/diagrams/914c9d3909a00450986d701aa75b385c.svg","914c9d3909a00450986d701aa75b385c"],["assets/diagrams/940cb8cfbb433a04b05e15b4868cb8e3.svg","940cb8cfbb433a04b05e15b4868cb8e3"],["assets/diagrams/96b1cfc37756c1b821d3961418b576ae.png","96b1cfc37756c1b821d3961418b576ae"],["assets/diagrams/9873c7441be06e0b53a006aac442696c.svg","9873c7441be06e0b53a006aac442696c"],["assets/diagrams/9e0502a36ccd2bdd00eb09e1e6cb3b6d.svg","9e0502a36ccd2bdd00eb09e1e6cb3b6d"],["assets/diagrams/a2283460ffae3026632ff33c24bc5462.png","a2283460ffae3026632ff33c24bc5462"],["assets/diagrams/a2813f1c382a12a4b0b0b229ca22ee9f.png","a2813f1c382a12a4b0b0b229ca22ee9f"],["assets/diagrams/a828cacd29afa21ab0336576a1f5c908.svg","a828cacd29afa21ab0336576a1f5c908"],["assets/diagrams/aa67e02b5a082ef886f2db4c9a9c38cc.svg","aa67e02b5a082ef886f2db4c9a9c38cc"],["assets/diagrams/adaebeaa2cbc89c09666a0171e7344f9.png","adaebeaa2cbc89c09666a0171e7344f9"],["assets/diagrams/ae09920e853bee0b21be83f8e770ba01.svg","ae09920e853bee0b21be83f8e770ba01"],["assets/diagrams/b08fb4ce2162927bf9b6ce02cdc64ab0.svg","b08fb4ce2162927bf9b6ce02cdc64ab0"],["assets/diagrams/b4c3a2243fd049c31aa5f9f9c1283e86.png","b4c3a2243fd049c31aa5f9f9c1283e86"],["assets/diagrams/b690c2a309d9c84a92776f6318ec60b8.svg","b690c2a309d9c84a92776f6318ec60b8"],["assets/diagrams/b7877f7c09eee79e8dfd7847e0a5930f.svg","b7877f7c09eee79e8dfd7847e0a5930f"],["assets/diagrams/b83b75dbbf5b7e4be31c8000f91fc1a8.svg","b83b75dbbf5b7e4be31c8000f91fc1a8"],["assets/diagrams/b8cf759a74914c66cec01d50b18de6e0.svg","b8cf759a74914c66cec01d50b18de6e0"],["assets/diagrams/bb75b8bd469ce5b703b76abb7042e978.svg","bb75b8bd469ce5b703b76abb7042e978"],["assets/diagrams/bbd332cec8b573d3797cf8738d274c13.svg","bbd332cec8b573d3797cf8738d274c13"],["assets/diagrams/bf029cd183682281fcef2c53c9eb85a2.png","bf029cd183682281fcef2c53c9eb85a2"],["assets/diagrams/c1a1361326d5c0842b287223f6ab4351.svg","c1a1361326d5c0842b287223f6ab4351"],["assets/diagrams/c1c3a3443e56dea19cd92efc8e554c6f.svg","c1c3a3443e56dea19cd92efc8e554c6f"],["assets/diagrams/cf6057a54f005a288d832d293965ee0d.svg","cf6057a54f005a288d832d293965ee0d"],["assets/diagrams/d754c6b39cccff80641b0030f9f59759.png","d754c6b39cccff80641b0030f9f59759"],["assets/diagrams/d759887277b266a42c526643285dd244.svg","d759887277b266a42c526643285dd244"],["assets/diagrams/d94b0a5d8485d7391717f06ed5e5d74d.svg","d94b0a5d8485d7391717f06ed5e5d74d"],["assets/diagrams/dc5b8e3eb7c7219c13977a42a3fa1631.svg","dc5b8e3eb7c7219c13977a42a3fa1631"],["assets/diagrams/dd02f805c748b0c180bbbba6b24c4287.svg","dd02f805c748b0c180bbbba6b24c4287"],["assets/diagrams/dfedc4f7a99058fb7f6e50d5ac5b763d.svg","dfedc4f7a99058fb7f6e50d5ac5b763d"],["assets/diagrams/e0661f06a9fae1f5346d0efb57178146.svg","e0661f06a9fae1f5346d0efb57178146"],["assets/diagrams/e100cf92c46f65cb9db0b32030421e92.svg","e100cf92c46f65cb9db0b32030421e92"],["assets/diagrams/e32a63d9d4c6b1ffcaf49c42078f47cd.png","e32a63d9d4c6b1ffcaf49c42078f47cd"],["assets/diagrams/e5cc4abb511e6c74a64dd96d75fa9d07.png","e5cc4abb511e6c74a64dd96d75fa9d07"],["assets/diagrams/e76659d1dbe30bbf31d9a5ef6238a236.svg","e76659d1dbe30bbf31d9a5ef6238a236"],["assets/diagrams/e80b19c3f2eb66734051854f9df395bf.svg","e80b19c3f2eb66734051854f9df395bf"],["assets/diagrams/e86b7a4f06d7dad1ce67ee4646c3941b.svg","e86b7a4f06d7dad1ce67ee4646c3941b"],["assets/diagrams/ea05cfc71c5cd7777026101bface157e.svg","ea05cfc71c5cd7777026101bface157e"],["assets/diagrams/ea8e7fb6c96bce4a62ab11458890ad2a.svg","ea8e7fb6c96bce4a62ab11458890ad2a"],["assets/diagrams/edff4f485cfbaa3b77d359c081016bf5.svg","edff4f485cfbaa3b77d359c081016bf5"],["assets/diagrams/eefa1170a673da0140efe1ece7a2884b.svg","eefa1170a673da0140efe1ece7a2884b"],["assets/diagrams/efb151be6600eb5555127c8652488f1f.svg","efb151be6600eb5555127c8652488f1f"],["assets/diagrams/f38aae954de1cde63e2dffddc23a13f3.svg","f38aae954de1cde63e2dffddc23a13f3"],["assets/diagrams/f57e23a8df0dbb1c90d75e02c4abd7bb.svg","f57e23a8df0dbb1c90d75e02c4abd7bb"],["assets/diagrams/f5a120c8182ae808792b8ad40b03a84d.svg","f5a120c8182ae808792b8ad40b03a84d"],["assets/diagrams/f91164cbbb944d8986c90a1e93afcd82.svg","f91164cbbb944d8986c90a1e93afcd82"],["assets/diagrams/f9504a4dede2eb3d3781ec4baab96e93.png","f9504a4dede2eb3d3781ec4baab96e93"],["assets/diagrams/fa9ac7cba0327c032c5e1b57325496a4.svg","fa9ac7cba0327c032c5e1b57325496a4"],["assets/diagrams/feb142f82737d148ed5bcefd91915276.svg","feb142f82737d148ed5bcefd91915276"],["assets/equations/00488afca0d76fd6e09c993be946c0f8.svg","df545a4975981f73d6ecbfb4ff18729d"],["assets/equations/049eff553bd9ca9d938cd70fbe839f95.svg","52c153a88bda3d7894c126764b4f2a20"],["assets/equations/063b4830d0fbf479c5c074b042643a89.svg","3c3053835ec3f3f159bdea7ae48498ca"],["assets/equations/2a61d2f4306aa5d7529d1855aabf1d09.svg","512de74418c0e2fc99d0b5a79d4b376b"],["assets/equations/376a4471fad32292e6d2c8b8df0f1fdd.svg","2602391a90fddab30fb03d3844770906"],["assets/equations/3c920a91865a3a797bfed353b70448f9.svg","5eff1da01b43504e75780bc29e26b6c3"],["assets/equations/48a4d1e31c7d915006252e18a7be0e23.svg","bf8979b27316c7318479d4487479f867"],["assets/equations/635c6b163d4772ef406b47ecb2f00339.svg","bc8504fe68642b103ec1699782daa706"],["assets/equations/8430e1506bff95cf840315bd1d6d7365.svg","8c3547f592521e6765d5383e79f03d15"],["assets/equations/8953da8062cd144827586471ce5f3cde.svg","ce49994498291206b24c58556029d0c1"],["assets/equations/b9a23519240d24d73ae91d1ea28faa27.svg","0cceb6d07d1952e8de77c361ffcd86f2"],["assets/equations/ccbf5c975dcc68991d8844e31267d59d.svg","0c008eb8313f4be6a76d8591eea86e44"],["assets/equations/ceefbf33a84776dbdff23f70ee00dfad.svg","e8f8795f165def0c2d85d7360be6aab5"],["assets/equations/cfa8855d073e50488c96c187112772ea.svg","614b0decc98f8f8c257c738ae0e69090"],["assets/equations/d78d76d61cd02dff2f4328bb414fe1f4.svg","5a552dde7a67cd55403c22b21bbdb61f"],["assets/equations/d9552b4fd523ec32e5b830d016cc9c56.svg","aacf8ab40a7a778c6cf51e2f7f541f86"],["assets/equations/e132c1fccde93c4359cddcd01e79e098.svg","da34c8999dcf17f5006c79c89afef644"],["assets/equations/e4d3c630db37ce2af158b869d489901b.svg","18d5d826e58c5063b5e2cf620e805ac4"],["assets/equations/ff529f93b49270aac2bb7a2707a445e8.svg","0bec9fe1eabd1d2c9c7b4585507ce230"],["assets/icons/icon-192.png","ae0a23f1392f313f59c1c0e2be70f18d"],["assets/icons/icon-256.png","c60f3c8df736dd614b8bf559b8574684"],["assets/icons/icon-512.png","f8fbcc040f37912b782061ea82cecb73"],["assets/icons/icon-96.png","ea07af20607407a9f974918a0a75c28c"],["assets/share.jpg","3051e488244a7d702e295af3d5e20e46"],["assets/small-bird.png","e767e80a4aca9e31b142e8a4a1e41ef7"],["assets/twitter.jpg","3292082e5de1dd552fca775ad205d3ad"],["brief-history-of-http/index.html","55798b2c660eba905ac933e096e6bf74"],["building-blocks-of-tcp/index.html","67c4e5dec84e69fbf24b4f17a357a2df"],["building-blocks-of-udp/index.html","d7bede5dece111a5b25aafac9277959c"],["http1x/index.html","a12ae8511828e6d4ee09852edaef2f44"],["http2/index.html","e8eab028f9bab856465fe8a30406d27d"],["index.html","3c45280f71ebe9956d84a958b9a562a1"],["introduction-to-wireless-networks/index.html","24a18857849082968920871e6bc185eb"],["mobile-networks/index.html","aec421878bac582462b20283aafa4d08"],["optimizing-application-delivery/index.html","a8b951e780af48f137aaffe4c6c0293d"],["optimizing-for-mobile-networks/index.html","286d1f78c5bf107717aeb41f01b9e9db"],["primer-on-browser-networking/index.html","ea34538e434c90e1e821ac34fe2805d9"],["primer-on-latency-and-bandwidth/index.html","e85453c5a943db72a407fedd008fb300"],["primer-on-web-performance/index.html","3da5a04e12a221fe67c8041a89bfe61e"],["server-sent-events-sse/index.html","38a81b9f3d280aac12cb96ac087a1310"],["transport-layer-security-tls/index.html","f5cf83c8b4c1b2924ec0fd346e45ae7b"],["webrtc/index.html","7eb0151630f171304aa2d6b2585faaf0"],["websocket/index.html","b8a5a55fc09ab228f76ed4d0c829f660"],["wifi/index.html","92ec725f6dedca86fc3e9e8659462876"],["xmlhttprequest/index.html","faff2d5fa6158701d87dce77137a26a3"]];
var cacheName = 'sw-precache-v2-hpbn-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);
    url.search += (url.search ? '&' : '') +
      encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      return self.clients.claim();
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url));
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/*
  Copyright 2014 Google Inc. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.toolbox = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function debug(e,n){n=n||{};var t=n.debug||globalOptions.debug;t&&console.log("[sw-toolbox] "+e)}function openCache(e){var n;return e&&e.cache&&(n=e.cache.name),n=n||globalOptions.cache.name,caches.open(n)}function fetchAndCache(e,n){n=n||{};var t=n.successResponses||globalOptions.successResponses;return fetch(e.clone()).then(function(c){return"GET"===e.method&&t.test(c.status)&&openCache(n).then(function(t){t.put(e,c).then(function(){var c=n.cache||globalOptions.cache;(c.maxEntries||c.maxAgeSeconds)&&c.name&&queueCacheExpiration(e,t,c)})}),c.clone()})}function queueCacheExpiration(e,n,t){var c=cleanupCache.bind(null,e,n,t);cleanupQueue=cleanupQueue?cleanupQueue.then(c):c()}function cleanupCache(e,n,t){var c=e.url,a=t.maxAgeSeconds,u=t.maxEntries,o=t.name,r=Date.now();return debug("Updating LRU order for "+c+". Max entries is "+u+", max age is "+a),idbCacheExpiration.getDb(o).then(function(e){return idbCacheExpiration.setTimestampForUrl(e,c,r)}).then(function(e){return idbCacheExpiration.expireEntries(e,u,a,r)}).then(function(e){debug("Successfully updated IDB.");var t=e.map(function(e){return n["delete"](e)});return Promise.all(t).then(function(){debug("Done with cache cleanup.")})})["catch"](function(e){debug(e)})}function renameCache(e,n,t){return debug("Renaming cache: ["+e+"] to ["+n+"]",t),caches["delete"](n).then(function(){return Promise.all([caches.open(e),caches.open(n)]).then(function(n){var t=n[0],c=n[1];return t.keys().then(function(e){return Promise.all(e.map(function(e){return t.match(e).then(function(n){return c.put(e,n)})}))}).then(function(){return caches["delete"](e)})})})}var globalOptions=require("./options"),idbCacheExpiration=require("./idb-cache-expiration"),cleanupQueue;module.exports={debug:debug,fetchAndCache:fetchAndCache,openCache:openCache,renameCache:renameCache};
},{"./idb-cache-expiration":2,"./options":3}],2:[function(require,module,exports){
"use strict";function openDb(e){return new Promise(function(r,n){var t=indexedDB.open(DB_PREFIX+e,DB_VERSION);t.onupgradeneeded=function(){var e=t.result.createObjectStore(STORE_NAME,{keyPath:URL_PROPERTY});e.createIndex(TIMESTAMP_PROPERTY,TIMESTAMP_PROPERTY,{unique:!1})},t.onsuccess=function(){r(t.result)},t.onerror=function(){n(t.error)}})}function getDb(e){return e in cacheNameToDbPromise||(cacheNameToDbPromise[e]=openDb(e)),cacheNameToDbPromise[e]}function setTimestampForUrl(e,r,n){return new Promise(function(t,o){var i=e.transaction(STORE_NAME,"readwrite"),u=i.objectStore(STORE_NAME);u.put({url:r,timestamp:n}),i.oncomplete=function(){t(e)},i.onabort=function(){o(i.error)}})}function expireOldEntries(e,r,n){return r?new Promise(function(t,o){var i=1e3*r,u=[],c=e.transaction(STORE_NAME,"readwrite"),s=c.objectStore(STORE_NAME),a=s.index(TIMESTAMP_PROPERTY);a.openCursor().onsuccess=function(e){var r=e.target.result;if(r&&n-i>r.value[TIMESTAMP_PROPERTY]){var t=r.value[URL_PROPERTY];u.push(t),s["delete"](t),r["continue"]()}},c.oncomplete=function(){t(u)},c.onabort=o}):Promise.resolve([])}function expireExtraEntries(e,r){return r?new Promise(function(n,t){var o=[],i=e.transaction(STORE_NAME,"readwrite"),u=i.objectStore(STORE_NAME),c=u.index(TIMESTAMP_PROPERTY),s=c.count();c.count().onsuccess=function(){var e=s.result;e>r&&(c.openCursor().onsuccess=function(n){var t=n.target.result;if(t){var i=t.value[URL_PROPERTY];o.push(i),u["delete"](i),e-o.length>r&&t["continue"]()}})},i.oncomplete=function(){n(o)},i.onabort=t}):Promise.resolve([])}function expireEntries(e,r,n,t){return expireOldEntries(e,n,t).then(function(n){return expireExtraEntries(e,r).then(function(e){return n.concat(e)})})}var DB_PREFIX="sw-toolbox-",DB_VERSION=1,STORE_NAME="store",URL_PROPERTY="url",TIMESTAMP_PROPERTY="timestamp",cacheNameToDbPromise={};module.exports={getDb:getDb,setTimestampForUrl:setTimestampForUrl,expireEntries:expireEntries};
},{}],3:[function(require,module,exports){
"use strict";var scope;scope=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,module.exports={cache:{name:"$$$toolbox-cache$$$"+scope+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/};
},{}],4:[function(require,module,exports){
"use strict";var url=new URL("./",self.location),basePath=url.pathname,pathRegexp=require("path-to-regexp"),Route=function(e,t,i,s){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=basePath+t),this.keys=[],this.regexp=pathRegexp(t,this.keys)),this.method=e,this.options=s,this.handler=i};Route.prototype.makeHandler=function(e){var t;if(this.regexp){var i=this.regexp.exec(e);t={},this.keys.forEach(function(e,s){t[e.name]=i[s+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},module.exports=Route;
},{"path-to-regexp":14}],5:[function(require,module,exports){
"use strict";function regexEscape(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var Route=require("./route"),keyMatch=function(e,t){for(var r=e.entries(),o=r.next(),n=[];!o.done;){var u=new RegExp(o.value[0]);u.test(t)&&n.push(o.value[1]),o=r.next()}return n},Router=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this["default"]=null};["get","post","put","delete","head","any"].forEach(function(e){Router.prototype[e]=function(t,r,o){return this.add(e,t,r,o)}}),Router.prototype.add=function(e,t,r,o){o=o||{};var n;t instanceof RegExp?n=RegExp:(n=o.origin||self.location.origin,n=n instanceof RegExp?n.source:regexEscape(n)),e=e.toLowerCase();var u=new Route(e,t,r,o);this.routes.has(n)||this.routes.set(n,new Map);var a=this.routes.get(n);a.has(e)||a.set(e,new Map);var s=a.get(e),i=u.regexp||u.fullUrlRegExp;s.set(i.source,u)},Router.prototype.matchMethod=function(e,t){var r=new URL(t),o=r.origin,n=r.pathname;return this._match(e,keyMatch(this.routes,o),n)||this._match(e,[this.routes.get(RegExp)],t)},Router.prototype._match=function(e,t,r){if(0===t.length)return null;for(var o=0;o<t.length;o++){var n=t[o],u=n&&n.get(e.toLowerCase());if(u){var a=keyMatch(u,r);if(a.length>0)return a[0].makeHandler(r)}}return null},Router.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},module.exports=new Router;
},{"./route":4}],6:[function(require,module,exports){
"use strict";function cacheFirst(e,r,t){return helpers.debug("Strategy: cache first ["+e.url+"]",t),helpers.openCache(t).then(function(r){return r.match(e).then(function(r){return r?r:helpers.fetchAndCache(e,t)})})}var helpers=require("../helpers");module.exports=cacheFirst;
},{"../helpers":1}],7:[function(require,module,exports){
"use strict";function cacheOnly(e,r,c){return helpers.debug("Strategy: cache only ["+e.url+"]",c),helpers.openCache(c).then(function(r){return r.match(e)})}var helpers=require("../helpers");module.exports=cacheOnly;
},{"../helpers":1}],8:[function(require,module,exports){
"use strict";function fastest(e,n,t){return helpers.debug("Strategy: fastest ["+e.url+"]",t),new Promise(function(r,s){var c=!1,o=[],a=function(e){o.push(e.toString()),c?s(new Error('Both cache and network failed: "'+o.join('", "')+'"')):c=!0},h=function(e){e instanceof Response?r(e):a("No result returned")};helpers.fetchAndCache(e.clone(),t).then(h,a),cacheOnly(e,n,t).then(h,a)})}var helpers=require("../helpers"),cacheOnly=require("./cacheOnly");module.exports=fastest;
},{"../helpers":1,"./cacheOnly":7}],9:[function(require,module,exports){
module.exports={networkOnly:require("./networkOnly"),networkFirst:require("./networkFirst"),cacheOnly:require("./cacheOnly"),cacheFirst:require("./cacheFirst"),fastest:require("./fastest")};
},{"./cacheFirst":6,"./cacheOnly":7,"./fastest":8,"./networkFirst":10,"./networkOnly":11}],10:[function(require,module,exports){
"use strict";function networkFirst(e,r,t){t=t||{};var s=t.successResponses||globalOptions.successResponses,n=t.networkTimeoutSeconds||globalOptions.networkTimeoutSeconds;return helpers.debug("Strategy: network first ["+e.url+"]",t),helpers.openCache(t).then(function(r){var o,u,i=[];if(n){var c=new Promise(function(t){o=setTimeout(function(){r.match(e).then(function(e){e&&t(e)})},1e3*n)});i.push(c)}var a=helpers.fetchAndCache(e,t).then(function(e){if(o&&clearTimeout(o),s.test(e.status))return e;throw helpers.debug("Response was an HTTP error: "+e.statusText,t),u=e,new Error("Bad response")})["catch"](function(s){return helpers.debug("Network or response error, fallback to cache ["+e.url+"]",t),r.match(e).then(function(e){if(e)return e;if(u)return u;throw s})});return i.push(a),Promise.race(i)})}var globalOptions=require("../options"),helpers=require("../helpers");module.exports=networkFirst;
},{"../helpers":1,"../options":3}],11:[function(require,module,exports){
"use strict";function networkOnly(e,r,t){return helpers.debug("Strategy: network only ["+e.url+"]",t),fetch(e)}var helpers=require("../helpers");module.exports=networkOnly;
},{"../helpers":1}],12:[function(require,module,exports){
"use strict";function cache(e,t){return helpers.openCache(t).then(function(t){return t.add(e)})}function uncache(e,t){return helpers.openCache(t).then(function(t){return t["delete"](e)})}function precache(e){e instanceof Promise||validatePrecacheInput(e),options.preCacheItems=options.preCacheItems.concat(e)}require("serviceworker-cache-polyfill");var options=require("./options"),router=require("./router"),helpers=require("./helpers"),strategies=require("./strategies");helpers.debug("Service Worker Toolbox is loading");var flatten=function(e){return e.reduce(function(e,t){return e.concat(t)},[])},validatePrecacheInput=function(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e};self.addEventListener("install",function(e){var t=options.cache.name+"$$$inactive$$$";helpers.debug("install event fired"),helpers.debug("creating cache ["+t+"]"),e.waitUntil(helpers.openCache({cache:{name:t}}).then(function(e){return Promise.all(options.preCacheItems).then(flatten).then(validatePrecacheInput).then(function(t){return helpers.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}),self.addEventListener("activate",function(e){helpers.debug("activate event fired");var t=options.cache.name+"$$$inactive$$$";e.waitUntil(helpers.renameCache(t,options.cache.name))}),self.addEventListener("fetch",function(e){var t=router.match(e.request);t?e.respondWith(t(e.request)):router["default"]&&"GET"===e.request.method&&e.respondWith(router["default"](e.request))}),module.exports={networkOnly:strategies.networkOnly,networkFirst:strategies.networkFirst,cacheOnly:strategies.cacheOnly,cacheFirst:strategies.cacheFirst,fastest:strategies.fastest,router:router,options:options,cache:cache,uncache:uncache,precache:precache};
},{"./helpers":1,"./options":3,"./router":5,"./strategies":9,"serviceworker-cache-polyfill":15}],13:[function(require,module,exports){
module.exports=Array.isArray||function(r){return"[object Array]"==Object.prototype.toString.call(r)};
},{}],14:[function(require,module,exports){
function parse(e){for(var t,r=[],n=0,o=0,a="";null!=(t=PATH_REGEXP.exec(e));){var p=t[0],i=t[1],s=t.index;if(a+=e.slice(o,s),o=s+p.length,i)a+=i[1];else{var c=e[o],u=t[2],l=t[3],f=t[4],g=t[5],x=t[6],h=t[7];a&&(r.push(a),a="");var d=null!=u&&null!=c&&c!==u,y="+"===x||"*"===x,m="?"===x||"*"===x,R=t[2]||"/",T=f||g||(h?".*":"[^"+R+"]+?");r.push({name:l||n++,prefix:u||"",delimiter:R,optional:m,repeat:y,partial:d,asterisk:!!h,pattern:escapeGroup(T)})}}return o<e.length&&(a+=e.substr(o)),a&&r.push(a),r}function compile(e){return tokensToFunction(parse(e))}function encodeURIComponentPretty(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function encodeAsterisk(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function tokensToFunction(e){for(var t=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(t[r]=new RegExp("^(?:"+e[r].pattern+")$"));return function(r,n){for(var o="",a=r||{},p=n||{},i=p.pretty?encodeURIComponentPretty:encodeURIComponent,s=0;s<e.length;s++){var c=e[s];if("string"!=typeof c){var u,l=a[c.name];if(null==l){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(isarray(l)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<l.length;f++){if(u=i(l[f]),!t[s].test(u))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(u)+"`");o+=(0===f?c.prefix:c.delimiter)+u}}else{if(u=c.asterisk?encodeAsterisk(l):i(l),!t[s].test(u))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+u+'"');o+=c.prefix+u}}else o+=c}return o}}function escapeString(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function escapeGroup(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function attachKeys(e,t){return e.keys=t,e}function flags(e){return e.sensitive?"":"i"}function regexpToRegexp(e,t){var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return attachKeys(e,t)}function arrayToRegexp(e,t,r){for(var n=[],o=0;o<e.length;o++)n.push(pathToRegexp(e[o],t,r).source);var a=new RegExp("(?:"+n.join("|")+")",flags(r));return attachKeys(a,t)}function stringToRegexp(e,t,r){for(var n=parse(e),o=tokensToRegExp(n,r),a=0;a<n.length;a++)"string"!=typeof n[a]&&t.push(n[a]);return attachKeys(o,t)}function tokensToRegExp(e,t){t=t||{};for(var r=t.strict,n=t.end!==!1,o="",a=e[e.length-1],p="string"==typeof a&&/\/$/.test(a),i=0;i<e.length;i++){var s=e[i];if("string"==typeof s)o+=escapeString(s);else{var c=escapeString(s.prefix),u="(?:"+s.pattern+")";s.repeat&&(u+="(?:"+c+u+")*"),u=s.optional?s.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",o+=u}}return r||(o=(p?o.slice(0,-2):o)+"(?:\\/(?=$))?"),o+=n?"$":r&&p?"":"(?=\\/|$)",new RegExp("^"+o,flags(t))}function pathToRegexp(e,t,r){return t=t||[],isarray(t)?r||(r={}):(r=t,t=[]),e instanceof RegExp?regexpToRegexp(e,t):isarray(e)?arrayToRegexp(e,t,r):stringToRegexp(e,t,r)}var isarray=require("isarray");module.exports=pathToRegexp,module.exports.parse=parse,module.exports.compile=compile,module.exports.tokensToFunction=tokensToFunction,module.exports.tokensToRegExp=tokensToRegExp;var PATH_REGEXP=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");
},{"isarray":13}],15:[function(require,module,exports){
!function(){var t=Cache.prototype.addAll,e=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(e)var r=e[1],n=parseInt(e[2]);t&&(!e||"Firefox"===r&&n>=46||"Chrome"===r&&n>=50)||(Cache.prototype.addAll=function(t){function e(t){this.name="NetworkError",this.code=19,this.message=t}var r=this;return e.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return t=t.map(function(t){return t instanceof Request?t:String(t)}),Promise.all(t.map(function(t){"string"==typeof t&&(t=new Request(t));var r=new URL(t.url).protocol;if("http:"!==r&&"https:"!==r)throw new e("Invalid scheme");return fetch(t.clone())}))}).then(function(n){if(n.some(function(t){return!t.ok}))throw new e("Incorrect response status");return Promise.all(n.map(function(e,n){return r.put(t[n],e)}))}).then(function(){})},Cache.prototype.add=function(t){return this.addAll([t])})}();
},{}]},{},[12])(12)
});


//# sourceMappingURL=./build/sw-toolbox.map.json
// *** End of auto-included sw-toolbox code. ***






(function(global) {

  global.toolbox.options.debug = true;
  global.toolbox.options.networkTimeoutSeconds = 3;

  /* Google Analytics */
  global.toolbox.router.get(
    '*analytics.js',
    global.toolbox.cacheFirst,
    {
      origin: /https?:\/\/www\.google-analytics.*/
    }
  );

  /* Google Fonts */
  global.toolbox.router.get(
    '/(.+)',
    global.toolbox.cacheFirst,
    {
      origin: /https?:\/\/fonts.+/,
      cache: { name: 'fonts' }
    }
  );

})(self);
