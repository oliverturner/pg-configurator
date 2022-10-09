# PG: Configurator

![docs/configurator-ui.png](docs/configurator-ui.png)

## Introduction
An app to mange the configuration of Project Gwyneth-powered ads

This PoC uses the [Architect](https://arc.codes) framework to scaffold resources
and deploy a serverless app to AWS. Technologies used include Lambda,
DynamoDB, API Gateway and S3.

## Architecture

```mermaid
graph TD
  subgraph AWS
    aws.db[DynamoDB]
    aws.s3[S3 static assets]
    aws.api[Lambda API]
  end

  app((Configurator))

  f.app[pg.ft.com/app]

  f.api[pg.ft.com/api]

  aws.s3 --> app --> f.app

  app
    -- POST/PUT --> aws.api
    -- write    --> aws.db
    -- read     --> aws.api
    -- GET      --> app

  aws.api --> f.api --> E

  subgraph FT.com
    E[App Adapter]
    F1[Slot]
    F2[Slot]
    F3[Slot]
    F4[Slot]

    E --> F1 & F2 & F3 & F4
  end
```

## Development

- In a terminal window, run `npm run dev:api`
- In another terminal window, run `npm run dev:app`

The app will be available at `http://local.ft.com:3000`, reading data from `http://localhost:3333`

## Deployment

- Run `npm run deploy` to build `/app` and deploy assets and infra to AWS
