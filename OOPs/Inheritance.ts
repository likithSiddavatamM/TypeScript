//Single Inheritance:

/* class Father {
    Fproperty() {
      console.log("Father");
    }
  }
  
  class Son extends Father {
    Sproperty() {
      console.log("Son");
    }
  } */


  //=============================================


/* 
//Multilevel Inheritance:

    class GrandFather {
    GFproperty() {
    console.log("Moving");
  }
}

class Father extends GrandFather {
    Fproperty() {
        console.log("Father");
      }
}

class Son extends Father {
    Sproperty() {
        console.log("Son");
      }
} */

//=============================================

/* 

//Hierarchical Inheritance:

class Father {
    Fproperty() {
      console.log("Father");
    }
  }

  class Son extends Father {
    Sproperty() {
      console.log("Son");
    }
  }

  class Daughter extends Father {
    Dproperty() {
      console.log("Daughter");
    }
  } */

//=============================================
/* 
Multiple inheritance:
class Father {
    Fproperty() {
      console.log("Father");
    }
  }

class Mother {
    Mproperty() {
      console.log("Mother");
    }
  }


  class Son extends Father, Mother {  //Classes can only extend a single class.
    Sproperty() {
      console.log("Son");
    }
  } */

/* //How to acheive Multiple inheritance

    interface Father {
        Fproperty():void
      }
    
    interface Mother {
        Mproperty():void
      }
    
    
    class Son implements Father, Mother {  //Classes can only extend a single class.

        Fproperty()
            {console.log("Father property for son");}

        Mproperty()
            {console.log("Mother property for son");}    

        Sproperty() {
          console.log("Son");
        }
    }
 */

//=============================================


/*     //Hybrid Inheritance:

    interface Father {
        Fproperty():void
      }
    
    interface Mother {
        Mproperty():void
      }

      class GrandFather {
        GFproperty() {
        console.log("Moving");
      }
    }
    
    
    class Son extends GrandFather implements Father, Mother {

        Fproperty()
            {console.log("Father property for son");}

        Mproperty()
            {console.log("Mother property for son");}    

        Sproperty() {
          console.log("Son");
        }
    } */

   




