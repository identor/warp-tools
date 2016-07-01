Warp Tools
===================

__Warp Tools__ is a command line tool for the Warp Framework. It is designed to work with projects built on-top of the [WarpServer](http://github.com/jakejosol/warp-server).

## Installation

To install Warp Tools via npm, simply use the install command to save it globally:

```javascript
npm install -g warp-tools
```

## Getting Started

### Creating a New Project

To create a new Warp project, simply execute the following command:

```bash
warp new <name> [destination]
```

For example:

```bash
warp new sample-project
[Warp Tools 2016-07-01 08:41:27] Creating `sample-project`...
Enter Desired API Key [auto-generated key]: r13f8hn189r93f
Enter Desired Master Key [auto-generated key]: 31r80feu1384gh9
Enter DB Host [localhost]: localhost
Enter DB Port [3306]: 3306
Enter DB User [root]: root
Enter DB Password: password
Enter Default DB: default_db

[Warp Tools 2016-07-01 08:45:58] Create : warp-config.json
[Warp Tools 2016-07-01 08:45:58] Create : sample-project
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/package.json
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/app.js
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/.gitignore
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/public
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/bin
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/bin/www
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/app
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/public/javascripts
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/public/storage
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/public/images
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/public/stylesheets
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/app/server
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/app/server/api.js
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/app/client
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/app/client/main.js
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/app/server/models
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/app/server/models/user.js
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/app/server/models/session.js
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/app/server/functions
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/app/server/functions/.gitkeep
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/app/server/migrations
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/app/server/migrations/.gitkeep
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/app/server/migrations/201607010845-initial-migration.json
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/app/server/queues
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/app/server/queues/.gitkeep
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/app/client/subclasses
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/app/client/subclasses/.gitkeep
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/app/server/views
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/app/server/views/index.htm
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/app/server/routes
[Warp Tools 2016-07-01 08:45:58] Create : sample-project/app/server/routes/index.js
```

### Initializing Warp Tools in an Existing Project

To initialize Warp Tools in an existing Warp project, simply execute the following command:

```bash
warp init
```

## Migrations

### Creating a new Migration

To create a new Migration, simply execute the following command:

```bash
warp migrate:new <id> [destination]
```

For example:

```bash
warp migration:new create-alien-table
[Warp Tools 2016-07-01 09:00:55] Creating migration `201607010900-create-alien-table`...
[Warp Tools 2016-07-01 09:00:55] Create : 201607010900-create-alien-table.json
```

### Saving a Migration

To save a Migration to the backend, simply execute the following command:

```bash
warp migrate:save <id> [destination]
```

For example:

```bash
warp migration:save create-alien-table
[Warp Tools 2016-07-01 09:00:55] Saving migration `201607010900-create-alien-table`...
[Warp Tools 2016-07-01 09:00:55] `201607010900-create-alien-table.json` saved!
```

### Updating a Migration

To update a Migration in the backend, simply execute the following command:

```bash
warp migrate:update <id> [destination]
```

For example:

```bash
warp migration:update create-alien-table
[Warp Tools 2016-07-01 09:00:55] Updating migration `201607010900-create-alien-table`...
[Warp Tools 2016-07-01 09:00:55] `201607010900-create-alien-table.json` saved!
```

### Commiting Migrations

To commit pending Migrations in the backend, simply execute the following command:

```bash
warp migrate:commit
```

For example:

```bash
warp migration:commit
[Warp Tools 2016-07-01 09:00:55] Committing migrations...
[Warp Tools 2016-07-01 09:00:55] { status: 200, message: 'Success', result: ['201607010900-create-alien-table'] }
```

### Reverting Latest Migration

To revert the latest Migration in the backend, simply execute the following command:

```bash
warp migrate:revert
```

For example:

```bash
warp migration:revert
[Warp Tools 2016-07-01 09:00:55] Reverting latest migration...
[Warp Tools 2016-07-01 09:00:55] { status: 200, message: 'Success', result: { id: '201607010900-create-alien-table' } }
```

### Resetting Migrations

To reset Migrations in the backend, simply execute the following command:

```bash
warp migrate:reset
```

For example:

```bash
warp migration:reset
[Warp Tools 2016-07-01 09:00:55] Resetting migrations...
[Warp Tools 2016-07-01 09:00:55] { status: 200, message: 'Success', result: ['201607010900-create-alien-table'] }
```





