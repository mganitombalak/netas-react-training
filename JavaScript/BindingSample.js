            
  class myClass {
    // constructor(){
    //   this.getMyField=this.getMyField.bind(this);
    // }
    setMyField(f){
      this.field=f;
    }
    getMyField=()=>this.field;
  }
  
  const c = new myClass();
  c.setMyField('Netas');
  c.getMyField();
  
  const f = c.getMyField;
  f();