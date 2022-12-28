import { LoadCircle } from './Loader.styled';
import { Backdrop } from '../Backdrop/Backdrop.styled';

export const Loader = () => {
  return (
    <Backdrop>
      <LoadCircle></LoadCircle>
    </Backdrop>
  );
};
