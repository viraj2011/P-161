AFRAME.registerComponent('throw', {
  init: function () {
      // Listen for keydown event to throw the ball
      window.addEventListener('keydown', (e) => {
          if (e.key === ' ') { // Space key
              this.throwBall();
          }
      });
  },
  throwBall: function () {
      // Get camera direction
      const camera = document.querySelector('#camera');
      const direction = camera.object3D.getWorldDirection(new THREE.Vector3());

      // Set velocity of the ball in the camera direction
      const ball = document.querySelector('#ball');
      ball.body.applyForce(new CANNON.Vec3(direction.x * 5, direction.y * 5, direction.z * 5), ball.object3D.position);
  }
});
