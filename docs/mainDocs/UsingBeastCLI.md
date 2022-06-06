---
title: Using Beast in your project
sidebar_position: 7
---
<!-- # Using Beast in your project -->
Beast is very easy to integrate in your project with the help of just one beast build file, **beast.build**. A beast file can be written with minimal syntax and is very intuitive to use. There are a bunch functionalities that make the file writing process easy and intuitive. Also, Beast command line interface can be easily used to build your project and sub-directories.

1. Place the **beast.build** file in the root working directory of your project. For more information on how to write the build file, look at [Writing a Beast file](./writingABeastFile.md).

2. Once you have placed the beast file in your project directory, navigate to this directory on a shell. Simply run `beast` in your terminal to start the build process.

This will start the build process. The necessary build rules will be carried out in the order taking into account the dependencies. For more information on the build procedure, look at [Build procedure](./buildProcedure.md).

You can also use beast itself for various directories and sub-directories. If you want to build a subdirectory in your project you can simply use the `-d` CLI option within the beast file at your main directory.

For example, if you have a subfolder called *sub* within the main directory of your project, place a beast file in both, this main working directory and *sub* directory. Now, from within the *beast.build* file in your main directory simply call
```
build sub:
    ! beast -d sub
```

For a hands on tutorial on building a sample project, look at [Quickstart](../quickStart/beast-quickstart.md)!