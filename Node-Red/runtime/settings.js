module.exports = {
  credentialSecret: "kinozal-dcv-2026",
  flowFile: "flows.json",
  uiPort: process.env.PORT || 1881,
  diagnostics: {
    enabled: false,
    ui: false
  },
  runtimeState: {
    enabled: false,
    ui: false
  },
  editorTheme: {
    projects: {
      enabled: false
    }
  },
  functionExternalModules: false,
  exportGlobalContextKeys: false,
  contextStorage: {
    default: {
      module: "memory"
    }
  },
  logging: {
    console: {
      level: "info",
      metrics: false,
      audit: false
    }
  }
};
