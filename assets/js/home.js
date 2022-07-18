require.config({paths: {jquery: 'jquery-1.12.4.min'}});
require(['jquery','vue.min','site'],function($,Vue){
	var app = new Vue({
		el: '#app',
		data: {
			categories: []
		},
		created: function () {
			var vm = this;
			$.ajax('/assets/sitemap.json').done(function(res){
				vm.categories = res.categories;
				res.categories.forEach(function(category){
					category.posts = res.posts.filter(function(a){
						return a.categories==category.title
					});
				});	
			});
		}
	});
});