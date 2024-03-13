
// tsc collections --target esnext && node collections
// tsc --watch # when using tsconfig.json, after "tsc --init"

// https://www.typescriptlang.org/docs/handbook/2/generics.html
class Stack<Type> {

    #contentsArray: Type[] = [];

    push(...contents: Type[]) {
        this.#contentsArray.push(...contents);
    }

    pop(): Type | undefined {
        return this.#contentsArray.pop();
    }

}

var stack = new Stack<string>();
stack.push("item 1", "item 2", "item 3")
console.log(stack.pop())
console.log(stack.pop())
