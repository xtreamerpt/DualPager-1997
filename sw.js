// Importa Firebase no Service Worker para receber notificações com a app fechada
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

const firebaseConfig = {
    databaseURL: "https://pager1997-7a567-default-rtdb.europe-west1.firebasedatabase.app/"
};

firebase.initializeApp(firebaseConfig);

// Escuta mensagens em segundo plano
self.addEventListener('push', function(event) {
    if (event.data) {
        const data = event.data.json();
        const title = data.notification.title || "Nova Mensagem no Pager!";
        const options = {
            body: data.notification.body,
            icon: 'https://cdn-icons-png.flaticon.com/512/1041/1041916.png',
            vibrate: [200, 100, 200]
        };
        event.waitUntil(self.registration.showNotification(title, options));
    }
});