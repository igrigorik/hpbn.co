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

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","248384c647a7428e3b82306d4963990e"],["7a58c37113db4464699ec4f4646b5566.json","7a58c37113db4464699ec4f4646b5566"],["assets/5e7a4451127bdccbb9346f1c8744c0d9.js","5e7a4451127bdccbb9346f1c8744c0d9"],["assets/b708e9296b5e26f6bd725561648a1dda.css","b708e9296b5e26f6bd725561648a1dda"],["assets/diagrams/0220cddf71377e3527a891fc7730625e.svg","0220cddf71377e3527a891fc7730625e"],["assets/diagrams/030c9cc04270134bf2ca3f324980d2bc.svg","030c9cc04270134bf2ca3f324980d2bc"],["assets/diagrams/06b379fb58cbcab5530946c7059bfdef.svg","06b379fb58cbcab5530946c7059bfdef"],["assets/diagrams/084666d979c7b1507df8c538f5557ac9.svg","084666d979c7b1507df8c538f5557ac9"],["assets/diagrams/0a9df9be8ccde8d1f7b59514f74cc63b.svg","0a9df9be8ccde8d1f7b59514f74cc63b"],["assets/diagrams/0b2435f40a21288f26b55208d5a8c5b1.svg","0b2435f40a21288f26b55208d5a8c5b1"],["assets/diagrams/0b393b7cfa29c3479ab323f5e768c055.svg","0b393b7cfa29c3479ab323f5e768c055"],["assets/diagrams/0b9e45b8e052568d223d110681dbf7d3.svg","0b9e45b8e052568d223d110681dbf7d3"],["assets/diagrams/0c1f6cd359e0ec1180aaefdae072335d.svg","0c1f6cd359e0ec1180aaefdae072335d"],["assets/diagrams/13f28d4c3bcea2a8e4420b3278ebffaf.png","13f28d4c3bcea2a8e4420b3278ebffaf"],["assets/diagrams/19e54ddeee77adfc1c724b912f7b2694.svg","19e54ddeee77adfc1c724b912f7b2694"],["assets/diagrams/1a86ca9ae4a3c0e208ddf2f7fdc38b95.svg","1a86ca9ae4a3c0e208ddf2f7fdc38b95"],["assets/diagrams/1a8db2948eb2aad0dd47470c6c011a42.svg","1a8db2948eb2aad0dd47470c6c011a42"],["assets/diagrams/1d7d7e4dc5954b7ee5beb4312a660849.svg","1d7d7e4dc5954b7ee5beb4312a660849"],["assets/diagrams/298f1454bb5600b5a55fabff8051234b.svg","298f1454bb5600b5a55fabff8051234b"],["assets/diagrams/2a9b83c6b43e961a41a847c3227dcad2.svg","2a9b83c6b43e961a41a847c3227dcad2"],["assets/diagrams/2aaa8d11ee7fd2d8a332e6dc68dc50ae.svg","2aaa8d11ee7fd2d8a332e6dc68dc50ae"],["assets/diagrams/33926d81cc07b922f40ddab7ab00c538.svg","33926d81cc07b922f40ddab7ab00c538"],["assets/diagrams/3394fb4dab93efdd5e49475316c9496f.svg","3394fb4dab93efdd5e49475316c9496f"],["assets/diagrams/37d7e7aded91fc715d7acdefb738793b.png","37d7e7aded91fc715d7acdefb738793b"],["assets/diagrams/3a5cce13fbae63d778029e6fceb51acf.svg","3a5cce13fbae63d778029e6fceb51acf"],["assets/diagrams/40348f35c6999c3ec04290d7177b0b45.svg","40348f35c6999c3ec04290d7177b0b45"],["assets/diagrams/44b1b32df5642e4f8f9c29e901020fbc.svg","44b1b32df5642e4f8f9c29e901020fbc"],["assets/diagrams/4603275cd98c93aeb8c46b1b1afa0ba6.svg","4603275cd98c93aeb8c46b1b1afa0ba6"],["assets/diagrams/47ba5b32e42cf5a06c3741d29ef9b94a.svg","47ba5b32e42cf5a06c3741d29ef9b94a"],["assets/diagrams/4b4766fd02af08ca2894b4cce8b44d85.svg","4b4766fd02af08ca2894b4cce8b44d85"],["assets/diagrams/4c8e63b20be72571abece33e8373575a.png","4c8e63b20be72571abece33e8373575a"],["assets/diagrams/4ee6145071a2992920f9681c069824a4.svg","4ee6145071a2992920f9681c069824a4"],["assets/diagrams/52d5ea44c0ddf990c5296ed2f69f3842.png","52d5ea44c0ddf990c5296ed2f69f3842"],["assets/diagrams/54af0f14aaabe6664274d81d60e38d40.svg","54af0f14aaabe6664274d81d60e38d40"],["assets/diagrams/57c4f352ad8414417d225ecb3665ad07.svg","57c4f352ad8414417d225ecb3665ad07"],["assets/diagrams/5bd4955aeda62721100af43140382c44.svg","5bd4955aeda62721100af43140382c44"],["assets/diagrams/61dc2bae615536155a5af7203ad191fd.png","61dc2bae615536155a5af7203ad191fd"],["assets/diagrams/69aa329ffbfae6fd0446de77623c93fb.svg","69aa329ffbfae6fd0446de77623c93fb"],["assets/diagrams/6c3d168f45e9a1b2965f790c5cd794f0.svg","6c3d168f45e9a1b2965f790c5cd794f0"],["assets/diagrams/6cb3c673b9ae40cfbd2a88ffa02bfc66.svg","6cb3c673b9ae40cfbd2a88ffa02bfc66"],["assets/diagrams/6ff953c25c7677f6bb49c6eb0b8737b1.svg","6ff953c25c7677f6bb49c6eb0b8737b1"],["assets/diagrams/7298dbfb0d0807b5978271b23db938fa.svg","7298dbfb0d0807b5978271b23db938fa"],["assets/diagrams/7414b52caa2f33a9e2feb40afdda9d9e.png","7414b52caa2f33a9e2feb40afdda9d9e"],["assets/diagrams/7695893485cffda5a58d1500a1dd2d7f.svg","7695893485cffda5a58d1500a1dd2d7f"],["assets/diagrams/773ecb15832075c0b56021aa3ad15233.svg","773ecb15832075c0b56021aa3ad15233"],["assets/diagrams/7791d95cced297a18105e4c33c4622a1.svg","7791d95cced297a18105e4c33c4622a1"],["assets/diagrams/80b1e53b1da56b72562364413befa137.svg","80b1e53b1da56b72562364413befa137"],["assets/diagrams/8199bc14fc3e692d5ea83792822d5def.png","8199bc14fc3e692d5ea83792822d5def"],["assets/diagrams/82966133085de5c9aed3229838166dc5.svg","82966133085de5c9aed3229838166dc5"],["assets/diagrams/84cf0f29175e4b11a2343e73105637c5.svg","84cf0f29175e4b11a2343e73105637c5"],["assets/diagrams/8696009a007572bf2da042cb6cef3ec1.png","8696009a007572bf2da042cb6cef3ec1"],["assets/diagrams/8c1bfcf5483aaa50b543906a6e96d284.svg","8c1bfcf5483aaa50b543906a6e96d284"],["assets/diagrams/8e6931bb40fc26c511ad15645e7b6113.svg","8e6931bb40fc26c511ad15645e7b6113"],["assets/diagrams/914c9d3909a00450986d701aa75b385c.svg","914c9d3909a00450986d701aa75b385c"],["assets/diagrams/940cb8cfbb433a04b05e15b4868cb8e3.svg","940cb8cfbb433a04b05e15b4868cb8e3"],["assets/diagrams/96b1cfc37756c1b821d3961418b576ae.png","96b1cfc37756c1b821d3961418b576ae"],["assets/diagrams/9873c7441be06e0b53a006aac442696c.svg","9873c7441be06e0b53a006aac442696c"],["assets/diagrams/9e0502a36ccd2bdd00eb09e1e6cb3b6d.svg","9e0502a36ccd2bdd00eb09e1e6cb3b6d"],["assets/diagrams/a2283460ffae3026632ff33c24bc5462.png","a2283460ffae3026632ff33c24bc5462"],["assets/diagrams/a2813f1c382a12a4b0b0b229ca22ee9f.png","a2813f1c382a12a4b0b0b229ca22ee9f"],["assets/diagrams/a828cacd29afa21ab0336576a1f5c908.svg","a828cacd29afa21ab0336576a1f5c908"],["assets/diagrams/adaebeaa2cbc89c09666a0171e7344f9.png","adaebeaa2cbc89c09666a0171e7344f9"],["assets/diagrams/ae09920e853bee0b21be83f8e770ba01.svg","ae09920e853bee0b21be83f8e770ba01"],["assets/diagrams/b08fb4ce2162927bf9b6ce02cdc64ab0.svg","b08fb4ce2162927bf9b6ce02cdc64ab0"],["assets/diagrams/b4c3a2243fd049c31aa5f9f9c1283e86.png","b4c3a2243fd049c31aa5f9f9c1283e86"],["assets/diagrams/b690c2a309d9c84a92776f6318ec60b8.svg","b690c2a309d9c84a92776f6318ec60b8"],["assets/diagrams/b7877f7c09eee79e8dfd7847e0a5930f.svg","b7877f7c09eee79e8dfd7847e0a5930f"],["assets/diagrams/b83b75dbbf5b7e4be31c8000f91fc1a8.svg","b83b75dbbf5b7e4be31c8000f91fc1a8"],["assets/diagrams/b8cf759a74914c66cec01d50b18de6e0.svg","b8cf759a74914c66cec01d50b18de6e0"],["assets/diagrams/bb75b8bd469ce5b703b76abb7042e978.svg","bb75b8bd469ce5b703b76abb7042e978"],["assets/diagrams/bbd332cec8b573d3797cf8738d274c13.svg","bbd332cec8b573d3797cf8738d274c13"],["assets/diagrams/bf029cd183682281fcef2c53c9eb85a2.png","bf029cd183682281fcef2c53c9eb85a2"],["assets/diagrams/c1a1361326d5c0842b287223f6ab4351.svg","c1a1361326d5c0842b287223f6ab4351"],["assets/diagrams/c1c3a3443e56dea19cd92efc8e554c6f.svg","c1c3a3443e56dea19cd92efc8e554c6f"],["assets/diagrams/c4a166135379abdf29c534f3da880d5e.svg","c4a166135379abdf29c534f3da880d5e"],["assets/diagrams/cf6057a54f005a288d832d293965ee0d.svg","cf6057a54f005a288d832d293965ee0d"],["assets/diagrams/d754c6b39cccff80641b0030f9f59759.png","d754c6b39cccff80641b0030f9f59759"],["assets/diagrams/d759887277b266a42c526643285dd244.svg","d759887277b266a42c526643285dd244"],["assets/diagrams/d94b0a5d8485d7391717f06ed5e5d74d.svg","d94b0a5d8485d7391717f06ed5e5d74d"],["assets/diagrams/dc5b8e3eb7c7219c13977a42a3fa1631.svg","dc5b8e3eb7c7219c13977a42a3fa1631"],["assets/diagrams/dd02f805c748b0c180bbbba6b24c4287.svg","dd02f805c748b0c180bbbba6b24c4287"],["assets/diagrams/dfedc4f7a99058fb7f6e50d5ac5b763d.svg","dfedc4f7a99058fb7f6e50d5ac5b763d"],["assets/diagrams/e0661f06a9fae1f5346d0efb57178146.svg","e0661f06a9fae1f5346d0efb57178146"],["assets/diagrams/e100cf92c46f65cb9db0b32030421e92.svg","e100cf92c46f65cb9db0b32030421e92"],["assets/diagrams/e32a63d9d4c6b1ffcaf49c42078f47cd.png","e32a63d9d4c6b1ffcaf49c42078f47cd"],["assets/diagrams/e5cc4abb511e6c74a64dd96d75fa9d07.png","e5cc4abb511e6c74a64dd96d75fa9d07"],["assets/diagrams/e76659d1dbe30bbf31d9a5ef6238a236.svg","e76659d1dbe30bbf31d9a5ef6238a236"],["assets/diagrams/e80b19c3f2eb66734051854f9df395bf.svg","e80b19c3f2eb66734051854f9df395bf"],["assets/diagrams/e86b7a4f06d7dad1ce67ee4646c3941b.svg","e86b7a4f06d7dad1ce67ee4646c3941b"],["assets/diagrams/ea05cfc71c5cd7777026101bface157e.svg","ea05cfc71c5cd7777026101bface157e"],["assets/diagrams/ea8e7fb6c96bce4a62ab11458890ad2a.svg","ea8e7fb6c96bce4a62ab11458890ad2a"],["assets/diagrams/edff4f485cfbaa3b77d359c081016bf5.svg","edff4f485cfbaa3b77d359c081016bf5"],["assets/diagrams/eefa1170a673da0140efe1ece7a2884b.svg","eefa1170a673da0140efe1ece7a2884b"],["assets/diagrams/efb151be6600eb5555127c8652488f1f.svg","efb151be6600eb5555127c8652488f1f"],["assets/diagrams/f38aae954de1cde63e2dffddc23a13f3.svg","f38aae954de1cde63e2dffddc23a13f3"],["assets/diagrams/f57e23a8df0dbb1c90d75e02c4abd7bb.svg","f57e23a8df0dbb1c90d75e02c4abd7bb"],["assets/diagrams/f91164cbbb944d8986c90a1e93afcd82.svg","f91164cbbb944d8986c90a1e93afcd82"],["assets/diagrams/f9504a4dede2eb3d3781ec4baab96e93.png","f9504a4dede2eb3d3781ec4baab96e93"],["assets/diagrams/fa9ac7cba0327c032c5e1b57325496a4.svg","fa9ac7cba0327c032c5e1b57325496a4"],["assets/diagrams/feb142f82737d148ed5bcefd91915276.svg","feb142f82737d148ed5bcefd91915276"],["assets/equations/00488afca0d76fd6e09c993be946c0f8.svg","df545a4975981f73d6ecbfb4ff18729d"],["assets/equations/063b4830d0fbf479c5c074b042643a89.svg","3c3053835ec3f3f159bdea7ae48498ca"],["assets/equations/2a61d2f4306aa5d7529d1855aabf1d09.svg","512de74418c0e2fc99d0b5a79d4b376b"],["assets/equations/376a4471fad32292e6d2c8b8df0f1fdd.svg","2602391a90fddab30fb03d3844770906"],["assets/equations/3c920a91865a3a797bfed353b70448f9.svg","5eff1da01b43504e75780bc29e26b6c3"],["assets/equations/48a4d1e31c7d915006252e18a7be0e23.svg","bf8979b27316c7318479d4487479f867"],["assets/equations/635c6b163d4772ef406b47ecb2f00339.svg","bc8504fe68642b103ec1699782daa706"],["assets/equations/8430e1506bff95cf840315bd1d6d7365.svg","8c3547f592521e6765d5383e79f03d15"],["assets/equations/8953da8062cd144827586471ce5f3cde.svg","b067ba152b7d73bf824a7e3311f2ec08"],["assets/equations/b9a23519240d24d73ae91d1ea28faa27.svg","0cceb6d07d1952e8de77c361ffcd86f2"],["assets/equations/bbc4446900172ea4b345dc6c79e2932e.svg","08b9b87426aa0f33732c3afb54da3165"],["assets/equations/bc982fa3a121aff07c20b70f92845668.svg","5c2ff652a9d2f2aaaf51ce7a472f6c1b"],["assets/equations/ccbf5c975dcc68991d8844e31267d59d.svg","0c008eb8313f4be6a76d8591eea86e44"],["assets/equations/ceefbf33a84776dbdff23f70ee00dfad.svg","ae8665ddcc15295dd644d13ab8437c9b"],["assets/equations/cfa8855d073e50488c96c187112772ea.svg","13840aa5c54942417d68b64aaf21ff0e"],["assets/equations/d78d76d61cd02dff2f4328bb414fe1f4.svg","5a552dde7a67cd55403c22b21bbdb61f"],["assets/equations/d9552b4fd523ec32e5b830d016cc9c56.svg","aacf8ab40a7a778c6cf51e2f7f541f86"],["assets/equations/e4d3c630db37ce2af158b869d489901b.svg","18d5d826e58c5063b5e2cf620e805ac4"],["assets/equations/ff529f93b49270aac2bb7a2707a445e8.svg","0bec9fe1eabd1d2c9c7b4585507ce230"],["assets/icons/icon-192.png","ae0a23f1392f313f59c1c0e2be70f18d"],["assets/icons/icon-256.png","c60f3c8df736dd614b8bf559b8574684"],["assets/icons/icon-512.png","f8fbcc040f37912b782061ea82cecb73"],["assets/icons/icon-96.png","ea07af20607407a9f974918a0a75c28c"],["assets/share.jpg","3051e488244a7d702e295af3d5e20e46"],["assets/small-bird.png","e767e80a4aca9e31b142e8a4a1e41ef7"],["assets/twitter.jpg","3292082e5de1dd552fca775ad205d3ad"],["brief-history-of-http/index.html","c440ba9f9b62aefb647963536b1bc528"],["building-blocks-of-tcp/index.html","3f8e8b0835a6482e53394d0d6c0ebf8d"],["building-blocks-of-udp/index.html","a5d199a727ddb0fa0bc3d776fa68352b"],["http1x/index.html","43a1602930a9687ae6b55d25b73dc1ce"],["http2/index.html","9405f58ea5ddc3d0b041683a6fd2e954"],["index.html","25e92903eaeb354c6cadec9aa2ff6a15"],["introduction-to-wireless-networks/index.html","66428b51bc12b818f65b9e2d3ac71ce9"],["mobile-networks/index.html","b347fecc6cdc5e43424ea7b9ed351bce"],["optimizing-application-delivery/index.html","e6297bfcb61bb0ee2a19a40ac2dd8b19"],["optimizing-for-mobile-networks/index.html","763127ce93132db69a52d891b819e3e3"],["primer-on-browser-networking/index.html","5dd880dc01309b8db164d7e341c94efb"],["primer-on-latency-and-bandwidth/index.html","34ec3fd5897fde7fd2e8093a3aa95b6f"],["primer-on-web-performance/index.html","7df96a3aab00c8d3928f53d3c6ab60a9"],["server-sent-events-sse/index.html","778b84400953b7978697aab857f05b3e"],["transport-layer-security-tls/index.html","6d6b2ad1aa5816108aa33fd354aece30"],["webrtc/index.html","4c18a99d547acdb1568a21c2b04f0ee3"],["websocket/index.html","bc2623f086bdfcaa04e21b51fc041e46"],["wifi/index.html","db281f6e9a1cc0fd95f63b2e608b6ce4"],["xmlhttprequest/index.html","d4c22d2e03d67b9d44463bcb2c80594f"]];
var cacheName = 'sw-precache-v3-hpbn-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

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
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
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
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
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

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
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
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
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
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


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
