export const QUIZ_DATA = {
    javascript: {
      name: 'JavaScript',
      icon: '⚡', // Adding icons for visual appeal
      quizzes: [
        {
          title: 'JavaScript Fundamentals',
          questions: [
            {
              question: 'What is the result of 2 + "2"?',
              options: ['4', '22', 'NaN', 'TypeError'],
              correctAnswer: '22'
            },
            {
              question: 'Which keyword is used to declare variables in JavaScript?',
              options: ['var', 'let', 'const', 'All of the above'],
              correctAnswer: 'All of the above'
            },
            {
              question: 'What is the typeof operator result for null?',
              options: ['null', 'undefined', 'object', 'number'],
              correctAnswer: 'object'
            },
            {
              question: 'Which method removes the last element from an array?',
              options: ['pop()', 'push()', 'shift()', 'unshift()'],
              correctAnswer: 'pop()'
            },
            {
              question: 'What is a closure in JavaScript?',
              options: [
                'A function with access to outer scope variables',
                'A way to close browser window',
                'A method to end loops',
                'A type of error'
              ],
              correctAnswer: 'A function with access to outer scope variables'
            },
            {
              question: 'What does JSON stand for?',
              options: [
                'JavaScript Object Notation',
                'JavaScript Oriented Notation',
                'JavaScript Online Notation',
                'Java Serialized Object Notation'
              ],
              correctAnswer: 'JavaScript Object Notation'
            },
            {
              question: 'Which operator is used for strict equality comparison?',
              options: ['==', '===', '=', '!='],
              correctAnswer: '==='
            },
            {
              question: 'What is the purpose of the "use strict" directive?',
              options: [
                'Enforces stricter parsing of JavaScript',
                'Makes code run faster',
                'Allows more flexible syntax',
                'Prevents code execution'
              ],
              correctAnswer: 'Enforces stricter parsing of JavaScript'
            },
            {
              question: 'What is event bubbling?',
              options: [
                'Event propagation from child to parent elements',
                'Creating multiple events',
                'Removing event listeners',
                'Adding event listeners'
              ],
              correctAnswer: 'Event propagation from child to parent elements'
            },
            {
              question: 'Which method is used to add elements to the end of an array?',
              options: ['push()', 'pop()', 'shift()', 'unshift()'],
              correctAnswer: 'push()'
            }
          ]
        },
        {
          title: 'JavaScript Intermediate',
          questions: [
            {
              question: 'What is the output of: console.log(typeof (() => {}))?',
              options: ['object', 'function', 'undefined', 'arrow'],
              correctAnswer: 'function'
            },
            {
              question: 'Which of these is a correct way to deep clone an object in JavaScript?',
              options: [
                'Object.assign({}, obj)',
                'JSON.parse(JSON.stringify(obj))',
                '{...obj}',
                'obj.clone()'
              ],
              correctAnswer: 'JSON.parse(JSON.stringify(obj))'
            },
            {
              question: 'What is the result of: [1, 2, 3].map(num => num * 2).filter(num => num > 4)?',
              options: [
                '[4, 6]',
                '[6]',
                '[2, 4, 6]',
                '[4]'
              ],
              correctAnswer: '[6]'
            },
            {
              question: 'What is the output of: console.log(0.1 + 0.2 === 0.3)?',
              options: [
                'true',
                'false',
                'undefined',
                'TypeError'
              ],
              correctAnswer: 'false'
            },
            {
              question: 'What is event delegation in JavaScript?',
              options: [
                'Adding multiple event listeners to one element',
                'Handling events on parent elements that bubble up from children',
                'Removing event listeners automatically',
                'Creating custom events'
              ],
              correctAnswer: 'Handling events on parent elements that bubble up from children'
            },
            {
              question: 'What is the output of: Promise.resolve(1).then(x => x + 1).then(x => Promise.reject(x))?',
              options: [
                'Promise {<resolved>: 2}',
                'Promise {<rejected>: 2}',
                'Promise {<pending>}',
                'Promise {<rejected>: 1}'
              ],
              correctAnswer: 'Promise {<rejected>: 2}'
            },
            {
              question: 'What is a generator function in JavaScript?',
              options: [
                'A function that generates random numbers',
                'A function that can be paused and resumed using yield',
                'A function that creates other functions',
                'A function that runs automatically'
              ],
              correctAnswer: 'A function that can be paused and resumed using yield'
            },
            {
              question: 'What is the purpose of the WeakMap object?',
              options: [
                'To store key-value pairs where keys are weakly referenced',
                'To create a map with weak security',
                'To store only primitive values',
                'To create a read-only map'
              ],
              correctAnswer: 'To store key-value pairs where keys are weakly referenced'
            },
            {
              question: 'What is the difference between microtasks and macrotasks in JavaScript?',
              options: [
                'Microtasks are faster than macrotasks',
                'Microtasks have higher priority and execute before macrotasks',
                'Macrotasks are more important than microtasks',
                'There is no difference'
              ],
              correctAnswer: 'Microtasks have higher priority and execute before macrotasks'
            },
            {
              question: 'What is the output of: console.log([...new Set([1,2,2,3,1,4])])?',
              options: [
                '[1, 2, 2, 3, 1, 4]',
                '[1, 2, 3, 4]',
                'TypeError',
                '[4, 3, 2, 1]'
              ],
              correctAnswer: '[1, 2, 3, 4]'
            }
          ]
        },
        {
          title: 'JavaScript Advanced',
          questions: [
            {
              question: 'What is the difference between Object.create(null) and {}?',
              options: [
                'No difference, they are the same',
                'Object.create(null) creates an object with no prototype chain',
                'Object.create(null) is faster',
                'Object.create(null) creates a frozen object'
              ],
              correctAnswer: 'Object.create(null) creates an object with no prototype chain'
            },
            {
              question: 'What is the output of: (function(){return typeof arguments;})();',
              options: ['array', 'object', 'arguments', 'undefined'],
              correctAnswer: 'object'
            },
            {
              question: 'What is a Symbol in JavaScript?',
              options: [
                'A primitive type for unique identifiers',
                'A type of function',
                'A special kind of object',
                'A mathematical symbol'
              ],
              correctAnswer: 'A primitive type for unique identifiers'
            },
            {
              question: 'What is the purpose of the Proxy object?',
              options: [
                'To hide IP addresses',
                'To create custom behavior for basic operations',
                'To speed up object access',
                'To encrypt data'
              ],
              correctAnswer: 'To create custom behavior for basic operations'
            },
            {
              question: 'What is the output of: console.log(1 < 2 < 3); console.log(3 > 2 > 1);',
              options: [
                'true, true',
                'true, false',
                'false, true',
                'false, false'
              ],
              correctAnswer: 'true, false'
            },
            {
              question: 'What is the purpose of the Reflect API?',
              options: [
                'To create mirrors',
                'To provide methods for interceptable JavaScript operations',
                'To reflect light in 3D games',
                'To reverse strings'
              ],
              correctAnswer: 'To provide methods for interceptable JavaScript operations'
            },
            {
              question: 'What is tail call optimization?',
              options: [
                'A way to optimize the last line of code',
                'A compiler optimization for recursive function calls in the tail position',
                'A way to reduce function length',
                'A method to optimize return statements'
              ],
              correctAnswer: 'A compiler optimization for recursive function calls in the tail position'
            },
            {
              question: 'What is the purpose of the globalThis property?',
              options: [
                'To access the global object consistently across different JavaScript environments',
                'To store global variables',
                'To create global functions',
                'To manage global state'
              ],
              correctAnswer: 'To access the global object consistently across different JavaScript environments'
            },
            {
              question: 'What is the difference between Observable and Promise?',
              options: [
                'Observables can emit multiple values over time, Promises resolve once',
                'Observables are synchronous, Promises are asynchronous',
                'Observables are deprecated, Promises are modern',
                'There is no difference'
              ],
              correctAnswer: 'Observables can emit multiple values over time, Promises resolve once'
            },
            {
              question: 'What is the purpose of the private class fields (#) syntax?',
              options: [
                'To make variables look cool',
                'To create truly private class members',
                'To indicate important properties',
                'To improve performance'
              ],
              correctAnswer: 'To create truly private class members'
            }
          ]
        }
      ]
    },
    react: {
      name: 'React',
      quizzes: [
        {
          title: 'React Fundamentals',
          questions: [
            {
              question: 'What is JSX?',
              options: [
                'JavaScript XML',
                'Java Syntax Extension',
                'JavaScript Extension',
                'Java XML'
              ],
              correctAnswer: 'JavaScript XML'
            },
            {
              question: 'Which hook is used for side effects in React?',
              options: ['useState', 'useEffect', 'useContext', 'useReducer'],
              correctAnswer: 'useEffect'
            },
            {
              question: 'What is the purpose of keys in React lists?',
              options: [
                'To style list items',
                'To help React identify which items have changed',
                'To make lists faster',
                'To count items'
              ],
              correctAnswer: 'To help React identify which items have changed'
            },
            {
              question: 'What is the virtual DOM?',
              options: [
                'A complete copy of the real DOM',
                'A lightweight copy of the real DOM used for performance optimization',
                'A virtual reality interface',
                'A DOM database'
              ],
              correctAnswer: 'A lightweight copy of the real DOM used for performance optimization'
            },
            {
              question: 'What is the purpose of React.memo()?',
              options: [
                'To memorize React concepts',
                'To prevent unnecessary re-renders of functional components',
                'To save data in memory',
                'To create memos'
              ],
              correctAnswer: 'To prevent unnecessary re-renders of functional components'
            },
            {
              question: 'What is prop drilling?',
              options: [
                'A way to create holes in components',
                'Passing props through multiple levels of components',
                'A debugging technique',
                'A performance optimization'
              ],
              correctAnswer: 'Passing props through multiple levels of components'
            },
            {
              question: 'What is the purpose of useCallback?',
              options: [
                'To memoize functions',
                'To call functions',
                'To create callbacks',
                'To handle errors'
              ],
              correctAnswer: 'To memoize functions'
            },
            {
              question: 'What is the difference between controlled and uncontrolled components?',
              options: [
                'Controlled components are better',
                'Controlled components have their state managed by React',
                'Uncontrolled components are deprecated',
                'There is no difference'
              ],
              correctAnswer: 'Controlled components have their state managed by React'
            },
            {
              question: 'What is the purpose of React.Fragment?',
              options: [
                'To fragment components',
                'To group elements without adding extra nodes to the DOM',
                'To split code',
                'To improve performance'
              ],
              correctAnswer: 'To group elements without adding extra nodes to the DOM'
            },
            {
              question: 'What is the purpose of useRef?',
              options: [
                'To create references to DOM elements',
                'To reference documentation',
                'To create refs only',
                'To improve memory usage'
              ],
              correctAnswer: 'To create references to DOM elements'
            }
          ]
        },
        {
          title: 'React Intermediate',
          questions: [
            {
              question: 'What is the purpose of React.memo()?',
              options: [
                'To memoize component rendering',
                'To create memory leaks',
                'To store global state',
                'To handle routing'
              ],
              correctAnswer: 'To memoize component rendering'
            },
            {
              question: 'What is the Context API used for?',
              options: [
                'To avoid prop drilling',
                'To create new components',
                'To handle HTTP requests',
                'To style components'
              ],
              correctAnswer: 'To avoid prop drilling'
            },
            {
              question: 'What is the purpose of useCallback hook?',
              options: [
                'To memoize functions',
                'To create state',
                'To handle side effects',
                'To manage refs'
              ],
              correctAnswer: 'To memoize functions'
            },
            {
              question: 'What is the difference between useMemo and useCallback?',
              options: [
                'useMemo memoizes values, useCallback memoizes functions',
                'useCallback memoizes values, useMemo memoizes functions',
                'They are the same',
                'useMemo is deprecated'
              ],
              correctAnswer: 'useMemo memoizes values, useCallback memoizes functions'
            },
            {
              question: 'What is React Suspense?',
              options: [
                'A way to handle loading states',
                'A state management tool',
                'A routing solution',
                'A testing framework'
              ],
              correctAnswer: 'A way to handle loading states'
            },
            {
              question: 'What is the purpose of useReducer?',
              options: [
                'To manage complex state logic',
                'To reduce bundle size',
                'To optimize performance',
                'To handle routing'
              ],
              correctAnswer: 'To manage complex state logic'
            },
            {
              question: 'What are React portals?',
              options: [
                'A way to render children outside parent DOM hierarchy',
                'A way to create new components',
                'A state management solution',
                'A routing mechanism'
              ],
              correctAnswer: 'A way to render children outside parent DOM hierarchy'
            },
            {
              question: 'What is the purpose of useLayoutEffect?',
              options: [
                'To perform synchronous updates after DOM mutations',
                'To handle asynchronous operations',
                'To manage state',
                'To create refs'
              ],
              correctAnswer: 'To perform synchronous updates after DOM mutations'
            },
            {
              question: 'What is React.StrictMode?',
              options: [
                'A development tool for highlighting potential problems',
                'A production optimization tool',
                'A type checking system',
                'A routing solution'
              ],
              correctAnswer: 'A development tool for highlighting potential problems'
            },
            {
              question: 'What is the purpose of key prop in lists?',
              options: [
                'To help React track list items efficiently',
                'To style list items',
                'To add event listeners',
                'To create refs'
              ],
              correctAnswer: 'To help React track list items efficiently'
            }
          ]
        },
        {
          title: 'React Advanced',
          questions: [
            {
              question: 'What is React Fiber?',
              options: [
                'React\'s new reconciliation algorithm',
                'A state management library',
                'A routing solution',
                'A testing framework'
              ],
              correctAnswer: 'React\'s new reconciliation algorithm'
            },
            {
              question: 'What is the purpose of ErrorBoundary in React?',
              options: [
                'To catch and handle errors in component tree',
                'To validate form inputs',
                'To handle HTTP errors',
                'To debug code'
              ],
              correctAnswer: 'To catch and handle errors in component tree'
            },
            {
              question: 'What is React Server Components?',
              options: [
                'Components that render on the server',
                'Components that use servers',
                'Backend components',
                'Database components'
              ],
              correctAnswer: 'Components that render on the server'
            },
            {
              question: 'What is the purpose of React.lazy()?',
              options: [
                'To enable code splitting',
                'To make components load slowly',
                'To reduce performance',
                'To handle errors'
              ],
              correctAnswer: 'To enable code splitting'
            },
            {
              question: 'What is the Concurrent Mode in React?',
              options: [
                'A set of features for better user experience',
                'A way to run multiple React versions',
                'A testing mode',
                'A development tool'
              ],
              correctAnswer: 'A set of features for better user experience'
            },
            {
              question: 'What is React Profiler?',
              options: [
                'A tool to measure rendering performance',
                'A user profile manager',
                'A routing solution',
                'A state manager'
              ],
              correctAnswer: 'A tool to measure rendering performance'
            },
            {
              question: 'What is the purpose of shouldComponentUpdate?',
              options: [
                'To optimize performance by preventing unnecessary renders',
                'To force component updates',
                'To handle errors',
                'To manage state'
              ],
              correctAnswer: 'To optimize performance by preventing unnecessary renders'
            },
            {
              question: 'What are React Hooks Rules?',
              options: [
                'Only call hooks at the top level and from React functions',
                'Hooks can be called anywhere',
                'Hooks must be async',
                'Hooks must return JSX'
              ],
              correctAnswer: 'Only call hooks at the top level and from React functions'
            },
            {
              question: 'What is the purpose of useImperativeHandle?',
              options: [
                'To customize the instance value exposed to parent components',
                'To handle form inputs',
                'To manage state',
                'To create refs'
              ],
              correctAnswer: 'To customize the instance value exposed to parent components'
            },
            {
              question: 'What is React Reconciliation?',
              options: [
                'The process of updating the DOM',
                'A state management solution',
                'A routing mechanism',
                'A testing framework'
              ],
              correctAnswer: 'The process of updating the DOM'
            }
          ]
        }
      ]
    },
    python: {
      name: 'Python',
      icon: '🐍',
      quizzes: [
        {
          title: 'Python Fundamentals',
          questions: [
            {
              question: 'What is Python?',
              options: [
                'An interpreted high-level programming language',
                'A compiled language',
                'A markup language',
                'A database language'
              ],
              correctAnswer: 'An interpreted high-level programming language'
            },
            {
              question: 'What is the correct file extension for Python files?',
              options: ['.py', '.pt', '.pyt', '.python'],
              correctAnswer: '.py'
            },
            {
              question: 'Which of these is not a Python data type?',
              options: ['int', 'float', 'varchar', 'bool'],
              correctAnswer: 'varchar'
            },
            {
              question: 'What is the purpose of the __init__ method?',
              options: [
                'To initialize a class',
                'To create a loop',
                'To import modules',
                'To define variables'
              ],
              correctAnswer: 'To initialize a class'
            },
            {
              question: 'What is a list comprehension?',
              options: [
                'A way to understand lists',
                'A concise way to create lists',
                'A list of comprehensions',
                'A type of loop'
              ],
              correctAnswer: 'A concise way to create lists'
            },
            {
              question: 'What is the difference between tuples and lists?',
              options: [
                'Tuples are faster',
                'Lists are immutable, tuples are mutable',
                'Tuples are immutable, lists are mutable',
                'There is no difference'
              ],
              correctAnswer: 'Tuples are immutable, lists are mutable'
            },
            {
              question: 'What is the purpose of the self parameter?',
              options: [
                'To reference the current instance of the class',
                'To create selfies',
                'To define self-contained code',
                'To improve performance'
              ],
              correctAnswer: 'To reference the current instance of the class'
            },
            {
              question: 'What is the purpose of the with statement?',
              options: [
                'To handle exceptions',
                'To ensure proper handling of resources',
                'To create loops',
                'To define functions'
              ],
              correctAnswer: 'To ensure proper handling of resources'
            },
            {
              question: 'What is a decorator in Python?',
              options: [
                'A design pattern',
                'A way to modify function behavior',
                'A type of loop',
                'A class attribute'
              ],
              correctAnswer: 'A way to modify function behavior'
            },
            {
              question: 'What is the purpose of the yield keyword?',
              options: [
                'To pause execution',
                'To create generators',
                'To return values',
                'To handle errors'
              ],
              correctAnswer: 'To create generators'
            },
            {
              question: 'What is the difference between == and is?',
              options: [
                'No difference',
                '== compares values, is compares identity',
                'is compares values, == compares identity',
                'They are the same'
              ],
              correctAnswer: '== compares values, is compares identity'
            }
          ]
        },
        {
          title: 'Python Intermediate',
          questions: [
            {
              question: 'What is a decorator in Python?',
              options: [
                'A function that modifies another function',
                'A class attribute',
                'A type of loop',
                'A variable declaration'
              ],
              correctAnswer: 'A function that modifies another function'
            }
          ]
        },
        {
          title: 'Python Advanced',
          questions: [
            {
              question: 'What is a metaclass in Python?',
              options: [
                'A class that defines behavior of other classes',
                'A type of variable',
                'A function decorator',
                'A data structure'
              ],
              correctAnswer: 'A class that defines behavior of other classes'
            }
          ]
        }
      ]
    },
    c: {
      name: 'C Programming',
      icon: '🔧',
      quizzes: [
        {
          title: 'C Fundamentals',
          questions: [
            {
              question: 'What is the purpose of the sizeof operator in C?',
              options: [
                'To calculate memory size of a variable or data type',
                'To resize arrays',
                'To measure string length',
                'To compare sizes of variables'
              ],
              correctAnswer: 'To calculate memory size of a variable or data type'
            },
            {
              question: 'What is a pointer in C?',
              options: [
                'A variable that stores a memory address',
                'A special type of array',
                'A function pointer',
                'A data structure'
              ],
              correctAnswer: 'A variable that stores a memory address'
            },
            {
              question: 'What is the difference between malloc() and calloc()?',
              options: [
                'malloc() allocates single block, calloc() allocates multiple blocks',
                'malloc() is faster than calloc()',
                'calloc() initializes memory to zero, malloc() does not',
                'There is no difference'
              ],
              correctAnswer: 'calloc() initializes memory to zero, malloc() does not'
            },
            {
              question: 'What is the purpose of the static keyword in C?',
              options: [
                'To make variables constant',
                'To preserve variable value between function calls',
                'To allocate memory dynamically',
                'To declare global variables'
              ],
              correctAnswer: 'To preserve variable value between function calls'
            },
            {
              question: 'What is a structure in C?',
              options: [
                'A user-defined data type that groups related variables',
                'A type of array',
                'A function template',
                'A control structure'
              ],
              correctAnswer: 'A user-defined data type that groups related variables'
            },
            {
              question: 'What is the purpose of the volatile keyword?',
              options: [
                'To optimize code',
                'To declare constants',
                'To tell compiler not to optimize the variable',
                'To declare global variables'
              ],
              correctAnswer: 'To tell compiler not to optimize the variable'
            },
            {
              question: 'What is the difference between ++i and i++?',
              options: [
                'No difference',
                '++i increments before use, i++ increments after use',
                'i++ is faster than ++i',
                '++i is not valid syntax'
              ],
              correctAnswer: '++i increments before use, i++ increments after use'
            },
            {
              question: 'What is a union in C?',
              options: [
                'A data type that stores different data types in same memory location',
                'A type of array',
                'A function that combines multiple values',
                'A special pointer'
              ],
              correctAnswer: 'A data type that stores different data types in same memory location'
            },
            {
              question: 'What is the purpose of the const keyword?',
              options: [
                'To declare constants',
                'To optimize code',
                'To declare static variables',
                'To allocate memory'
              ],
              correctAnswer: 'To declare constants'
            },
            {
              question: 'What is a dangling pointer?',
              options: [
                'A pointer that points to deallocated memory',
                'A null pointer',
                'A void pointer',
                'A function pointer'
              ],
              correctAnswer: 'A pointer that points to deallocated memory'
            }
          ]
        },
        {
          title: 'C Intermediate',
          questions: [
            {
              question: 'What is the difference between malloc() and calloc()?',
              options: [
                'calloc initializes memory to zero, malloc does not',
                'malloc is faster than calloc',
                'calloc can only allocate arrays',
                'There is no difference'
              ],
              correctAnswer: 'calloc initializes memory to zero, malloc does not'
            },
            {
              question: 'What is a function pointer?',
              options: [
                'A pointer that points to a function',
                'A pointer to void',
                'A null pointer',
                'A pointer to an array'
              ],
              correctAnswer: 'A pointer that points to a function'
            }
          ]
        },
        {
          title: 'C Advanced',
          questions: [
            {
              question: 'What is volatile keyword used for?',
              options: [
                'To prevent compiler optimization on variable',
                'To make variable constant',
                'To create thread-safe code',
                'To optimize performance'
              ],
              correctAnswer: 'To prevent compiler optimization on variable'
            }
          ]
        }
      ]
    },
    cpp: {
      name: 'C++',
      icon: '⚙️',
      quizzes: [
        {
          title: 'C++ Fundamentals',
          questions: [
            {
              question: 'What is a class in C++?',
              options: [
                'A user-defined data type',
                'A built-in data type',
                'A function',
                'A pointer'
              ],
              correctAnswer: 'A user-defined data type'
            },
            {
              question: 'What is polymorphism in C++?',
              options: [
                'Ability of objects to take multiple forms',
                'A type of variable',
                'A memory management technique',
                'A compilation error'
              ],
              correctAnswer: 'Ability of objects to take multiple forms'
            },
            {
              question: 'What is the purpose of virtual functions?',
              options: [
                'To support runtime polymorphism',
                'To make functions faster',
                'To declare static functions',
                'To optimize code'
              ],
              correctAnswer: 'To support runtime polymorphism'
            },
            {
              question: 'What is an abstract class?',
              options: [
                'A class with at least one pure virtual function',
                'A class that cannot be instantiated',
                'A template class',
                'A static class'
              ],
              correctAnswer: 'A class with at least one pure virtual function'
            },
            {
              question: 'What is the purpose of friend function?',
              options: [
                'To access private members of a class',
                'To make functions faster',
                'To declare static functions',
                'To create friend classes'
              ],
              correctAnswer: 'To access private members of a class'
            },
            {
              question: 'What is operator overloading?',
              options: [
                'Giving additional meaning to operators',
                'Creating new operators',
                'Removing operators',
                'Optimizing operators'
              ],
              correctAnswer: 'Giving additional meaning to operators'
            },
            {
              question: 'What is a template in C++?',
              options: [
                'A blueprint for generic classes or functions',
                'A type of class',
                'A special function',
                'A memory management tool'
              ],
              correctAnswer: 'A blueprint for generic classes or functions'
            },
            {
              question: 'What is the purpose of namespace?',
              options: [
                'To avoid name conflicts',
                'To optimize code',
                'To declare global variables',
                'To create templates'
              ],
              correctAnswer: 'To avoid name conflicts'
            },
            {
              question: 'What is RAII in C++?',
              options: [
                'Resource Acquisition Is Initialization',
                'Random Access Iterator Implementation',
                'Runtime Array Index Initialization',
                'Recursive Array Index Iteration'
              ],
              correctAnswer: 'Resource Acquisition Is Initialization'
            },
            {
              question: 'What is the difference between new and malloc?',
              options: [
                'new calls constructor, malloc does not',
                'malloc is faster than new',
                'new is C-style, malloc is C++-style',
                'There is no difference'
              ],
              correctAnswer: 'new calls constructor, malloc does not'
            }
          ]
        },
        {
          title: 'C++ Intermediate',
          questions: [
            {
              question: 'What is polymorphism in C++?',
              options: [
                'Ability of an object to take multiple forms',
                'A type of variable',
                'A memory management technique',
                'A compilation process'
              ],
              correctAnswer: 'Ability of an object to take multiple forms'
            }
          ]
        },
        {
          title: 'C++ Advanced',
          questions: [
            {
              question: 'What is RAII in C++?',
              options: [
                'Resource Acquisition Is Initialization',
                'Random Access Iterator Implementation',
                'Runtime Array Index Initialization',
                'Recursive Array Index Iteration'
              ],
              correctAnswer: 'Resource Acquisition Is Initialization'
            }
          ]
        }
      ]
    },
    java: {
      name: 'Java',
      icon: '☕',
      quizzes: [
        {
          title: 'Java Fundamentals',
          questions: [
            {
              question: 'What is the difference between JDK and JRE?',
              options: [
                'JDK includes development tools, JRE is runtime only',
                'JRE is faster than JDK',
                'JDK is for desktop, JRE is for web',
                'There is no difference'
              ],
              correctAnswer: 'JDK includes development tools, JRE is runtime only'
            },
            {
              question: 'What is the difference between == and .equals()?',
              options: [
                '== compares references, .equals() compares content',
                '.equals() is faster than ==',
                'They are the same',
                '== is more accurate'
              ],
              correctAnswer: '== compares references, .equals() compares content'
            },
            {
              question: 'What is the purpose of the final keyword?',
              options: [
                'To make variables, methods, or classes unchangeable',
                'To optimize code',
                'To declare static variables',
                'To create interfaces'
              ],
              correctAnswer: 'To make variables, methods, or classes unchangeable'
            },
            {
              question: 'What is the difference between ArrayList and LinkedList?',
              options: [
                'ArrayList uses array, LinkedList uses doubly linked list',
                'ArrayList is faster for all operations',
                'LinkedList uses less memory',
                'There is no difference'
              ],
              correctAnswer: 'ArrayList uses array, LinkedList uses doubly linked list'
            },
            {
              question: 'What is the purpose of the synchronized keyword?',
              options: [
                'To prevent thread interference',
                'To make code faster',
                'To optimize memory usage',
                'To declare static methods'
              ],
              correctAnswer: 'To prevent thread interference'
            },
            {
              question: 'What is the difference between abstract class and interface?',
              options: [
                'Abstract class can have implementation, interface cannot',
                'Interface is faster',
                'Abstract class uses less memory',
                'There is no difference'
              ],
              correctAnswer: 'Abstract class can have implementation, interface cannot'
            },
            {
              question: 'What is garbage collection in Java?',
              options: [
                'Automatic memory management',
                'Manual memory cleanup',
                'A type of error handling',
                'A design pattern'
              ],
              correctAnswer: 'Automatic memory management'
            },
            {
              question: 'What is the purpose of the static keyword?',
              options: [
                'To declare class-level members',
                'To optimize code',
                'To create interfaces',
                'To handle exceptions'
              ],
              correctAnswer: 'To declare class-level members'
            },
            {
              question: 'What is method overloading?',
              options: [
                'Multiple methods with same name but different parameters',
                'Changing method behavior in subclass',
                'Creating static methods',
                'Optimizing methods'
              ],
              correctAnswer: 'Multiple methods with same name but different parameters'
            },
            {
              question: 'What is the purpose of the super keyword?',
              options: [
                'To refer to parent class members',
                'To optimize code',
                'To create interfaces',
                'To handle exceptions'
              ],
              correctAnswer: 'To refer to parent class members'
            }
          ]
        },
        {
          title: 'Java Intermediate',
          questions: [
            {
              question: 'What is the difference between ArrayList and LinkedList?',
              options: [
                'ArrayList uses array, LinkedList uses doubly linked list',
                'ArrayList is faster for all operations',
                'LinkedList uses less memory',
                'There is no difference'
              ],
              correctAnswer: 'ArrayList uses array, LinkedList uses doubly linked list'
            },
            {
              question: 'What is the purpose of the volatile keyword?',
              options: [
                'To ensure thread-safe access to variables',
                'To make variables constant',
                'To improve performance',
                'To declare global variables'
              ],
              correctAnswer: 'To ensure thread-safe access to variables'
            },
            {
              question: 'What is the Singleton pattern?',
              options: [
                'A design pattern that ensures a class has only one instance',
                'A pattern for creating multiple objects',
                'A threading pattern',
                'A database pattern'
              ],
              correctAnswer: 'A design pattern that ensures a class has only one instance'
            },
            {
              question: 'What is the purpose of the transient keyword?',
              options: [
                'To exclude field from serialization',
                'To make field thread-safe',
                'To optimize performance',
                'To declare constants'
              ],
              correctAnswer: 'To exclude field from serialization'
            },
            {
              question: 'What is the difference between Comparable and Comparator?',
              options: [
                'Comparable provides natural ordering, Comparator provides custom ordering',
                'Comparator is faster than Comparable',
                'Comparable is newer than Comparator',
                'They are the same'
              ],
              correctAnswer: 'Comparable provides natural ordering, Comparator provides custom ordering'
            }
          ]
        },
        {
          title: 'Java Advanced',
          questions: [
            {
              question: 'What is the Java Memory Model?',
              options: [
                'A specification that defines how threads interact through memory',
                'A type of garbage collector',
                'A memory management tool',
                'A performance optimization'
              ],
              correctAnswer: 'A specification that defines how threads interact through memory'
            },
            {
              question: 'What is bytecode instrumentation?',
              options: [
                'Modifying Java bytecode at runtime',
                'Compiling Java code',
                'Debugging Java applications',
                'Optimizing code execution'
              ],
              correctAnswer: 'Modifying Java bytecode at runtime'
            },
            {
              question: 'What is the purpose of the Java Agent?',
              options: [
                'To modify classes at runtime',
                'To manage database connections',
                'To handle HTTP requests',
                'To optimize code'
              ],
              correctAnswer: 'To modify classes at runtime'
            },
            {
              question: 'What is the Fork/Join framework?',
              options: [
                'A framework for parallel programming',
                'A web framework',
                'A database framework',
                'A testing framework'
              ],
              correctAnswer: 'A framework for parallel programming'
            },
            {
              question: 'What is the purpose of the sun.misc.Unsafe class?',
              options: [
                'To perform low-level, unsafe operations',
                'To handle exceptions',
                'To manage threads',
                'To optimize code'
              ],
              correctAnswer: 'To perform low-level, unsafe operations'
            }
          ]
        }
      ]
    },
    html: {
      name: 'HTML',
      icon: '🌐',
      quizzes: [
        {
          title: 'HTML Fundamentals',
          questions: [
            {
              question: 'What does HTML stand for?',
              options: [
                'Hyper Text Markup Language',
                'High Tech Modern Language',
                'Hyper Transfer Markup Language',
                'Hyper Text Modern Links'
              ],
              correctAnswer: 'Hyper Text Markup Language'
            },
            {
              question: 'Which tag is used to create a hyperlink?',
              options: ['<link>', '<a>', '<href>', '<url>'],
              correctAnswer: '<a>'
            },
            // Add 8 more fundamental questions
          ]
        },
        {
          title: 'HTML Intermediate',
          questions: [
            {
              question: 'What is the purpose of the <canvas> element?',
              options: [
                'To draw graphics via JavaScript',
                'To display images',
                'To create forms',
                'To style content'
              ],
              correctAnswer: 'To draw graphics via JavaScript'
            },
            // Add 9 more intermediate questions
          ]
        },
        {
          title: 'HTML Advanced',
          questions: [
            {
              question: 'What is the role of the srcset attribute in responsive images?',
              options: [
                'Provides multiple image sources for different viewport sizes',
                'Sets the source of an image',
                'Defines image style',
                'Controls image loading'
              ],
              correctAnswer: 'Provides multiple image sources for different viewport sizes'
            },
            // Add 9 more advanced questions
          ]
        }
      ]
    },
    css: {
      name: 'CSS',
      icon: '🎨',
      quizzes: [
        {
          title: 'CSS Fundamentals',
          questions: [
            {
              question: 'What does CSS stand for?',
              options: [
                'Cascading Style Sheets',
                'Computer Style Sheets',
                'Creative Style System',
                'Colorful Style Sheets'
              ],
              correctAnswer: 'Cascading Style Sheets'
            },
            // Add more questions
          ]
        },
        {
          title: 'CSS Intermediate',
          questions: [
            {
              question: 'What is the difference between Flexbox and Grid?',
              options: [
                'Flexbox is 1D, Grid is 2D',
                'Flexbox is newer than Grid',
                'Grid is only for small layouts',
                'They are the same'
              ],
              correctAnswer: 'Flexbox is 1D, Grid is 2D'
            },
            // Add more questions
          ]
        },
        {
          title: 'CSS Advanced',
          questions: [
            {
              question: 'What is CSS containment?',
              options: [
                'A way to improve rendering performance',
                'A method to contain floats',
                'A type of CSS selector',
                'A layout model'
              ],
              correctAnswer: 'A way to improve rendering performance'
            },
            // Add more questions
          ]
        }
      ]
    },
    nodejs: {
      name: 'Node.js',
      icon: '⚡',
      quizzes: [
        {
          title: 'Node.js Fundamentals',
          questions: [
            {
              question: 'What is Node.js?',
              options: [
                'A JavaScript runtime built on Chrome\'s V8 engine',
                'A programming language',
                'A web browser',
                'A database'
              ],
              correctAnswer: 'A JavaScript runtime built on Chrome\'s V8 engine'
            },
            // Add more questions
          ]
        },
        {
          title: 'Node.js Intermediate',
          questions: [
            {
              question: 'What is the Event Loop in Node.js?',
              options: [
                'A mechanism to handle asynchronous operations',
                'A type of database',
                'A security feature',
                'A routing system'
              ],
              correctAnswer: 'A mechanism to handle asynchronous operations'
            },
            {
              question: 'What is the purpose of the Buffer class in Node.js?',
              options: [
                'To handle binary data',
                'To store cache',
                'To manage memory',
                'To compress files'
              ],
              correctAnswer: 'To handle binary data'
            },
            // Add 8 more intermediate questions
          ]
        },
        {
          title: 'Node.js Advanced',
          questions: [
            {
              question: 'What is clustering in Node.js?',
              options: [
                'A technique to run multiple instances of Node.js',
                'A database feature',
                'A security measure',
                'A type of error handling'
              ],
              correctAnswer: 'A technique to run multiple instances of Node.js'
            },
            // Add 9 more advanced questions
          ]
        }
      ]
    },
    sql: {
      name: 'SQL',
      icon: '📊',
      quizzes: [
        {
          title: 'SQL Fundamentals',
          questions: [
            {
              question: 'What does SQL stand for?',
              options: [
                'Structured Query Language',
                'Simple Query Language',
                'Standard Query Language',
                'System Query Language'
              ],
              correctAnswer: 'Structured Query Language'
            },
            // Add more questions
          ]
        },
        {
          title: 'SQL Intermediate',
          questions: [
            {
              question: 'What is a stored procedure?',
              options: [
                'A precompiled SQL statement',
                'A table structure',
                'A type of key',
                'A data type'
              ],
              correctAnswer: 'A precompiled SQL statement'
            },
            {
              question: 'What is the difference between UNION and UNION ALL?',
              options: [
                'UNION removes duplicates, UNION ALL keeps them',
                'UNION ALL is faster',
                'UNION works with different tables',
                'There is no difference'
              ],
              correctAnswer: 'UNION removes duplicates, UNION ALL keeps them'
            },
            // Add 8 more intermediate questions
          ]
        },
        {
          title: 'SQL Advanced',
          questions: [
            {
              question: 'What is a deadlock in SQL?',
              options: [
                'When two transactions block each other',
                'When a query never ends',
                'When data is corrupted',
                'When server crashes'
              ],
              correctAnswer: 'When two transactions block each other'
            },
            // Add 9 more advanced questions
          ]
        }
      ]
    },
    mongodb: {
      name: 'MongoDB',
      icon: '🍃',
      quizzes: [
        {
          title: 'MongoDB Fundamentals',
          questions: [
            {
              question: 'What type of database is MongoDB?',
              options: [
                'NoSQL Document Database',
                'Relational Database',
                'Graph Database',
                'Key-Value Store'
              ],
              correctAnswer: 'NoSQL Document Database'
            },
            // Add more questions
          ]
        },
        {
          title: 'MongoDB Intermediate',
          questions: [
            {
              question: 'What is an aggregation pipeline?',
              options: [
                'A framework for data aggregation',
                'A type of index',
                'A backup system',
                'A replication method'
              ],
              correctAnswer: 'A framework for data aggregation'
            },
            {
              question: 'What is sharding in MongoDB?',
              options: [
                'Distributing data across multiple machines',
                'Deleting old data',
                'Compressing data',
                'Indexing data'
              ],
              correctAnswer: 'Distributing data across multiple machines'
            },
            // Add 8 more intermediate questions
          ]
        },
        {
          title: 'MongoDB Advanced',
          questions: [
            {
              question: 'What is the purpose of the $lookup operator?',
              options: [
                'To perform left outer joins',
                'To search text',
                'To create indexes',
                'To update documents'
              ],
              correctAnswer: 'To perform left outer joins'
            },
            // Add 9 more advanced questions
          ]
        }
      ]
    },
    express: {
      name: 'Express.js',
      icon: '🚂',
      quizzes: [
        {
          title: 'Express.js Fundamentals',
          questions: [
            {
              question: 'What is Express.js?',
              options: [
                'A web application framework for Node.js',
                'A database system',
                'A frontend framework',
                'A programming language'
              ],
              correctAnswer: 'A web application framework for Node.js'
            },
            // Add more questions
          ]
        },
        {
          title: 'Express.js Intermediate',
          questions: [
            {
              question: 'What is middleware in Express.js?',
              options: [
                'Functions that have access to request and response objects',
                'A database system',
                'A routing mechanism',
                'A template engine'
              ],
              correctAnswer: 'Functions that have access to request and response objects'
            },
            {
              question: 'What is the purpose of next() in Express middleware?',
              options: [
                'To pass control to the next middleware function',
                'To end the request',
                'To send a response',
                'To handle errors'
              ],
              correctAnswer: 'To pass control to the next middleware function'
            }
          ]
        },
        {
          title: 'Express.js Advanced',
          questions: [
            {
              question: 'What is Express.js rate limiting?',
              options: [
                'A technique to limit repeated requests',
                'A way to optimize routes',
                'A database connection limit',
                'A memory management technique'
              ],
              correctAnswer: 'A technique to limit repeated requests'
            },
            {
              question: 'What is the purpose of Express.js security middleware?',
              options: [
                'To protect against common web vulnerabilities',
                'To encrypt data',
                'To compress responses',
                'To cache requests'
              ],
              correctAnswer: 'To protect against common web vulnerabilities'
            }
          ]
        }
      ]
    }
  };