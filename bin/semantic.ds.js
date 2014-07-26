var ds={};module&&module.exports&&(module.exports=ds);ds.IIterable=function(){};ds.IIterable.prototype.getFirst=function(){};ds.IIterable.prototype.getNext=function(a){};ds.IIterator=function(){};ds.IIterator.prototype.hasNext=function(){};ds.IIterator.prototype.next=function(){};ds.IIterator.prototype.destroy=function(){};ds.Iterator=function(a){this.__source=a;this.__cursor=new ds.ListItem(null,null,a.getFirst())};ds.Iterator.prototype.hasNext=function(){return null!==this.__cursor.getNext()};ds.Iterator.prototype.next=function(){this.__cursor=this.__source.getNext(this.__cursor);return this.__cursor.getData()};ds.Iterator.prototype.destroy=function(){this.__cursor=this.__source=null};ds.ListItem=function(a,b,c){this.__data=a;this.__prev=b;this.__next=c};ds.ListItem.prototype.getData=function(){return this.__data};ds.ListItem.prototype.getNext=function(){return this.__next};ds.ListItem.prototype.setNext=function(a){this.__next=a};ds.ListItem.prototype.getPrev=function(){return this.__prev};ds.ListItem.prototype.setPrev=function(a){this.__prev=a};ds.List=function(){this.__last=this.__first=null;this.__size=0};ds.List.prototype.getFirst=function(){return this.__first};ds.List.prototype.getLast=function(){return this.__last};ds.List.prototype.getPrev=function(a){return null!==a?a.getPrev():null};ds.List.prototype.getNext=function(a){return null!==a?a.getNext():null};ds.List.prototype.isEmpty=function(){return 0===this.__size};ds.List.prototype.locate=function(a){for(var b=1,c=this.__first;null!==c;){if(b===a)return c;c=c.getNext();b+=1}return null};
ds.List.prototype.find=function(a){for(var b=this.__first;null!==b;){if(b.getData()===a)return b;b=b.getNext()}return null};ds.List.prototype.addFirst=function(a){this.__first=new ds.ListItem(a,null,this.__first);null===this.__first.getNext()&&(this.__last=this.__first);this.__size+=1};ds.List.prototype.addLast=function(a){a=new ds.ListItem(a,this.__last,null);null!==this.__last?this.__last.setNext(a):this.__first=a;this.__last=a;this.__size+=1};
ds.List.prototype.add=function(a,b){if(0===this.getSize()||1===this.getSize())this.addFirst(a);else{var c=this.locate(b-1),d=c.getNext(),e=new ds.ListItem(a,c,d);d.setPrev(e);c.setNext(e)}};ds.List.prototype.removeFirst=function(){if(null!==this.__first){var a=this.__first.getNext();this.__first.setNext(null);this.__first=a;null!==a?a.setPrev(null):this.__last=null;this.__size-=1}};
ds.List.prototype.removeLast=function(){if(null!==this.__last){var a=this.__last.getPrev();this.__last.setPrev(null);this.__last=a;null!==a?a.setNext(null):this.__first=null;this.__size-=1}};ds.List.prototype.remove=function(a){a=this.locate(a);if(null!==a){var b=a.getPrev(),c=a.getNext();null===b?this.removeFirst():null===c?this.removeLast():(a.setPrev(null),a.setNext(null),c.setPrev(b),b.setNext(c),this.__size-=1)}};ds.List.prototype.getSize=function(){return this.__size};ds.Queue=function(){this.__last=this.__first=null;this.__size=0};ds.Queue.prototype.getFirst=function(){return this.__first};ds.Queue.prototype.getNext=function(a){return null!==a?a.getNext():null};ds.Queue.prototype.enqueue=function(a){a=new ds.ListItem(a,null,this.__last);null!==this.__last&&this.__last.setPrev(a);this.__last=a;null===this.__last.getNext()&&(this.__first=this.__last);this.__size+=1};
ds.Queue.prototype.dequeue=function(){if(null!==this.__first){var a=this.__first.getData(),b=this.__first.getPrev();this.__first.setPrev(null);this.__first=b;null!==b?b.setNext(null):this.__last=null;this.__size-=1;return a}return null};
