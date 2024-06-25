// all-nurses.component.ts
import { Component, OnInit } from '@angular/core';
import { Nurse, NurseService } from '../nurse.service'; 

@Component({
  selector: 'app-all-nurses',
  templateUrl: './all-nurses.component.html',
  styleUrls: ['./all-nurses.component.css'],
})
export class AllNursesComponent implements OnInit {
  schedules: { id: number; date: string; time: string; status: string }[] = [];
  selectedNurse: Nurse | undefined;
  isDialogOpen: boolean = false;
  SelectedNurses: Nurse[] = [];
  T_Amount: number = 0;
  nurses: Nurse[] = [];

  constructor(private nurseService: NurseService) {}

  ngOnInit(): void {
    this.nurses = this.nurseService.getNurses();
  }

  Select_one(nurse: Nurse) {
    this.SelectedNurses = [nurse];
    this.T_Amount = nurse.Amount;
    this.selectedNurse = nurse;
    setTimeout(() => {
      this.selectedNurse = undefined;
    }, 300);
  }

  selectAll() {
    this.SelectedNurses = [...this.nurses];
    this.SelectedNurses.forEach((nurse) => {
      this.T_Amount += nurse.Amount;
    });
  }

  unselectAll() {
    this.SelectedNurses = [];
    this.T_Amount = 0;
  }

  showModal(
    schedule: { id: number; date: string; time: string; status: string }[]
  ) {
    this.schedules = schedule;
    this.isDialogOpen = true;
  }

  closeModal() {
    this.isDialogOpen = false;
    this.schedules = [];
  }
}
