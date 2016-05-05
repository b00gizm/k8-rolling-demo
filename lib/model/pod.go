package model

type Pod struct {
	Uid       string            `json:"uid"`
	Name      string            `json:"name"`
	IpAddr    string            `json:"podIp"`
	Labels    map[string]string `json:"labels"`
	Status    string            `json:"status"`
	Condition string            `json:"condition"`
}
