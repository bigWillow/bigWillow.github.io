var OverlayScrollbarsComponent = OverlayScrollbarsVue.OverlayScrollbarsComponent;

var app = new Vue({
	el: '#app',
	components: {
		'overlay-scrollbars': OverlayScrollbarsComponent
	},
	data: {
		scrollbarOpt: {
			className: 'os-theme-light',
			callbacks: {
				onScroll: null
			}
		},
		bgColor: 'rgba(26, 26, 26, 1)',
		header: {
			title: '他们度过的是相同的夏天吗？',
			section: [
				'2022年9月6日，四川盆地大部高温仍在持续，截至16时，渠县最高气温达到44℃，刷新了四川省内所有国家站的最高气温纪录（此前为四川东兴8月23日、兴文8月18日的43.8℃），自贡、内江、遂宁、达州等多地也超过了40℃。',
				'今晚到明天，一场较强降雨即将缓解四川盆地部分地区的高温。四川省气象台24日16时发布暴雨蓝色预警，24日20时到25日20时，广元、绵阳、德阳、成都、眉山5市西部和雅安北部及乐山西北部的部分地方有暴雨(雨量50～80毫米)，局部地方有大暴雨(雨量100～150毫米)，并伴有雷电和短时阵性大风。',
			],
			description: {
				name1: '吴刚',
				mame2: '熊明远',
				conjunction: '和',
				text: '来自四川成都， 两人是同龄人， 生于1992年， 他们都经历了2022年四川成都酷烈的夏天。'
			},
			list: [
				{
					type: 'img',
					src: './images/whiteCollar/introduction.gif',
					width: '471px', height: '668px',
					description: '吴刚是某国企的员工，生活在成都高新区一所中档小区中，房价约18000元/㎡',
				},
				{
					type: 'img',
					src: './images/courier/introduction.gif',
					width: '471px', height: '668px',
					description: '熊明远是成都温江区的一名快递员，在永宁街道租住了一居室，租金1200元/月',
				}
			],
			question: '现在我们要问：两人是否经历的是相同的夏天？'
		},
		section2: {
			title: 'Aug.23,2022',
			section: [
				{
					textList: [
						{
							beforeText: '8月23日的成都高新区的某小区内，',
							name: '吴刚',
							nameClass: 'c-color-1',
							afterText: '感觉到有点热，睁开了眼睛，正好是7:30，空调大概是在26℃，在静眠模式下无声地吹风，但是依然抵不过外面的高温光线打在玻璃上的那种炙热感，所以他起身，调整了一下空调的温度，母亲跟他住在一起，简单吃了一点早餐。还没有到上班的点，但是他有晨跑的习惯，于是戴上他的耳机出门开始运动，他计划直接跑到地铁站，到单位洗个澡换衣服再工作。'
						},
						{
							beforeText: '十几公里之外，温江区。',
							name: '熊明远',
							nameClass: 'c-color-2',
							afterText: '记得自己那天在不到七点的时候就醒了，他是被热醒的。前一天晚上他送了一单夜宵，从市中心骑着电动车回到自己的出租屋的时候，已经将近24:00，他本来打算好好睡一觉，但是却这么早就醒来，这让他有点挫败。'
						}
					],
					figure: [
						{ src: './images/whiteCollar/8-10-1.gif', type: 'img', width: '472px', height: '666px' },
						{ src: './images/courier/8-10.gif', type: 'img', width: '472px', height: '666px' },
					],
				},
				{
					textList: [
						{
							beforeText: '',
							name: '熊明远',
							nameClass: 'c-color-2',
							afterText: '在睡前开了一小时的空调，他房屋的空调是老式的，有点泛黄的塑料壳看着摇摇欲坠，他在即将睡着的时候关掉了它，“总不能开一晚上，这样会比较省电费，而且噪音会很大。”但是炎热让他在清晨就热得满头大汗，蚊子也因为这炎热而躁动起来，嗡嗡地叮咬着他，于是他不得不起来，又掐着点开了一个小时的空调，早晨八点多，他没有吃早饭就决定开始投入工作，离开了冒着热气的出租屋，决定在路上买个手抓饼吃。'
						},
					],
					figure: [
						{ src: './images/kt.png', type: 'img', width: '528px', height: '436px' },
						{ src: './images/kt.png', type: 'img', width: '528px', height: '436px' },
					],
				},
				{
					textList: [
						{
							beforeText: '',
							name: '吴刚',
							nameClass: 'c-color-1',
							afterText: '所在的小区植被覆盖率很高，基本上在到处都是植物，挨着一个新建的公园，虽然今天依然很热，但是“湿度还好，而且气温还没升起来。”他在高新区的一家国企工作，一般坐地铁或者开私家车上班。'
						},
						{
							beforeText: '但是',
							name: '熊明远',
							nameClass: 'c-color-2',
							afterText: '则有截然不同的感觉，他已经骑着自己的电瓶车穿梭在市中心的一些小吃店了，他觉得成都这几天几乎没有早晨的概念，温度上升地太猛，“刚走出门还觉得不能接受这个温度，但是现在也习惯了”。热，热！这个字眼在夏天听起来是最微不足道的感觉，但是天气面前似乎热的感知也不一样，熊明远的居住地陷在城市的心脏之中，城市最繁华的商业区同时是他取单最多的地方，瓦砾和钢筋让气温始终居高不下。'
						},
					],
					figure: [
						{ src: './images/cd.png', type: 'img', width: '528px', height: '436px' },
						{ src: './images/cd.png', type: 'img', width: '528px', height: '436px' },
					],
				},
			]
		}
	},
	created() {
		this.scrollbarOpt.callbacks.onScroll = this.onScrollFn
	},
	methods: {
		onScrollFn(e) {
			var instances = this.$refs.scrollbar.osInstance();
			var y = instances.scroll().position.y;

			// 计算第一屏透明度
			if (y > 10 && y < 500) {
				var num = 1 - y / 600
				var opactiy = num < 0 ? 0 : num > 1 ? 1 : num;
				this.bgColor = `rgba(26, 26, 26, ${opactiy})`
			}
		}
	}
})