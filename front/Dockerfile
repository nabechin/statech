# ベースイメージの作成
FROM node:15.3.0-alpine3.12
# コンテナ内で作業するディレクトリを指定
WORKDIR /myapp
# package.jsonとyarn.lockを/usr/src/appにコピー
COPY ["./package.json", "./yarn.lock", "./"]
# パッケージをインストール
RUN yarn install
# ファイルを全部作業用ディレクトリにコピー
COPY . .
