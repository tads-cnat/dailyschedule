from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dailyschedule', '0002_trigger'),
    ]

    operations = [
        migrations.RunSQL("""
        Create TRIGGER T_Qtd
        AFTER INSERT ON dailyschedule_cronograma
        BEGIN
            UPDATE dailyschedule_aluno set qtd = qtd+1 where id = NEW.aluno_id;
        END;
        """   
        ),
    ]