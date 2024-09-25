#  AI服務網站版型設計
![Static Badge](https://img.shields.io/badge/Node-v16_up-blue) ![Static Badge](https://img.shields.io/badge/Vite-v4.2.0-blue)

## 資料夾結構
  - assets # 靜態資源放置處
    - images # 圖片放置處
    - scss # SCSS 的樣式放置處

  - layout # ejs 模板放置處
  - pages # 頁面放置處

- JavaScript 程式碼可寫在 main.js 檔案

## 指令
- `npm install` - 初次下載該範例專案後，需要使用 npm install 來安裝套件
- `npm run dev` - 執行開發模式
  - 若沒有自動開啟瀏覽器，可嘗試手動在瀏覽器上輸入
    `http://localhost:5173/<專案名稱>/pages/index.html`
- `npm run build` - 執行編譯模式（不會開啟瀏覽器）
- `npm run deploy` - 自動化部署

## 部署 gh-pages 流程說明
- -> 執行 `npm run deploy` 指令進行自動化部署
  - 自動生成 dist 資料夾，無需進行打包


### 專案呈現 : <https://105555.github.io/design-aiwebsite/>

### 注意事項
- 部署首頁路徑檔名需為 index
- 如因不明原因部署失敗可改為手動部署
  1. 進入 Repo 首頁點擊 Settings
  2. 左側選單切換到 Pages
  3. 點擊 source 更改為 Deploy from a branch 
  4. 點擊 branch 選擇 gh-pages  
