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
    <hr style="clear:left" />\
  </div>';

var container = document.getElementsByClassName('container')[0];
document.body.insertBefore(header,container);
var footer=document.createElement('div');
footer.style.textAlign = 'center';
footer.innerHTML = '<hr style="max-width:700px"><p>DE BH4GER 73 !</p>';
document.body.insertAdjacentElement("beforeEnd", footer);
