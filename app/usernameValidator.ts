import {Control} from 'angular2/common'

export class UsernameValidator {
    
    static shouldBeUnique(control: Control){
         return new Promise((resolve, reject)=>{
            setTimeout(function(){
                var name : string;
                name = control.value;
                if(name.toUpperCase() == "ALEX"){
                    resolve({shouldBeUnique: true});
                }else{
                    resolve(null);
                }
            },1000)
         });
    }
    
    static cannotContainSpace(control: Control){
        if (control.value.indexOf(' ') >= 0){
            return { cannotContainSpace: true };
        }
        return null;
    } 
}