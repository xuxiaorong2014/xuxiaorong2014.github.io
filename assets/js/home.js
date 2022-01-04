import './site.js';
import Vue from './vue.esm.browser.min.js';
var app = new Vue({
    el: '#app',
    data: {
        categories: []
    },
    created: function () {
        var vm = this;
		fetch('/assets/sitemap.json',{
			method:'get'
		}).then(function(response){
			return response.json();
		}).then(function(res){
		vm.categories = res.categories;
            res.categories.forEach(function(category){
                category.posts = res.posts.filter(a=>a.categories==category.title);
            });
		});
    }
});