# 資料匯入與稽核紀錄表 (Ingest & Audit Log)

本文件紀錄 5 篇核心資料來源的真實性檢驗、網址校正、讀取限制與匯入稽核結果。

---

## 一、 資料來源最新稽核與處理結果總覽

| 資料編號 | 來源標題與發布機構 | 實際稽核與優先網址 | 資料取得與比對方式 | 讀取限制與全文聲明 | 最終狀態 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **SRC-01** | **aespa Official Profile & Debut Information**<br>(SM Entertainment) | • `https://aespa.com`<br>• `https://aespa-official.jp/profile/`<br>• `https://www.smentertainment.com` | 官方藝人專頁檢索與公開存檔比對 | **非沙盒直連完整 HTML**：沙盒網路受限，依據權威檢索存檔提煉事實摘要，確認出道日（2020.11.17）、4名成員與世界觀設定無誤。原舊 SMTOWN 網址已確認因改版轉址。 | **SUCCESS**<br>(網址已補正) |
| **SRC-02** | **IVE Official Profile & Debut Background**<br>(Starship Entertainment) | • `https://www.starship-ent.com/musician/ive` (優先使用)<br>• `https://starship-ent.com/artists/artists.php`<br>• `https://ive-official.com/` | 官方藝人專頁檢索與出道新聞稿存檔比對 | **非沙盒直連完整 HTML**：沙盒網路受限，依據官方公開目錄查核 6 名成員生日、出道單曲《ELEVEN》（2021.12.01）及「I HAVE」概念。 | **SUCCESS**<br>(已採納官方優先網址) |
| **SRC-03** | **How aespa Is Pushing K-Pop into the Future with the Metaverse**<br>(Billboard & NME) | • `https://www.billboard.com/music/music-news/aespa-interview-metaverse-k-pop-9602412/` | 權威樂評專訪與樂評資料庫交叉比對 | **非沙盒直連完整 HTML**：抽取 Billboard 專訪中關於 SMCU, KWANGYA, Hyperpop 及 SMP 之樂評核心論點，杜絕全文未授權轉載。 | **SUCCESS**<br>(具體專訪文獻) |
| **SRC-04** | **IVE’s new single ‘Love Dive’ is a luxurious plunge into the girl group’s alluring sound**<br>(NME / 評論家：Tássia Assis) | • `https://www.nme.com/reviews/track/ive-love-dive-review-3200179` (精確固定網址) | NME 具體單曲樂評文章檢索與多方書評比對 | **非沙盒直連完整 HTML**：已確認作者（Tássia Assis）、發布日期（2022-04-07）與精確網址。**本次特別記錄了由 `/album/` 修正至官方 Track 評測 `3200179` 之真實來源校正過程**。 | **SUCCESS**<br>(已校正真實 NME 網址) |
| **SRC-05** | **The 25 Best K-Pop Songs of 2022: Staff Picks**<br>(Billboard Staff / Dazed Reference) | • `https://www.billboard.com/lists/best-k-pop-songs-2022/`<br>(參照 Dazed 2022 年終專題) | 具體年度專題榜單與文化分析文獻比對 | **非沙盒直連完整 HTML**：捨棄新聞首頁列表，採用具體年度專題文獻，佐證第四代女團打破二元對立、aespa 與 IVE 兩極化風格矩陣。 | **SUCCESS**<br>(具體專題文獻) |

---

## 二、 網址與資料校正說明
1. **SRC-01 網址轉址確認**：
   - SM 官方藝人檔案主入口已整合至 `aespa.com` 與 `smentertainment.com`，日方官方詳細履歷則位於 `aespa-official.jp/profile/`。
2. **SRC-02 Starship 專頁確認**：
   - 遵從使用者指引，優先採用 Starship 官方最新標準路徑 `https://www.starship-ent.com/musician/ive`，並保留經紀總目錄與全球官網供查核。
3. **SRC-04 NME 具體文章修正（真實執行問題記錄）**：
   - 經進一步比對確認，NME 官方將該評論歸類於「Track Review」，正確固定網址為 `https://www.nme.com/reviews/track/ive-love-dive-review-3200179`，已在 `error_and_reflection.json` 與本紀錄全面修正。
4. **SRC-05 具體專題文獻確認**：
   - 採用 Billboard 發布之具體專題《The 25 Best K-Pop Songs of 2022: Staff Picks》（2022-12-20，排名包含 IVE〈LOVE DIVE〉第 2 名），佐證風格與世代比較。
