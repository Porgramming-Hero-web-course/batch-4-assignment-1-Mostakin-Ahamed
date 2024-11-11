Type Guards in TypeScript enhance type safety by allowing you to refine types at runtime. While TypeScript's type system checks types at compile time, Type Guards enable dynamic type narrowing, which is crucial when working with variables that can have multiple types (e.g., union types or unknown types). Without Type Guards, TypeScript can't infer the exact type, leading to potential runtime errors.

Using Type Guards ensures operations are performed only on valid types, improving code reliability. They are particularly useful when handling user input, third-party APIs, or unpredictable data types.

There are 4 types of type guards in Typescript.

1. "typeof" Type Guard: Used to narrow down primitive types such as string, number, boolean, etc.

2. "instanceof" Type Guard: Used to check if an object is an instance of a specific class or constructor function.

3. User-Defined Type Guards: Custom functions that return a type predicate (is TypeName) to refine types based on custom logic.

4. "in" Operator Type Guard: Checks if a specific property exists within an object, useful for distinguishing between object types with different structures.
