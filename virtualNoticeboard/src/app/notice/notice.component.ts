import { Component, OnInit } from '@angular/core';
import { Notice } from '../Notice';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  notices: Notice[] = [
    new Notice(1, "Announcement", "Closing dates", new Date(2020,1,27), "We would be closing school on february the 5th"),
    new Notice(1, "Notification", "Android content", new Date(2020,1,28), "Every progressing student has been added to the android content, check your LMS to confirm. If any issues, report to your TM"),
    new Notice(1, " Internal Memo", "New employee", new Date(2020,1,29), "New TMs for Java have been employed to eae off the burden on the current ones as there has been an increase in the amount of students admitted to the school")
  ];

  constructor() { }

  ngOnInit() {
  }

}


//   goals: Goal[] = [
//     new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2020,3,14)),
//     new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9)),
//     new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2022,1,12)),
//     new Goal(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2019,0,18)),
//     new Goal(5,'Solve math homework','Damn Math',new Date(2019,2,14)),
//     new Goal(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2030,3,14)),
//   ];

//   deleteGoal(isComplete, index) {
//     if(isComplete) {
//       let toDelete = confirm (`Are you sure you want to delete ${this.goals[index].name}?`)

//       if(toDelete){
//         this.goals.splice(index,1)
//       }
//     }
//   }

//   addNewGoal(goal){
//     let goalLength = this.goals.length;
//     goal.id = goalLength + 1;
//     goal.completeDate = new Date(goal.completeDate)
//     this.goals.push(goal)
//   }

//   toggleDetails(index){
//     this.goals[index].showDescription = !this.goals[index].showDescription;
//   }

//   completeGoal(isComplete, index) {
//     if(isComplete){
//       this.goals.splice(index,1);
//     }
//   }
  
//   constructor() { }

//   ngOnInit() {
//   }

// }