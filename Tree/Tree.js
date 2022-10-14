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
			return 'Нет главной вершины'
		}

		if ((root.left === null) && ((root.right === null))){
			return '|-'.repeat(deep)+ root.value
		}
		if ((root.left === null) && (root.right !== null)){
			return '|-'.repeat(deep)+ root.value + '\n'+
				'|-'.repeat(deep+1) + '#' + '\n' +
					this.toString(deep+1, root.right)
		}
		if ((root.left !== null) && (root.right === null)){
			return '|-'.repeat(deep)+ root.value + '\n'+
					this.toString(deep+1, root.left) + '\n' +
				'|-'.repeat(deep+1) + '#'
		}
		if ((root.left !== null) && (root.right !== null)){
			return '|-'.repeat(deep)+ root.value + '\n'+
					this.toString(deep+1, root.left) + '\n' +
					this.toString(deep+1, root.right)
		}
	}

	deleteRoot(value){

		this.root = this.#deleteRoot(value)
	}

	#deleteRoot(value, root=this.root){

		if (root.value === value){
			if ((root.left === null) && (root.right === null)){
				return null
			}
			if ((root.left !== null) && (root.right === null)){
				return root.left
			}
			if ((root.left === null) && (root.right !== null)){
				return root.right
			}
			if ((root.left !== null) && (root.right !== null)){
				let rightMin = this.findMinValue(value, root.right)
				root.value = rightMin
				root.right = this.#deleteRoot(rightMin, root.right)
				return root
			}

		}

		if (root.left)
			root.left = this.#deleteRoot(value, root.left)
		if (root.right)
			root.right = this.#deleteRoot(value, root.right)

		return root
	}

	findMinValue(value,root=this.root){
		if (root.left === null) {
			return root.value
		}
		return this.findMinValue(value, root.left)
	}

	findRootValueContainer(value, root=this.root){
		if (root === null) {
			return  null
		}
		if ((root.right?.value === value)|| (root.left?.value === value)){
			return root
		}
		if (value > root.value){
			return this.findRootValueContainer(value, root.right)
		}
		if (value < root.value){
			return this.findRootValueContainer(value, root.left)
		}
	}

	findRoot(value, root=this.root){
		if (root === null) {
			return  null
		}
		if (value > root.value){
			return this.findRoot(value, root.right)
		}
		if (value < root.value){
			return this.findRoot(value, root.left)
		}
		if (root.value === value){
			return root
		}
	}

}
