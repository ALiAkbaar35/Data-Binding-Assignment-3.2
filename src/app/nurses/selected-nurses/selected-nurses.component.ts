import { Component, Input } from '@angular/core';
interface Nurse {
  id: number;
  name: string;
  experience: string;
  zsrNumber: string;
  location: string;
  Image: string;
  rating: number;
  Amount: number;
  service: { id: number; name: string }[];
  schedule: { id: number; date: string; time: string; status: string }[];
}
@Component({
  selector: 'app-selected-nurses',
  templateUrl: './selected-nurses.component.html',
  styleUrl: './selected-nurses.component.css',
})
export class SelectedNursesComponent {
  schedules: { id: number; date: string; time: string; status: string }[] = [];
  isDialogOpen: boolean = false;
  selectedNurse: Nurse | undefined;
  @Input() SelectedNurses: Nurse[] = [];
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
