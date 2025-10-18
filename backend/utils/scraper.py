import requests
from bs4 import BeautifulSoup

def scrape_course_metadata(url):
    try:
        res = requests.get(url, headers={"User-Agent": "Mozilla/5.0"})
        soup = BeautifulSoup(res.text, "html.parser")

        title = soup.title.string if soup.title else "Course"
        desc_tag = soup.find("meta", {"name":"description"})
        description = desc_tag["content"] if desc_tag else ""

        platform = "Generic"
        if "udemy" in url.lower():
            platform = "Udemy"
        elif "coursera" in url.lower():
            platform = "Coursera"

        return {"name": title, "platform": platform, "description": description}
    except:
        return {"name": "Course", "platform": "Unknown", "description": ""}
