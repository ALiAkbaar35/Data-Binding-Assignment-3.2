import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nurse, NurseService } from '../nurse.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
})
export class ProfileDetailsComponent implements OnInit {
  nurseId: number | undefined;
  nurses: Nurse[] = [];
  nurse: Nurse[] = [];
  schedules: { id: number; date: string; time: string; status: string }[] = [];

  constructor(
    private route: ActivatedRoute,
    private nurseService: NurseService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.nurseId = +params.get('id')!;
      if (this.nurseId) {
        this.nurses = this.nurseService.getNurses();
      }
    });

    this.nurses.forEach((nurse) => {
      if (nurse.id == this.nurseId) {
        this.nurse = [nurse];
        
      }
    });
        this.schedules = this.nurse[0].schedule;
        console.log(this.schedules)

  }
}
