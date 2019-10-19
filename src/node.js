class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.parent = null;
        this.left = null;
        this.right = null;

    }

    appendChild(node) {
        if (this.left === null) {
            this.left = node;
            node.parent = this;
        } else if (this.right === null) {
            this.right = node;
            node.parent = this;
        }
    }

    removeChild(node) {
        if (this.left === node) {
            this.left = null;
            node.parent = null;

        } else if (this.right === node) {
            this.right = null;
            node.parent = null;
        } else throw Error
    }

    remove() {
        if (this.parent !== null) {
            this.parent.removeChild(this)
        }
    }

    swapWithParent() {
        if (this.parent) {
            if (this.left) this.left.parent = this.parent;
            if (this.right) this.right.parent = this.parent;

            if (this === this.parent.left) {
                if (this.parent.right) this.parent.right.parent = this;
                [this.parent.left, this.parent.right, this.left, this.right] = [this.left, this.right, this.parent, this.parent.right];
            }

            if (this === this.parent.right) {
                if (this.parent.left) this.parent.left.parent = this;
                [this.parent.left, this.parent.right, this.left, this.right] = [this.left, this.right, this.parent.left, this.parent];
            }

            if (this.parent.parent) {
                if (this.parent === this.parent.parent.left) {
                    this.parent.parent.left = this;
                }
                if (this.parent === this.parent.parent.right) {
                    this.parent.parent.right = this;
                }
            }
            [this.parent.parent, this.parent] = [this, this.parent.parent];
        }
    }

}

module.exports = Node;
