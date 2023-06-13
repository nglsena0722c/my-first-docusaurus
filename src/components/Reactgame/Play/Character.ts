import { UseFormSetValue } from "react-hook-form";
import { StatusType } from "./StatusBar";

interface Position {
    x: number;
    y: number;
}

interface Vector {
    x: number;
    y: number;
    dx: number;
    dy: number;
}

export interface GameData {
    playerColor: string,
    enemyColor: string,
    attackColor: string,
    hoverColor : string,
    pointerColor: string,
    playerVelocity : number,
    enemyVelocity : number,
    increaseEnemyVelocity : number,
    attackVelocity : number,
    radius : number,
    attackWidth : number,
    attackHeight : number,
    enemyHp : number,
}

class Character {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D | null = null;
    private destination: Position;
    private position: Position;
    private playerVelocity: number;
    private enemyVelocity: number;
    private increaseEnemyVelocity : number;
    private radius: number;
    private destinationClickTime: Date;
    private screenWidth: number;
    private screenHeight: number;
    private playerColor: string;
    private enemyColor: string;
    private hoverColor: string;
    private pointerColor: string;
    private attackColor: string;
    private mousePos: Position;
    private enemyPos: Position;
    private attacks: Vector[] = [];
    private attackVelocity: number;
    private attackWidth: number;
    private attackHeight: number;
    private isMove: boolean = false; // attack을 했을 때, attack 하고 난 뒤의 destination이 move에 영향을 끼친다.
    private isAttack: boolean = false; // 처음 클릭 한번만 해주기 위함.
    private enemyHp: number;
    private initialEnemyHp : number;
    private gg: boolean = false;
    private kill: number = 0;
    private startTime: Date;
    private endTime: Date;
    private setValue: UseFormSetValue<StatusType>;

    constructor(canvas: HTMLCanvasElement,
        x: number,
        y: number,
        width: number,
        height: number,
        playerColor: string,
        enemyColor: string,
        attackColor: string,
        hoverColor : string,
        pointerColor: string,
        playerVelocity : number,
        enemyVelocity : number,
        increaseEnemyVelocity : number,
        attackVelocity : number,
        radius : number,
        attackWidth : number,
        attackHeight : number,
        enemyHp : number,
        setValue : UseFormSetValue<StatusType>
    ) {
        this.screenWidth = width;
        this.screenHeight = height;
        this.position = { x, y };
        this.enemyPos = { x, y: 0 };
        this.destination = { x, y };
        this.mousePos = { x: -1, y: -1 };
        this.playerColor = playerColor;
        this.enemyColor = enemyColor;
        this.attackColor = attackColor;
        this.pointerColor = pointerColor;
        this.hoverColor = hoverColor;
        this.playerVelocity = playerVelocity;
        this.enemyVelocity = enemyVelocity; // initial enemy Velocity
        this.increaseEnemyVelocity = increaseEnemyVelocity;
        this.attackVelocity = attackVelocity;
        this.radius = radius;
        this.attackWidth = attackWidth;
        this.attackHeight = attackHeight;
        this.enemyHp = enemyHp;
        this.initialEnemyHp = enemyHp;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.startTime = new Date();
        this.runAnimationFrame();
        this.setValue = setValue;
    }

    private runAnimationFrame() {
        if (this.gg) return;
        this.draw();
        requestAnimationFrame(this.runAnimationFrame.bind(this));
    }


    public getKillNumber() {
        return this.kill;
    }

    public getScore() {
        return this.kill * (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    }

    public getEnemyVelocity() {
        return this.enemyVelocity;
    }

    public getEnemyHp() {
        return this.enemyHp;
    }

    public getPlayTime() {
        return (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    }

    private draw() {
        const { x, y } = this.position;

        if (!this.ctx) {
            return;
        }

        if (getDistance(this.position, this.enemyPos) < this.radius * 2) {
            this.gg = true;
            this.setValue('gg' , true);
            this.endTime = new Date();
        }

        const now = new Date();
        if (this.setValue) {
            this.setValue('playTime', (now.getTime() - this.startTime.getTime()) / 1000);
        }

        if (this.enemyHp === 0) {
            this.enemyVelocity += this.increaseEnemyVelocity;
            this.setValue('enemyVelocity', this.enemyVelocity);
            this.enemyHp += this.initialEnemyHp;
            this.setValue('enemyHp', this.initialEnemyHp);
            this.kill += 1;
            this.setValue('killScore', this.kill);
            this.enemyPos = generateRandomEnemyPos(this.radius, this.screenWidth, this.screenHeight);
        }

        // player position
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.ctx.arc(x, y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.playerColor;
        this.ctx.strokeStyle = this.playerColor;
        this.ctx.lineWidth = 1;
        this.ctx.fill();
        this.ctx.stroke();

        //////////////
        // enemy
        this.ctx.beginPath();
        this.ctx.arc(this.enemyPos.x, this.enemyPos.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.enemyColor;
        this.ctx.strokeStyle = this.enemyColor;
        if (getDistance(this.mousePos, this.enemyPos) < this.radius) {
            this.ctx.strokeStyle = this.hoverColor;
            this.ctx.lineWidth = 3;
        } else {
            this.ctx.lineWidth = 1;
        }
        this.ctx.fill();
        this.ctx.stroke();
        this.enemyPos = getNewPosition(this.enemyPos, this.position, this.enemyVelocity, this.radius, this.screenWidth, this.screenHeight);

        const enemyMouseDistance = getDistance(this.destination, this.enemyPos);
        const clickedEnemy = enemyMouseDistance < this.radius;

        if (!clickedEnemy && this.isMove) { // move 
            this.position = getNewPosition(this.position, this.destination, this.playerVelocity, this.radius, this.screenWidth, this.screenHeight);
            this.isMove = true;
        } else if (this.isAttack) { // attack

            const xGap = this.enemyPos.x - this.position.x;
            const yGap = this.enemyPos.y - this.position.y;
            const distance = getDistanceWithGap(xGap, yGap);

            const directionVector: Position = { x: xGap / distance, y: yGap / distance };

            const newAttack: Vector = { x: this.position.x, y: this.position.y, dx: directionVector.x, dy: directionVector.y };
            this.attacks.push(newAttack);
            this.isAttack = false;
            this.isMove = false;
        }

        if (this.isAttack) {
            // click pointer
            if (this.destinationClickTime !== undefined) {
                const nowTime = now.getTime();
                const destTime = this.destinationClickTime.getTime();
                const timeDistance = nowTime - destTime;
                if (timeDistance < 400) {
                    const clickRadius = timeDistance / 50;
                    this.ctx.beginPath();
                    this.ctx.arc(this.destination.x, this.destination.y, clickRadius, 0, Math.PI * 2);
                    this.ctx.strokeStyle = this.pointerColor;
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            }
        }


        if (this.attacks.length !== 0) { // attack 이동시켜줘야함.
            // 맞으면 없애주고
            // 안맞았으면 이동
            const newAttacks: Vector[] = [];
            this.attacks.forEach((attack) => {
                const distance = getDistance(this.enemyPos, attack);
                if (distance < this.radius - 5) { // 공격이 적에게 맞음
                    this.enemyHp -= 1;
                    this.setValue('enemyHp', this.enemyHp);
                    // enemy stopped 도 있어야 할듯
                } else {
                    this.ctx.beginPath();
                    this.ctx.translate(attack.x, attack.y);
                    this.ctx.rotate(Math.atan(attack.dy / attack.dx));
                    this.ctx.rect(0, 0, this.attackWidth, this.attackHeight);
                    this.ctx.translate(-attack.x, -attack.y);
                    this.ctx.fillStyle = this.attackColor;
                    this.ctx.fill();
                    this.ctx.closePath();
                    this.ctx.resetTransform();


                    // this.ctx.rotate((-Math.atan(attack.dy / attack.dx) * Math.PI)/ 180);

                    const newAttack: Vector = { x: attack.x + attack.dx * this.attackVelocity, y: attack.y + attack.dy * this.attackVelocity, dx: attack.dx, dy: attack.dy };
                    newAttacks.push(newAttack);
                }
            });
            this.attacks = newAttacks;
        }

    }

    handleRightClick(e: MouseEvent) {
        this.destination.x = e.offsetX;
        this.destination.y = e.offsetY;
        this.destinationClickTime = new Date();
        this.isMove = true;
        this.isAttack = true;
    }

    handleHover(e: MouseEvent) {
        this.mousePos = { x: e.offsetX, y: e.offsetY };
    }
}

export default Character;

const getDistance = (pos1: Position, pos2: Position) => {
    const xGap = pos1.x - pos2.x;
    const yGap = pos1.y - pos2.y;
    return getDistanceWithGap(xGap, yGap);
}
const getDistanceWithGap = (xGap: number, yGap: number) => {
    return Math.sqrt(xGap ** 2 + yGap ** 2);
}

const getNewPosition = (pos: Position, dest: Position, velocity: number, radius: number, screenWidth: number, screenHeight: number) => {
    const xGap = dest.x - pos.x;
    const yGap = dest.y - pos.y;
    const distance = getDistanceWithGap(xGap, yGap);

    const directionVector: Position = { x: xGap / distance, y: yGap / distance };

    const retPos: Position = pos;

    if (pos !== dest) {
        if (((xGap) ** 2 + (yGap) ** 2) > velocity ** 2) {
            retPos.x += directionVector.x * velocity;
            retPos.y += directionVector.y * velocity;
        } else {
            retPos.x = dest.x;
            retPos.y = dest.y;
        }

        // border Collision handle
        if (pos.x < radius) {
            retPos.x = radius;
        }
        if (pos.y < radius) {
            retPos.y = radius;
        }
        if (pos.x > screenWidth - radius) {
            retPos.x = screenWidth - radius;
        }
        if (pos.y > screenHeight - radius) {
            retPos.y = screenHeight - radius;
        }
    }
    return retPos;
}

const getRandom = (start: number, end: number) => {
    return start + Math.floor(Math.random() * end);
}

const generateRandomEnemyPos = (radius: number, screenWidth: number, screenHeight: number) => {
    const rand = Math.random();
    if (rand < 0.25) {
        return { x: radius, y: getRandom(radius, screenHeight - radius) };
    }
    if (rand < 0.5) {
        return { x: (screenWidth - radius), y: getRandom(radius, screenHeight - radius) };
    }
    if (rand < 0.75) {
        return { x: getRandom(radius, screenWidth - radius), y: radius }
    }
    if (rand < 1) {
        return { x: getRandom(radius, screenWidth - radius), y: (screenHeight - radius) };

    }
}