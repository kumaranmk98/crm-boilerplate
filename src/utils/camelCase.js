import camelCaseKeys from 'camelcase-keys';

const camelCase = (content = {}) => {
  return camelCaseKeys(content, { deep: true });
};

export default camelCase;
