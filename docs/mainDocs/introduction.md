---
sidebar_position: 1
slug: /
title: Introduction
docId: introduction
---

# ***Beast*** - The Build System {#my-explicit-id}
![intro-logo](../../static/img/favicon.png)

Beast is a build system designed for the purpose of power,
speed and productivity. This build system tries to combine ease 
of use with high efficiency. It is very easy to use syntactically,
and also provides great build times!

[![MacOS](https://github.com/GauravDawra/Beast/actions/workflows/mac_build.yml/badge.svg)](https://github.com/GauravDawra/Beast/actions?query=workflow%3AMacOS)
[![Ubuntu](https://github.com/GauravDawra/Beast/actions/workflows/ubuntu_build.yml/badge.svg)](https://github.com/GauravDawra/Beast/actions?query=workflow%3AUbuntu)

Beast builds projects based on the information provided in a *beast build file*. In this build file, the user defines what all items need to be built (*targets*), how they should be built (*build rules*), and what all targets need to be ready to build a particular target (*dependencies*). In this way, Beast works on a comprehensive and easy to use target-dependency model. For more information about the particular aspects of a build file, see [**Writing a Beast File**](writingABeastFile.md).

Not only does Beast provide you with an easy to understand structure for all your build needs, it comes with a super-easy and intuitive syntax. This causes Beast to be a tool suitable for both highly experienced programmers and beginners.

In addition, Beast has a highly optimized build procedure which works well for multiple threads too. Understanding the build procedure can further help you write optimized beast build files. See [**Build procedure**](buildProcedure.md).
<!-- , where the user defines several *rules*. These *build rules* define what needs to be done to build a *target* and what all dependencies need to be met before building this *target*. -->
Go ahead and... ***Unleash the Beast***!