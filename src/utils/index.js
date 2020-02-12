import { sortPhotos } from './photoSorter';

export { sortPhotos };

export const catchEvent = e => {
  e.preventDefault();
  e.stopPropagation();
};
