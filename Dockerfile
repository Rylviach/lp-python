FROM python:3.6-slim
MAINTAINER Zach Sommers <zach@zachsommers.com>

ENV PYTHONUNBUFFERED=1
ENV DJANGO_SETTINGS_MODULE=rylviach_site.settings.prod

EXPOSE 8000

WORKDIR /usr/src/app
COPY . ./

RUN pip3 install --no-cache-dir -r requirements/prod.txt

CMD ["gunicorn", "rylviach_site.wsgi", "--pythonpath=/usr/src/app/rylviach",\
     "--bind=0.0.0.0:8000", "--workers=3"]
