### TS-namespace
通过 namespace 来声明一个命名空间，主要是进行作用域的划分，防止命名冲突
```ts
export namespace Form {
  export interface Item {
    name: string
    age: number
    sex: number
    isMarried: boolean
  }
  export type getFormData = (key: string, data: Record<string, any>) => {}  
}
```