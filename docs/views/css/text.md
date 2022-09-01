# 文本


## 字符超出部分换行
``` css
.wrap {
  overflow-wrap: breal-word;
}
```
## 单行文本溢出隐藏
``` css
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```
## 多行文本溢出隐藏
``` css
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box-;
  -webkit-line-clamp-: 2; /* 把块元素中的内容限制为指定的行数 */
  box-orient: vertical;
}
```