@app
pg-configurator

# TODO: destroy this app: 1. use /api namespace; 2. recreate in eu-west-1
@aws
region us-west-2
runtime nodejs16.x

@static
prune true
spa true

@http
get  /v1/apps
get  /v1/apps/:dataID
# put  /v1/apps/:dataID
# post /v1/apps/:dataID

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
