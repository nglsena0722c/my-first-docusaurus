require=function t(e,i,c){function n(o,s){if(!i[o]){if(!e[o]){var r="function"==typeof require&&require;if(!s&&r)return r(o,!0);if(a)return a(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var h=i[o]={exports:{}};e[o][0].call(h.exports,function(t){var i=e[o][1][t];return n(i?i:t)},h,h.exports,t,e,i,c)}return i[o].exports}for(var a="function"==typeof require&&require,o=0;o<c.length;o++)n(c[o]);return n}({Game:[function(t,e,i){"use strict";cc._RF.push(e,"4e12fLSQu1L+KV6QmxDiavU","Game"),cc.Class({"extends":cc.Component,properties:{starPrefab:{"default":null,type:cc.Prefab},maxStarDuration:0,minStarDuration:0,ground:{"default":null,type:cc.Node},player:{"default":null,type:cc.Node},scoreDisplay:{"default":null,type:cc.Label},scoreAudio:{"default":null,url:cc.AudioClip}},onLoad:function(){this.groundY=this.ground.y+this.ground.height/2,this.timer=0,this.starDuration=0,this.spawnNewStar(),this.score=0},spawnNewStar:function(){var t=cc.instantiate(this.starPrefab);this.node.addChild(t),t.setPosition(this.getNewStarPosition()),t.getComponent("Star").game=this,this.starDuration=this.minStarDuration+cc.random0To1()*(this.maxStarDuration-this.minStarDuration),this.timer=0},getNewStarPosition:function(){var t=0,e=this.groundY+cc.random0To1()*this.player.getComponent("Player").jumpHeight+50,i=this.node.width/2;return t=cc.randomMinus1To1()*i,cc.p(t,e)},update:function(t){return this.timer>this.starDuration?void this.gameOver():void(this.timer+=t)},gainScore:function(){this.score+=1,this.scoreDisplay.string="Score: "+this.score.toString(),cc.audioEngine.playEffect(this.scoreAudio,!1)},gameOver:function(){this.player.stopAllActions(),cc.director.loadScene("game")}}),cc._RF.pop()},{}],Player:[function(t,e,i){"use strict";cc._RF.push(e,"6c688v72QdOKamCGCT+xaAd","Player"),cc.Class({"extends":cc.Component,properties:{jumpHeight:0,jumpDuration:0,maxMoveSpeed:0,accel:0,jumpAudio:{"default":null,url:cc.AudioClip}},setJumpAction:function(){var t=cc.moveBy(this.jumpDuration,cc.p(0,this.jumpHeight)).easing(cc.easeCubicActionOut()),e=cc.moveBy(this.jumpDuration,cc.p(0,-this.jumpHeight)).easing(cc.easeCubicActionIn()),i=cc.callFunc(this.playJumpSound,this);return cc.repeatForever(cc.sequence(t,e,i))},playJumpSound:function(){cc.audioEngine.playEffect(this.jumpAudio,!1)},setInputControl:function(){var t=this;cc.eventManager.addListener({event:cc.EventListener.KEYBOARD,onKeyPressed:function(e,i){switch(e){case cc.KEY.a:t.accLeft=!0,t.accRight=!1;break;case cc.KEY.d:t.accLeft=!1,t.accRight=!0}},onKeyReleased:function(e,i){switch(e){case cc.KEY.a:t.accLeft=!1;break;case cc.KEY.d:t.accRight=!1}}},t.node)},onLoad:function(){this.jumpAction=this.setJumpAction(),this.node.runAction(this.jumpAction),this.accLeft=!1,this.accRight=!1,this.xSpeed=0,this.setInputControl()},update:function(t){this.accLeft?this.xSpeed-=this.accel*t:this.accRight&&(this.xSpeed+=this.accel*t),Math.abs(this.xSpeed)>this.maxMoveSpeed&&(this.xSpeed=this.maxMoveSpeed*this.xSpeed/Math.abs(this.xSpeed)),this.node.x+=this.xSpeed*t}}),cc._RF.pop()},{}],Star:[function(t,e,i){"use strict";cc._RF.push(e,"4644f0m2WtABYRy+pn6dOaG","Star"),cc.Class({"extends":cc.Component,properties:{pickRadius:0,game:{"default":null,serializable:!1}},onLoad:function(){},getPlayerDistance:function(){var t=this.game.player.getPosition(),e=cc.pDistance(this.node.position,t);return e},onPicked:function(){this.game.spawnNewStar(),this.game.gainScore(),this.node.destroy()},update:function(t){if(this.getPlayerDistance()<this.pickRadius)return void this.onPicked();var e=1-this.game.timer/this.game.starDuration,i=50;this.node.opacity=i+Math.floor(e*(255-i))}}),cc._RF.pop()},{}]},{},["Game","Player","Star"]);