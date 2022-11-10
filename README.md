# @luchao/base-sass
前端项目基础css样式

### 版本及修改内容
版本  | 修改内容|
--------- | --------|
3.0.0  | :flushed: 删除 `font-size` `margin` `padding` `border-width` 奇数px，后期属性均不使用奇数px |
3.0.1  | :sunglasses: 新增 `visibility` `transition` `opacity` `position: static` `height: auto` `width: auto` |
:beetle: 3.0.3  | :sunglasses: 新增 `line-height` 修改 `border-radius` `padding` `margin` 最大值为40px
### 依赖

```
"devDependencies": {
    "css-loader": "^3.6.0",
    "file-loader": "^6.0.0",
    "mini-css-extract-plugin": "^0.9.0",
    "resolve-url-loader": "^3.1.1",
    "sass": "^1.26.5",
    "sass-loader": "^7.3.1"
},
"dependencies": {
    "webpack": "^4.43.0"
}
```


### 安装
    npm install @luchao/base-sass --save