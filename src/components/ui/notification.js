import { toast, Slide } from 'react-toastify';

export const Notification = (
  message,
  type,
) => {
  return toast.dark(`${message}`, {
    transition: Slide,
    closeButton: true,
    autoClose: 5000,
    position: 'bottom-right',
    type: type,
    colored: true,
  })
}
