import { FormProvider as Form, UseFormReturn } from "react-hook-form";

interface IFormData {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  repassword?: string;
}

interface IFormProps {
  children: React.ReactNode;
  methods: UseFormReturn<IFormData, any>;
  onSubmit?: () => void;
}

export default function FormProvider({ children, onSubmit, methods }: IFormProps) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}
