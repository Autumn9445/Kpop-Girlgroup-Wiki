/**
 * ==========================================================================
 * K-pop 女團風格探索館：從 aespa 與 IVE 認識第四代女團
 * 純原生 JavaScript 互動控制器 (Vanilla ES6)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 狀態管理
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  // DOM 元件
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const startBtn = document.getElementById('startBtn');
  const slideCounter = document.getElementById('slideCounter');
  const progressBar = document.getElementById('progressBar');
  const btnSources = document.getElementById('btnSources');
  const sourceDrawerOverlay = document.getElementById('sourceDrawerOverlay');
  const btnCloseDrawer = document.getElementById('btnCloseDrawer');

  /**
   * 切換投影片核心函式
   * @param {number} index 目標投影片索引 (0 ~ totalSlides-1)
   */
  function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;

    // 移除當前 active
    slides[currentSlide].classList.remove('active');

    // 設定新索引
    currentSlide = index;
    slides[currentSlide].classList.add('active');

    // 更新指示器與進度條
    slideCounter.textContent = `Page ${currentSlide + 1} / ${totalSlides}`;
    const progressPercent = ((currentSlide + 1) / totalSlides) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // 更新按鈕狀態
    prevBtn.disabled = currentSlide === 0;
    if (currentSlide === totalSlides - 1) {
      nextBtn.textContent = '完成探索 ✔';
    } else {
      nextBtn.innerHTML = '下一頁 <span>→</span>';
    }

    // 重設投影片頂部滾動
    slides[currentSlide].scrollTop = 0;
  }

  function nextSlide() {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }

  // 事件監聽：導航按鈕
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', () => {
    if (currentSlide === totalSlides - 1) {
      // 點擊完成時打開來源抽屜
      openSourceDrawer();
    } else {
      nextSlide();
    }
  });
  if (startBtn) startBtn.addEventListener('click', () => goToSlide(1));

  // 事件監聽：鍵盤方向鍵支援
  document.addEventListener('keydown', (e) => {
    // 若抽屜開啟中，ESC 關閉抽屜
    if (e.key === 'Escape' && sourceDrawerOverlay.classList.contains('open')) {
      closeSourceDrawer();
      return;
    }

    // 左右方向鍵切頁
    if (e.key === 'ArrowRight' || e.key === 'PageDown') {
      nextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      prevSlide();
    }
  });

  /**
   * 來源抽屜控制器
   */
  function openSourceDrawer(highlightSrcId = null) {
    sourceDrawerOverlay.classList.add('open');

    // 清除舊高亮
    document.querySelectorAll('.source-item').forEach(el => el.classList.remove('highlight'));

    if (highlightSrcId) {
      const targetItem = document.getElementById(`source-item-${highlightSrcId}`);
      if (targetItem) {
        targetItem.classList.add('highlight');
        targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  function closeSourceDrawer() {
    sourceDrawerOverlay.classList.remove('open');
  }

  const btnExploreSources = document.getElementById('btnExploreSources');
  if (btnSources) btnSources.addEventListener('click', () => openSourceDrawer());
  if (btnExploreSources) btnExploreSources.addEventListener('click', () => openSourceDrawer());
  if (btnCloseDrawer) btnCloseDrawer.addEventListener('click', closeSourceDrawer);
  if (sourceDrawerOverlay) {
    sourceDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === sourceDrawerOverlay) closeSourceDrawer();
    });
  }

  // 點擊任何引文字籤 [SRC-XX] 自動展開來源抽屜並高亮
  document.querySelectorAll('.cite-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      const srcId = pill.getAttribute('data-src');
      openSourceDrawer(srcId);
    });
  });

  /**
   * 互動小測驗狀態機
   */
  const quizCards = document.querySelectorAll('.quiz-card');
  quizCards.forEach(card => {
    const buttons = card.querySelectorAll('.quiz-btn');
    const feedbackBox = card.querySelector('.quiz-feedback');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // 禁用同卡片內所有按鈕
        buttons.forEach(b => b.disabled = true);

        const isCorrect = btn.getAttribute('data-correct') === 'true';
        if (isCorrect) {
          btn.classList.add('correct');
          feedbackBox.className = 'quiz-feedback show correct-box';
          feedbackBox.innerHTML = `<strong>✔ 正確！</strong> ${btn.getAttribute('data-explain')}`;
        } else {
          btn.classList.add('incorrect');
          // 找出正確的按鈕也高亮標記
          buttons.forEach(b => {
            if (b.getAttribute('data-correct') === 'true') {
              b.classList.add('correct');
            }
          });
          feedbackBox.className = 'quiz-feedback show incorrect-box';
          feedbackBox.innerHTML = `<strong>✖ 答案有誤！</strong> ${btn.getAttribute('data-explain')}`;
        }
      });
    });
  });

  // 初始化首頁
  goToSlide(0);
});
