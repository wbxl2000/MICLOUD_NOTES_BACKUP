## 小米云便签 数据备份 抓包后数据处理脚本



### 数据获取方法

进入小米云服务便签页面 https://i.mi.com/note/h5#/

页面加载时`F12`抓包，会看到诸如此类的文件，每个文件存储了200条你的便签信息。

其中最短的那一条是前`200`条，其他的文件的参数都带有`SyncTag`。

将这些文件的返回值`json`整合到一起，如示例数据变为`json`数组，放到`mi_notes.json`里.



### 数据处理

在同目录下`node main.js`运行`js`脚本，会自动处理`mi_notes.json`并生成txt文件，可以进入`main.js`自行更改输出类型。



### 其他

因`SyncTag`参数不知其加密过程所以没有用`python`爬虫，且登录界面有巨巨巨巨巨长的加密后的登录验证码。

如果大佬有解密方法或其他优质方法，聆听指教。

by qer.



### 部分示例数据 `json数组`

```json
[
  {
    "snippet": "欢迎使用MIUI便签！\n\n用最简单的方式，抓住一闪而过的灵感，写下至关重要的句子，保存此时此刻的心情。\n",
    "modifyDate": 1356969609248,
    "colorId": 0,
    "subject": "",
    "alertDate": 0,
    "id": 8029298837029472,
    "tag": 8029298837029472,
    "type": "note",
    "folderId": 0,
    "createDate": 1356969609248,
    "status": "normal",
    "setting": {
      "data": [
        {
          "digest": "fd958dc02a26b7175aebd2a76b8461a507bc8f5b",
          "mimeType": "image/jpeg",
          "fileId": "908715623.gGKn1aGxAZF4-x12cxreyw"
        },
        {
          "digest": "b7b1113dbef31f06225de0f21d113f588d59a523",
          "mimeType": "image/jpeg",
          "fileId": "908715623.9ZxXaTEAVQyNiJeLDXhsJQ"
        },
        {
          "digest": "94d5b454befdf7dcd0d2ad6407b0777425b02a9c",
          "mimeType": "image/jpeg",
          "fileId": "908715623.qfHwX6r1FxWa1pzLnkxYOA"
        }
      ],
      "stickyTime": 0
    }
  },
  {
    "snippet": "《美丽心灵》、《雨人》、《波拉克》、《暗物质》、《天才瑞普利》、《猫鼠游戏》、《香水》、《一级恐惧》、《心灵捕手》、《莫扎特传》、《证据》、《海上钢琴师》、《电锯惊魂》、《沉默的羔羊》、《非常嫌疑犯》、《寻找弗罗斯特》",
    "modifyDate": 1400328859581,
    "colorId": 0,
    "subject": "",
    "alertDate": 0,
    "id": 8029298837553760,
    "tag": 8029298837553760,
    "type": "note",
    "folderId": 0,
    "createDate": 1400328849423,
    "status": "normal",
    "setting": {
      "stickyTime": 0
    }
  },
  {
    "snippet": "不论将来做",
    "modifyDate": 1496678786792,
    "colorId": 0,
    "subject": "",
    "alertDate": 0,
    "type": "note",
    "folderId": 0,
    "setting": {
      "themeId": 0,
      "stickyTime": 0,
      "version": 0
    },
    "alertTag": 0,
    "id": "13354989416890400",
    "tag": "13354989416890400",
    "createDate": 1496678781991,
    "status": "normal"
  },
]
```

