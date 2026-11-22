# AGENTS.md — 知識庫建置與維護規範 (Knowledge Operations Guide)

本規範定義「K-pop 第四代女團入門：aespa 與 IVE 的風格比較」LLM Wiki 專案中，AI Agent 與協作者在資料匯入、知識萃取、來源引用與驗證檢查時必須遵循的標準作業程序（SOP）。

---

## 1. 核心原則 (Guiding Principles)

1. **真實性優先 (Factuality First)**：嚴格杜絕模型幻覺。所有寫入 Wiki 的事實性陳述（如出道日期、成員、公司、代表作、音樂元素、榜單成績）必須有可溯源的資料來源支撐。
2. **版權合規與非剽竊 (Fair Use & Synthesis)**：
   - 不得整篇無斷複製、搬運受版權保護的長篇文章。
   - 原始資料層（`01_raw_sources/`）應存放核心事實摘要、客觀引述（Quotations）、結構化元資料及權威觀點整理。
3. **聲明級可追溯性 (Claim-Level Traceability)**：
   - 每個核心論點或事實項目必須標註引用代號，格式為 `[SRC-XX]` 或 `[SRC-XX#Section]`。
   - 所有引號須能在 `01_raw_sources/` 或 `source_manifest.json` 中找到精確對應。
4. **真實記錄差異 (Authentic Error Logging)**：
   - 實際比對或資料獲取過程中出現的衝突、官方與非官方紀錄差異、概念誤用或修正，必須忠實寫入 `error_and_reflection.json` 與 `verification_log.md`，嚴禁使用虛構的假錯誤充數。

---

## 2. 作業流程 (Pipeline Workflow)

### 階段一：資料攝取規範 (Ingestion Protocol)
1. **來源檢驗**：在匯入資料前，必須確認該來源為官方發布、權威音樂媒體（如 Billboard, NME, Dazed）或具備同儕審查的學術文化分析。
2. **建立來源檔案**：
   - 檔案命名：`01_raw_sources/SRC-[編號]_[簡短描述].md`。
   - 檔案頭部必須包含 YAML Frontmatter：
     ```yaml
     ---
     source_id: "SRC-01"
     title: "來源標題"
     url: "原始網址"
     publisher: "發布機構/媒體"
     retrieved_date: "2026-11-22"
     reliability: "Official / High / Academic"
     key_topics: ["標籤1", "標籤2"]
     ---
     ```
3. **更新來源目錄**：將元資料同步註冊至 `03_provenance_and_logs/source_manifest.json`，並於 `ingest_log.md` 紀錄攝取狀態。

### 階段二：Wiki 整理規範 (Synthesis & Curation Protocol)
1. **知識原子化 (Atomicity)**：
   - **Entity 頁面**（`entities/`）：專注於特定團體的事實陳述（歷史、成員、官方概念、里程碑作品）。
   - **Concept 頁面**（`concepts/`）：專注於特定美學或理論架構（如 SMCU 世界觀、自愛美學/Chaebol Crush、第四代 K-pop 範式轉移）。
   - **Comparison 頁面**（`comparisons/`）：基於 Entity 與 Concept 的交叉比對，產出多維度對照分析。
2. **雙向連結機制**：
   - 內部引用使用維基雙向連結語法 `[[檔案名稱]]`，例如 `[[smcu_and_kwangya]]` 或 `[[ive]]`。
3. **來源標記**：
   - 每個要點最後必須加上來源索引，例如 `[SRC-03#Hyperpop]`。

### 階段三：驗證與稽核規範 (Verification Protocol)
1. **交叉稽核（Cross-Verification）**：
   - 檢查實體名稱、成員名單、作品年份在多個來源之間是否一致。
   - 官方說法（Official Stance）與樂評評論（Critical Reception）有落差時，在 Wiki 中並陳說明，而非偏廢一方。
2. **錯誤記錄流程**：
   - 若發生資料衝突或擷取偏差，記錄於 `03_provenance_and_logs/error_and_reflection.json`：
     - `error_id`: 唯一識別代碼（如 `ERR-01`）
     - `type`: 衝突類型（如 `Attribute Discrepancy`, `Terminology Nuance`, `Origin Tracing`）
     - `description`: 衝突詳細描述
     - `resolution`: 最終在 Wiki 採取的標準與依據
     - `ai_reflection`: 此現象在生成式 AI 與知識庫建置中的啟示

---

## 3. 檔案維護權限與下一階段過渡
- **當前階段限制**：僅建立並完善 `01_raw_sources/`、`02_wiki_knowledge/` 與 `03_provenance_and_logs/`。
- **簡報生成限制**：未經使用者檢視確認 Wiki 內容完整度與正確度之前，不得擅自產生 HTML 簡報檔案。
