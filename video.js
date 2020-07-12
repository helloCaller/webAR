AFRAME.registerComponent('vidhandler', {
  // ...
  init: function () {
      this.toggle = false;
      this.vid = document.querySelector("#videoID")
      this.vid.pause();
      var texture = new THREE.VideoTexture( this.vid );
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.format = THREE.RGBFormat;
  },
  tick: function () {
      if (this.el.object3D.visible == true) {
          if (!this.toggle) {
              this.toggle = true;
              this.vid.play();
          }
      } else {
          this.toggle = false;
          this.vid.play();
      }
  }
});