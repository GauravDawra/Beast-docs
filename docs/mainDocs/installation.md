---
sidebar_position: 2
# slug: /
---
# Installation

Installing Beast is super-easy. You can either download your *system binaries* directly or you can compile it from source yourself. 

## Pre-compiled binaries
You can directly download your system specific binaries from the release section on github.

Once you have downloaded the binaries, make sure that the location of this executable is present in the *PATH* environment variable. */usr/local/bin* is the preferred position to place the *beast* executable.

## Compiling from source
For compiling the souce, you would require:
- make
- GNU G++ (>= 10.0) or Clang
- flex
- bison

Note: flex and bison are required only if the *parser.cpp/hpp* and *scanner.cpp/h* files are not present in your source code or is outdated.

Follow these steps to compile:
1. Clone the github Beast repository with the following command:
    `git clone https://github.com/GauravDawra/Beast Beast --recursive`.
    Make sure you use the *--recursive* flag since the code has some submodule dependencies
2. Move into the *Beast* directory using `cd Beast`.
3. Now we will compile the source code using *make*. If your *g++* points to one one of the suitable compilers listed above the simply run `make MODE=RELEASE`. Otherwise, you should point *CXX* environment variable to a suitable compiler and then run the above command. Your command will then look like: `CXX=<path_to_compiler> make MODE=RELEASE`.
4. An executable named *beast* should then appear in rhe main working directory if the compilation was successful. To add it to the $PATH at */usr/local/bin*, simply run `make install`. This is a root action so you will have to enter your password for this step. If you don't want to install this to your /usr/local/bin, you can directly use the *beast* binary.