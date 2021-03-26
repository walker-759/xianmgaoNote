### mongodb操作
    安装就不说了 去官网看文档
    开启mongodbServer服务
      1、控制面板--》管理工具-》服务-》mongodbServer 开启
### 使用
      1. 随便在哪创建一个用于存放数据库的文件夹。(其实就是创建一个数据库)
      2. 挂载 mongod --dbpath d:\mongo 后面跟这个数据库文件夹的地址
      3.mongo 就是在命令行下面开启mogo环境，操作刚才挂载的数据库
      这三部操作完之后就可以在命令行下面打开自己创建的数据库，使用命令可以增删改查了

### 数据库导入
      1.mongoimport(导入命令) --db XXXX(数据库是哪个，是你已经挂载了哪个数据库，有三个默认的 admin等等，可以随便写一个，会自动创建) --collection(集合 随便写，自己创建) XXXX --file XXXX(导入的文件地址,可以是json，txt) --drop(用新的覆盖旧的)

      2.导入文件格式，json不要数组，不要逗号
      ```
        { "isopen": true, "isdefot":true,  "name": "(UTC-12:00) 国际日期变更线西", "key": "Etc/GMT+12" }
        { "isopen": true, "isdefot":false,  "name": "(UTC-11:00) 协调世界时-11  ", "key": "Etc/GMT+11" }
      ```

### 注意事项
    集合一定要以s结尾，不然node操作不了
    node操作数据库一定要挂载，但是不一定非要用mogo进入mongo环境

### 常用命令
     mongo:进入到mongo环境，可以在该环境内执行命令。
     show dbs:查看当前的数据库列表
     use my:要使用数据库my
     show collections:查看当前数据库当中的集合列表。
     db.xxx.find()  查看当前集合中的所有数据

     剩下的去看完档把