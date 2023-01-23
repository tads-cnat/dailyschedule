from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dailyschedule', '0001_initial'),
    ]

    operations = [
        migrations.RunSQL("""
        Create TRIGGER T_addqtd
        AFTER INSERT ON dailyschedule_cronograma
        BEGIN
            UPDATE dailyschedule_aluno set qtd = qtd+1 where id= 2;
        END;
        """   
        ),
    ]