from django.db import migrations, models
import django.db.models.deletion
import judge.models.problem_data
import judge.models.profile
import judge.utils.problem_data


class Migration(migrations.Migration):

    dependencies = [
        ('judge', '0113_public_submission_visibility'),
    ]

    operations = [
        migrations.AddField(
            model_name='problemdata',
            name='custom_checker',
            field=models.FileField(blank=True, null=True, storage=judge.utils.problem_data.ProblemDataStorage(), upload_to=judge.models.problem_data.problem_directory_file, verbose_name='checker file'),
        )
    ]