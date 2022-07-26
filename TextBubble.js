const canvas = document.querySelector('.bubble')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];
let adjustX = 5;
let adjustY = 6;
    
const ctx = canvas.getContext('2d');

const mouse =  {
    x: null,
    y: null,
    radius: 50 
}

window.addEventListener('mousemove', function(e){
    mouse.x = e.x ;
    mouse.y = e.y ;
} ) 
    ctx.fillStyle = 'white';
    ctx.font = '30px Verdana';
    ctx.width = 'bold';
    ctx.fillText('WJ', 0, 30);

    const textCoordinates = ctx.getImageData(0,0,100,100);
//getImageData 이미지는 수많은 픽셀로 이루어져 있다 이미지를 구성하는 픽셀 정보를 래스터라고 하며
//이미지 표면에 어떤 그림이 그려저 있는지를 저장한다 레스터 데이터를 직접 조작하면 메서드로는 불가능한
//섬세한 작업이 가능하다 getImageData 메서드로 캔버스에 그려진 이미지 레스터 데이터를 얻을수 있음
//getImageData(x,y,w,h) 좌표와 폭 높이를 주면 이 영역 이미지 정보를 가지는 ImageData 객체가 리턴됨
//레스터 정보는 한픽셀씩 4바이트 RGBA를 받으며 지정한 폭과 높이만큼 출력한다     

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    init();
});

    class Particle { 
        constructor(x, y){
            this.x = x;
            this.y = y;
            this.size = 3;
            this.baseX = this.x
            this.baseY = this.y
            this.density = (Math.random() * 8) + 1;
            //퍼지는 속도를 조절하는데 random을 사용한 이유는 모든 점들이 재각기 다른 속도로 퍼지게 하기 위해서다
            this.distance;
        }
        draw(){
            
            ctx.fillStyle = 'rgba(255,255,255,0.8)';
            ctx.strokeStyle = 'rgba(255,255,255,0.8)';
            ctx.beginPath();
    
            if(this.distance < mouse.radius ){
                this.size = 13;
                ctx.arc(this.x , this.y , this.size, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(this.x-4, this.y-3, this.size/2.5, 0, Math.PI * 2);
                ctx.arc(this.x + 7, this.y +2, this.size/3.5, 0, Math.PI * 2);
                //distance거리가 mouse범위까지 왔을경우 size 크기를 키워서 다시그리기
                //그리고 커진 방울 효과를 위해 안에 2개의 또다른 원 그리기(광원효과)
            }
            else if(this.distance <= mouse.radius){
                this.size = 10;
                ctx.arc(this.x , this.y , this.size, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();
                ctx.fillStyle = 'rgba(255,255,255,0.8)';
                ctx.strokeStyle = 'rgba(34,147,214,1)';
                ctx.arc(this.x-2, this.y-2, this.size, 0, Math.PI * 2);
                //distance거리와 mouse범위가 똑같을 경우 10으로 전환
                //그 변환 상태의 이미지 생성
            }else {
                this.size = 5;
                ctx.arc(this.x , this.y , this.size, 0, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(this.x -1, this.y -1, this.size/2, 0, Math.PI * 2);
                //그 밖에는 size 평소에 5로 유지
                //그리고 버블 효과를 위한 원안에 작은 원 그리기 
            }
            ctx.closePath();
            ctx.fill();
        }
        update(){
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            //피타고라스의 정의로 a2 * b2 = c2 공식을 사용하여 마우스의 위치에서 점의 위치까지 특정하여 거리를 알아낼수 있다
            this.distance = distance;
            let forceDirectionX = dx / distance;
            //forceDirection은 힘의 방향을 나타낸다 distance와 dx 를 나누면 x축의 각도를 알수 있다
            let forceDirectionY = dy / distance;
            let maxDistance = mouse.radius;
            //maxDistance는 마우스의 범위를 나타냄 마우스가 다른 물체와 상호작용하는 범위
            let force = (maxDistance - distance) / maxDistance ;
            //force는 마우스에 가까울수록 퍼지는 속도가 빨라지거나 느렵지게 하는 역할을 함
            let directionX = forceDirectionX * force * this.density;
            //
            let directionY = forceDirectionY * force * this.density;
            
            if(distance < mouse.radius){
                this.x -= directionX;
                this.y -= directionY;
            }else{
                if(this.x !== this.baseX){
                    let dx = this.x - this.baseX;
                    this.x -= dx/30;
                }
                if(this.y !== this.baseY){
                    let dy = this.y - this.baseY;
                    this.y -= dy/30;
                }
                //x와 y값이 다른 기능에 작용하여 위치값이 바뀔때 다시 초기 점 위치로 되돌리는 역할을 한다
                //this.baseX 와Y 는 처음 x와 y가 생성됬을때 값을 받아두는데 이 값을 통해 초기 값과 xy가 
                //같지 않을시 바뀐값에 초기값을 빼어서 재 위치로 가게 해주는데 속도를 조절하기 위해
                //바뀐값에 나누기를 해준다(크게 나눌수록 재 위치로 가는 값은 느려진다)
            }
        }
    }

    function init() {
        particleArray = [];
    
        for(let y = 0, y2 = textCoordinates.height; y < y2; y++){
            //100사이즈
            for(let x = 0, x2 = textCoordinates.width; x < x2; x++){
                //100사이즈
                if(textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128 ){
                    // y * 4는 1픽셀당 rgb값이 4여서 거기다 실제 100 곱하기 128은 불투명도 
                    let postionX = x + adjustX;
                    let postionY = y + adjustY; 
                    
                // if(canvas.height < 800){ 
                //         particleArray.push(new Particle(postionX * 15, postionY * 15));
                //         adjustY = 6
                // }else if(canvas.height > 800){
                //     particleArray.push(new Particle(postionX * 15, postionY * 15));
                //     adjustY = 10
                // }
                if(canvas.width < 1135){
                    particleArray.push(new Particle(postionX * 13, postionY * 9));
                             
                  
                }else if(canvas.width < 1330){ 
                    particleArray.push(new Particle(postionX * 12, postionY * 12));
                    adjustY = 20

                }else if(canvas.width < 1580 && canvas.height < 800){ 
                        particleArray.push(new Particle(postionX * 15, postionY * 15));
                        adjustY = 8
                        //픽셀의 크기를 지정함
                    }else if(canvas.width < 1580){ 
                    particleArray.push(new Particle(postionX * 15, postionY * 15));
                    adjustY = 12
                    //픽셀의 크기를 지정함
                }else{ 
                    particleArray.push(new Particle(postionX * 20, postionY * 20));
                    adjustY = 5
                    //픽셀의 크기를 지정함 
                }
                }
            }
        }
        //ImagesData 에는 uint8ClampedArray(40000)란 배열의 종류가 존재하고 이안에다가 값들이 저장 된다
        //위에는 총 만번이 출력이 되는데 100x100 범위 모든 픽셀 값을 말한다 
        
        // for(i = 0 ; i < 1000;  i++){
        // let x = (Math.random() * (canvas.width - 2) + 3)
        // let y = (Math.random() * (canvas.height - 2) + 3)
        // particleArray.push(new Particle(x, y));
        // }
    }
    
    init()
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for(let i = 0; i < particleArray.length; i++){
            particleArray[i].draw();
            particleArray[i].update();
        }   
        requestAnimationFrame(animate);
    }
    animate();
