import { usersDAO } from '../dao/index';
export const isValidDomian = (email: string): Promise<void> => {
  const emailsValid = [
    'hotmail.com',
    'gmail.com',
    'live.com.ar',
    'yahoo.com',
    'outlook.com',
  ];
  const emailDomain = email.split('@').slice(1).join();

  console.log(emailsValid.includes(emailDomain));
  if (!emailsValid.includes(emailDomain)) {
    return Promise.reject(
      `Dominio es invalido, debe colocar un dominio valido: ${emailsValid}`
    );
  }
};

export const isValidID = async (id: string): Promise<void> => {
  const existUser = await usersDAO.getOne(id);

  if (!existUser) {
    return Promise.reject(
      `El usuarion con el id: ${id}, no existe en la bases de datos`
    );
  }
};
