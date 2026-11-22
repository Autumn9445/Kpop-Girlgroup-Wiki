# 工作流程與執行紀錄 (Workflow & Loop Execution Record)

本文件紀錄「K-pop 第四代女團入門：aespa 與 IVE 的風格比較」LLM Wiki 與 HTML 教學簡報之完整閉環工程流程與實測演進。

---

## 一、 閉環架構演進圖 (The Engineering Loop / Graph)

```
[1. 資料取得 (Acquisition)] 
       │ (檢索官方專頁與權威樂評)
       ▼
[2. 資料攝取 (Ingest)] 
       │ (提取元資料、撰寫客觀事實摘要至 01_raw_sources/)
       ▼
[3. 來源驗證 (Verification & Audit)] ──(發現網址分類落差: REAL-ISSUE-001)──┐
       │ (品質關卡左移: 校正 SRC-02, SRC-04 網址)                         │
       ▼                                                                  │
[4. Wiki 整理與知識合成 (Wiki Synthesis)] <────────────────────────────────┘
       │ (撰寫 Entity, Concept, Comparison 知識頁面並標註來源代號)
       ▼
[5. HTML 簡報生成 (Presentation Generation)] 
       │ (產出 04_presentation/ 中的 index.html, style.css, app.js)
       ▼
[6. 自動化靜態檢驗 (Automated Static Audit)] 
       │ (執行 test_presentation.ps1: 結構、DOM ID、括號配對、相對路徑檢查 通過)
       ▼
[7. 使用者人工瀏覽器實測 (Manual Browser Testing in Chrome)] 
       │ (Windows Chrome 實測: 簡報開啟、切頁、抽屜展開、Q1~Q3 測驗機制 全數通過)
       ▼
[8. 靜態部署準備 (Deployment Readiness for GitHub Pages)]
```

---

## 二、 階段 7：使用者人工瀏覽器實測細節 (2026-11-23 實測)

本專案堅持「無證據不宣稱通過」之原則，將人工實測成果明確分層記錄：

1. **已驗證之功能（Verified by User in Chrome）**：
   * **頁面加載與排版**：HTML 簡報順暢載入，深色 Glassmorphism 主題與 CSS 排版正常。
   * **投影片切頁狀態**：成功執行 Slide 9 至 Slide 8 之倒退切頁，導航與進度列狀態機正常。
   * **來源抽屜交互**：抽屜可順暢滑出，SRC-01（aespa 官網）、SRC-02（IVE 官網）、SRC-03（Billboard 專題）卡片內容正常呈現。
   * **互動小測驗狀態機**：
     * Q1（正確選項 A）：點擊後選項轉綠，即時展開正確解析。
     * Q2（錯誤選項測試）：點擊錯誤選項後轉紅，系統自動將正確選項 B（納西瑟斯）標示為綠色，並顯示教學解析。
     * Q3（正確選項 A）：點擊後選項轉綠，即時展開音樂風格解析。
2. **保留未驗證狀態之項目（Unverified Items）**：
   * 手機垂直螢幕觸控體驗（待行動裝置實際檢驗）。
   * 來源抽屜向下滑動至 SRC-04 與 SRC-05 卡片視覺效果（待後續檢驗）。
   * 鍵盤方向鍵連續切頁（待實測）。
   * 外部網址點擊外連跳轉（沙盒封鎖外網，待實際聯網測試）。

---

## 三、 階段 8：GitHub Pages 部署準備檢驗

* **資源自洽性（Self-Contained）**：
  * `04_presentation/index.html` 引用的樣式表與腳本均為相對路徑（`css/style.css`、`js/app.js`）。
  * 經靜態掃描，全目錄中**不存在任何 `file:///` 本地協議或 `C:\` 本機磁碟路徑**。
  * 無需任何後端伺服器（Node.js / Python），可直接由 GitHub Pages 靜態託管。
