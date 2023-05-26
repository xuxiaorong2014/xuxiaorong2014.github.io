
$(function(){
	var sitemap;
	var currentPath = window.location.hash;
	var renderNav = function(){
		var result = ['<div class="container" style="padding:0">','<ul class="nav navbar-nav">','<li>','<a href="#/home">首页</a>','</li>'];
		for(var i in sitemap.categories){
			result.push('<li>');
			result.push('<a href="#/' + sitemap.categories[i].permalink + '">' + sitemap.categories[i].title + '</a>');
			result.push('</li>');
		}
		result.push('</ul>');
		result.push('</div>');
		$('#header').html(result.join(''));
	}
	var renderCatalog = function(category){
		var result = [];
		result.push('<div>');
		result.push('<h2>' + category.title + '</h2>');
		result.push('<ul>');
		for(var i in sitemap.posts){
			if(sitemap.posts[i].categories == category.title){
				result.push('<li>');
				result.push('<a href="' + category.permalink + '/' + sitemap.posts[i].permalink + '.html">' + sitemap.posts[i].title + '</a>');
				result.push('</li>');
			}
		}
		result.push('</ul>');
		result.push('</div>');
		return result.join('');
	}
	
	var renderHome = function(){
		var result = [];
		for(var i in sitemap.categories){
			result.push(renderCatalog(sitemap.categories[i]));
		}
		$('#categories').html(result.join(''));
 
	}
	var render = function(){
		var c = 'home';
		if(currentPath.length > 1 && currentPath.substring(0,1) == '#'){
			c = currentPath.substring(2);
		}
		
		if(c == 'home'){
			renderHome();
		}
		else{
			var result = '<div>404 not found</div>';
			for(var i in sitemap.categories){
				if(sitemap.categories[i].permalink == c){
					$('#categories').html(renderCatalog(sitemap.categories[i]));
				}
			}
		}
	}
	$.ajax('/assets/sitemap.json').done(function(res){
		sitemap = res;
		renderNav();
		render();
	});
	window.addEventListener('hashchange', function(){
		currentPath = window.location.hash;
		render();
	});
});