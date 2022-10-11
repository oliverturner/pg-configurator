@app
pg-configurator

@aws
region eu-west-2

@http
get  /api/v1/apps
get  /api/v1/apps/:dataID
put  /api/v1/apps/:dataID

@static
prune true
spa true

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
