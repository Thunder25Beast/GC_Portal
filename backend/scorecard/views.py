from django.http import response, HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.generics import ListAPIView
from .serializers import scoreSerializer, gcserializer, hostelserializer
from django import forms
from rest_framework.decorators import api_view
from django.shortcuts import render, redirect
from .models import GCEvent, Hostel, Score
from .forms import gcForm
from django.utils.timezone import now
from django.views.decorators.csrf import csrf_exempt
import requests
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.contrib.admin.views.decorators import staff_member_required


@staff_member_required
@api_view(['GET', 'POST'])
def creategc(request):
    myform = gcForm(request.POST, request.FILES or None)
    if myform.is_valid():
        myform.save()
        return HttpResponse("Success")
    context = {
        'form': myform,
    }
    return render(request, "creategc.html", context)


@staff_member_required
@api_view(['GET'])
def backendgc(request):
    events = GCEvent.objects.all()
    context = {'events': events}
    return render(request, "backendgc.html", context)

@staff_member_required
@api_view(['GET', 'POST'])
def backendgcscore(request, id):
    event = GCEvent.objects.get(id=id)
    hostels = Hostel.objects.all()
    context = {'events': event,
               'hostels': hostels
               }

    if request.method == 'POST':
        for hostel in hostels:
            value = request.POST[hostel.name]
            Score.objects.create(event=event, hostel=hostel, score=value)
        return HttpResponse("Success")
    return render(request, "backendscore.html", context)


@api_view(['GET'])
def overall(request):
    scorecard = list(Hostel.objects.all().values('name'))

    for item in scorecard:
        value = item['name']
        host = Hostel.objects.get(name=value)
        scores = Score.objects.filter(hostel=host)

        total = sum(some.score for some in scores)
        item['total_score'] = total

    scorecard = sorted(scorecard, key=lambda x: x['total_score'], reverse=True)
    rank = 0
    previous_total_score = None
    for item in scorecard:
        total_score = item['total_score']
        if total_score != previous_total_score:
            rank = rank + 1
        item['rank'] = rank
        previous_total_score = total_score
    return Response(scorecard)

def local_overall():
    scorecard = list(Hostel.objects.all().values('name'))

    for item in scorecard:
        value = item['name']
        host = Hostel.objects.get(name=value)
        scores = Score.objects.filter(hostel=host)

        total = sum(some.score for some in scores)
        item['total_score'] = total

    scorecard = sorted(scorecard, key=lambda x: x['total_score'], reverse=True)
    rank = 0
    previous_total_score = None
    for item in scorecard:
        total_score = item['total_score']
        if total_score != previous_total_score:
            rank = rank + 1
        item['rank'] = rank
        previous_total_score = total_score
    return scorecard

def local_genre(genre):
    Genre = GCEvent.objects.filter(genre=genre['genre'])
    scorecard = list(Hostel.objects.all().values('name'))
    for item in scorecard:
        value = item['name']
        host = Hostel.objects.get(name=value)
        total = 0
        for Event in Genre:
            scores = Score.objects.filter(hostel=host, event=Event)
            subtotal = sum(some.score for some in scores)
            total = total+subtotal
        item['total_score'] = total

    scorecard = sorted(scorecard, key=lambda x: x['total_score'], reverse=True)

    rank = 0
    previous_total_score = None
    for item in scorecard:
        total_score = item['total_score']
        if total_score != previous_total_score:
            rank = rank + 1
        item['rank'] = rank
        previous_total_score = total_score
    return scorecard


@api_view(['GET'])
def genrewise_scorecard(request, genre):  # Don't Return individual GC details
    Genre = GCEvent.objects.filter(genre=genre)
    scorecard = list(Hostel.objects.all().values('name'))
    for item in scorecard:
        value = item['name']
        host = Hostel.objects.get(name=value)
        total = 0
        for Event in Genre:
            scores = Score.objects.filter(hostel=host, event=Event)
            subtotal = sum(some.score for some in scores)
            total = total+subtotal
        item['total_score'] = total

    scorecard = sorted(scorecard, key=lambda x: x['total_score'], reverse=True)

    rank = 0
    previous_total_score = None
    for item in scorecard:
        total_score = item['total_score']
        if total_score != previous_total_score:
            rank = rank + 1
        item['rank'] = rank
        previous_total_score = total_score

    return Response(scorecard)


@api_view(['GET'])
def individualgc(request, id):  # GC ke details return
    try:
        gc = GCEvent.objects.get(id=id)
        GCnew = GCEvent.objects.filter(id=id)
        serializer = gcserializer(GCnew, many=True)

        # if gc.timeline <= datetime.datetime.now():
        if 2 > 1:
            scores = Score.objects.filter(event=gc).values().order_by('-score')
            for i in range(len(scores)):
                scores[i]['hostel_name'] = Hostel.objects.get(
                    id=scores[i]['hostel_id']).name

            return Response({
                "scores": scores,
                "gc": serializer.data
            })
        else:
            return HttpResponse("NO SCORE TO SHOW YET")  # GC has not yet ended
    except GCEvent.DoesNotExist:
        return Response({"error": f"GC event with id {id} does not exist"}, status=404)


@api_view(['GET'])
def hostel_scorecard(request, name):
    hostel = Hostel.objects.get(name=name)
    scores = Score.objects.filter(hostel=hostel)
    scoresdict = scores.values('score', 'event')
    scores_list = list(scoresdict)

    for (obj, some) in zip(scores, scores_list):
        event = obj.event
        event_scores = Score.objects.filter(event=event).order_by('-score')
        for rank, item in enumerate(event_scores, start=1):
            if item.hostel == hostel:
                some['rank'] = rank

    details = {}
    overall_rank = overall_score = 0
    overall_scorecard = local_overall()
    for rank, item in enumerate(overall_scorecard, start=1):
        if item['name'] == name:
            details["overall_score"] = item['total_score']
            details["overall_rank"] = rank

    genres = GCEvent.objects.distinct().values('genre')
    for genre in genres:
        genre_url = 'https://gcbackend.tech-iitb.org/genre' + genre['genre'] + '/'
        genre_scorecard = local_genre(genre)    
        for rank, item in enumerate(genre_scorecard, start=1):
            if item['name'] == name:
                details[genre['genre'] + "_rank"] = rank
                details[genre['genre'] + "_score"] = item['total_score']

    return Response({
        "details": details,
        "scores": scores_list,
    })


# an api to return all events in a particular genre
@api_view(['GET'])
def gc_events(request, genre):
    events = GCEvent.objects.filter(genre=genre)
    serializer = gcserializer(events, many=True)
    return Response(serializer.data)


class HostelList(ListAPIView):
    queryset = Hostel.objects.all()
    serializer_class = hostelserializer


class GCList(ListAPIView):
    queryset = GCEvent.objects.all()
    serializer_class = gcserializer
