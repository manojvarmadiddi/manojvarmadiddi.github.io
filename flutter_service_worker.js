'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a979be01377f3a479154b1cafbd59587",
"version.json": "394b507f03e35d3dee0fc0bd46ca461e",
"index.html": "1c7da8d8703745a0414d2dc8f52d479c",
"/": "1c7da8d8703745a0414d2dc8f52d479c",
"main.dart.js": "3226df9452d5cf3eae16e0012c8f0e33",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "8e55fac14bd4929bacca8684c50b5c6c",
"icons/Icon-192.png": "cd6cb9015f4fee982429e8d302a8f0eb",
"icons/Icon-maskable-192.png": "cd6cb9015f4fee982429e8d302a8f0eb",
"manifest.json": "de45d5365b72d7b3b4cc8742035022a5",
"assets/NOTICES": "6815285201445598d818ada8c8dba0f9",
"assets/FontManifest.json": "0d9493676782871aabedf0f1169dd117",
"assets/AssetManifest.bin.json": "836758049cbec80f81098d9fdf81e6ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "1fcba7a59e49001aa1b4409a25d425b0",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/social_login_buttons/lib/assets/google-logo.png": "28b51fa69f1f0cb8a8f7a4bdd8e173c9",
"assets/packages/social_login_buttons/lib/assets/2.0x/google-logo.png": "28b51fa69f1f0cb8a8f7a4bdd8e173c9",
"assets/packages/social_login_buttons/lib/assets/2.0x/twitter-logo.png": "0b7b56a1b553e327d8a9d8da3d55eb72",
"assets/packages/social_login_buttons/lib/assets/2.0x/microsoft-logo.png": "506d81b95bc13a238aad774db3626064",
"assets/packages/social_login_buttons/lib/assets/2.0x/apple-logo.png": "a557fdf0eb6b83da96f7bdb2d01db927",
"assets/packages/social_login_buttons/lib/assets/2.0x/apple-black-logo.png": "6ab19330b95a2d9ae68575e0660c37cc",
"assets/packages/social_login_buttons/lib/assets/2.0x/github-logo.png": "168dbc57b649e1f24efd59ee3a65b123",
"assets/packages/social_login_buttons/lib/assets/2.0x/facebook-logo.png": "804cf2a905b2c7460adcaadb3dbfe9ae",
"assets/packages/social_login_buttons/lib/assets/twitter-logo.png": "0b7b56a1b553e327d8a9d8da3d55eb72",
"assets/packages/social_login_buttons/lib/assets/microsoft-logo.png": "506d81b95bc13a238aad774db3626064",
"assets/packages/social_login_buttons/lib/assets/3.0x/google-logo.png": "a6b32c1f07fa2fc81ce254986b971691",
"assets/packages/social_login_buttons/lib/assets/3.0x/twitter-logo.png": "27294190740a30f2b76ee5257f39ad74",
"assets/packages/social_login_buttons/lib/assets/3.0x/microsoft-logo.png": "d00462accd7b9bc230de54830c4b47a1",
"assets/packages/social_login_buttons/lib/assets/3.0x/apple-logo.png": "f3482792f84398f4879483d8d3159d54",
"assets/packages/social_login_buttons/lib/assets/3.0x/apple-black-logo.png": "fd557bc349d7b0ac2dc09bdf89903362",
"assets/packages/social_login_buttons/lib/assets/3.0x/github-logo.png": "93f12731517d2d6ad022935490d84e88",
"assets/packages/social_login_buttons/lib/assets/3.0x/facebook-logo.png": "d23205c8421608e83f9f7c420f3e2e89",
"assets/packages/social_login_buttons/lib/assets/apple-logo.png": "a557fdf0eb6b83da96f7bdb2d01db927",
"assets/packages/social_login_buttons/lib/assets/apple-black-logo.png": "6ab19330b95a2d9ae68575e0660c37cc",
"assets/packages/social_login_buttons/lib/assets/github-logo.png": "168dbc57b649e1f24efd59ee3a65b123",
"assets/packages/social_media_buttons/fonts/SocialMediaIcons.ttf": "be271838cfb555093a41e12292acce83",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "54f748b1787efb7e2c8afe9f0f666e2b",
"assets/fonts/MaterialIcons-Regular.otf": "c8ffe10d9e6e64b245eaa616f3026e88",
"assets/assets/ios_logo.png": "b60075bd08a8b00b10133631e52aa3e8",
"assets/assets/portfolio.jpg": "fb876ec1d7ce5b1330540194ef1b5125",
"assets/assets/profile.JPG": "e786aa05dd22cf99a39b76968da05848",
"assets/assets/web_logo.png": "64b2d069155c6f5a383f0b2061f86a3b",
"assets/assets/android_logo.png": "fa5e4c64fe877ceb1f65388988358620",
"assets/assets/settings_logo.png": "5348222e2c9634a90eeb92fd3cfcdc75",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"favicon.png": "8e55fac14bd4929bacca8684c50b5c6c",
"flutter_bootstrap.js": "1b71eafb0f0684f7166aeeae5e3d3c48",
"version.json": "394b507f03e35d3dee0fc0bd46ca461e",
"main.dart.js": "07e1c4506378d573a077be369ed77efc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
