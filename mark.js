const mark = prompt('Enter your marks');
                if(mark>90){
                    console.log('A+');
                }
                else if(mark >80){
                    console.log('B');
                }
                else if(mark > 70){
                    console.log('C');
                }
                else if(mark>60){
                    console.log('D');
                }
                else if(mark<60){
                    console.log('F')
                }else{
                    console.log('invalid input')
                }