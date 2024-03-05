import _ from "lodash";

function scaleBetween(unscaledNum, minAllowed, maxAllowed, min, max) {
  return (
    ((maxAllowed - minAllowed) * (unscaledNum - min)) / (max - min) + minAllowed
  );
}

class ParticleCanvas {
  state = {
    deltaX: 0,
    deltaY: 0,
  };

  constructor() {
    this.setSize = this.setSize.bind(this);
    this.mapPoints = this.mapPoints.bind(this);
    this.frame = this.frame.bind(this);
    this.updateDelta = this.updateDelta.bind(this);

    this.canvas = null;
    this.ctx = null;
  }

  init() {
    this.canvas = document.getElementById("particle-canvas");
    if (!this.canvas) {
      throw new Error(
        "Canvas element with ID 'particle-canvas' not found in the DOM"
      );
    }

    this.ctx = this.canvas.getContext("2d");
    if (!this.ctx) {
      throw new Error("Unable to obtain 2D rendering context for canvas");
    }

    this.setSize();

    this.maxLength = 140;
    this.pointsNum = Math.floor((this.height * this.width) / 18000); // Number of points
    this.ctx.fillStyle = "#fff";

    // create initial points
    this.point = [];
    for (let i = 0; i < this.pointsNum; ++i) {
      this.point[i] = new Point(
        this.ctx,
        this.width,
        this.height,
        this.maxLength,
        "#fff"
      );
    }

    this.addListeners();
    this.frame();
  }

  setSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.width = width;
    this.height = height;
    this.canvas.width = width;
    this.canvas.height = height;
  }

  mapPoints() {
    this.setSize();
    this.point.map((p) =>
      p.updateSize(this.width, this.height, this.props.dotColor)
    );
  }

  destroy() {
    window.cancelAnimationFrame(this.animation);
    window.removeEventListener("resize", this.mapPoints);
  }

  frame() {
    this.animation = requestAnimationFrame(this.frame);

    const gradient = this.ctx.createLinearGradient(0, 0, 0, this.height);
    gradient.addColorStop(0, "#000");
    gradient.addColorStop(1, "#000");
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.width, this.height); // clear the canvas

    for (let i = 0; i < this.pointsNum; ++i) {
      this.point[i].update(this.state.deltaX, this.state.deltaY); // update coordinates
      this.point[i].collision(); // check collision
    }

    this.updateLines(); // draw the line where you want to

    for (let i = 0; i < this.pointsNum; ++i) {
      this.point[i].draw(); // draw the points themselves
    }
  }

  // update feature lines between points
  updateLines() {
    let dist = 0;
    let dx = 0;
    let dy = 0;

    for (let i = 0; i < this.pointsNum - 1; ++i) {
      for (let j = i + 1; j < this.pointsNum; ++j) {
        dx = this.point[i].pos.x - this.point[j].pos.x;
        dy = this.point[i].pos.y - this.point[j].pos.y;
        dist = Math.sqrt(dx * dx + dy * dy); // the distance between two points on the plane

        if (dist < this.maxLength) {
          const opacity = scaleBetween(dist, 1, 0, 0, this.maxLength);
          // const opacity = 1;
          this.ctx.strokeStyle = "rgba(255, 255, 255," + opacity + ")"; // 7, matched experimentally
          this.ctx.beginPath();
          this.ctx.moveTo(this.point[i].pos.x, this.point[i].pos.y); // to a point
          this.ctx.lineTo(this.point[j].pos.x, this.point[j].pos.y); // second
          this.ctx.stroke();
        }
      }
    }
  }

  updateDelta(event) {
    let { deltaX, deltaY } = event;

    // prevents page navigation on horizontal scrolls
    event.preventDefault();
    // slow down
    deltaX /= 5;
    deltaX *= -1;
    deltaY /= 5;
    deltaY *= -1;

    this.state = {
      deltaX,
      deltaY,
    };
  }

  addListeners() {
    this.mapPoints = _.debounce(this.mapPoints, 500);
    this.canvas.addEventListener("wheel", this.updateDelta);

    window.addEventListener("resize", this.mapPoints);
  }
}

class Point {
  constructor(ctx, width, height, maxLength, color) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.maxLength = maxLength;
    this.color = color;

    const velocity = 2; // for constant velocity matched experimentally

    this.pos = {
      // position
      x: Math.random() * this.width,
      y: Math.random() * this.height,
    };

    this.vel = {
      // projection speeds
      x: (Math.random() - 0.5) * velocity,
      y: (Math.random() - 0.5) * velocity,
    };

    this.radius = 2; // radius
  }

  updateSize(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  collision() {
    // NOTE: must move past the maxLength of the line
    // or else you'll see the line pop in and out
    // also, length multiplied by 2 to account for
    // random value when resetting to the other side

    const maxXBounds = this.width + this.maxLength * 2;
    const minXBounds = -this.maxLength * 2;

    if (this.pos.x + this.radius > maxXBounds) {
      // reset to the opposite side
      const minX =
        -this.radius - this.maxLength - Math.random() * this.maxLength;
      this.pos.x = minX;
    } else if (this.pos.x - this.radius < minXBounds) {
      // again, switch sides
      const maxX =
        this.width +
        this.radius +
        this.maxLength +
        Math.random() * this.maxLength;
      this.pos.x = maxX;
    }

    // still colliding with the top/bottom bounds
    if (this.pos.y + this.radius > this.height) {
      this.pos.y = this.height - this.radius;
      this.vel.y *= -1;
    } else if (this.pos.y - this.radius < 0) {
      this.pos.y = this.radius;
      this.vel.y *= -1;
    }
  }

  update(deltaX, deltaY) {
    this.pos.x = this.pos.x + deltaX;
    this.pos.y = this.pos.y + deltaY;
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }
}

export default new ParticleCanvas();
