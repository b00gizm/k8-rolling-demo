# k8-rolling-demo

Companion demo for my talk at [Bonn Agile goes Docker Cluster](http://www.meetup.com/de-DE/Bonn-Agile/events/230821342/) meetup in May 2016.

## Requirements

* Docker
* Kubernetes
* Go >= 1.5
* [Glide](https://glide.sh/)
* Node.js >= 5.6

## Installing

Clone the repository:

```bash
$ cd $GOPATH/src
$ git clone https://github.com/b00giZm/k8-rolling-demo.git
$ cd k8-rolling-demo
```

Copy `.env.example` to `.env` and customize it to your needs

```bash
$ cp .env.example .env
$ vim .env
```

Install Go dependencies:

```bash
$ glide install
```

Install frontend dependencies:

```bash
$ npm install
```

Build frontend assets:

```bash
$ npm run build
```

## Running

Run the initial Kubernetes config:

```bash
$ bin/k8/init
```

Start the web server:

```bash
$ bin/start
```

and navigate to [http://localhost:8080](http://localhost:8080) in your browser.

You can then run the following two demos:

* Rolling Update
* Canary Deployment

```bash
$ bin/k8/rolling
$ bin/k8/canary
```

All changes while running both demos can be seen in real time.

## Open Source

The following awesome open source frameworks and libraries were used in this project.

### Backend

* [Gin](https://gin-gonic.github.io/gin/)
* [Gorilla Websocket](https://github.com/gorilla/websocket)
* [Jason](https://github.com/antonholmquist/jason)

### Frontend

* [Animate.css](http://daneden.github.io/animate.css/)
* [Hint.css](http://kushagragour.in/lab/hint/)
* [React](https://facebook.github.io/react/)
* [Webpack](https://webpack.github.io/)

## Maintainer

Pascal Cremer

* Email: <hello@codenugget.co>
* Twitter: [@b00gizm](https://twitter.com/b00gizm)
* Web: [http://codenugget.co](http://codenugget.co)

## License

>The MIT License (MIT)
>
>Copyright (c) 2016 Pascal Cremer
>
>Permission is hereby granted, free of charge, to any person obtaining a copy
>of this software and associated documentation files (the "Software"), to deal
>in the Software without restriction, including without limitation the rights
>to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
>copies of the Software, and to permit persons to whom the Software is
>furnished to do so, subject to the following conditions:
>
>The above copyright notice and this permission notice shall be included in all
>copies or substantial portions of the Software.
>
>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
