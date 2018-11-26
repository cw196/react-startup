# If you are not using Docker

### development
```
npm install
npm start 
```

### production
```
npm install
npm run build
```

# If you are using docker

### development
```
docker-compose up
```
### production
```
docker-compose -f docker-compose-prod.yml up -d --build
```

#
To access on development server go to: http://0.0.0.0:8080/#/

To access on prod nginx server go to: http://0.0.0.0