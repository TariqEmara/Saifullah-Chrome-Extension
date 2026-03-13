chrome.storage.local.get(['blockedCount', 'installTime'], function(data) {
  document.getElementById('blocked-count').textContent = (data.blockedCount || 0).toLocaleString();
  var days = data.installTime ? Math.max(1, Math.floor((Date.now() - data.installTime) / 86400000)) : 1;
  document.getElementById('days-active').textContent = days;
});
