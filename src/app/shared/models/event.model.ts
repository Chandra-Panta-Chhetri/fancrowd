interface Event {
  id?: number;
  fandomType?: string;
  name: string;
  description: string;
  postedBy: string;
  location: string;
  startDate: Date;
  endDate: Date;
  totalAttendance: number; // Not including the person that created the event
}

export default Event;
