@app
pg-configurator

# TODO: destroy this app: 1. use /api namespace; 2. recreate in eu-west-1
@aws
region us-west-2
runtime nodejs16.x

@static
folder app/build
spa true

@http
get /v1/apps
get /v1/apps/:dataID
/app/*
  method get
  src app/build/

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
