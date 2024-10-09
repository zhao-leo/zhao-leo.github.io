// 加载 CSS
$("<link>").attr({href: "https://www.zhaocloud.work/JavaScript/waifu.css", rel: "stylesheet", type: "text/css"}).appendTo('head');

// 插入 DIV
$('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');

// 加载 JS
$.ajax({
	url: 'https://www.zhaocloud.work/JavaScript/waifu-tips.js',
	dataType:"script",
	cache: true,
	async: false
});
$.ajax({
	url: 'https://www.zhaocloud.work/JavaScript/live2d.min.js',
	dataType:"script",
	cache: true,
	async: false
});

// 初始化看板娘，加载 waifu-tips.json

/* 可直接修改部分参数 */
live2d_settings['modelId'] = 5;                  // 默认模型 ID
live2d_settings['modelTexturesId'] = 1;          // 默认材质 ID
/* 在 initModel 前添加 */
initModel('https://www.zhaocloud.work/JavaScript/waifu-tips.json');