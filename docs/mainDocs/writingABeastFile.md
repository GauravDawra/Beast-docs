---
title: Writing a Beast file
sidebar_position: 3
---
<!-- # Writing a Beast file -->

Beast has been made keeping easiness of usage in mind. Writing a beast build file is very easy. The name of a Beast build file is ***beast.build***.
This article walks you through a basic way to write a build file. So let's get started!!!

## Introduction
Beast builds the targets that you specify in your build file based on the dependencies you specify among various targets. Simply put, it develops internal dependency relationships between various tasks that you need to complete (in this case, tasks means building a target).

These dependencies are specified in the *beast.build* file. As we will see, we do this while specifying *build rules* for various targets. We can also define several *variables* in our beast file that can be changed locally withing several rules. One thing to note here is that beast runs all the commands given to build a specific target on the shell. So proper syntax for the commands in particular should be followed.

## Defining build rules for targets
A *build rule* for a target is what defines how the particular target will be built, what commands will be carried out while building this target, in what order will they be executed and what other targets should be built (or should be present before building this target).

Let us take a look at an example for a build target:
```
build A : A.cpp B.o
	! g++ A.cpp B.o -o A
	! echo "A has been built!!!"
```
There are a number of things to observe in the example. First of all, note the *build* keyword. The **build** keyword specifies that we are about to define a build rule for the target that follows. In this case, the name of the target is *A*.

Next, note that some file names (target names) follow after a colon (:), *A.cpp* and *B.o*. These are the dependencies on which the target *A* depends. This means, that it is necessary for these dependencies to either exist or to be built before *A* can be built. 

:::note Build optimization
Beast only builds a target if any of its dependencies has been updated after the modification of the target, to optimize the build procedure.
:::

Everything inside the build rule should be indented, as you can see above. 

## Build commands
To specify a build command (which is a shell command), we have to add an exclamantion mark (!) in the beginning of the line as shown above. These can only be defined inside a build rule. 

Everything that follows this exclamation mark is considered as a shell command to be executed while building the target. If multiple shell commands are specified in a build rule (like in the example), they will be executed in the order they appear.

## Variables
We can define variables in our beast file. This can be done either in the *global scope* (outside any build rules) so that the variables are visible to all the rules or locally inside the build rules. Each variable can either be an *integer* or a *string*. Variables can be defined like:
```
a = "hello"
b = 50
c = b + 20
```
In the above example, 3 variables are defined. *a* is a string "hello", *b* is an integer 50, and *c* takes the variable *b* and adds 20 to it which makes it an 70.
Similarly, we can do the same inside any build rule, like:
```
build A : B C
	CXX = "g++"
	! echo "building A!!"
```
Variables declared outside any build rule, in the *global scope* will be available for use in the global scope as well as inside the build rules. While those defined inside a build rule will only be visible inside the build rule.

:::info
Note that only the final value of a variable is visible to everyone. The same goes for inside the build rule. If the value of one of the variables is modified after it's first declaration, only the final modified value is used for all purposes.
:::
Now, since we have declared variables, we also need to be able to access them inside build commands. This can be done using the prefix *$* (dollar) operator. To access variable *var* we use *$(var)*. Single letter variables can be accessed without the round brackets *()*. An example of variable usage inside a build rule:
```
glob = "I am a global variable"
build A : B
	var = "hello"
	a = 5
	! echo $(var)
	! echo $a $(glob)
```

Since we might need to use the actual *$* character, the *$* letter can be used inside the command by escaping it with another *$* like:
```
build A : B
	! echo $$var
```
This command will be resolve to *echo $var* when being executed.

When we try to access the value of a variable that has not be declared, Beast will not replace it with anything. So if *var* is not declared in any scope (global or build rule scope), then a *$(var)* inside a build command will remain as *$(var)*.

## Comments
Comments are statements that will not be read or processed by Beast. As in any programming language, comments can help define purpose of various statements in your code/file.

Beast supports single line comments. All comments are preceded by '\#' (a hash symbol), which denotes that everything following it will be a comment.

```
a = "hi there" # variable 'a'

# build rule for A
build A : B
	! echo "Building A!!!"
```
The above example has two comments, *"variable 'a'"* and *"build rule for A"*.
:::note Depdency definition and comments
You cannot use comments while defining dependencies for a build rule. For example, you cannot use `build A : #B`. in this case, *#B* will be taken as the name of a dependency for target A and will not be considered as a comment.
:::