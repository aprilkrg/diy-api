Initialize project:
``` bash
npm init -y
echo "node_modules" >> .gitignore
npm i express pg sequelize
sequelize init
```

- Plan out model
what properties should it have? what datatypes should those be? 
do we need to consider how it will work with a second model?


- Set db name and dialect in config.json
- Create & migrate model with sequelize commands

Create database:
```bash
sequelize db:create
sequelize model:create --name=thread --attributes title:string,content:string,parent_forum:string,user:string
sequelize db:migrate
```

- Open psql shell to check database exists and has relations


- Create server


- Connect model to server
- Test with a db test file


- Stub out GET & POST routes
- Stub out PUT & DELETE route