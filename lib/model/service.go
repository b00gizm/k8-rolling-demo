package model

type Service struct {
	Uid       string            `json:"uid"`
	Name      string            `json:"name"`
	Labels    map[string]string `json:"labels"`
	Selectors map[string]string `json:"selectors"`
	Pods      []Pod             `json:"pods"`
}
