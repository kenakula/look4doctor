import * as yup from 'yup';

export interface FormModel {
  email: string;
  password: string;
}

export const schema = yup.object({
  email: yup.string().email().required('обязательное поле'),
  password: yup.string().required(),
});
