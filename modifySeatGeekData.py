from bs4 import BeautifulSoup
from requests_html import HTMLSession
import json
session = HTMLSession()
categories = ["concert", "sports", "theater", "cinema"]
json_data = []
for category in categories:
    print(category)
    for i in range(1, 4):
        print(i)
        r = session.get(f"https://api.seatgeek.com/2/events?taxonomies.name={category}&client_id=Mjc1MDc2ODl8MTY1NTU4MTA3OC42NjgxMQ&page={str(i)}")
        print(r)

        eventsJson = r.json()
        events = eventsJson["events"]
        for event in events:
            json_data.append({"id": event["id"],
                             "title": event["short_title"],
                              "category": event["taxonomies"][0]["name"],
                              "address": event["venue"]["address"],
                              "location": event["venue"]["location"],
                              "images": event["performers"][0]["images"]
                              })

print(json_data)
file = open("eventData.json", "w")
json_dump = json.dump(json_data, file, indent=4)

