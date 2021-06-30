'use strict';
const History = (function(){
	class History{
		constructor(){
			this.debug = false;
			this.hs=[];
			this.i=0;
			this.limit=40;
		}
		push(obj){
			if(this.debug) console.log('h.push');
			if(this.i != this.hs.length-1){
				this.hs = this.hs.splice(0,this.i+1);
			}
			this.hs.push(obj);
			if(this.hs.length > this.limit){
				this.hs = this.hs.splice(1);
			}
			this.i =  this.hs.length-1;
		}
		clear(){
			if(this.debug) console.log('h.clear');
			this.i=-1;
			this.hs=[];
		}
		undo(){
			if(this.debug) console.log('h.undo',this.i);
			if((this.i-1)<0){ console.warn('undo',(this.i-1)); return false;}
			
			// console.log(this.hs[this.i]);
			this.i--;
			return this.hs[this.i]
		}
		redo(){
			if(this.debug) console.log('h.redo',this.i);
			if((this.i+1)>=this.hs.length){ console.warn('redo',(this.i+1));return false;}
			
			// console.log(this.hs[this.i]);
			this.i++;
			return this.hs[this.i]
		}
	}	
	return History;
})();
