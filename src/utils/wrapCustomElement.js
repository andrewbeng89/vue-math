/* eslint-disable no-param-reassign */

export default ({ element, name }) => ({
  define: () => {
    element.define(name);
  },
  useWith: {
    vue: (Vue) => {
      Vue.config.ignoredElements = Vue.config.ignoredElements
        ? Vue.config.ignoredElements.push(name)
        : [name];
    },
  },
});
