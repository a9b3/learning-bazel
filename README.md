# Learning Bazel

Bazel is a build system that allows you the ability to specify your build
infrastructure as a dag. This allows the build system to handle determining
required actions when any part of that dag changes. Bazel also provides a common
interface for you to build any part of your system with.

## Install

```
brew tap bazelbuild/tap
brew install bazelbuild/tap/bazel

# Check the binary
bazel --version
```

## Concepts

#### Label

A label is the name of a target within a workspace. (ex. `//hello:hello-world`)

There exists two parts for a label, given the example.

1. package name (ex. `hello` is the package name which is the relative path from
   the WORKSPACE)
2. target name (ex. `hello-world` is the target name)
