var header = document.createElement('nav');
header.id = 'header';
header.className='navbar';
header.innerHTML = `
  <div class="container" style="padding:0">
    <ul class="nav navbar-nav">
    <li><a href="/">首页</a></li>
    <li><a href="/category.html#/system">系统维护</a></li>
    <li><a href="/category.html#/programming">开发</a></li>
    <li><a href="/category.html#/uncategorized">未分类</a></li>
    </ul>
  </div>
`;
document.body.prepend(header);
var footer=document.createElement('div');
footer.style.textAlign = 'center';
footer.innerHTML = '<p>谢谢</p>';
var c = document.querySelectorAll('.container'); 
c[c.length-1].after(footer); 