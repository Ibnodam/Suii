
using Lab_3_Mail.Entities;
using Lab_3_Mail.Subscribers;

var mailOffice = new MailOffice();

var alice = new Subscriber("Алиса");
var bob = new Subscriber("Боб");

mailOffice.Attach(alice);
mailOffice.Attach(bob);

var publisher = new Publisher(mailOffice);

publisher.Publish(new PrintEdition("Газета: Новости"));
publisher.Publish(new PrintEdition("Журнал: Наука"));

mailOffice.Detach(bob);

publisher.Publish(new PrintEdition("Газета: Спорт"));