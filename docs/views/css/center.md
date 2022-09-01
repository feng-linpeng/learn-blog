# CSS居中方法

## 水平居中

### 行内元素
``` css
.parent{ text-align: center;}
```

### 块级元素
``` css
/* margin */
.parent { margin: 0 auto;} 

/* flex */
.parent { 
  display: flex;
  justify-content: center;
}

/* transform */
.son { 
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

/* position + -margin */
.son {
  position: absolute;
  width: 元素宽度;
  left: 50%;
  margin-left: calc(-0.5 * 元素宽度)
}

/* 需已知元素宽度 */
.son {
  position: absolute;
  width: 元素宽度;
  left: 0;
  right: 0;
  margin: 0 auto;
}
```

## 垂直水平居中

### 行内元素
``` css
.parent { height: 元素高度; text-align: center; }
.son { line-height: 元素高度; }
```
### 块级元素
``` css
/* flex */
.parent { 
  display: flex;
  align-items: center;
  justify-content: center;
}

/* transform */
.son { 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* position + -margin */
.son {
  position: absolute;
  width: 元素宽度;
  height: 元素高度;
  top: 50%;
  left: 50%;
  margin-top: calc(-0.5 * 元素高度)
  margin-left: calc(-0.5 * 元素宽度)
}

/* 需已知子元素的宽高 */
/* 方式1 */
.son {
  position: absolute;
  width: 元素宽度;
  height: 元素高度;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
/* 方式2 */
.son {
  position: absolute;
  top: calc(50% - 元素高度 / 2);
  left: calc(50% - 元素宽度 / 2);
}

/* 需已知父子元素的宽高 */
.parent {
  width: 父元素宽度;
  height: 父元素高度;
  position: relative;
}
.son {
  position: absolute;
  width: 子元素宽度;
  height: 子元素高度;
  top: 父元素高度 / 2;
  left: 父元素宽度 / 2;
  margin-top: -0.5 * 子元素高度;
  margin-left: -0.5 * 子元素宽度;
}
```