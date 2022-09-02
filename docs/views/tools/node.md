# Node安装配置

## 版本控制
**多项目，时间跨度较长的开发过程中遇到的node版本来回切换的问题解决方案**
***
#### 下载&安装
  windows下通过 nvm-widnows来对node.js和npm进行版本控制  
  nvm-windows下载地址[https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)  
  选择下载.exe安装文件或.zip压缩文件均可
  ![nvm-windows](/public/img/tools/nvm.png)  
  使用前先删除掉本机已安装过的 nodejs（如果已安装的 nodejs 的话）  
  下载之后运行安装程序一直下一步即可完成后可使用`nvm -v` 来查看是否安装成功  
  ***
#### nvm的一些常用命令
| <div style="width:180px">命令</div> | <div style="width:300px">作用</div> |
| :-- | :-- |
| nvm -v | 查看nvm版本 | 
| nvm ls | 列出所有已安装node版本 |
| nvm ls available | 显示可下载的所有node版本 | 
| nvm install xx.xx.xx | 安装指定的node版本 | 
| nvm uninstall xx.xx.xx | 卸载指定的node版本 |
| nvm use xx.xx.xx | 切换到指定的node版本 | 
| nvm alias name  xx.xx.xx | 为node版本指定别名 | 
| nvm unalias name | 取消别名 | 

## Node

#### 下载&安装
  Node下载地址[https://nodejs.org/en/download/](https://nodejs.org/en/download/)  
  根据你的电脑下载对应位数的安装包
  ![Node](/public/img/tools/node.jpg)  
  选择你需要安装的目录