//var s = document.createElement('script');
//s.src="/assets/js/site.js";
//document.body.insertAdjacentElement("beforeEnd", s);

var header = document.createElement('nav');
header.id = 'header';
header.className='navbar';
header.innerHTML='<div class="container" style="padding:0">\
    <ul class="nav navbar-nav">\
    <li><a href="/">首页</a></li>\
    <li><a href="/#/system">系统维护</a></li>\
    <li><a href="/#/programming">开发</a></li>\
    <li><a href="/#/uncategorized">未分类</a></li>\
    </ul>\
  </div>';

var container = document.getElementsByClassName('container')[0];
document.body.insertBefore(header,container);
var footer=document.createElement('div');
footer.style.textAlign = 'center';
footer.innerHTML = '<p>谢谢</p>';
document.body.insertAdjacentElement("beforeEnd", footer);