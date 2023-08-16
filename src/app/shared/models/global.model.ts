export interface Default<T> {
  statusCode: number;
  message: string;
  data: T;
}

export class FilterRequest {
  filters?: string;
  sorts?: string;
  page: number = 1;
  pageSize: number = 500;
}


