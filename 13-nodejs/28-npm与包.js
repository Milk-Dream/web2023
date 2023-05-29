//快速创建package.json
//npm init -y
//上述命令只能在英文目录下成功运行,所以项目的名称只能用英文
//dependencies
//如果我们拿到一个剔除了node_modules的代码,要使用npm install也可以简写为npm i
//卸载 npm uninstall moment
//如果某些包,只在项目开发阶段会用到,在项目上线后不会用到,则可以
//npm i 包名 -D
//npm install 包名 --save-dev
//npm下包速度慢,是因为国内和国外需要一个漫长的海底光缆
//切换npm的下包镜像源 
//查看当前下包的镜像源
//npm config get registry
//将下包的镜像源切换到淘宝的镜像源
//npm config set registry=https://registry.npm.taobao.org

//解决下包速度慢的问题
//npm i nrm -g
//查看所有可用的镜像源
//nrm ls
//将下包的镜像源切换为taobao镜像
//nrm use taobao