package api

import "github.com/gin-gonic/gin"

func HelloApi(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "hello world",
	})
}
