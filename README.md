# Proxy

Proxies allow us to make requests to one server but have that request get routed somwhere else.

```js
const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/api", { target: "http://localhost:4000/" }));
};
```
