FROM python:3.9
# ENV PYTHONBUFFERED 1

WORKDIR /src/app
ADD requirements.txt ./
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install pynamodb

COPY ./ ./
EXPOSE 8000