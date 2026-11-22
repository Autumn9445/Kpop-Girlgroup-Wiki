# K-pop 第四代女團入門：aespa 與 IVE 的風格比較
> **生成式 AI 課程專題成果**：基於 LLM Wiki 知識工程與前端互動技術構建的教學型簡報系統

---

## 📖 專案簡介 (Overview)

本專案旨在探討韓國流行音樂（K-pop）第四代女團的崛起與風格轉移。傳統 K-pop 女團長期受限於「清純可愛 (Innocent)」與「強勢反叛 (Girl Crush)」的非黑即白二元對立；本專案以第四代代表性雙子星 **aespa** 與 **IVE** 為核心案例，剖析其如何分別透過「重度科幻虛擬宇宙」與「現代名媛自愛哲學」開拓全新的文化範式。

專案嚴格遵循知識工程標準，建立具備**聲明級可追溯性（Claim-level Traceability）**的 LLM Wiki 作為單一事實來源（SSOT），並產出可供教學演示的 **9 頁高互動 HTML 簡報**，支援部署至 **GitHub Pages**。

---

## 🗂️ 專案目錄結構 (Folder Structure)

```text
Kpop-Girlgroup-Wiki/
├── AGENTS.md                                             # 知識庫建置與維護標準作業手冊 (SOP)
├── README.md                                             # 專案總覽與部署指南
│
├── 01_raw_sources/                                       # [原始資料層] 5 篇核心資料來源摘要與元資料
│   ├── SRC-01_smtown_aespa_profile.md                    # aespa 官方資料 (SM Entertainment)
│   ├── SRC-02_starship_ive_profile.md                    # IVE 官方資料 (Starship Entertainment)
│   ├── SRC-03_aespa_smcu_hyperpop_analysis.md            # SMCU、KWANGYA 與 SMP 音樂分析 (Billboard/NME)
│   ├── SRC-04_ive_narcissism_music_analysis.md           # 自愛美學、納西瑟斯翻轉與 Dark Pop 評測 (NME)
│   └── SRC-05_4th_gen_paradigm_comparison.md             # 第四代範式轉移與年終榜單比較 (Billboard/Dazed)
│
├── 02_wiki_knowledge/                                    # [知識庫核心層] 結構化 Markdown Wiki
│   ├── INDEX.md                                          # 知識庫總覽地圖 (Map of Content)
│   ├── entities/                                         # 實體知識頁面 (aespa.md, ive.md)
│   ├── concepts/                                         # 概念知識頁面 (smcu, chaebol_crush, 4th_gen)
│   └── comparisons/                                      # 深度交叉比較 (視覺、音樂、商業文化策略)
│
├── 03_provenance_and_logs/                               # [稽核與紀錄層] 溯源與反思紀錄
│   ├── source_manifest.json                              # 來源元數據資料庫 (URL、狀態與取得方式)
│   ├── ingest_log.md                                     # 資料匯入與網址檢核日誌
│   ├── verification_log.md                               # 品質驗證檢核表 (自動化靜態 + 人工瀏覽器實測)
│   ├── error_and_reflection.json                         # 真實執行問題 (REAL-ISSUE-001) 與學術研討案例
│   └── workflow_execution.md                             # 閉環工程流程演進追蹤
│
├── 04_presentation/                                      # [簡報原始碼層]
│   ├── index.html                                        # 互動簡報主程式
│   ├── css/style.css                                     # 深色 Glassmorphism 與雙團專屬配色樣式表
│   └── js/app.js                                         # 切頁、測驗狀態機與文獻抽屜原生控制器
│
└── docs/                                                 # [GitHub Pages 發布目錄] (與 04_presentation 同步)
    ├── index.html
    ├── css/style.css
    └── js/app.js
```

---

## 📚 五份核心檢核資料來源 (Core Sources)

所有事實性陳述均有以下來源支撐，杜絕模型幻覺：

1. **[SRC-01] aespa Official Profile & Debut Information**（SM Entertainment 官方藝人專頁：`https://aespa.com` / `https://aespa-official.jp/profile/`）
   * *佐證事實*：出道日（2020.11.17）、首單〈Black Mamba〉、4 位成員配置、æ 虛擬雙生分身架構。
2. **[SRC-02] IVE Official Profile & Debut Background**（Starship Entertainment 官方藝人專頁：`https://www.starship-ent.com/musician/ive`）
   * *佐證事實*：出道日（2021.12.01）、首作《ELEVEN》、6 位成員配置、前 IZ*ONE 背景及「I HAVE」宗旨。
3. **[SRC-03] How aespa Is Pushing K-Pop into the Future with the Metaverse**（Billboard / NME 專題報導）
   * *佐證事實*：SMCU 曠野世界觀設定（FLAT, SYNK, nævis）、SMP 傳承、Hyperpop 金屬聲響與拼貼變奏。
4. **[SRC-04] IVE’s new single ‘Love Dive’ is a luxurious plunge into the girl group’s alluring sound**（NME 具體單曲評論，作者：Tássia Assis：`https://www.nme.com/reviews/track/ive-love-dive-review-3200179`）
   * *佐證事實*：翻轉希臘水仙神話（Narcissism as Empowerment）、現代名媛風（Chaebol-Crush）與 Dark Pop 律動。
5. **[SRC-05] The 25 Best K-Pop Songs of 2022: Staff Picks**（Billboard 年度專題：`https://www.billboard.com/lists/best-k-pop-songs-2022/`）
   * *佐證事實*：第四代女團突破二元對立之歷史範式、aespa 與 IVE 風格對照矩陣。

---

## 🔄 知識工程閉環架構 (The Engineering Loop / Graph)

本專案採閉環式 LLM 知識處理流程，並實施「品質關卡左移（Shift-Left）」以降低重工成本：

```
[1. 資料取得 (Acquisition)] 
       │ (鎖定官方與權威樂評)
       ▼
[2. 資料攝取 (Ingestion)] 
       │ (萃取元數據至 01_raw_sources/，杜絕未授權全文搬運)
       ▼
[3. 來源驗證 (Verification & Audit)] ──(發現 NME 網址分類落差: REAL-ISSUE-001)──┐
       │ (品質關卡左移: 校正 SRC-02, SRC-04 網址)                               │
       ▼                                                                        │
[4. Wiki 整理與知識合成 (Wiki Synthesis)] <──────────────────────────────────────┘
       │ (產出實體頁、概念頁與深度比較頁，標註 [SRC-XX] 引用)
       ▼
[5. HTML 簡報生成 (Presentation Generation)] 
       │ (產出 9 頁原生 HTML/CSS/JS 高互動簡報)
       ▼
[6. 自動化靜態檢驗 (Automated Static Audit)] 
       │ (執行 test_presentation.ps1: 結構 9/9、DOM ID、無外部依賴 通過)
       ▼
[7. 使用者人工瀏覽器實測 (Manual Testing)] 
       │ (Windows Chrome 實測: 簡報開啟、切頁、抽屜展開、Q1~Q3 測驗機制 通過)
       ▼
[8. 靜態部署至 GitHub Pages (docs/ 目錄託管)]
```

---

## 🖥️ HTML 教學簡報特色與預覽 (Presentation Highlights)

簡報存放在 `04_presentation/` 及 `docs/`，具備以下特色：
* **雙團專屬視覺**：aespa 區塊採用賽博金屬紫青光暈；IVE 區塊採用法式名媛粉金香檳調。
* **高互動控制器**：支援上一頁/下一頁、鍵盤方向鍵（`←` / `→`）、`ESC` 關閉抽屜與進度條指示。
* **即時隨堂測驗 (Slide 8)**：內建 3 題狀態機測驗，點擊後選項變色並即時展示正誤解析。
* **聲明級文獻抽屜**：全簡報包含 41 處 `[SRC-XX]` 標記，點擊即可自右側展開文獻抽屜並自動滾動高亮。

### 🌐 預覽與線上瀏覽方式
* **本機預覽**：以瀏覽器直接開啟 `docs/index.html` 或 `04_presentation/index.html`。
* **線上瀏覽（GitHub Pages 發布後）**：
  ```text
  https://<你的GitHub帳號>.github.io/<你的倉庫名稱>/
  ```

---

## 🔍 測試與稽核紀錄清單 (Audit Logs)

* **[verification_log.md](03_provenance_and_logs/verification_log.md)**：包含自動化靜態檢查紀錄與 Windows Chrome 人工實測結果（清楚區隔已驗證項目與待驗證項目）。
* **[error_and_reflection.json](03_provenance_and_logs/error_and_reflection.json)**：記錄真實發生的來源校正問題（`REAL-ISSUE-001`：NME Track 網址校正與左移反思）以及三項概念研討案例。
* **[workflow_execution.md](03_provenance_and_logs/workflow_execution.md)**：完整閉環工程歷程追蹤與 GitHub Pages 就緒度檢查報告。
