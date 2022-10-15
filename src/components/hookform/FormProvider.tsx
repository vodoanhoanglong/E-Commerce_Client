import { FormProvider as Form, UseFormReturn } from 'react-hook-form';

type TFormData = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  remember?: boolean;
};

interface IProps {
  children: React.ReactNode;
  methods: UseFormReturn<TFormData, any>;
  onSubmit?: () => void;
}

export default function FormProvider({ children, onSubmit, methods }: IProps) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}
