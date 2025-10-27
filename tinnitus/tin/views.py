from django.shortcuts import render # type: ignore
from tin.models import Song, Category

def index(request):
    context_dict = {
        "SD" : [],
        "N" : [], 
        "TT" : [], 
        "GI" : []
    }

    category = Category.objects.get(name="Shielding and Distruption")
    songs = Song.objects.filter(category=category)
    context_dict["SD"] = songs

    category = Category.objects.get(name="Normalisation")
    songs = Song.objects.filter(category=category)
    context_dict["N"] = songs

    category = Category.objects.get(name="Tailored Tones")
    songs = Song.objects.filter(category=category)
    context_dict["TT"] = songs

    category = Category.objects.get(name="Guided Introspections")
    songs = Song.objects.filter(category=category)
    context_dict["GI"] = songs

    return render(request, 'tin/index.html', context=context_dict)

def mobile(request):
    context_dict = {
        "SD" : [],
        "N" : [], 
        "TT" : [], 
        "GI" : []
    }

    category = Category.objects.get(name="Shielding and Distruption")
    songs = Song.objects.filter(category=category)
    context_dict["SD"] = songs

    category = Category.objects.get(name="Normalisation")
    songs = Song.objects.filter(category=category)
    context_dict["N"] = songs

    category = Category.objects.get(name="Tailored Tones")
    songs = Song.objects.filter(category=category)
    context_dict["TT"] = songs

    category = Category.objects.get(name="Guided Introspections")
    songs = Song.objects.filter(category=category)
    context_dict["GI"] = songs

    return render(request, 'tin/mobile.html', context=context_dict)