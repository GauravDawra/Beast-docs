---
title: CLI options
sidebar_position: 4
---
The *beast* CLI comes with the following command line options:

|Option       |Description|
|-------------|--------|
|-d (*dir*) / --directory=(*dir*)  | Specifies *dir* as the build directory. Beast will look for ***beast.build*** inside this directory. The default build directory is the current working directory.     |
|-j (*threads*) / --threads=(*threads*) | Specifies the number of threads to carry out the build process in parallel. One thread corresponds to a sequential build. Default value is 1. |
|-h / --help| Prints the help for the CLI, including the options|

## -d (--directory)
This option specifies build directory for beast. This means, that Beast will run all commands as if the current working directory was that specified in this option. Also, Beast will look for the beast build file (**beast.build**) in this directory.

:::tip
Use this option when you want to call `beast` CLI from within a beast build file for another subdirectory in your project
:::

## -j (--threads)
This option specifies the number of threads to be used in parallel for building the targets specified in the beast build file. Note after a increasing the number of threads beyond a certain point, you might not see any improvement in build times. This depends on the structure of the dependency graph for your build file (see [Build Procedure](buildProcedure.md)).

## -h (--help)
This option prints the help section for using the beast CLI, including the various options above. It also prints the correct usage of the CLI along with a short description of various command line options.
