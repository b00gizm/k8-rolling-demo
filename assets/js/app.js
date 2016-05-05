document.addEventListener('DOMContentLoaded', () => {

    const conn = new WebSocket('ws://localhost:8080/ws/service');
    conn.onopen = () => {
        conn.send('ready');
    }

    conn.onmessage = (msg) => {
        console.log(JSON.parse(msg.data));
    };

});
