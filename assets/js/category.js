require.config({paths: {jquery: 'jquery-1.12.4.min'}});
require(['jquery','vue.min','vue-router.min','site'],function($,Vue,VueRouter){
	Vue.use(VueRouter);
	const template = ['<div v-cloak><h2>{{category.title}}</h2>'];
	template.push('<ul>');
	template.push('<li v-for="post in category.posts">');
	template.push('<a v-bind:href="\'/\' + category.permalink + \'/\' + post.permalink + \'.html\'">{{post.title}}</a>');
	template.push('<small>{{post.date}}</small>');
	template.push('</li>');
	template.push('</ul>');
	template.push('</div>');
	const Category = {
		template: template.join(''),
		data: function () {
			return { category: {} }
		},
		mounted: function () {
			this.load();
		},
		watch: {
			$route:function(to, from) {
				this.load();
			}
		},
		methods: {
			load: function () {
				var vm = this;
				$.ajax('/assets/sitemap.json').done(function(res){
					//vm.category = 
					res.categories.forEach(function(v){
						if(v.permalink == vm.$route.params.permalink){
							vm.category = v;
						}
					});
					vm.category.posts = res.posts.filter(function(a){return a.categories == vm.category.title});
					document.title=vm.category.title;
				});
			}
		}
	};
	const router = new VueRouter({
		routes: [
			{ path: '/:permalink', component: Category }
		]
	});
	var app = new Vue({
		el: '#app',
		router: router
	});
});




 
