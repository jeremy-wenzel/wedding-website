const defaultConfig = {
  apiUrl: 'http://localhost:3000'
};

const environment = process.env.REACT_APP_ENV || 'development';

const environmentConfigs: Record<string, typeof defaultConfig> = {
  development: {
    apiUrl: process.env.REACT_APP_API_URL || defaultConfig.apiUrl,
  },
  staging: {
    apiUrl: process.env.REACT_APP_API_URL || 'https://dev.api.ari-jeremywenzel.com',
  },
  production: {
    apiUrl: process.env.REACT_APP_API_URL || 'https://api.ari-jeremywenzel.com',
  },
};

const config = {
    ...defaultConfig,
    ...environmentConfigs[environment] || {},
};

export default config;