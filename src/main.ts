
import './style.css'

interface Clause {
  id: string;
  title: string;
  content: string;
}

const contractData: Clause[] = [
    {
        id: "第一條",
        title: "工作內容",
        content: `
            <div class="space-y-6 text-gray-600">
                <p>1. 甲方委託乙方進行「設計案」，內容包含：<strong>VI 基礎設計系統</strong>（依附件內容）。</p>
                <p>2. 乙方第一次提案設計圖以五款為限，甲方可從中選擇一款進行 <strong>三次修正</strong>，或重新設計一款。</p>
                <p>3. 甲方所提出的設計圖修改需求，內容如為乙方疏失所造成之必要修正，將不得納入修改次數。</p>
            </div>
        `
    },
    {
        id: "第二條",
        title: "專案時程",
        content: `
            <div class="space-y-6 text-gray-600">
                <p>1. 乙方應於合約簽訂後 <strong>45 天內</strong>完成專案並提供完稿檔案。</p>
                <p>2. 乙方應於合約簽訂後 <strong>14 天內</strong>進行第一次設計圖提案。</p>
                <p>3. 甲方收到設計圖後，須自收到設計圖起 <strong>5 日內</strong>確認回覆，逾期其餘交稿時間順延。</p>
            </div>
        `
    },
    {
        id: "第三條",
        title: "費用與付款方式",
        content: `
            <div class="space-y-6 text-gray-600">
                <p>本專案酬勞總額為新台幣 {{總金額}} 元整，分兩期支付：</p>
                <div class="space-y-4 pt-4">
                    <div class="flex justify-between items-center border-b border-gray-100 pb-4">
                        <span class="text-xs font-bold text-gray-400">第一期款 (50%)</span>
                        <span class="text-ink font-medium">簽約日起 7 日內支付</span>
                    </div>
                    <div class="flex justify-between items-center border-b border-gray-100 pb-4">
                        <span class="text-xs font-bold text-gray-400">第二期款 (50%)</span>
                        <span class="text-ink font-medium">於完稿交付後支付</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "第四條",
        title: "終止或暫停",
        content: `
            <div class="space-y-8 md:space-y-12">
                <div>
                    <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 mb-6">甲方提出終止（非因乙方違約）</h3>
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr><th>階段</th><th>費用處理</th><th>著作權歸屬</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>草稿製作期間</td><td>第一期款不退還</td><td>歸屬乙方</td></tr>
                                <tr><td>設計圖提案後</td><td>支付總價之 80%</td><td>歸屬乙方</td></tr>
                                <tr><td>修改完成後</td><td>支付總價之 100%</td><td>歸屬甲方</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 mb-6">乙方提出終止（非因甲方違約）</h3>
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr><th>階段</th><th>費用處理</th><th>著作權歸屬</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>草稿製作期間</td><td>第一期款全額退還</td><td>歸屬乙方</td></tr>
                                <tr><td>設計圖提案後</td><td>無需支付剩餘款項</td><td>歸屬甲方</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `
    }
];

function initApp() {
    const container = document.getElementById('contract-content');
    if (!container) return;

    container.innerHTML = contractData.map(c => `
        <section class="section-reveal space-y-6 md:space-y-10">
            <div class="line-accent">
                <span class="text-[10px] text-gray-300 font-bold tracking-widest block mb-2 uppercase">${c.id}</span>
                <h2 class="text-2xl font-bold tracking-tight text-ink">${c.title}</h2>
            </div>
            <div class="py-4">
                ${c.content}
            </div>
        </section>
    `).join('');

    const revealSections = document.querySelectorAll('.section-reveal');
    const progressBar = document.getElementById('progress-bar');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.05 });

    revealSections.forEach(s => observer.observe(s));

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (progressBar) progressBar.style.width = scrolled + "%";
    });
}

document.addEventListener('DOMContentLoaded', initApp);
