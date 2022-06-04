---
title: Testing beast
docId: test-beast
sidebar_position: 2
---
<!-- # Quickstart -->

Once you have installed *Beast* on your system (see [Installation](../mainDocs/installation.md)), you are now ready to get started with Beast.

This tutorial will give you a basic overview of how to start using beast with the help of a basic beast build file. So let's get cracking:

1. Follow the steps provided in [Installation](../mainDocs/installation.md) to install *Beast* on your system. Once ready, run `beast -h` to see the help section for using `beast` CLI. If no errors occurred, you are ready to use *beast*.
2. Create an empty folder named *beast-test* using the command: `mkdir beast-test` and navigate to this directory using the command: `cd beast-test`.

	We will run our test in this directory
3. Create an empty file named ***beast.build***. This will be our *beast build file*. Here we will define how we want to build our project. For now, populate the beast build file like this:
    ```
    build B : A
		! echo "Building B after A!!!"
	build A :
		! echo "Building A!!!"
	build C : A
		! echo "Building C after A!!!"
    ```
	:::danger use tabs
    Remember to use tabs inside the build rules when giving commands, and not just spaces. Copying and pasting build file content from above might convert tabs to spaces. Make sure to replace those spaces with a tab indent.
	:::
4. Now run `beast` command. This will execute the commands you provided in the above file in a suitable order. The output would be something like this:
	```
    beast: Building rule A
	Building A!!!
	beast: Building rule B
	Building B after A!!!
	beast: Building rule C
	Building C after A!!!
    ```
	
You defined 3 targets above, *A*, *B* and *C*. All of them have been built. You are ready to get started!!!