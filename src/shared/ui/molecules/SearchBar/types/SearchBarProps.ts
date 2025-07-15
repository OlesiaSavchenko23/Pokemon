export interface SearchBarProps {
  value: string;
  placeholder: string;
  onChange: (val: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onClear: () => void;
  hasQuery: boolean;
}