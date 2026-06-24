const { withPodfile } = getConfigPlugins();

const SOURCES = [
  'https://github.com/CocoaPods/Specs.git',
  'https://github.com/regulaforensics/podspecs.git',
];

module.exports = function withRegulaPodSources(config) {
  return withPodfile(config, (config) => {
    let podfile = config.modResults.contents;

    const missingSources = SOURCES.filter(
      (source) =>
        !podfile.includes(`source '${source}'`) &&
        !podfile.includes(`source "${source}"`)
    );

    if (missingSources.length === 0) {
      return config;
    }

    const header = [
      '# ============================================================================',
      '# Regula Pod Sources',
      '# Added automatically by @regulaforensics/document-reader',
      '#',
      '# Sources:',
      ...SOURCES.map((s) => `# - ${s}`),
      '# ============================================================================',
      '',
      ...missingSources.map((s) => `source '${s}'`),
      '',
      '',
      '',
    ].join('\n');

    config.modResults.contents = header + podfile;

    return config;
  });
};

function getConfigPlugins() {
  try {
    return require('@expo/config-plugins');
  } catch {
    return require(
      require.resolve('@expo/config-plugins', {
        paths: [process.cwd()]
      })
    );
  }
}
