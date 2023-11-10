'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f1b2b60e63af637198bc071d9b481faa",
"assets/AssetManifest.json": "5ad4401c4f7113d499dd606b3279496f",
"assets/assets/portfolio.jpg": "fb876ec1d7ce5b1330540194ef1b5125",
"assets/assets/profile.JPG": "e786aa05dd22cf99a39b76968da05848",
"assets/FontManifest.json": "26d0093cbf8aaa89eef4740f464063ef",
"assets/fonts/MaterialIcons-Regular.otf": "efb63b84a236b552136093e0d707c8f0",
"assets/NOTICES": "e255a7a6d060eb5f707d43fe88230ddb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/social_login_buttons/lib/assets/2.0x/apple-black-logo.png": "6ab19330b95a2d9ae68575e0660c37cc",
"assets/packages/social_login_buttons/lib/assets/2.0x/apple-logo.png": "a557fdf0eb6b83da96f7bdb2d01db927",
"assets/packages/social_login_buttons/lib/assets/2.0x/facebook-logo.png": "804cf2a905b2c7460adcaadb3dbfe9ae",
"assets/packages/social_login_buttons/lib/assets/2.0x/github-logo.png": "168dbc57b649e1f24efd59ee3a65b123",
"assets/packages/social_login_buttons/lib/assets/2.0x/google-logo.png": "28b51fa69f1f0cb8a8f7a4bdd8e173c9",
"assets/packages/social_login_buttons/lib/assets/2.0x/microsoft-logo.png": "506d81b95bc13a238aad774db3626064",
"assets/packages/social_login_buttons/lib/assets/2.0x/twitter-logo.png": "0b7b56a1b553e327d8a9d8da3d55eb72",
"assets/packages/social_login_buttons/lib/assets/3.0x/apple-black-logo.png": "fd557bc349d7b0ac2dc09bdf89903362",
"assets/packages/social_login_buttons/lib/assets/3.0x/apple-logo.png": "f3482792f84398f4879483d8d3159d54",
"assets/packages/social_login_buttons/lib/assets/3.0x/facebook-logo.png": "d23205c8421608e83f9f7c420f3e2e89",
"assets/packages/social_login_buttons/lib/assets/3.0x/github-logo.png": "93f12731517d2d6ad022935490d84e88",
"assets/packages/social_login_buttons/lib/assets/3.0x/google-logo.png": "a6b32c1f07fa2fc81ce254986b971691",
"assets/packages/social_login_buttons/lib/assets/3.0x/microsoft-logo.png": "d00462accd7b9bc230de54830c4b47a1",
"assets/packages/social_login_buttons/lib/assets/3.0x/twitter-logo.png": "27294190740a30f2b76ee5257f39ad74",
"assets/packages/social_login_buttons/lib/assets/apple-black-logo.png": "6ab19330b95a2d9ae68575e0660c37cc",
"assets/packages/social_login_buttons/lib/assets/apple-logo.png": "a557fdf0eb6b83da96f7bdb2d01db927",
"assets/packages/social_login_buttons/lib/assets/facebook-logo.png": "804cf2a905b2c7460adcaadb3dbfe9ae",
"assets/packages/social_login_buttons/lib/assets/github-logo.png": "168dbc57b649e1f24efd59ee3a65b123",
"assets/packages/social_login_buttons/lib/assets/google-logo.png": "28b51fa69f1f0cb8a8f7a4bdd8e173c9",
"assets/packages/social_login_buttons/lib/assets/microsoft-logo.png": "506d81b95bc13a238aad774db3626064",
"assets/packages/social_login_buttons/lib/assets/twitter-logo.png": "0b7b56a1b553e327d8a9d8da3d55eb72",
"assets/packages/social_media_buttons/fonts/SocialMediaIcons.ttf": "be271838cfb555093a41e12292acce83",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "e3f870ea9c97f7f407d160ffc9ea0ed2",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "baccea236ec24560a3208f8c8587c23e",
"icons/Icon-512.png": "8e5878fc886eacbca9cad38797359d14",
"icons/Icon-maskable-192.png": "baccea236ec24560a3208f8c8587c23e",
"icons/Icon-maskable-512.png": "8e5878fc886eacbca9cad38797359d14",
"index.html": "b79a19288f44953bbffc17f7232c7138",
"/": "b79a19288f44953bbffc17f7232c7138",
"main.dart.js": "af0ea92c1dbbcc2acdce443e3c4cba19",
"manifest.json": "de45d5365b72d7b3b4cc8742035022a5",
"version.json": "394b507f03e35d3dee0fc0bd46ca461e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
