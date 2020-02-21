//import { CONSTANT, MyLibrary, Foo}  from "./MyLibrary";

 interface Foo {
    executeDependency: Function;
  }
  
   class MyLibrary implements Foo {
    executeDependency() {
      return Math.floor(Math.random() * 10 + 1);
    }
  }
  
  
   const CONSTANT = "const value";

  export {
    CONSTANT,
    MyLibrary
  }
console.log("index from package",MyLibrary, CONSTANT, module.id)



