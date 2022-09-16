var OverlayScrollbarsComponent = OverlayScrollbarsVue.OverlayScrollbarsComponent;

var app = new Vue({
	el: '#app',
	components: {
		'overlay-scrollbars': OverlayScrollbarsComponent
	},
	data: {
		activeNav: '',
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

		list: [
			{
				title: 'Aug.23,2022 (08:00-11:00)',
				titleClass: 'wow fadeInDown',
				cont: [
					[
						{
							class: 'wow zoomIn',
							type: 'section',
							beforeText: '8月23日的成都高新区的某小区内，',
							name: '吴刚',
							nameClass: 'c-color-1',
							afterText: '感觉到有点热，睁开了眼睛，正好是7:30，空调大概是在26℃，在静眠模式下无声地吹风，但是依然抵不过外面的高温光线打在玻璃上的那种炙热感，所以他起身，调整了一下空调的温度，母亲跟他住在一起，简单吃了一点早餐。还没有到上班的点，但是他有晨跑的习惯，于是戴上他的耳机出门开始运动，他计划直接跑到地铁站，到单位洗个澡换衣服再工作。'
						},
						{
							class: 'wow zoomIn',
							type: 'section',
							beforeText: '十几公里之外，温江区。',
							name: '熊明远',
							nameClass: 'c-color-2',
							afterText: '记得自己那天在不到七点的时候就醒了，他是被热醒的。前一天晚上他送了一单夜宵，从市中心骑着电动车回到自己的出租屋的时候，已经将近24:00，他本来打算好好睡一觉，但是却这么早就醒来，这让他有点挫败。'
						},
						{
							type: 'img',
							list: [
								{ src: './images/whiteCollar/8-10-1.gif', class: 'wow fadeIn', width: '472px', height: '666px' },
								{ src: './images/courier/8-10.gif', class: 'wow fadeIn', width: '472px', height: '666px' },
							]
						},
						{
							class: 'wow zoomIn',
							type: 'section',
							beforeText: '',
							name: '熊明远',
							nameClass: 'c-color-2',
							afterText: '在睡前开了一小时的空调，他房屋的空调是老式的，有点泛黄的塑料壳看着摇摇欲坠，他在即将睡着的时候关掉了它，“总不能开一晚上，这样会比较省电费，而且噪音会很大。”但是炎热让他在清晨就热得满头大汗，蚊子也因为这炎热而躁动起来，嗡嗡地叮咬着他，于是他不得不起来，又掐着点开了一个小时的空调，早晨八点多，他没有吃早饭就决定开始投入工作，离开了冒着热气的出租屋，决定在路上买个手抓饼吃。'
						},
						{
							type: 'img',
							list: [
								{ src: './images/kt.png', class: 'wow fadeIn', width: '528px', height: '436px' },
								{ src: './images/kt.png', class: 'wow fadeIn', width: '528px', height: '436px' },
							]
						},
						{
							class: 'wow zoomIn',
							type: 'section',
							beforeText: '',
							name: '吴刚',
							nameClass: 'c-color-1',
							afterText: '所在的小区植被覆盖率很高，基本上在到处都是植物，挨着一个新建的公园，虽然今天依然很热，但是“湿度还好，而且气温还没升起来。”他在高新区的一家国企工作，一般坐地铁或者开私家车上班。'
						},
						{
							class: 'wow zoomIn',
							type: 'section',
							beforeText: '但是',
							name: '熊明远',
							nameClass: 'c-color-2',
							afterText: '则有截然不同的感觉，他已经骑着自己的电瓶车穿梭在市中心的一些小吃店了，他觉得成都这几天几乎没有早晨的概念，温度上升地太猛，“刚走出门还觉得不能接受这个温度，但是现在也习惯了”。热，热！这个字眼在夏天听起来是最微不足道的感觉，但是天气面前似乎热的感知也不一样，熊明远的居住地陷在城市的心脏之中，城市最繁华的商业区同时是他取单最多的地方，瓦砾和钢筋让气温始终居高不下。'
						},
						{
							type: 'img',
							list: [
								{ src: './images/cd.png', class: 'wow fadeIn', width: '528px', height: '436px' },
								{ src: './images/cd.png', class: 'wow fadeIn', width: '528px', height: '436px' },
							]
						}
					],
					[
						{
							class: 'wow fadeInLeft',
							type: 'motto',
							text: '当我们在一个炎热的日子走进果树和棕榈树的浓荫里，发现自己正处在经过精心设计、装饰的房屋群之中……尽管只是短暂印象，那原始、欢快的野蛮人生活的憧憬似乎瞬间就实现了。',
							cite: '马林诺夫斯基的《西太平洋上的航海者》',
						},
						{
							class: 'wow fadeInRight',
							type: 'motto',
							text: '你的心脏疯狂地抽动，试图让血管保持充盈，但没有足够的血液和氧气到达大脑……随着内脏的融化和瓦解，你的皮肤上出现了紫色的斑点，这变成了肉体即将毁灭时唯一可以被看到的证据。',
							cite: '旅行作家Amy Ragsdale',
						},
						{
							type: 'section',
							class: 'wow fadeIn',
							beforeText: '这是两段关于“天气炎热”的描写。第一段来自人类学家马林诺夫斯基，在书中，“热”是充满异域风情的背景板，昭示着作者踏上了风景奇特的村庄。第二段则来自于旅行作家Amy Ragsdale对于热射病的逼真描述，提醒着我们炎热也可以是非常痛苦的体验。相同数值的温度，对于身在不同境遇人来说，却是不相同的感觉。问题是，谁有资格感受温和而充满魅力的夏天，',
							afterLightText: '而谁又要痛苦地承受这种夏天的痛苦呢？',
						},
						{
							type: 'section',
							class: 'wow fadeIn',
							beforeText: '对于绝大多数人来说，夏天的升温是一种慢性的、几乎看不见损害的，中立的气候变化，但是很少有人会去关注这些热浪扑向了哪些人：而事实上，热浪侵袭的风险正在不平均地分摊到更脆弱、更弱势的人的身上。',
						},
						{
							type: 'section',
							class: 'wow fadeIn',
							beforeText: '在以往的文化阐释中，夏天的热是在彰显我们习以为常的、温和的夏天模样；然而，在全球气温不断攀升的今天，关于高温的讨论在每年夏天都会如火如荼，人们往往认为这是全球变暖需要全球合作的气候行动，从被热量灼伤的痛和严重脱水，热射病的发生率来看“热”；要么“热”会出现在骇人的气候新闻中，并伴随着气候学家痛心疾首的呼吁，而这两种叙述往往并不互相重叠，也鲜少有人从社会阶层的鸿沟的视角，去考察“热”与“酷热”的距离。',
						},
						{
							type: 'section',
							class: 'wow fadeIn',
							beforeText: '而这些人甚至不会想到热浪的危险，因为他们有更重要的事情要去考虑，比如——对于熊明远这样的外卖员来说，抢单是一件更重要的，关乎生存的问题，他们往往需要携带一瓶水在室外工作2-3小时，“手机跟着我出来一天，回到家比我还烫。”他们往往生活在气温更高的城市中心，为了寻觅到更好的工作；同时会租住更低廉的出租屋，这意味着基础设施，尤其是夏天的乘凉设施非常的有限，甚至为了电费，有些人会尽量减少开空调的时间，比如在睡着之前关掉空调，在无知无觉中承受夜晚的闷热直到超过身体的阈值，被高温唤醒，或者被蚊虫叮咬而无法进行高质量的睡眠，导致第二天的精力不济，甚至对身体出现慢性伤害，这些往往比热射病对人的健康影响更加隐秘。',
						},
						{
							type: 'img',
							list: [
								{ src: './images/map-8-10.png', class: 'wow fadeIn', description: '两人居住地的地图', width: '826px', height: '100%' },
							]
						},
						{
							type: 'section',
							class: 'wow fadeIn',
							beforeText: '我们之所以察觉到这种不平等，是因为我们追踪了他们一个普通工作日的一天，两位受访者是同龄人，且身体状况都相对健康，我们让他们携带了一个小型的温度记录仪，并希望他们可以每隔一小时记录自己所在环境的温度，其中吴刚所处的平均温度明显比熊明远要低2-3℃，且其处于空调房的时刻更多，暴露在高温环境中的机会要比熊明远小很多。根据熊明远的自述，他认为自己的在高温时期，情绪更加不稳定，“这可能是因为没睡好的原因”，而吴刚则认为除了通勤相对“痛苦一些”，其余没有什么太大的影响，也并没有影响到他的生活。',
						},
						{
							type: 'section',
							class: 'wow fadeIn',
							beforeText: '今年四川的高温是全国一直在关注的话题，你可以运用你的触感，感受阳光扎实地鞭笞在人的身上的灼痛，还伴随着极低的气压，你可以闻到，从马路的柏油焦枯的气味中，看到太阳几乎像坠落大地一样把树叶炙烤地蜷缩而萎靡，这里处处灌满了都是昼夜不停的、涌动的、流淌着的热量。',
						},
						{
							type: 'section',
							class: 'wow fadeIn',
							beforeText: '这是一场反常的高温，因为高温而产生巨大用电量使得这所城市陷入了能源短缺的境况，这个处于四川西南部的，水电发电大省，在这个夏天发出了痛苦的呻吟：全省限电，工厂停产，保障民生用电，于是霓虹灯熄灭，整个城市陷入了一种停摆的寂静之中。这种死一样的寂静慢随着死神一样的、残酷的高温，来到了每个人的身边，使得人们开始正视，高温的危险。但是这伴随着一种惯性：认为高温只是一场气候的灾害，那么这类的灾难总是小概率的。但，如若极端的灾难能够放大、呈现出人们从前习以为常的苦难，那么反观这场的高温，我们也就绝不应止步于此。',
						},
						{
							type: 'section',
							class: 'wow fadeIn',
							beforeText: '虽然人人在夏天都感觉到热，但显而易见的是，往往是阶层较低的人更经常暴露在炎热之中。针对北美洛杉矶的一项城市研究发现，建筑环境、社会经济脆弱性和高温导致的死亡之间有很强的相关性，有色人种社区和低收入人口不成比例地受到热岛风险因素的影响，而移民工人死于高温热浪的可能性是美国公民的三倍。',
						},
						{
							type: 'section',
							class: 'wow fadeIn',
							beforeText: '一个有力的例子是空调的使用，富裕家庭消耗大量能源维持空调运转，或驾车赶往避暑胜地，然而碳排放造成的全球变暖却要贫困的社区来承担，居住其中的人即使有空调也无法负担高昂的电力成本，除了待在家里或在外挥汗如雨地工作，他们没有别的地方好去。如果说吸烟者和被迫吸二手烟的人都有健康风险，被迫承受高温的劳动者则是将风险全部放在了自己身上。',
						},
					]
				]
			},
			{
				title: 'Aug.23,2022 (11:00-13:00)',
				titleClass: 'wow fadeInDown',
				cont: [
					[
						{
							type: 'section',
							class: 'wow fadeIn',
							beforeText: '',
							name: '熊明远',
							nameClass: 'c-color-2',
							afterText: '在送他今天接到的一个酒店的单子，他进入电梯的时候面色泛红，“衣服好像被打湿了”他对着镜头说。与此同时，吴刚刚刚结束晨跑，正在等地铁，地铁站的空调让他觉得暂时凉爽了不少，“高新区的地铁的话，这个点人也不算多。”'
						},
						{
							type: 'section',
							class: 'wow fadeIn',
							beforeText: '不到一小时，他就到了单位，坐在工位上打开了自己的笔记本，准备进行会议记录。',
						},
						{
							type: 'img',
							list: [
								{ src: './images/whiteCollar/8-10-2.gif', class: 'wow fadeIn', width: '472px', height: '666px' },
								{ src: './images/courier/11-13.gif', class: 'wow fadeIn', width: '472px', height: '666px' },
							]
						},
						{
							type: 'section',
							beforeText: '根据',
							name: '吴刚',
							nameClass: 'c-color-1',
							afterText: '的月薪推算，熊明远需要在每日户外工作11小时才可以赶得上吴刚的工资水平，而这也正是熊明远每天在外长时间超负荷工作的原因，过去一个月，熊明远的工作时间超过300小时，不过今晚他觉得实在是太过困倦，于是打算20:00就结束自己的工作。'
						},
						{
							type: 'img',
							list: [
								{ src: './images/map-11-13.png', class: 'wow fadeIn', description: '两人工作地点的地图', width: '826px', height: '100%' },
							]
						}
					]
				]
			},
			{
				title: 'Aug.23,2022 (14:00-15:00)',
				titleClass: 'wow fadeInDown',
				cont: [
					[
						{
							type: 'section',
							class: 'wow fadeIn',
							beforeText: '气温在持续地走高，到13：00左右，气温已经升至将近40℃，',
							name: '吴刚',
							nameClass: 'c-color-1',
							afterText: '坐地铁回到家中午休，在修整了两个小时之后，吴刚乘坐私家车上班。'
						},

						{
							type: 'section',
							class: 'wow fadeIn',
							beforeText: '而',
							name: '熊明远',
							nameClass: 'c-color-2',
							afterText: '中午的休息要推后几个小时，因为14:00依然是用餐的高峰期，也是他接单最忙碌的时候。直到15:00的时候他的电瓶车没电了，充电需要时间，他也因此获得了一个小时的休息，他打算去他的出租屋躺一会。他周围的气温也因此而下跌了一点，终于可以吹到一点凉风了。'
						},
						{
							type: 'section',
							class: 'wow fadeIn',
							beforeText: '但是',
							name: '熊明远',
							nameClass: 'c-color-2',
							afterText: '的中午睡的并不踏实，躺了一会之后他觉得自己可以继续工作了，于是又骑着他的摩托车踏上了接单的路程。此时，吴刚已经坐在了工位上，办公室的空调恰如其分地为每个人输送凉风，他认真地撰写会议记录，因为中午良好的睡眠，他现在精神饱满。'
						},
						{
							type: 'img',
							list: [
								{ src: './images/whiteCollar/14-15.gif', class: 'wow fadeIn', width: '472px', height: '666px' },
								{ src: './images/courier/14-15-1.gif', class: 'wow fadeIn', width: '472px', height: '666px' },
							]
						},
					]
				]
			},
			{
				title: 'Aug.23,2022 (16:00-17:00)',
				titleClass: 'wow fadeInDown',
				cont: [
					[
						{
							type: 'section',
							class: 'wow fadeIn',
							beforeText: '晚餐时间到了，',
							name: '熊明远',
							nameClass: 'c-color-2',
							afterText: '好几单都差点超时，他送的单子有不少都是需要爬楼的，在视频里，他嘴里默念着“快超时了快超时了”一边急速地爬着楼梯，当他爬到顶楼，他看到缓缓沉下去的太阳，忍不住把镜头对准了火红的夕阳。而吴刚则准时下了班，他要赶着去核酸点做核酸，为了降温，小区在地上洒了一些水，湿漉漉的，绿树上也滴滴答答有一些小小的水珠，竟然显得凉快了一点。'
						},
						{
							type: 'img',
							list: [
								{ src: './images/whiteCollar/16-17.gif', class: 'wow fadeIn', width: '472px', height: '666px' },
								{ src: './images/courier/16-17.gif', class: 'wow fadeIn', width: '472px', height: '666px' },
							]
						},
						{
							type: 'section',
							class: 'wow fadeIn',
							beforeText: '',
							name: '吴刚',
							nameClass: 'c-color-2',
							afterText: '要赶紧回家，晚饭应该已经做好了，“本来天太热，不想开火做饭，想叫个外卖的，但是我妈来成都了，经常晚上给我做好饭。”吃完晚餐，他就准备在家里休息休息，打打游戏，然后早点睡觉，当然，要开空调。熊明远的晚餐是在路上解决的，他买了一个煎饼果子一边骑一边吃。'
						},
						{
							type: 'section',
							class: 'wow fadeIn',
							beforeText: '太阳西斜之后，',
							name: '熊明远',
							nameClass: 'c-color-1',
							afterText: '把小电驴的车篷拉了上去，“太阳下去了，不用遮阳了但是还是比较的闷热。”还有一单，再接一单，他就可以回家好好睡一觉了，他想，这次他要奖励自己，把空调多开一小时。'
						},
					]
				]
			},
			{
				title: 'Aug.23,2022 (18:00-20:00)',
				titleClass: 'wow fadeInDown',
				cont: [
					[
						{
							type: 'section',
							class: 'wow fadeIn',
							beforeText: '',
							name: '吴刚',
							nameClass: 'c-color-2',
							afterText: '的晚上过的非常平静，他已经记不得那天晚上的细节了，只觉得那是非常普通的一天，他在家里把空调开到平时23℃左右的气温，100多平方米的房子渐渐充满了凉气，他度过了一个安逸的晚上，很快就睡着了。'
						},
						{
							type: 'section',
							class: 'wow fadeIn',
							beforeText: '',
							name: '熊明远',
							nameClass: 'c-color-1',
							afterText: '记得那天晚上他收工得很早，可能是前一天没睡好，他困得很，想早点回去睡觉，对着镜头，他说，“今天干得很不错”并欣慰地点了点头，随后，他向自己的出租屋驶去，今天可以开两个小时的空调。'
						},
						{
							type: 'section',
							class: 'wow fadeIn',
							beforeText: '此时他身边的气温是37℃，市中心人来人往，他把车开得飞快，好像感觉到了凉风。',
						},
						{
							type: 'img',
							list: [
								{ src: './images/whiteCollar/18-20-1.gif', class: 'wow fadeIn', width: '472px', height: '666px' },
								{ src: './images/courier/18-20.gif', class: 'wow fadeIn', width: '472px', height: '666px' },
							]
						},
					]
				]
			}
		],

	},
	created() {
		this.scrollbarOpt.callbacks.onScroll = this.onScrollFn
	},
	mounted() {
		this.inWow()
	},
	methods: {
		// 初始化动画插件
		inWow() {
			if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
				new WOW({
					scrollContainer: '.os-viewport'
				}).init();
			};
		},
		// 滚动监听 背景淡出
		onScrollFn(e) {
			var instances = this.$refs.scrollbar.osInstance();
			var y = instances.scroll().position.y;

			// 计算第一屏透明度
			if (y > 10 && y < 500) {
				var num = 1 - y / 600
				var opactiy = num < 0 ? 0 : num > 1 ? 1 : num;
				this.bgColor = `rgba(26, 26, 26, ${opactiy})`
			}

			var wh = this.$refs.scrollbar.$el.offsetHeight
			var dh = document.getElementById('Aug.23,2022 (08:00-11:00)').offsetTop
			console.log(dh, y, dh - y - wh);
			this.list.forEach(item => {
				var dt = document.getElementById(item.title).offsetTop
				var dh = document.getElementById(item.title).offsetHeight
				var num = dt - y - dh - wh
				if (num < 0) {
					this.activeNav = item.title
				}
			})

			var fd = document.getElementById(this.list[0].title).offsetTop;
			console.log(y, fd);

			if (y < fd - wh) {
				this.activeNav = ''
			}

		},
		changeNav(id) {
			this.activeNav = id;
			var instances = this.$refs.scrollbar.osInstance();
			var dom = document.getElementById(id);
			instances.scroll({ el: dom, block: "begin" }, 500);
		}

	},
})