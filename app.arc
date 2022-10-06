@app
pg-configurator

@static
dist
spa false

@http
get /v1/things
get /v1/things/:id

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
