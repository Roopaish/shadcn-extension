// @ts-nocheck
// This file is autogenerated by scripts/registry-builder.ts
// Do not edit this file directly.
import * as React from "react"

export const Index: Record<string, any> = {
    "default": {
    "tree-view-api": {
      name: "tree-view-api",
      type: "components:extension",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/extension/tree-view-api")),
      files: ["src/registry/default/extension/tree-view-api.tsx"],
    },
    "file-upload": {
      name: "file-upload",
      type: "components:extension",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/extension/file-upload")),
      files: ["src/registry/default/extension/file-upload.tsx"],
    },
    "multi-select": {
      name: "multi-select",
      type: "components:extension",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/extension/multi-select")),
      files: ["src/registry/default/extension/multi-select.tsx"],
    },
    "otp-input": {
      name: "otp-input",
      type: "components:extension",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/extension/otp-input")),
      files: ["src/registry/default/extension/otp-input.tsx"],
    },
    "carousel": {
      name: "carousel",
      type: "components:extension",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/extension/carousel")),
      files: ["src/registry/default/extension/carousel.tsx"],
    },
    "breadcrumb": {
      name: "breadcrumb",
      type: "components:extension",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/extension/breadcrumb")),
      files: ["src/registry/default/extension/breadcrumb.tsx"],
    },
    "image-carousel-upload": {
      name: "image-carousel-upload",
      type: "components:extension",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/extension/image-carousel-upload")),
      files: ["src/registry/default/extension/image-carousel-upload.tsx"],
    },
    "tree-view-example": {
      name: "tree-view-example",
      type: "components:example",
      registryDependencies: ["tree-view-api"],
      component: React.lazy(() => import("@/registry/default/example/tree-view-example")),
      files: ["src/registry/default/example/tree-view-example.tsx"],
    },
    "file-upload-example": {
      name: "file-upload-example",
      type: "components:example",
      registryDependencies: ["file-upload"],
      component: React.lazy(() => import("@/registry/default/example/file-upload-example")),
      files: ["src/registry/default/example/file-upload-example.tsx"],
    },
    "multi-select-example": {
      name: "multi-select-example",
      type: "components:example",
      registryDependencies: ["multi-select"],
      component: React.lazy(() => import("@/registry/default/example/multi-select-example")),
      files: ["src/registry/default/example/multi-select-example.tsx"],
    },
    "otp-input-example": {
      name: "otp-input-example",
      type: "components:example",
      registryDependencies: ["otp-input"],
      component: React.lazy(() => import("@/registry/default/example/otp-input-example")),
      files: ["src/registry/default/example/otp-input-example.tsx"],
    },
    "carousel-example": {
      name: "carousel-example",
      type: "components:example",
      registryDependencies: ["carousel"],
      component: React.lazy(() => import("@/registry/default/example/carousel-example")),
      files: ["src/registry/default/example/carousel-example.tsx"],
    },
    "breadcrumb-example": {
      name: "breadcrumb-example",
      type: "components:example",
      registryDependencies: ["breadcrumb"],
      component: React.lazy(() => import("@/registry/default/example/breadcrumb-example")),
      files: ["src/registry/default/example/breadcrumb-example.tsx"],
    },
    "image-carousel-upload-example": {
      name: "image-carousel-upload-example",
      type: "components:example",
      registryDependencies: ["image-carousel-upload"],
      component: React.lazy(() => import("@/registry/default/example/image-carousel-upload-example")),
      files: ["src/registry/default/example/image-carousel-upload-example.tsx"],
    },
  },
}
