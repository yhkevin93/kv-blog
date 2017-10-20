import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			redirect: '/article'
		}, {
			path: '/',
			component: resolve => require(['../components/common/Navigation.vue'], resolve),
			children: [{
					path: 'my',
					component: resolve => require(['../components/page/My.vue'], resolve)
				},
				{
					path: 'class',
					component: resolve => require(['../components/page/Class.vue'], resolve)
				},
				{
					path: 'article',
					component: resolve => require(['../components/page/Article.vue'], resolve)
				},
				{
					path: 'tag',
					component: resolve => require(['../components/page/Tag.vue'], resolve)
				}
			]
		}

	]
})