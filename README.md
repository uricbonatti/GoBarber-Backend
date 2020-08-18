# Recuperação de Senha

**RF**

- O usuario deve poder recuperar sua senha informando seu e-mail;
- O usuario deve receber um email com instruções de recuperação de senha;
- O usuario deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap apra testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em produção;
- O envio de emails deve acontecer em segundo plano(backgorund job);
-

**RN**

- O link enviado por email para resetar senha, deve inspirar em 2h;
- O usuario precisa confirmar a nova senha ao resetar sua senha;

# Atualização do Perfil

**RF**

- O usuario deve poder atualizar seu perfil

**RNF**

**RN**

- O usuario não pode alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, o usuario deve informar sua senha antiga;
- Para atualizar a senha o usuario deve confirmar a nova senha;

# Painel do Prestador

**RF**

- O usuario poder listar seus agendamento de um dia especifico;
- O prestador deve receber um notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notifficações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não linda para que o prestador possa controloar

# Agendamento de Serviços

**RF**

- O usuario deve poder listar todos os prestadores de serviço cadastrados;
- O usuario deve poder listar os dias de um mês com pelo menos um horario disponivel de um prestador;
- O usuario deve poder listar horarios ddisponiveis em um dia especifico de um prestador;
- O usuario deve poder realizar um novo agendamento com um prestador;
  **RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponivel entre as 8h e as 18h (Primeiro as 8h, ultimo as 17h);
- O usuario não pode agendar em um horario já ocupado;
- O usuario não pode agendar em um horario que já passou;
- O usuario não pode agendar serviços consigo mesmo;
