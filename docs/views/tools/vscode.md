# VsCode相关

## 下载失败&速度过慢
复制vscode官方下载链接并替换域名部分为 vscode.cdn.azure.cn （vscode国内镜像地址）

## 常用快捷键
| 按键 | 功能 | 按键 | 功能 |
| ---- | ---- | ---- | ---- |
| Alt+ ↑ / ↓ | 向上/向下移动行 | Ctrl + P | 转到文件 |
| Shift+Alt + ↓ / ↑ | 向上/向下复制行 | Ctrl + Tab | 切换选项卡移动焦点 |
| Ctrl+Shift+K | 删除行 | F3 / Shift + F3 | 查找下一个/上一个 |
| Ctrl+Shift+Enter | 在上面插入行 | Alt + Enter | 选择查找匹配的所有出现 |
| Ctrl+Shift+\ | 跳到匹配的括号 | Alt + C / R / W | 切换区分大小写/正则表达式/整个词 |
| Ctrl+Shift+[ | 折叠当前区域 | Alt +单击 | 插入光标 |
| Ctrl+Shift+] | 展开当前区域 | Ctrl + F2 | 选择当前字的所有出现 |
| Ctrl+K Ctrl+[ | 折叠所有子区域 | F12 | 转到定义 |
| Ctrl+K Ctrl+] |	展开所有子区域 | Alt + F12 | Peek定义 |
| Ctrl+K Ctrl+0 |	折叠所有区域 | Ctrl+F4, Ctrl+W | 关闭编辑器 |
| Ctrl+K Ctrl+J |	展开所有区域 | Ctrl+\ | 拆分编辑器 |
| Shift+Alt+A |	切换块注释 | Ctrl+ 1 / 2 / 3 | 聚焦到第1，第2或第3编辑器组 |
| Ctrl + G | 转到行 | Ctrl+K S	全部保存

## 代码片段
::: tip 代码片段配置
vscode -> 文件 -> 首选项 -> 配置用户代码片段 -> 选择已有或者新建代码片段进行编辑  
可以在对应的文件内使用快捷指令快速生成代码片段
:::
快捷命令示例
``` json
// 自定义名称
"consoleLog":{ 
	// 表示代码片段用于哪种语言，不同的语言之间用逗号分隔（tip：省略该属性即默认所有地方均有效）
	"scope": "javascript",
	// 简写方式
	"prefix": "cll", 
	// 需要简写的代码，数组每一项即为一行
	"body": [ 
		// $ 为占位符，快捷生成代码后 光标默认出现在 $ 位置 可以有$1 $2 $3 ...等 
		// /n 换行符 \ 转义符
		"console.log('$1', $1)",
	],
	// 相关描述信息
	"description": "console.log打印",
}
```
Js-打印功能的快捷命令
``` json
"consoleLog":{
	"prefix": "cll",
	"body": [
		"console.log('$1', $1)",
	],
	"description": "console.log打印",
},
"consoleWarn":{
	"prefix": "clw",
	"body": [
		"console.warn('$1', $1)",
	],
	"description": "console.warn警告打印",
},
"consoleError":{
	"prefix": "cle",
	"body": [
		"console.error('$1', $1)",
	],
	"description": "console.error报错打印",
},
"consoleClear":{
	"prefix": "clc",
	"body": [
		"console.clear()",
	],
	"description": "console.clear清除打印日志",
},
"consoleGroup":{
	"prefix": "clg",
	"body": [
		"console.group('$1')",
	],
	"description": "console.group创建打印分组",
},
"consoleGroupEnd":{
	"prefix": "clge",
	"body": [
		"console.groupEnd()",
	],
	"description": "console.groupEnd结束打印分组",
},
"consoleTime":{
	"prefix": "clt",
	"body": [
		"console.time('$1')",
	],
	"description": "console.time结束打印时间",
},
"consoleTimeEnd":{
	"prefix": "clte",
	"body": [
		"console.timeEnd('$1')",
	],
	"description": "console.timeEnd结束打印时间",
	},
```