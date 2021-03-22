import firebase from 'firebase' ;

    const firebaseConfig = {
        apiKey: "AIzaSyDrXq0IVJUsYXuCunLR7hqFBR8x1M2v3JQ",
        authDomain: "filmlysis-417d3.firebaseapp.com",
        projectId: "filmlysis-417d3",
        storageBucket: "filmlysis-417d3.appspot.com",
        messagingSenderId: "786113651381",
        appId: "1:786113651381:web:5a3f5e73331dcfb2bfd4fc",
        measurementId: "G-VH16PDKWCE"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.firestore();
      const storage = firebase.storage();
      firebase.analytics(); 

export {storage,firebase as default };
