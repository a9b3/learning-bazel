package(default_visibility=["//visibility:public"])
load("@npm_bazel_typescript//:defs.bzl", "ts_library")
load("@build_bazel_rules_nodejs//:defs.bzl", "nodejs_binary")

ts_library(
    name = "use-shared",
    srcs = glob(["*.ts"]),
    deps = [
      # Available in source code as `<workspace_name>/common/oneoff`
      "//common/oneoff",
      "@npm//@types",
    ],
)

nodejs_binary(
  name = "try",
  data = [
    "//common/oneoff",
    ":use-shared",
  ],
  entry_point = "try.js",
)

load("@io_bazel_rules_docker//nodejs:image.bzl", "nodejs_image")

# To run locally you have to
# bazel run --platforms=@build_bazel_rules_nodejs//toolchains/node:linux_amd64 "//scripts/use-shared:use-shared-image"
# More info here https://github.com/bazelbuild/rules_nodejs/pull/645
nodejs_image(
  name = "use-shared-image",
  data = [
    "//common/oneoff",
    ":use-shared",
  ],
  entry_point = "try.js",
)
