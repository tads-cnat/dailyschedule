from django.core.mail import send_mail

class Email:
    def send(self, assunto, mensagem, destino):
        send_mail(assunto, mensagem, 'equipe.swenergy@outlook.com', destino, fail_silently=False)



