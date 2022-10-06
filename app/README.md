## Introduction

![docs/configurator-ui.png](docs/configurator-ui.png)

The Configurator is an application that provides non-developers with a friendly UI for managing Page and Slot-level configuration

It reads and writes source data to the Apps DB, and writes optimised data (ie requiring no processing by the client) to the `App Config` and `Concepts` Edge Dictionaries read by the App Adapter.

## Architecture

```mermaid
graph TD
  subgraph Heroku
    A[(Apps DB)]
    B((Configurator))

    A --> B --> A
  end

  B  --> C1 & C2 & C3

  subgraph AWS S3
    C3[Backups]
  end

  subgraph Fastly
    C1[(App Config)]
    C2[(Concepts)]
    D[Edge Compute]

    C1 & C2 --> D
  end

  D --> E

  subgraph Client on FT.com
    E[App Adapter]
    F1[Slot]
    F2[Slot]
    F3[Slot]
    F4[Slot]

    E --> F1 & F2 & F3 & F4
  end
```

## Developing

```bash
npm run dev
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
