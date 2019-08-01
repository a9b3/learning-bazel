# native-rules

Rules are defined as something that:

1. Take an input (ex. cc source files)
2. Performs and action (ex. runs g++)
3. Returns an output (ex. executable file)

Bazel comes with [native rules](https://docs.bazel.build/versions/master/be/overview.html).

## Run the example

```
bazel build
```

The built file can be ran using

```
$(bazel info bazel-bin)/native-rules
```

## Links

- https://docs.bazel.build/versions/master/skylark/rules.html
- https://docs.bazel.build/versions/master/be/overview.html
