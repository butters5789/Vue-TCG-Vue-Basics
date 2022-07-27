const { createApp } = Vue;

const vueApp = createApp({
	data() {
		return {
			firstName: 'Brad',
			lastName: 'Butterfield',
			age: 33,
			imageUrl:
				'https://www.gannett-cdn.com/presto/2019/06/28/USAT/1b0508e1-5bab-4b4d-a4b8-43060a87ba8a-c01_COOKIE_MONSTER_26.JPG?crop=4113,2314,x1,y278&width=3200&height=1801&format=pjpg&auto=webp',
		};
	},
	methods: {
		agePlusFive(age) {
			return age + 5;
		},
	},
});

vueApp.mount('#assignment');
