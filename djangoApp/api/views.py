from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.models import User

# Create your views here.


def index(request):
    return HttpResponse("big virus")


def checkLoginStatus(request):
    if request.POST:
        return HttpResponse("big virus")

    logged_in = False

    if request.user.is_authenticated:
        logged_in = True
    return JsonResponse({"response": logged_in})


def getTimeplanInfo(request, timeplan):
    print(timeplan)
    return JsonResponse(
        {
            "response": """{
                "id": 0,
                "klasse": "ST2A",
                "content":
                [
                    {
                        "id": 0,
                        "dag": "Mandag",
                        "dato": "29.8",
                        "timerInfo": [
                            {
                                "id": 0,
                                "start": 8.5,
                                "slutt": 10,
                                "startDisplay": "08:30",
                                "sluttDisplay": "10:00",
                                "lærer": "Anders Bark",
                                "klasse": "ST2A",
                                "klasseKode": "KRØ",
                                "klasserom": "225"
                            },
                            {
                                "id": 1,
                                "start": 10.5,
                                "slutt": 12,
                                "startDisplay": "10:30",
                                "sluttDisplay": "12:00",
                                "lærer": "Kristian Weibye",
                                "klasse": "ST2A",
                                "klasseKode": "MR1+1",
                                "klasserom": "225"
                            },
                            {
                                "id": 2,
                                "start": 12.5,
                                "slutt": 14.5,
                                "startDisplay": "12:30",
                                "sluttDisplay": "14:30",
                                "lærer": "",
                                "klasse": "ST2A",
                                "klasseKode": "Valgfag",
                                "klasserom": "225"
                            },
                            {
                                "id": 3,
                                "start": 14.75,
                                "slutt": 15.75,
                                "startDisplay": "14:45",
                                "sluttDisplay": "15:45",
                                "lærer": "",
                                "klasse": "ST2A",
                                "klasseKode": "STU+1",
                                "klasserom": "225"
                            }
                        ]
                    },
                    {
                        "id": 1,
                        "dag": "Tirsdag",
                        "dato": "30.8",
                        "timerInfo": [
                            {
                                "id": 0,
                                "start": 8.5,
                                "slutt": 10.5,
                                "startDisplay": "08:30",
                                "sluttDisplay": "10:30",
                                "lærer": "Andrea Klubicka",
                                "klasse": "ST2A",
                                "klasseKode": "FY1",
                                "klasserom": "225"
                            },
                            {
                                "id": 1,
                                "start": 10.75,
                                "slutt": 12,
                                "startDisplay": "10:45",
                                "sluttDisplay": "12:00",
                                "lærer": "",
                                "klasse": "ST2A",
                                "klasseKode": "Språk",
                                "klasserom": "201"
                            },
                            {
                                "id": 2,
                                "start": 12.5,
                                "slutt": 13.5,
                                "startDisplay": "12:30",
                                "sluttDisplay": "13:30",
                                "lærer": "",
                                "klasse": "ST2A",
                                "klasseKode": "STU+2",
                                "klasserom": "225"
                            },
                            {
                                "id": 3,
                                "start": 13.5,
                                "slutt": 14.5,
                                "startDisplay": "13:30",
                                "sluttDisplay": "14:30",
                                "lærer": "Line Lindberg",
                                "klasse": "ST2A",
                                "klasseKode": "NOR",
                                "klasserom": "225"
                            },
                            {
                                "id": 4,
                                "start": 14.75,
                                "slutt": 16,
                                "startDisplay": "14:45",
                                "sluttDisplay": "16:00",
                                "lærer": "Line Lindberg",
                                "klasse": "ST2A",
                                "klasseKode": "NOR",
                                "klasserom": "225"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "dag": "Onsdag",
                        "dato": "30.8",
                        "timerInfo": [
                            {
                                "id": 0,
                                "start": 8.5,
                                "slutt": 9.5,
                                "startDisplay": "08:30",
                                "sluttDisplay": "09:30",
                                "lærer": "Kristian Weibye",
                                "klasse": "ST2A",
                                "klasseKode": "MR1+1",
                                "klasserom": "225"
                            },
                            {
                                "id": 1,
                                "start": 10,
                                "slutt": 12,
                                "startDisplay": "10:00",
                                "sluttDisplay": "12:00",
                                "lærer": "Kristian Weibye",
                                "klasse": "ST2A",
                                "klasseKode": "KJ1",
                                "klasserom": "225"
                            },
                            {
                                "id": 2,
                                "start": 12.5,
                                "slutt": 14.5,
                                "startDisplay": "12:30",
                                "sluttDisplay": "14:30",
                                "lærer": "Andrea Klubicka",
                                "klasse": "ST2A",
                                "klasseKode": "FY1",
                                "klasserom": "225"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "dag": "Torsdag",
                        "dato": "30.8",
                        "timerInfo": [
                            {
                                "id": 0,
                                "start": 8.5,
                                "slutt": 9.5,
                                "startDisplay": "08:30",
                                "sluttDisplay": "09:30",
                                "lærer": "Kristian Weibye",
                                "klasse": "ST2A",
                                "klasseKode": "MR1+1",
                                "klasserom": "225"
                            },
                            {
                                "id": 1,
                                "start": 10,
                                "slutt": 12,
                                "startDisplay": "10:00",
                                "sluttDisplay": "12:00",
                                "lærer": "",
                                "klasse": "ST2A",
                                "klasseKode": "Valgfag",
                                "klasserom": "225"
                            },
                            {
                                "id": 2,
                                "start": 12.5,
                                "slutt": 14.25,
                                "startDisplay": "12:30",
                                "sluttDisplay": "14:15",
                                "lærer": "Kristian Weibye",
                                "klasse": "ST2A",
                                "klasseKode": "KJ1",
                                "klasserom": "225"
                            },
                            {
                                "id": 3,
                                "start": 14.5,
                                "slutt": 16,
                                "startDisplay": "14:30",
                                "sluttDisplay": "16:00",
                                "lærer": "Anders Bark",
                                "klasse": "ST2A",
                                "klasseKode": "HIS",
                                "klasserom": "225"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "dag": "Fredag",
                        "dato": "30.8",
                        "timerInfo": [
                            {
                                "id": 0,
                                "start": 8.5,
                                "slutt": 9.4167,
                                "startDisplay": "08:30",
                                "sluttDisplay": "09:25",
                                "lærer": "Line Lindberg",
                                "klasse": "ST2A",
                                "klasseKode": "NOR",
                                "klasserom": "225"
                            },
                            {
                                "id": 1,
                                "start": 9.5,
                                "slutt": 11.25,
                                "startDisplay": "09:30",
                                "sluttDisplay": "11:15",
                                "lærer": "",
                                "klasse": "ST2A",
                                "klasseKode": "Språk",
                                "klasserom": "201"
                            },
                            {
                                "id": 2,
                                "start": 11.33,
                                "slutt": 12,
                                "startDisplay": "11:20",
                                "sluttDisplay": "12:00",
                                "lærer": "Kristian Weibye",
                                "klasse": "ST2A",
                                "klasseKode": "KLA+1",
                                "klasserom": "225"
                            },
                            {
                                "id": 3,
                                "start": 12.5,
                                "slutt": 14.25,
                                "startDisplay": "12:30",
                                "sluttDisplay": "14:15",
                                "lærer": "Kristian Weibye",
                                "klasse": "ST2A",
                                "klasseKode": "MR1+1",
                                "klasserom": "225"
                            }
                        ]
                    }
                ]
            }"""
        }
    )
