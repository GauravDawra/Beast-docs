---
title: Beast quickstart
docId: beast-quickstart
sidebar_position: 3
---
<!-- # Beast quickstart -->

We will build this sample project with the help of Beast. A Beast build file has already been provided with this repository.
Make sure that Beast has already been installed before moving forward. See [Installation](../mainDocs/installation.md).

Follow these steps to build the repository:
## Step 1: Clone the repository
First we will clone this repository locally to test out Beast. To do this, open a terminal and type:
```
git clone https://github.com/GauravDawra/Beast-quickstart.git beast-quickstart
```
This will clone the repository in a *beast-quickstart* folder.

## Step 2: Open the folder
Next, navigate to the cloned repository by typing:
```
cd beast-quickstart
```
Open the *beast.build* file to check out it's contents. For the purpose of this tutorial, it is not important to understand what this beast file does. You can check out the *Writing a Beast file* page in the documentation.

Broadly speaking, this build file defines 2 targets: *main*: our final executable, and *util.o*: an object file for utility functions. The executable is dependent on the object file.
:::danger use tabs
Remember to use tabs inside the build rules when giving commands, and not just spaces. If the shell commands inside the build rules, commands followed '!' (exclamation mark), are indented using spaces instead of a tab, make sure to convert these spaces into a single tab indent.
:::
## Step 3: Building via *Beast*
Now that we have setup everything, we are ready to build our project. To start the build, simply run the following command:
```
beast
```
This will start your build process and will also tell you which target is being currently built. Once the build is complete, you will see two new files in *beast-quickstart* (current) folder, *main* and *util.o*.

## Step 4: Running the executable
To run the newly created executable, run the following command:
```
./main
```

Great!!! You have completed the quickstart tutorial for Beast. Move on the documentation for learning more about Beast files and Beast to start creating your own projects!!