@app
pg-configurator

@static
dist
spa false

@http
get /v1/apps
get /v1/apps/:dataID

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
