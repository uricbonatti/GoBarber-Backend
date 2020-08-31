interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      email: 'uricbonatti@gmail.com', // colocar o email configurado no SES,
      name: 'Uric do RPG Mogi Guaçu',
    },
  },
} as IMailConfig;
