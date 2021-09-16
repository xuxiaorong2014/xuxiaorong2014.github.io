import './jquery-3.6.0.min.js';
import './site.js';
import Vue from './vue.esm.browser.min.js';
import VueRouter from './vue-router.esm.browser.min.js';

Vue.use(VueRouter);

const template = `
<div v-cloak>  
  <h2>{{category.title}}</h2>
  <ul>
    <li v-for="post in category.posts">
      <a v-bind:href="'/' + category.permalink + '/' + post.permalink + '.html'">{{post.title}}</a> <small>{{post.date}}</small>
    </li>
  </ul>
</div>
`;

const Category = {
    template: template,
    data: function () {
        return { category: {} }
    },
    mounted: function () {
        this.load();
    },
    watch: {
        $route(to, from) {
            this.load();
        }
    },
    methods: {
        load: function () {
            var vm = this;
            $.ajax({
                url: '/assets/sitemap.json',
                type: 'get'
            }).done(function (res) {
                vm.category = res.categories.find(v => v.permalink == vm.$route.params.permalink);
                vm.category.posts = res.posts.filter(a => a.categories == vm.category.title);
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


