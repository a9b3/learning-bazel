load(
  "@rules_python//python:defs.bzl",
  "py_binary", "py_library", "py_test",
)

load("@pipdeps//:requirements.bzl", "requirement")

py_binary(
  name = "main",
  srcs = ["main.py"],
  deps = [
    requirement("arrow"),
  ],
)
