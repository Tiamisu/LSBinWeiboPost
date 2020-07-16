# LSBinWeiboPost
将文字隐藏在微博（To do）/Lofter图片中
使用方法：

## 加密

任意创建一篇lofter新文字post，上传一张约500X500的png格式图片并保证其为文章中的第一张图片,其它内容不限。
发布之后进入文章页面按F12打开控制台，将encryptDemo.js的全部内容复制到控制台中，把第一行var text="....."双引号内的内容替换成想要写的内容。按回车执行。如果没有提示错误，将图片另存为到本地。
如果提示cross-origin错误,在浏览器地址栏内输入about:config, 搜索 img-cross 一项，将false改为true，再运行脚本一次。
编辑原来的post，把图片换成之前存下来的图片。

## 解密

打开存有加密图片post，把decrypt.js的内容复制到浏览器控制台并运行，文章便会出现在原文的下方。

## To do list
- Apply AES encrypt to the plaintext
- Write a seperate webpage for encryption.
- Weibo Post.
