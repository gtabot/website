window.particles_config = {
  "particles": {
    "number": {
      "value": 65,
      "density": {
        "enable": true,
        "value_area": 300
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.25
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 60,
      "color": "#000000",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 100,
        "line_linked": {
          "opacity": 0.4
        }
      },
      "push": {
        "particles_nb": 1
      }
    }
  },
  "retina_detect": true
}