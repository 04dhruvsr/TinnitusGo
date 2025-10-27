import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'tinnitus.settings')

import django # type: ignore
django.setup()

from tin.models import Category, Song

def populate():
    categories = ["Shielding and Distruption", "Normalisation", "Tailored Tones", "Guided Introspections"]

    default_songs = {
        
        "Shielding and Distruption" : [

            {"title" : "Fire",
            "small_file" : "1FireMastered.mp3"},

            {"title" : "Water",
            "small_file" : "2WaterMastered.mp3"},

            {"title" : "Air",
            "small_file" : "3AirMastered.mp3"},

            {"title" : "Earth",
            "small_file" : "4EarthMastered.mp3"},

            {"title" : "Metal",
            "small_file" : "5MetalMastered.mp3"},

            {"title" : "Bamboo Gardens",
            "small_file" : "6BambooGardensMastered.mp3"},

            {"title" : "Pink Noise Static and Crickets",
            "small_file" : "7PinkNoiseStaticandCricketsMastered.mp3"},

            {"title" : "Summer Holiday",
            "small_file" : "8SummerVacationMastered.mp3"},

            {"title" : "Warm Fire by the Ocean",
            "small_file" : "9WarmFirebytheOceanMastered.mp3"},

            {"title" : "Meditation",
            "small_file" : "10MeditationMastered.mp3"},

            {"title" : "Eastern Flower",
            "small_file" : "11EasternFlowerMastered.mp3"}],

        "Normalisation" : [

            {"title" : "London Tube",
            "small_file" : "1LondonTubeMastered.mp3"},

            {"title" : "Piano at the Airport",
            "small_file" : "2PianoatAirportMastered.mp3"},

            {"title" : "International Train Station",
            "small_file" : "3InternationalTrainStationMastered.mp3"},

            {"title" : "Targeted Frequencies",
            "small_file" : "4TargetedFrequenciesMastered.mp3"},

            {"title" : "Antibes Train Station",
            "small_file" : "5AntibesTrainStationMastered.mp3"},
            
            {"title" : "A Clock Shop in Paris",
            "small_file" : "6AClockShopinParisMastered.mp3"},
            
            {"title" : "Promenadedes Anglais",
            "small_file" : "7PromenadedesAnglaisMastered.mp3"},
            
            {"title" : "Gates of the Luberon",
            "small_file" : "8GatesoftheLuberonMastered.mp3"},
            
            {"title" : "Cavaillon",
            "small_file" : "9CavaillonMastered.mp3"},
            
            {"title" : "Rowing in the Ocean at Night",
            "small_file" : "10RowingintheOceanatNightMastered.mp3"}],

        "Tailored Tones" : [

            {"title" : "Zen Tones",
            "small_file" : "1ZenStyleTonesMastered.mp3"},

            {"title" : "Fan Sounds",
            "small_file" : "2FanSoundsMastered.mp3"},

            {"title" : "Green and Pink Noise",
            "small_file" : "3GreenandPinkNoiseMastered.mp3"},

            {"title" : "Goa Coloured Noise",
            "small_file" : "4GoaColouredNoisesMastered.mp3"},

            {"title" : "White Noise",
            "small_file" : "5WhiteNoiseMastered.mp3"},

            {"title" : "Forest of Dreams",
            "small_file" : "6ForestofDreamsMastered.mp3"},
            
            {"title" : "Lost in Space",
            "small_file" : "7LostinSpaceMastered.mp3"},
            
            {"title" : "Pink Noise Static and Crickets",
            "small_file" : "8PinkNoiseStaticandCricketsMastered.mp3"},
            
            {"title" : "Samurai",
            "small_file" : "9SamuraiMastered.mp3"},
            
            {"title" : "Airplane Cabin to the Stars",
            "small_file" : "10AirplaneCabintotheStars.mp3"},
            
            {"title" : "Tone Poem for Hope",
            "small_file" : "11TonePoemforHope.mp3"},],

        "Guided Introspections" : [

            {"title" : "Letting Go",
            "small_file" : "1LettingGo.mp3"},

            {"title" : "Embracing Kindness",
            "small_file" : "2EmbracingKindness.mp3"},

            {"title" : "Gentle Presence",
            "small_file" : "3GentlePresence.mp3"},

            {"title" : "Roots of Connection",
            "small_file" : "4RootsofConnection.mp3"},
            
            {"title" : "Meditation 1",
            "small_file" : "5Meditation.mp3"},
            
            {"title" : "Meditation 2",
            "small_file" : "6Meditation.mp3"},
            
            {"title" : "Meditation 3",
            "small_file" : "7Meditation.mp3"},]
    }

    for i in categories:
        category = Category.objects.get_or_create(name=i)[0]
        category.save()

    for cat, songs in default_songs.items():
        for i in songs:
            song = Song.objects.get_or_create(title = i["title"], category=Category.objects.get(name=cat))[0]
            print(song)

            song.small_file = i["small_file"]
            song.artist = "Rupert Brown"

            song.save()
    
if __name__ == '__main__':
    print('Starting population script...')
    populate()