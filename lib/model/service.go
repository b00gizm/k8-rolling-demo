package model

import "sync"

type Service struct {
	Uid       string            `json:"uid"`
	Name      string            `json:"name"`
	Labels    map[string]string `json:"labels"`
	Selectors map[string]string `json:"selectors"`
	Pods      []*Pod            `json:"pods"`

	mu sync.Mutex
}

func NewService(uid, name string, labels, selectors map[string]string) *Service {
	return &Service{
		Uid:       uid,
		Name:      name,
		Labels:    labels,
		Selectors: selectors,
		Pods:      make([]*Pod, 0),
		mu:        sync.Mutex{},
	}
}

func (s *Service) AddPod(pod *Pod) {
	s.mu.Lock()
	s.Pods = append(s.Pods, pod)
	s.mu.Unlock()
}
