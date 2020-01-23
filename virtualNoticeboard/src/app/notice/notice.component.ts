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
    new Notice(2, "Notification", "Android content", new Date(2020,1,28), "Every progressing student has been added to the android content, check your LMS to confirm. If any issues, report to your TM"),
    new Notice(3, "Internal Memo", "New employee", new Date(2020,1,29), "New TMs for Java have been employed to ease off the burden on the current ones as there has been an increase in the amount of students admitted to the school"),
    new Notice(4, "Announcement", "Internship", new Date(2020,1,30), "An intern position for an android developer open at company so and so"),
    new Notice(5, "Classified", "Laptop stickers", new Date(2020,2,2), "For laptop stickers, visit MC-23 Android class"),
    new Notice(6, "Offer", "Macbooks for sale", new Date(2020,2,4), "If you want to cop yourself a brand new macbook pro 17, visit the staff area hwile stocks last"),
    new Notice(7, "Warning", "IP Submission", new Date(2020,2,7), "From now on, late submissions on independ projects would be punished"),
    new Notice(8, "Announcement", "Opening dates", new Date(2020,2,7), "We would be closing school on march the 14th"),
    new Notice(9, "Notification", "Python content", new Date(2020,2,8), "Every progressing full stack student has been added to the Django content, check your LMS to confirm. If any issues, report to your TM"),
    new Notice(10, " Internal Memo", "Employee resigned", new Date(2020,2,9), "Dr. Whoever from the admissions team has resigned from Moringa to join another company")
  ];


  constructor() { }

  ngOnInit() {
  }

}

