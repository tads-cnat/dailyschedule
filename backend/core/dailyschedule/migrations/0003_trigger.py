from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dailyschedule', '0002_trigger'),
    ]

    operations = [
        migrations.RunSQL("""
        Create TRIGGER T_SubQtd
        AFTER DELETE ON dailyschedule_cronograma
        BEGIN
            UPDATE dailyschedule_aluno set qtd = qtd-1 where id = OLD.aluno_id;
        END;
        """   
        ),
    ]