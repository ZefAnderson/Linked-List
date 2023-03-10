class LinkedLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  insert(data) {
    let newNode = new LinkedLinkedListNode(data);
    this.size++;
    if(this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = newNode;
    }
   
  }

  remove(key) {
    let farLeft;
    let current = this.head;
    let farRight = current?.next;
    let isFound = false;

    while(current && !isFound) {
      isFound = key === current.data.key;

      if(isFound){
        isFound = true;
      } else {
        farLeft = current;
        current = farLeft?.next;
        farRight = farLeft?.next?.next;
      }
    }

    if(isFound) {
      this.size = this.size - 1;
    }

    if(isFound && farLeft) {
      farLeft.next = farRight;
    } else if(isFound && !farLeft) {
      this.head = farRight;
    } else {
      console.log('not round');
    }

  }
  

  contains(key) {
    let current = this.head;
    while(current){
      let isMatch = current.data.key === key;

      if(isMatch) {
        return current.data;
      } else {
      current = current.next;
      } 
    }
    return null;
  } 
};

