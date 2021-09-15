import './jquery-3.6.0.min.js';
var header = `
<nav id="header" class="navbar">
  <div class="container" style="padding:0">
    <ul class="nav navbar-nav">
    <li><a href="/">首页</a></li>
    <li><a href="/category.html#/system">系统维护</a></li>
    <li><a href="/category.html#/programming">开发</a></li>
    <li><a href="/category.html#/uncategorized">未分类</a></li>
    </ul>
  </div>
</div>
`;

var footer = `<div style="text-align:center">
<p>谢谢</p>
</div>`;

$('body').prepend(header);
$('.container:last').after(footer);