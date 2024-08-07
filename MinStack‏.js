var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
    }
};

MinStack.prototype.pop = function() {
    if (this.stack.length > 0) {
        const val = this.stack.pop();
        if (val === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }
};

MinStack.prototype.top = function() {
    if (this.stack.length > 0) {
        return this.stack[this.stack.length - 1];
    }
    return null;
};


MinStack.prototype.getMin = function() {
    if (this.minStack.length > 0) {
        return this.minStack[this.minStack.length - 1];
    }
    return null;
};

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); //  -3
minStack.pop();
console.log(minStack.top());    //  0
console.log(minStack.getMin()); //   -2
