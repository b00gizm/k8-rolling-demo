package main

import (
	"github.com/gin-gonic/gin"
	"k8-rolling-demo/lib/api"
	"net/http"
)

var router *gin.Engine

func init() {
	router = gin.Default()

	apiGroup := router.Group("/api")
	{
		apiGroup.GET("/", api.HelloApi)
	}

	// main html
	router.LoadHTMLGlob("templates/*")
	router.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.tmpl", gin.H{})
	})
}
