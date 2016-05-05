package main

import (
	"github.com/gin-gonic/gin"
	"k8-rolling-demo/lib/api"
)

var router *gin.Engine

func init() {
	router = gin.Default()

	apiGroup := router.Group("/api")
	{
		apiGroup.GET("/", api.HelloApi)
	}
}
