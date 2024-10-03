from django.db import models
from django.utils.timezone import now


class Hostel(models.Model):
    name = models.CharField(max_length=100)
    tittle = models.CharField(max_length=100, default="")
    image = models.ImageField(upload_to='hostel_img/', default="")

    def __str__(self):
        return self.name

class GCEvent(models.Model):
    name = models.CharField(max_length=100, blank=False, default="")
    description = models.TextField()
    poster = models.ImageField(upload_to='posters/', default="")
    start_timeline = models.DateTimeField(default=now)
    end_timeline = models.DateTimeField(default=now)
    genre = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return self.name

class Score(models.Model):
    hostel = models.ForeignKey(Hostel, on_delete=models.CASCADE, null=True)
    event = models.ForeignKey(GCEvent, on_delete=models.CASCADE)
    score = models.IntegerField(null=True)

    def __str__(self):
        return f"{self.hostel} - {self.event}: {self.score}"