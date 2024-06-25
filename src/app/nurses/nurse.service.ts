import { Injectable } from '@angular/core';

export interface Nurse {
  id: number;
  name: string;
  experience: string;
  zsrNumber: string;
  location: string;
  Image: string;
  rating: number;
  Amount: number;
  Age: string;
  service: { id: number; name: string }[];
  schedule: { id: number; date: string; time: string; status: string }[];
}

@Injectable({
  providedIn: 'root',
})
export class NurseService {
  private nurses: Nurse[] = [
    {
      id: 1,
      name: 'Hons Peter',
      experience: '4 Years',
      zsrNumber: '123456789',
      location: 'Bernstrasse 1, 8000 Zürich',
      Image: 'https://www.w3schools.com/howto/img_avatar.png',
      rating: 3,
      Amount: 149,
      Age: '1994-04-12',
      service: [
        { id: 1, name: 'Acute Hospital' },
        { id: 2, name: 'Private Care' },
        { id: 3, name: 'Retirement and nursing homes' },
      ],
      schedule: [
        {
          id: 1,
          date: 'Friday, March 20, 2020 - Tuesday, March 31, 2020',
          time: '17:00 - 22:00',
          status: 'Not available',
        },
        {
          id: 2,
          date: 'Wednesday, April 01, 2020 - Tuesday, June 30, 2020',
          time: '11:00 - 17:00',
          status: 'Available',
        },
        {
          id: 3,
          date: 'Friday, May 01, 2020 - Tuesday, March 10, 2020',
          time: '10:00 - 15:00',
          status: 'Not Available',
        },
        {
          id: 4,
          date: 'Thursday, May 07, 2020 - Saturday, December 30, 2028',
          time: '02:10 - 01:10',
          status: 'Available',
        },
      ],
    },
    {
      id: 2,
      name: 'Karin',
      experience: '6 Years',
      zsrNumber: '123456789',
      location: 'Lunenstrasse 2, 8000 Zürich',
      Image: 'https://www.w3schools.com/howto/img_avatar.png',
      rating: 1,
      Amount: 500,
      Age: '1994-04-12',
      service: [{ id: 1, name: 'Voluntarily help' }],
      schedule: [
        {
          id: 1,
          date: 'Friday, March 20, 2020 - Tuesday, March 31, 2020',
          time: '17:00 - 22:00',
          status: 'Not available',
        },
        {
          id: 2,
          date: 'Wednesday, April 01, 2020 - Tuesday, June 30, 2020',
          time: '11:00 - 17:00',
          status: 'Available',
        },
        {
          id: 3,
          date: 'Friday, May 01, 2020 - Tuesday, March 10, 2020',
          time: '10:00 - 15:00',
          status: 'Not Available',
        },
      ],
    },
  ];

  getNurses(): Nurse[] {
    return this.nurses;
  }
}
