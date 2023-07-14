//Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
//Use at least one array.
//Use at least two classes.
//Your menu should have the options to create, view, and delete elements.


//(My menu can be wrestlers or instruments, heel/babyface: AEW(Dynamite, Rampage, Collison) or string/wind instruments: Orchestra/Band)


//1st need classes to structure our wrestlers and wrestlingShow
    //-start with a wrestler class
    //we do this because we use a top-down method- so we have to build the methods first then implement them. 
    
class Wrestler {
    constructor(name, finisher){
        this.name = name;//this will be the name of the wrestler
        this.finisher = finisher;//this will be that selected wrestler's finisher
    }

    describe(){
        //console.log(`${this.name} has ${this.finisher}.`);//Want to see what this prints out
        //expected output: wrestler name has finsiher name.
        //output: 
        return `${this.name} has ${this.finisher}.`;//this will list out the info about the Wrestler. 
    }
}    

//create the Wrestling Show class
//this is which show you want the wrestler to have more airtime on. 

class WrestlingShow {
    constructor(name){
        this.name = name; //this will be the name of the show 
        this.wrestlers = []; //this will hold all the wrestlers on the show. 
    }

    addWrestler(wrestler){
        if(wrestler instanceof Wrestler){//use instanceof to make sure its actually a wrestler from the wrestler class and not just anything like a string or number from the user. 
            this.wrestler.push(wrestler);//this will add the wrestler to the array
        } else {
            throw new Error(`You can only add instance of Wrestler. Argument is not a wrestler: ${wrestler}`);//this will give the user a specific message that reminds to use an instance of Wrestler and not just anything. 
        }
    }
    describe(){//put it here to keep it in the method to still have access to the class info. 
        //console.log(`${this.name} has ${this.wrestler.length} wrestlers.`);//Want to see what this prints out
        //expected output: wrestling show name has list of all wrestlers because of the .length
        //output: 
        return `${this.name} has ${this.wrestler.length} wrestlers.`;//this will list out the info about the WrestlingShow
    }
}

//next create a Menu Class: This is going to be what drives the program and our choices. 

class Menu{
    constructor(){
        this.WrestlingShow = [];//we will have multiple shows inside this application (Dynamite, Rampage and Collison)
        this.selectedWrestlingShow = null; //when we start there are no wrestling shows designated, we're only going to handle one at a time. 
    }

    start(){//this is the entry point to our program
        let selection = this.showMainMenuOptions();//a variable to get user input of what option in our menu the user has designated. 

        while (selection != 0) {
            switch (selection){//this is what I think the menu is going to look like again the top-down method, methods don't exist yet going to implement later. 
                case '1':
                    this.createWrestlingShow();//this creates a placeholder that we will implement later- top-down method. 
                    break;
                case '2':
                    this.viewWrestlingShow();
                    break;
                case '3':
                    this.deleteWrestlingShow();
                    break;
                case '4':
                    this.displayWrestlingShow();
                    break;
                default: //if the user inputs anything outside of 1-4 it will default to 0. 
                    selection = 0;
            }
            selection = this.showMainMenuOptions();//this is still inside the loop so that it will keep looping as long as 0 or something other than 1-4 is desingated. 
        }

        alert ('Goodbye!');//if they designate 0, when we iterate back up it will be false and we exit out of the Loop.  
    }

    showMainMenuOptions(){
        return prompt//prompt is the pop-up box that comes up and asks the user for some input. We’re returing the input that comes back from that prompt. 
         (`
            0) Exit
            1) Create New Wrestling Show
            2) View Wrestling Show
            3) Delete Wrestling Show
            4) Display All Wrestling Shows
        `);//use template literals to just write it how you want without the extra characters. 
        //show the menu options, the user is going to designate something, as long as not 0 we're going to continue with the determination of what they designated. 
        //based on what they designated we're going to create a wrestling show, view a wrestling show, delete a wrestling show or display all the wrestling shows. 
    }

    showWrestlingShowMenuOptions(wrestlingShowInfo){
        return prompt (`
            0) Back
            1) Create New Wrestler
            2) Delete Wrestler
            ----------------------------
            ${wrestlingShowInfo}
        `);//wrestlingShowInfo is the description of the wrestling show. 
        //this is a submenu of the main menu. 
        //based on what they designated we're going to create a wrestler or delete a wrestler
        //now that we've done this we need to program the methods and implement those methods in the program. 
    } //make sure you always go outside the method and not within another method but still within our class so we still have access to it.
        displayWrestlingShow(){
            let wrestlingShowString = '';//have to build a string that has all the information for the wrestlingShow so we can put it up in a message box or a prompt.
            for (let i = 0; i < this.WrestlingShow.length; i++){
                wrestlingShowString += i+ ') ' + this.WrestlingShow[i].name + '\n'; 
                //this.wrestlingShow is in the menu class and is the list of all the wrestling shows that exist. 
                //this.wrestlingShow[i] will take the current wrestling show we're looking at for this iteration. 
                // '\n' will create a new line that will list out each wrestling show. 
            }

            alert (wrestlingShowString);//outside of the for loop we’re going to alert our wrestling show String- this lets us be able to see all the wrestling shows. 
        }     

            //createWrestlingShow, viewWrestlingShow, deleteWrestlingShow, createWrestler and deleteWrestler below are us implementing the methods that we designated above. We are now telling those methods what to do so that we actually get functional code. 
            createWrestlingShow(){
                let name = prompt ('Enter name for new Wrestling Show: ');
                this.WrestlingShow.push(new WrestlingShow(name));
            }

            viewWrestlingShow(){
                let index = prompt ("Enter the index of the Wrestling Show you want to view: ");
                    if (index > -1 && index < this.WrestlingShow.length) {
                        this.selectedWrestlingShow = this.WrestlingShow[index];
                        let description = 'Wrestling Show Name: ' + this.selectedWrestlingShow.name + '\n';
                        // description += ' ' + this.selectedWrestlingShow.describe() + '\n';
                
                    for (let i = 0; i < this.selectedWrestlingShow.wrestlers.length; i++){
                        description += i + ') ' + this.selectedWrestlingShow.wrestlers[i].name + '-' + this.selectedWrestlingShow.wrestlers[i].finisher + '\n';
                    }

                    let selection1 = this.showWrestlingShowMenuOptions(description);
                    switch (selection1) {
                        case '1':
                            this.createWrestler();
                            //  console.log('What does this print out?' + this.createWrestler); 
                            //output: What does this print out?createWrestler() {
                                //let name = prompt('Enter name for new Wrestler: ');
                                //let finisher = prompt('Enter finisher for new Wrestler: '); 
                                //this.selectedWrestlingShow.wrestlers.push(new Wrestler(name, finisher)); 
                            // }
                            break;
                        case '2':
                            this.deleteWrestler();
                        
                    }//this designation1 is a submenu fo the full menu and is just slightly different than designation. 
                    //based on the user input we will either create a wrestler or delete a wrestler. 
                    //don't need break or default after case '1' because there is nothing after it. 

                } 
                    //this.designatedWrestlingShow = this.WrestlingShow[index];
                    //going to validate user input with the above line of code. 
                    //users can be unpredictable, want to avoid crashing in errors due to invalid user input. 
            }

            deleteWrestlingShow() {
                let index = prompt('Enter the index of the Wrestling Show you want to delete: ');
                if (index > -1 && index < this.WrestlingShow.length){
                    this.WrestlingShow.splice(index,1);//using the .splice() method lets you remove an element from an array using the position of the index and how many elements you want to remove. i.e. (index, 1)
                }
            }

            createWrestler() {
                let name = prompt('Enter name for new Wrestler: ');
                let finisher = prompt('Enter finisher for new Wrestler: ');
                this.selectedWrestlingShow.wrestlers.push(new Wrestler(name, finisher));
            }

            deleteWrestler() {
                let index = prompt('Enter the index of the Wrestler you want to delete: ');
                if (index > -1 && index < this.selectedWrestlingShow.wrestlers.length) {
                    this.selectedWrestlingShow.wrestlers.splice(index,1);
                }
                
            }

            // displayWrestler() {
            //     let wrestlerString = ' ';
            //         for (let i = 0; i < this.Wrestler.length; i++){
            //             wrestlerString += i+ ') ' + this.Wrestler[i].name + '\n';
            //         }

            //         alert (wrestlerString);
            }
// }

//now we need to create an instance of the menu to test the code. 

let menu = new Menu();
menu.start();


//Example 1: Create three wrestling show names and display those wrestling show names. 

//Example 2: Create three wrestlers to each show with their finishers.  

//Example 3: Delete one wrestler from each show.

//Example 4: Delete one Wrestling Show. 

//Example 5: View each show's roster. 


//WrestlingShow, wrestler, finisher

//Dynamite: 
//Orange Cassidy, Orange Punch
//"Jungle Boy" Jack Perry, Snare Trap
//Hangman "Adam" Page, Buckshot Lariat
//Adam Cole "Bay Bay", Boom
//Toni Storm, Storm Zero


//Rampage: 
//Hikaru Shida, Running Knee Strike
//Chuck Taylor "The Kentucky Gentlman", Strong Zero
//Kris Statlander, Big Bang Theory 
//Eddie Kingston, Spinning Backfist
//HOOK, Redrum

//Collision:
//CM Punk, GTS
//Miro, Game Over
//Jay White, Blade Runner 
//Ricky Starks, Rochambeau
//Athena, O-Face





