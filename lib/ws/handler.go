package ws

import (
	"fmt"
	"github.com/gorilla/websocket"
	h "k8-rolling-demo/lib/http"
	"net/http"
	"time"
)

const serviceName string = "chefkoch-demo-np"

func WsHandler(w http.ResponseWriter, r *http.Request) {
	wsupgrader := websocket.Upgrader{
		ReadBufferSize:  1024,
		WriteBufferSize: 1024,
	}

	conn, err := wsupgrader.Upgrade(w, r, nil)
	if err != nil {
		fmt.Println("Failed to set websocket upgrade: %+v", err)
		return
	}

	_, _, err = conn.ReadMessage()
	if err != nil {
		fmt.Println("Failed while reading message: %+v", err)
		conn.Close()
	}

	client := h.DefaultHttpClient()
	ticker := time.NewTicker(time.Second)
	go func() {
		for _ = range ticker.C {
			svc, err := client.FetchServiceDetails(serviceName)
			if err != nil {
				fmt.Println("Failed while fetching service details: %+v", err)
				continue
			}

			conn.WriteJSON(svc)
		}
	}()
}
