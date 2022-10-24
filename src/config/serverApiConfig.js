export const API_BASE_URL =
  process.env.NODE_ENV == 'production' || process.env.REACT_APP_DEV_REMOTE == 'remote'
    ? 'https://idurar-crm-erp.herokuapp.com/api/'
    : 'https://backcrm.herokuapp.com/api/';
export const DOWNLOAD_BASE_URL =
  process.env.NODE_ENV == 'production' || process.env.REACT_APP_DEV_REMOTE == 'remote'
    ? 'https://idurar-crm-erp.herokuapp.com/download/'
    : 'https://backcrm.herokuapp.com/download/';
export const ACCESS_TOKEN_NAME = 'x-auth-token';
