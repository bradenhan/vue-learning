var list = [
	{
		title : '吃饭',
		isChecked : false
	},{
		title : '睡觉',
		isChecked : true
	}
];

new Vue({
	el : '.main',
	data : {
		list : list,
		todo : '',
		edtorToDos : '' , //记录正在编辑的数据
	},
	methods : {
		addToDo (ev) {
			// 事件处理函数指向的是当前的根实例  
			this.list.push({
				title : this.todo,
				isChecked : false
			}) 
			this.todo = '';
		},

		deleteToDo (item){ 
			var index = this.list.indexOf(item); 
			this.list.splice(index,1)
		},

		edtorToDo (todo){
			this.edtorToDos = todo;
		},
		editedToDo (dd){
			alert(1)
			//this.edtorToDos = '';
		}
	},
	directives : {
		"focus" : {
			update (el , binding){
				if(binding.value){
					el.focus()
				}
			}
		}
	}
});