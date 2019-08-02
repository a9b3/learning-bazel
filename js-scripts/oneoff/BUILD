load("@build_bazel_rules_nodejs//:defs.bzl", "nodejs_binary")

nodejs_binary(
    name = "oneoff",
    data = [
      "@npm//qs",
    ],
    entry_point = ":index.js",
)
