// Імпортуємо бібліотеку mitt
import mitt from 'mitt';

// Типи для подій, які ви очікуєте використовувати в EventBus
type Events = {
  'add-note': { id: number, note: string, checked: boolean };
  'delete-note': { id: number };
  'cheked-note': { id: number };
  };


// Створення instance mitt з типізованими подіями
const EventBus = mitt<Events>();

export default EventBus;