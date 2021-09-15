import './jquery-3.6.0.min.js';
import './site.js';
import Vue from './vue.esm.browser.min.js';

var app = new Vue({
    el: '#app',
    data: {
        categories: []
    },
    created: function () {
        var vm = this;
        $.ajax({
            url: '/assets/sitemap.json',
            type: 'get'
        }).done(function (res) {
            vm.categories = res.categories;
            res.categories.forEach(function(category){
                category.posts = res.posts.filter(a=>a.categories==category.title);
            });
        });
    }
});