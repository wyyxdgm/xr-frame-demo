Component({
  scene: null,
  wxball: null,
  wxballTransform: null,
  wxballAnimator: null,
  animationRuning: false,
  properties: {
    markerImg: {
      type: String
    },
  },
  data: {
    loaded: false,
    arReady: false,
  },
  lifetimes: {
    async attached() {
      console.log('data', this.data);
    }
  },
  methods: {
    handleReady({
      detail
    }) {
      const xrScene = this.scene = detail.value;
      console.log('xr-scene', xrScene);

    },
    handleAssetsProgress: function ({
      detail
    }) {
      console.log('assets progress', detail.value);
    },
    handleAssetsLoaded: function ({
      detail
    }) {
      console.log('assets loaded', detail.value);
      this.setData({
        loaded: true
      });
    }
  }
})