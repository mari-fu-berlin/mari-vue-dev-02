export const layoutData = {
  data() {
    const config = {
      navigationDrawerWidth: {
        default: 500,
        colexp: 720,
        navbar: 500,
      },
    };
    return {
      toolbar: false,
      layoutState: {
        navColExp: false,
        navigationDrawerWidth: config.navigationDrawerWidth.default,
        mainPaddingLeft: 'padding-left: ' + config.navigationDrawerWidth.default + 'px',
      },
      layoutSchemeNavColExp: {
        navColExp: true,
        navigationDrawerWidth: config.navigationDrawerWidth.colexp,
        mainPaddingLeft: 'padding-left: ' + config.navigationDrawerWidth.colexp + 'px',
      },
      layoutSchemeNavBar: {
        navColExp: false,
        navigationDrawerWidth: config.navigationDrawerWidth.navbar,
        mainPaddingLeft: 'padding-left: ' + config.navigationDrawerWidth.navbar + 'px',
      },
    };
  },
};

export default layoutData;
