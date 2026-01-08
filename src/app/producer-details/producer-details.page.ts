import { Component } from '@angular/core';

interface Producer {
  id: string;
  name: string;
  type: string;
  numberOfFarms: number;
  serasa: string;
  eudr: string;
  status: string;
  tenantId: string;
  createdAt: Date;
  updatedAt: Date;
}

@Component({
  selector: 'app-producer-details',
  templateUrl: 'producer-details.page.html',
  styleUrls: ['producer-details.page.scss'],
  standalone: false
})
export class ProducerDetailsPage {
  // Preloaded producer data
  producer: Producer = {
    id: '1',
    name: 'João Miguel Oliveira',
    type: 'Farm Group',
    numberOfFarms: 4,
    serasa: '1/4',
    eudr: '1/4',
    status: 'Created',
    tenantId: 'tenant-1',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  };

  constructor() {}

  getStatusColor(status: string): string {
    switch (status) {
      case 'Created':
        return 'primary';
      case 'In Review':
        return 'warning';
      case 'Approved':
        return 'success';
      case 'Rejected':
        return 'danger';
      default:
        return 'medium';
    }
  }
}

