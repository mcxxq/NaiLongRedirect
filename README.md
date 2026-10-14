# 北美奶龙理工学院 — 域名跳转页

基于 React、Vite 与 Tailwind CSS 的单页跳转页面。

## 启动

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
npm run preview
```

## 添加校徽

将校徽图片放到 `public/rpi-seal.png`。如果暂时没有图片，页面会显示简洁的 RPI 字母占位样式。

## 跳转行为

- 页面加载后 5 秒自动跳转至 `https://www.rpi.edu/`
- 页面头部配置了 5 秒 Meta Refresh 作为兜底
- “立即拥抱奶龙”链接可立即手动跳转
- `noscript` 提供 JavaScript 关闭时的跳转链接

注意：如果部署平台或服务器对页面头部做了缓存/重写，请确认 `index.html` 的 Meta Refresh 未被移除。
