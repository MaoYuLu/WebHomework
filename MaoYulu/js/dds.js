//事件 onload 表示页面加载完成时触发   onfocus 表示获取焦点时触发  onsubmit表示表单提交按钮被点击时触发 onclick 表示鼠标单击被触发
//匿名函数

window.onload = function() {
	var box_width = 100;
	var box_height = 100;
	var box_row = 5;
	var box_col = 6;
	var divparent = document.getElementById("game_panel");
	
	for(var i=0; i<box_row; i++) {
		for(var j=0; j<box_col; j++) {
			var divnode = document.createElement("div");
			divnode.setAttribute("class","box");
			//将二维坐标转化为一维坐标  公式  y*列数+x
			divnode.setAttribute("id", i*box_col+j);
			divnode.setAttribute("style","width:"+box_width+"px;height:"+box_height+"px;left:"+j*box_width+"px;top:"+i*box_height+"px");
			divparent.appendChild(divnode);
		}
	}
	
	window.setInterval(function(){
		for(var i=0; i<box_row; i++) {
			for(var j=0; j<box_col; j++) {
				var divnode = document.getElementById(i*box_col+j);
				divnode.setAttribute("class","box");
			}
		}
	
		var count = Math.floor(Math.random()*3+1);
		for(var i=0; i<count; i++) {
			var x = Math.floor(Math.random()*box_col);
			var y = Math.floor(Math.random()*box_row);
			var id = y*box_col+x;
			document.getElementById(id).setAttribute("class","ddsfloat");
			document.getElementById(id).setAttribute("onclick","clickds(this)");
		}
	},2000);
}

function clickds(self) {
	self.setAttribute("class", "ddspress");
}
