from rest_framework import generics, status
from rest_framework.response import Response
from drf_yasg.utils import swagger_auto_schema

import requests
from bs4 import BeautifulSoup
from . import serializers
BASEURL = 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/3978/32/'
PARAMETER = '?per_page=50'

"""
Web scrapping module
"""


def scrapper(page_number):
    """
    The data is scrapped and all the td tags with class Tax is extracted
    """
    url = BASEURL+page_number+PARAMETER
    page = requests.get(url)
    soup = BeautifulSoup(page.text, "html.parser")
    table1 = soup.find("table", {"class": "Tax"})

    for j in table1.find_all('tr')[1:]:
        row_data = j.find_all('td')[1].text
        print("-- ", row_data)


class ScrapperView(generics.GenericAPIView):
    serializer_class = serializers.ScrapperSerializer

    @swagger_auto_schema(operation_summary="Scrappes the details of all verified NGOs")
    def get(self, request):

        with open('scrappedResult.txt', 'a') as f:
            def scrapper(page_number):
                url = BASEURL + page_number + PARAMETER
                page = requests.get(url)
                soup = BeautifulSoup(page.text, "html.parser")
                table1 = soup.find("table", {"class": "Tax"})

                for j in table1.find_all('tr')[1:]:
                    row_data = j.find_all('td')[1].text

                    if row_data:

                        f.write('_'.join(row_data.split(' '))[1:])
                        f.write('\n')

            for i in range(10):
                scrapper(str(i))

        return Response({'data': 'Data scrapping is completed'}, status=status.HTTP_200_OK)
