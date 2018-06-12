import store from '../store';
import { fetchPrinters } from '../actions';

export function onPrintersEnter() {
  store.dispatch(fetchPrinters());
}
