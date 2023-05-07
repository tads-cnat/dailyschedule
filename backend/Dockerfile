FROM python:3.8.3-alpine

# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN pip install --upgrade pip 
RUN apk add --no-cache gcc musl-dev python3-dev
RUN pip install ruamel.yaml.clib
COPY ./requirements_backend.txt /usr/src/app
RUN pip install -r requirements_backend.txt

# copy project
COPY . /usr/src/app

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]