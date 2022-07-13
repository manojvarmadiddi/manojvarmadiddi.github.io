if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
        .then(function (registration) {
            console.log('Registration successful, scope is:', registration.scope);
        }).catch(function (err) {
            console.log('Service worker registration failed, error:', err);
        });
}
importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js");

/*
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
    const url = 'http://sitaipladminn.azurewebsites.net/#/';
    // event.data.url;
    // Json.parse(event.notification.data.url);

    event.waitUntil(
        clients.matchAll({ type: 'window' }).then(windowClients => {
            // Check if there is already a window/tab open with the target URL
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                // If so, just focus it.
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            // If not, then open the target URL in a new window/tab.
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
});*/
self.addEventListener('notificationclick', function (event) {
    console.log('SW notification click event', event)
    const url1 = 'http://sitaipladminn.azurewebsites.net/#/'
    //JSON.stringify(event.notification.body)
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then(windowClients => {
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                if (client.url === url1 && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(url1);
            }
        })
    );
})
const firebaseConfig = {
    apiKey: "AIzaSyD4HpnCTl5gjphQYuGX-HXUorr-eg6sWvs",
    authDomain: "sitaipl.firebaseapp.com",
    projectId: "sitaipl",
    storageBucket: "sitaipl.appspot.com",
    messagingSenderId: "1075935915241",
    appId: "1:1075935915241:web:c9174183731c01e12d1478",
    measurementId: "G-73LR0YKJ3C"
};
firebase.initializeApp(firebaseConfig);


const messaging = firebase.messaging();
console.log('receiving message........');
messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            return registration.showNotification("New Message");
        });
    return promiseChain;
});
console.log('notification done.......');

