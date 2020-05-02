import { useEffect } from 'react';
import Head from '../components/head/head';

export default function Home() {
  let canvas, ctx, particles, amount, mouse, radius, colors;
  let ww, wh = 0;

  const onMouseMove = e => {
		mouse.x = e.clientX;
		mouse.y = e.clientY;
  };

  const onTouchMove = e => {
    if(e.touches.length > 0 ){
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
    }
  };

  const onTouchEnd = e => {
    mouse.x = -9999;
    mouse.y = -9999;
  }

  const onMouseClick = () => {
		radius++;
		if(radius ===5){
			radius = 0;
		}
  }

	function Particle(x,y){
		this.x =  Math.random()*ww;
		this.y =  Math.random()*wh;
		this.dest = {
			x : x,
			y: y
		};
		this.r =  Math.random()*5 + 2;
		this.vx = (Math.random()-0.5)*20;
		this.vy = (Math.random()-0.5)*20;
		this.accX = 0;
		this.accY = 0;
		this.friction = Math.random()*0.05 + 0.94;

		this.color = colors[Math.floor(Math.random()*6)];
	}

	Particle.prototype.render = function() {


		this.accX = (this.dest.x - this.x)/1000;
		this.accY = (this.dest.y - this.y)/1000;
		this.vx += this.accX;
		this.vy += this.accY;
		this.vx *= this.friction;
		this.vy *= this.friction;

		this.x += this.vx;
		this.y +=  this.vy;

		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
		ctx.fill();

		var a = this.x - mouse.x;
		var b = this.y - mouse.y;

		var distance = Math.sqrt( a*a + b*b );
		if(distance<(radius*70)){
			this.accX = (this.x - mouse.x)/100;
			this.accY = (this.y - mouse.y)/100;
			this.vx += this.accX;
			this.vy += this.accY;
		}

  }
  
	function render(a) {
		requestAnimationFrame(render);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for (var i = 0; i < amount; i++) {
			particles[i].render();
		}
	};

  const initCanvas = () => {
		ww = canvas.width = window.innerWidth;
		wh = canvas.height = window.innerHeight;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.font = "bold "+(ww/10)+"px sans-serif";
		ctx.textAlign = "center";
		ctx.fillText('Luke Porupski', ww/2, wh/2);

		var data  = ctx.getImageData(0, 0, ww, wh).data;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.globalCompositeOperation = "screen";

		particles = [];
		for(var i=0;i<ww;i+=Math.round(ww/150)){
			for(var j=0;j<wh;j+=Math.round(ww/150)){
				if(data[ ((i + j*ww)*4) + 3] > 150){
					particles.push(new Particle(i,j));
				}
			}
		}
		amount = particles.length;
  }

  useEffect(() => {
    canvas = document.querySelector('#lp');
    ctx = (canvas as any).getContext('2d');
    particles = [];
    amount = 0;
    mouse = { x: 0, y: 0 };
    radius = 1;
    colors = ["#468966","#FFF0A5", "#FFB03B","#B64926", "#8E2800"];

    if (process.browser) {
      window.addEventListener("resize", initCanvas);
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("click", onMouseClick);
      window.addEventListener("touchend", onTouchEnd);
      initCanvas();
      requestAnimationFrame(render);

      // animate in construction icon
      const anim = document.querySelector('.construction')
        .animate([
          { right: '-200px', opacity: '0' },
          { right: '0px', opacity: '1' },
        ], { duration: 500, delay: 2000, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'})
        anim.onfinish = () => {
          console.log('anim finished');
          (document.querySelector('.construction') as HTMLElement).style.right = '0px';
          (document.querySelector('.construction') as HTMLElement).style.opacity = '1';
        }
    }
  }, []);


  return (
    <div className="container flex-col-center">
      <Head title="me || lp" />

      <main className="flex-col-center">

        <canvas id="lp" />

        <img title="pardon the emptiness, luke is hard at work making this an actual site. In the meantime - please occupy yourself by playing with the above canvas" className="construction" src="/icons/construction.svg" />

      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          background: #000;
        }

        .construction {
          position: absolute;
          height: 30px;
          bottom: 30px;
          opacity: 0;
          right: -200px;
        }

        main {
          flex: 1;
          font-family: "trajan pro 3", serif;
          color: #fff;
        }

        p {
          position: fixed;
          left: 0;
          bottom:5px;
          color: #fff;
          z-index:10;
          font-size:16px;
          font-family: Helvetica, Verdana, sans-serif;
          opacity:0.5;
          width: 100%;
          text-align: center;
          margin: 0;
        }

        canvas {
          background: black;
          width: 100vw;
          height: 100vh;
        }

        input {
          width: 250px;
          height: 40px;
          line-height: 40px;
          position: absolute;
          bottom: 35px;
          left: calc(50% - 125px);
          background: none;
          color: white;
          font-size: 30px;
          font-family: arial;
          text-align: center;
          border: 1px solid white;
          background: rgba(255,255,255,0.2);
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          
        }

        .flex-col-center {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
      `}</style>
    </div>
  )
}
