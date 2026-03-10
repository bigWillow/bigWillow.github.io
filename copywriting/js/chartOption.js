var lineOptions = {
	legend: {
		show: true,
		x: 'center',
		y: '35',
		icon: 'stack',
		itemWidth: 10,
		itemHeight: 10,
		textStyle: {
			color: '#fff'
		},
		data: ['吴刚', '熊明远']
	},
	dataZoom: {
		type: "inside",
		startValue: '8:00',
		endValue: '20:00'
	},
	visualMap: [],
	xAxis: {
		type: 'category',
		boundaryGap: false,
		axisLabel: {
			color: '#fff',
		},
		axisTick: {
			show: true,
		},
		splitLine: {
			show: false
		},
		axisLine: {
			show: true
		},
		data: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']
	},
	yAxis: {
		type: 'value',
		axisLabel: {
			color: '#fff',
			formatter: '{value}℃'
		},
		axisTick: {
			show: true,
		},
		splitLine: {
			show: false
		},
		axisLine: {
			show: true
		}
	},
	series: [],
	animationDuration: 1500
}


