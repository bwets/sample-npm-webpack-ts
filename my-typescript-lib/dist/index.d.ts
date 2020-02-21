interface Foo {
    executeDependency: Function;
}
declare class MyLibrary implements Foo {
    executeDependency(): number;
}
declare const CONSTANT = "const value";
export { CONSTANT, MyLibrary };
