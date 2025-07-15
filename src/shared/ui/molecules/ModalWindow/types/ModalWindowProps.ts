export interface ModalWindowProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}