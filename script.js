const date = new Intl.DateTimeFormat('zh-CN', {
  year: 'numeric', month: 'long', day: 'numeric', weekday: 'long'
}).format(new Date());
document.querySelector('#today').textContent = date;

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const value = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      document.querySelector('.copy-status').textContent = `微信号 ${value} 已复制`;
    } catch {
      document.querySelector('.copy-status').textContent = `请手动复制微信号：${value}`;
    }
  });
});
