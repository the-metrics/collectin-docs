<script setup>
import ImageLink from '../components/ImageLink.vue'
import chromeImg from "../assets/extension/logo-chrome.png"
import edgeImg from  "../assets/extension/logo-edge.png"

const extensionLinks = {
  chrome: "https://file.collectin.net/extensions/collectin-chrome-extension.crx",
  edge: "https://file.collectin.net/extensions/collectin-edge-extension.crx"
}

</script>

# 安装浏览器插件

## Chrome

### 从 Chrome 应用商店安装

应用商店（web store）地址：https://chrome.google.com/webstore

安装方式：

1. 在 Chrome 的插件市场搜索 🔗 [Collectin](https://chrome.google.com/webstore/search/Collectin),

2. 在 Collectin 插件的详情页面，点击按钮「添加至 Chrome」 即可，见 🔗 [此地址](https://chrome.google.com/webstore/detail/collectin/cobkdpfmbmdppijhflanjljkcgejecji)

### 本地安装-下载安装包

1. 点击下面的链接 🔗，将安装包下载到本地。

<ImageLink :link="extensionLinks.chrome" :img="chromeImg" text="Chrome 安装包" size=60 />

2. 在 Chrome 浏览器的 Extensions 页面中开启 Developer Mode

- 访问地址 🔗 <a href="chrome://extensions" >chrome://extensions</a> （复制链接打开）

<img src="../assets/extension/developer-mode.png" />

3. 将下载的安装包拖入浏览器中

<img src="../assets/extension/drop-to-install.png" />

确认安装之后，在 extensions 列表中存在 Collectin 的插件即表示安装成功 👏

点击左下角开启按钮，现在可以打开一个新的标签页试试～

<img src="../assets/extension/add-success.png" />

## Edge

现在，Edge 由于使用了 Chromium 内核，基本上与 Chrome 可以共享插件的资源，不仅支持从 Chrome 应用商店安装插件，也能支持 crx 的安装包，赞 👍

### 插件市场安装

由于 Edge 的应用商店的审核周期相对较长，版本更新会有滞后；
同时目前 Edge 支持从 Chrome 的应用商店中下载安装插件，所以建议可以从 Chrome 应用商店安装插件，安装方式同 Chrome。

### 本地安装-下载安装包

1. 点击下面的链接 🔗，将安装包下载到本地。

<ImageLink :link="extensionLinks.edge" :img="edgeImg" text="Edge 安装包" size=60 />

2. 在 Edge 浏览器的 Extensions 页面中开启 Developer Mode

- 访问地址 🔗 <a href="edge://extensions" >edge://extensions</a> （复制链接打开）

<img src="../assets/extension/edge-developer-mode.png" />

3. 将下载的安装包拖入浏览器中

<img src="../assets/extension/edge-drop-to-install.png" />

确认安装之后，开启使用即可 👏

<img src="../assets/extension/edge-start-use.png" />

## Firefox

更新中...

## Safari

更新中...
