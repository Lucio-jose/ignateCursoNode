module.exports ={
    "type":"postgres",
    "host":"localhost",
    "username":"",
    "password":"",
    "port":"",
    "database":"",
    entities: ["src/app/models/*.ts"],
    migrations: ["src/database/migrations/*.ts"],
    cli: {
          migrationsDir: "src/database/migrations",
    },
}