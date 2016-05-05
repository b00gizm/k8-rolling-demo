package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

var router *gin.Engine

func init() {
	router = gin.Default()

	{
	}

	// main html
	router.LoadHTMLGlob("templates/*")
	router.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.tmpl", gin.H{})
	})
}
