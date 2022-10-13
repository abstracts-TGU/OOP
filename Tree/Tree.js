class TreeItem{
	value
	left = null
	right = null
	constructor(value){
		this.value = value
	}
}

export default class Tree{
	root  	

	constructor(){
		this.root = null
	}

	addItem(value){
		const newNode = new TreeItem(value);

		if (this.root === null){
			this.root = newNode;
			return
		}

		this.#addItem(value)
	}

	#addItem(value, root=this.root){
		if (value >= root.value) {

			if (root.right !== null){
				this.#addItem(value, root.right)
				return
			}
			// Добавляем дерево на право
			const newNode = new TreeItem(value);
			root.right = newNode
		}

		if (value < root.value) {

			if (root.left !==null){
				this.#addItem(value, root.left)
				return
			}
			const newNode = new TreeItem(value);
			root.left = newNode
		}
	}

	toString(deep=0, root=this.root){
		if (root === null ){
			return 'Нет дерева'
		}

		if ((root.left === null) && ((root.right === null))){
			return ' '.repeat(deep)+ root.value
		}
		if ((root.left === null) && (root.right !== null)){
			return ' '.repeat(deep)+ root.value + '\n'+
					' '.repeat(deep+1) + '#' + '\n' +
					this.toString(deep+1, root.right)
		}
		if ((root.left !== null) && (root.right === null)){
			return ' '.repeat(deep)+ root.value + '\n'+
					this.toString(deep+1, root.left) + '\n' +
					' '.repeat(deep+1) + '#'
		}
		if ((root.left !== null) && (root.right !== null)){
			return ' '.repeat(deep)+ root.value + '\n'+
					this.toString(deep+1, root.left) + '\n' +
					this.toString(deep+1, root.right)
		}
	}

	deleteItem(value, root=this.root){
		if ((root.left === null) && (root.right === null)){
			this.root = null
			return 'Удалён корень'
		}
	}
}