# 失物招领系统
是自己在本科（南通大学）期间，完成的毕设作品。
缺少在线聊天功能，回帖提示、以及一些功能上、安全上的一些问题。

前端使用Vue
后端使用Koa
数据库Mysql

server文件夹为后端代码

app.js为后端启动文件



## 账号
没有编写修改权限的代码，需要手动在数据库power字段中修改
power = 1; 管理员
power = 2; 普通用户

## 失物
cate2 = 1; 丢失物品
cate2 = 2; 捡到物品

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



